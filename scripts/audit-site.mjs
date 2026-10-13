import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(p.endsWith('.html'))files.push(p);}}
walk(root);
const errors=[];const pages=[];const titles=new Set();
for(const file of files){
 const html=fs.readFileSync(file,'utf8');const relative=path.relative(root,file).replaceAll('\\','/');
 const url=relative==='index.html'?'/':'/'+relative.replace(/index\.html$/,'');
 const title=html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
 const headings=[...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length;
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
 const description=html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/)?.[1];
 if(headings!==1)errors.push(`${url}: ${headings} H1s`);
 if(!title||titles.has(title))errors.push(`${url}: missing/duplicate title`);titles.add(title);
 if(!description)errors.push(`${url}: missing description`);
 if(!canonical?.startsWith('https://enfosiguide.wiki/'))errors.push(`${url}: incorrect canonical`);
 if(/Anvil Quest|Forge Studios|Claim starter codes|Replace this scaffold|Updated daily by the community/.test(html))errors.push(`${url}: demo/unsupported promise`);
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
  try{JSON.parse(match[1]);}catch{errors.push(`${url}: invalid JSON-LD`);}
 }
 for(const match of html.matchAll(/<img\b[^>]*>/g)){if(!/\balt(?:="[^"]*"|(?=\s|>))/.test(match[0]))errors.push(`${url}: image without alt`);}
 if(/googletagmanager\.com|adsbygoogle|giscus\.app\/client\.js/.test(html))errors.push(`${url}: third-party tracking/ad script enabled`);
 pages.push({url,title,canonical,headings,description,noindex:/name="robots"[^>]*content="[^"]*noindex/.test(html)});
}
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
for(const location of locations){const url=new URL(location);const local=path.join(root,decodeURIComponent(url.pathname),'index.html');if(url.origin!=='https://enfosiguide.wiki'||!fs.existsSync(local))errors.push(`Invalid sitemap URL: ${location}`);}
if(locations.some(u=>/getting-started|\/ja\/|\/codes\/|\/404/.test(u)))errors.push('Excluded content appeared in sitemap');
if(!fs.readFileSync(path.join(root,'robots.txt'),'utf8').includes('Sitemap: https://enfosiguide.wiki/sitemap.xml'))errors.push('Incorrect robots sitemap');
if(!fs.existsSync(path.join(root,'pagefind/pagefind.js')))errors.push('Pagefind bundle missing');
const result={collectedAt:new Date().toISOString(),status:errors.length?'FAILED':'COMPLETED',htmlPages:pages.length,sitemapUrls:locations.length,pages,errors};
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/site-audit.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({status:result.status,htmlPages:pages.length,sitemapUrls:locations.length,errors},null,2));
process.exitCode=errors.length?1:0;
