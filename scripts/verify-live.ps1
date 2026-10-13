param([Parameter(Mandatory=$true)][string]$BaseUrl,[string]$ReportName='live-verification')
$taskRoutes=@('/','/guides/','/updates/','/guides/beginner-guide/','/guides/spot-fakes/','/guides/statue-defense/','/guides/classes/','/guides/maniac-mode/','/guides/official-game/','/updates/smile-more/','/faq/','/about/','/contact/','/privacy-policy/','/terms-of-service/','/copyright/','/robots.txt','/sitemap.xml','/sitemap-index.xml','/pagefind/pagefind.js','/images/hero.webp','/favicon.svg','/.well-known/anvilwiki-deploy.txt','/does-not-exist-launch-check/')
$taskResults=foreach($taskRoute in $taskRoutes){
 $taskUrl=$BaseUrl.TrimEnd('/')+$taskRoute
 try{
  $taskResponse=Invoke-WebRequest -Uri $taskUrl -TimeoutSec 25 -SkipHttpErrorCheck
  $taskExpected=if($taskRoute -eq '/does-not-exist-launch-check/'){404}else{200}
  $taskBody=if($taskResponse.Content -is [string]){$taskResponse.Content}else{''}
  $taskCanonical=if($taskBody -match '<link[^>]*rel="canonical"[^>]*href="([^"]+)"'){$Matches[1]}else{$null}
  [pscustomobject]@{url=$taskUrl;route=$taskRoute;status=[int]$taskResponse.StatusCode;expected=$taskExpected;passed=([int]$taskResponse.StatusCode -eq $taskExpected);canonical=$taskCanonical;contentType=$taskResponse.Headers['Content-Type'];bytes=$taskResponse.RawContentLength;collectedAt=[DateTimeOffset]::Now.ToString('o')}
 }catch{[pscustomobject]@{url=$taskUrl;route=$taskRoute;status='FAILED';passed=$false;error=$_.Exception.Message;collectedAt=[DateTimeOffset]::Now.ToString('o')}}
}
$taskResults | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path 'reports' ($ReportName+'.json')) -Encoding utf8
$taskFailed=@($taskResults | Where-Object { -not $_.passed })
[pscustomobject]@{base=$BaseUrl;checked=$taskResults.Count;failed=$taskFailed.Count;failures=$taskFailed} | ConvertTo-Json -Depth 4
if($taskFailed.Count -gt 0){exit 1}
exit 0
