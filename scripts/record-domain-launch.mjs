import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,s)=>fs.writeFileSync(p,s.trim()+'\n');
const now=new Date().toISOString();
const live=read('reports/apex-live.json');
const dns=read('reports/domain-dns-verified.json');
const ga=read('reports/ga4-apex-verification.json');
if(live.length!==24||live.some(r=>!r.passed)||dns.some(r=>r.status!==0||!r.AD))throw new Error('Launch evidence gates failed');
for(const check of [ga.homepage,ga.article])if(check.requests.filter(r=>r.event==='page_view').length!==1||check.responses.some(r=>r.status!==204))throw new Error('GA event evidence gate failed');
for(const p of ['reports/gsc-live-home.txt','reports/gsc-live-maniac.txt'])if(!fs.readFileSync(p,'utf8').includes('URL is available to Google'))throw new Error('Google live-test evidence missing');
write('reports/gsc-sitemap-state.json',JSON.stringify({domain:'enfosiguide.wiki',url:'https://enfosiguide.wiki/sitemap.xml',observedOn:'2026-10-13',submission:'COMPLETED',submissionUi:'Sitemap submitted successfully',submissions:2,lastFetchUi:'Couldn\'t fetch / Sitemap could not be read',fetchStatus:'FAILED',processingFollowUp:'PENDING',discoveredPagesShown:0,independentXmlValidation:'COMPLETED',all28UrlsHttp200:true,googleLiveHomeAndManiac:'URL is available to Google',cause:'UNVERIFIED',recordedAt:now},null,2));
write('reports/cloudflare-domain-state.json',JSON.stringify({domain:'enfosiguide.wiki',nameservers:['armfazh.ns.cloudflare.com','laura.ns.cloudflare.com'],pagesProject:'enfosi-guide-wiki',pagesUi:'Active / SSL enabled',dnssecUi:'Success! enfosiguide.wiki is protected with DNSSEC.',publicDnsAD:true,publicDnsSource:'domain-dns-verified.json',initialVerifiedRelease:'1667a6b09ac2945078ceb1178b1cd7579df638ef',recordedAt:now},null,2));
write('reports/current-delivery-status.md',`# Current delivery status

Updated ${now}. **Formal-domain engineering launch: COMPLETED.** https://enfosiguide.wiki is live, HTTPS-valid and protected by restored DNSSEC. The user authorized the migration; no pending authorization remains.

| Milestone | Status | Evidence |
|---|---|---|
| Official Roblox identity, template and evidence-based content | COMPLETED | Six guides + one update; research/evidence-ledger.md |
| Similarweb Worldwide and cross-source research | COMPLETED | 100/225 visible rows; five actual SERPs,35 Suggest queries,three Trends scopes; limits documented |
| Similarweb country filters | BLOCKED | Existing subscription Custom packages paywall; no zero-volume claim |
| Build/shared tests/local browser | COMPLETED | 199 tests16 suites,700 links,29 HTML,28 sitemap URLs |
| GitHub + Cloudflare Pages | COMPLETED | Real project/source; current receipt in production-deployment.json when exported |
| Formal domain/HTTPS/core routes | COMPLETED | apex-live.json24 routes,zero failures; sitemap-production.log28 URL200 |
| DNS delegation and restored DNSSEC | COMPLETED | domain-dns-verified.json NS/DS/A/TXT status0,AD:true; registrar exact new DS |
| Formal-domain desktop/mobile/search/404 | COMPLETED | apex screenshots/search text; no tested console errors;390px table343px |
| GSC ownership and sitemap submission | COMPLETED | TXT preserved; two accepted submissions |
| GSC sitemap successful processing | FAILED | Latest UI Couldn't fetch; follow-up PENDING; actual XML and28 URLs valid |
| Google live fetch home + Maniac | COMPLETED | Both URL is available to Google / Page can be indexed; Maniac valid Breadcrumb |
| Google indexing/discovery/search metrics | PENDING | Index inspection says not indexed/unknown; no claimed organic results |
| GA4 property/consent/real apex network receipts | COMPLETED | G-LMPJRR4876, home+beginner each1 page_view/204; test visits |
| GA4 processed reports/organic users | PENDING | Network receipts are not processed report/organic traffic proof |
| Ads/applications | NOT_APPLICABLE | Ads remain off |

Launch date October13,2026. Maintenance checkpoints Oct16/20/27 and Nov10. No reminder/automation created. Do not rerun bootstrap or historical report writers.
`);
write('reports/blockers.md',`# Blockers and external follow-ups

Updated ${now}. **No engineering or authorization blocker remains.** DNSSEC migration explicitly authorized and completed; full validating chain restored.

- BLOCKED: Similarweb country metrics require a paid Custom package. Keep unavailable values null.
- FAILED (latest GSC report): sitemap could not be read. Two accepted submissions, valid public XML/application-xml/28 URLs200, and Google live homepage+Maniac fetches succeeded. The reason is UNVERIFIED. Follow-up PENDING; do not assume success or continually resubmit.
- PENDING: Google indexing/impressions/clicks and GA4 processed/organic metrics. No revenue/traffic claim from test visits.

See next-actions.md. No user action is required to keep the live site running.
`);
write('reports/next-actions.md',`# Next actions

Updated ${now}. The site is already live at https://enfosiguide.wiki. DNSSEC is restored. No further migration confirmation is needed.

1. At the next authorized review, reopen GSC sitemap details; current accepted submission reports Couldn't fetch. If it persists, compare actual HTTP/XML/robots and Google live URL results against the saved evidence before changing configuration. Do not continually resubmit or disable security. Indexing/exposure are independent milestones.
2. Checkpoints after October13 launch: **Oct16 (+3), Oct20 (+7), Oct27 (+14), Nov10 (+28)**. Inspect GSC sitemap processing and indexing errors, then impressions/queries/CTR/rank; GA4 actual organic landing pages and useful engagement; official Roblox changes. These are documented checkpoints, not created reminders.
3. Content expands only when evidence clears HOLD. Codes, exact damage/drop rates/rankings/hidden unlocks stay unpublished. PARTIAL content limits remain visible. Do not refresh dates without substantive changes.
4. Deploy actual site changes using existing CLI Pages project; set CF_PAGES_COMMIT_SHA before build. Report/research-only pushes skip CI so they do not request an undeployed marker via IndexNow. Git push alone is not a deploy. IndexNow domain-active guard is true now; Google is not an IndexNow participant.

Never rerun template initialization or hardcoded historical report generators over current delivery. Keep credentials, full transcripts and private screenshots local. Preserve the GSC TXT and exact current DS during future changes. Existing game identity and A/B/C evidence rules remain in AGENTS.md.
`);
write('reports/launch-verification.md',`# Launch verification

Updated ${now}. **Requested formal-domain engineering launch: COMPLETED.**

| Milestone | Status | Evidence |
|---|---|---|
| GitHub push | COMPLETED | https://github.com/jjasnek-ops/enfosi-guide-wiki; main |
| Pages deployment | COMPLETED | Initial release1667a6b09ac2945078ceb1178b1cd7579df638ef, deployment d8ae4560-ea44-40b3-9172-411841e2c7cf. Later final receipt exported to production-deployment.json |
| Formal domain active | COMPLETED | Pages UI Active / SSL enabled; https://enfosiguide.wiki |
| HTTPS/correct source/core paths | COMPLETED |24 live routes all expected status; actual deploy marker verified; no TLS bypass |
| DNSSEC restored | COMPLETED | Public NS/DS/A/TXT all AD:true; key tag2371/algorithm13/digestType2; exact digest cloudflare-ds-record.json |
| Sitemap/robots/canonicals | COMPLETED |28 real sitemap URLs200; application/xml parses; robots allows crawl and names canonical sitemap |
| Real production browser | COMPLETED | Desktop homepage,390px article/table/search,404; no tested error logs |
| GSC ownership | COMPLETED | DNS TXT preserved on new zone |
| GSC sitemap submission | COMPLETED | Two real accepted submissions |
| GSC sitemap successful processing | FAILED | Latest UI Couldn't fetch / Sitemap could not be read; cause UNVERIFIED; follow-up PENDING |
| Google live home + Maniac fetch/indexability | COMPLETED | Both available to Google/can be indexed; Maniac Breadcrumb1 valid item |
| Google actual index | PENDING | Both index inspection results unknown/not indexed |
| GA4 actual apex consent and receipt | COMPLETED | Genuine ID; no tag before consent; home+beginner each1 page_view/HTTP204; ga4-apex-verification.json |
| GA4 processed reporting/organic search traffic | PENDING | Test visits are not organic acquisition |

Migration sequence: explicit human authorization → temporary Spaceship DNSSEC disable/oldDS removal → preserve TXT on Cloudflare → assigned nameserver switch → replace only two known parking A records with Pages CNAME → enable Cloudflare DNSSEC → publish its exact new DS at Spaceship → public validation AD:true → Pages binding/Active SSL → live/site/Google/GA checks. Historical failed/propagating snapshots remain for provenance, not current status.

No unrelated DNS records/domains were changed. No www alias was enabled. Canonical host is apex. No actual reminders were created. CI passed the original application release; subsequent receipt/CI information is separately recorded. IndexNow guard enabled only after real apex/source verification.
`);
let report=fs.readFileSync('reports/final-delivery-report.md','utf8');
report=report.replace('整体正式域名上线状态 **BLOCKED**；Pages 真实部署 **COMPLETED**。','正式域名工程上线 **COMPLETED**；DNSSEC 已恢复，公开验证 AD:true。Google 收录/搜索成果仍单独 PENDING。');
report=report.replace('正式域名 https://enfosiguide.wiki 尚未接通。','正式域名 https://enfosiguide.wiki 已接通且 HTTPS 有效。');
report=report.replaceAll('https://enfosi-guide-wiki.pages.dev/guides/','https://enfosiguide.wiki/guides/').replaceAll('https://enfosi-guide-wiki.pages.dev/updates/','https://enfosiguide.wiki/updates/');
const e=report.indexOf('**E. 上线**');const f=report.indexOf('**F. 总结**');
report=report.slice(0,e)+`**E. 上线**

GitHub、Pages、正式域名 DNS/HTTPS/核心站点全部 COMPLETED。Pages 显示 Active / SSL enabled，NS/DS/A/TXT 公开验证全部 AD:true。已按授权临时暂停 DNSSEC、切换后发布 Cloudflare 的真实新 DS 并恢复保护。24个线上URL及28个sitemap URL全部符合预期。

GSC所有权与sitemap提交 COMPLETED。Google首页和Maniac实时测试均可抓取、可索引；索引数据库当前仍显示未收录。Sitemap最近处理状态 FAILED（Couldn't fetch），有效XML及所有URL访问检查通过，原因未确认，后续处理 PENDING，不能报成抓取成功。GA4正式域名首页和新手攻略各一次page_view/204，均为测试访问；GA4报表及自然流量 PENDING。

`+report.slice(f);
const f2=report.indexOf('**F. 总结**');
report=report.slice(0,f2)+`**F. 总结**

英文核心站点已在正式域名上线，七篇原始攻略/更新、代码、DNSSEC、证据与审计已交付。无待处理上线授权。后续关注GSC sitemap失败状态是否恢复、真实收录/曝光/点击和GA4自然着陆页；不要把验收访问当自然流量。真实内容限制仍是职业/伪装/Maniac未验证的完整数值与解锁。检查节点：10月16/20/27及11月10日。没有创建提醒。只按官方更新、新证据、重要错误或真实搜索机会改稿。
`;
write('reports/final-delivery-report.md',report);
let agents=fs.readFileSync('AGENTS.md','utf8').replace('Migration is in progress: preserve the GSC TXT, use exact Cloudflare DS values, and finish restoring DNSSEC before reporting completion.','Migration completed: Cloudflare nameservers/CNAME/TXT are live; exact new DS published; public NS/DS/A/TXT AD:true and Pages Active/SSL enabled. Preserve these records. Do not disable DNSSEC during maintenance without a new applicable authorization.');write('AGENTS.md',agents);
fs.appendFileSync('reports/execution-log.md',`\n- ${now}: Migration completed with explicit human authorization. Cloudflare exact DS2371/13/2 published at Spaceship; NS/DS/A/TXT publicAD:true. Pages custom domain Active/SSL enabled.24 core routes expected,28 sitemap URLs200,XML parses. Initial caller exit check exposed a missing explicit exit0 in verify-live.ps1; corrected. check-sitemap first used default localhost then reran with actual documented production argument, exit0.\n- ${now}: Actual formal-domain desktop/mobile/table/search/404 tested, no observed console errors. GA home+beginner each1page_view204 after consent. Google live home+Maniac available/indexable; not indexed. Sitemap submitted twice; latest Google report still cannot read; cause UNVERIFIED, follow-upPENDING. No further repetitive submissions. Private account-bearing screenshots kept local.\n`);
fs.appendFileSync('reports/visual-sample-audit.md',`\nFormal-domain scope COMPLETED October13: apex-home-desktop.png,apex-article-mobile.png,apex-search-mobile.png,apex-404-mobile.png. Actual390px viewport/table343px,seven real Maniac results,404body andzero checked console errors. Temporary CDP metrics restored.\n`);
let tech=fs.readFileSync('reports/technical-audit.md','utf8').replace('| pnpm check-sitemap | NOT_STARTED until production domain resolves |','| pnpm check-sitemap https://enfosiguide.wiki | COMPLETED, exit0;28 URLs200 |');write('reports/technical-audit.md',tech);
fs.appendFileSync('reports/00-preflight.md',`\n## Formal-domain completion (${now})\n\nHuman DNSSEC migration authorization received; migration,Pages apex binding,HTTPS andrestoredvalidation completed. No account/auth blocker remains. GSC livehome/Maniac fetch passed; sitemap accepted but fetch report failed/pendingprocessing. GA4 apex test receipts204 saved. Historical preflight pendingfields above are initial observations.\n`);
console.log('Actual evidence gates passed; formal-domain launch reports updated.');
