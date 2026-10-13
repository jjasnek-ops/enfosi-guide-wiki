import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const raw = path.join(root, 'research/raw');
await fs.mkdir(raw, { recursive: true });
const sources = [
  ['roblox-universe', 'https://apis.roblox.com/universes/v1/places/78353262320982/universe'],
  ['roblox-game', 'https://games.roblox.com/v1/games?universeIds=7882785167'],
  ['roblox-group', 'https://groups.roblox.com/v1/groups/9835935'],
  ['roblox-social', 'https://games.roblox.com/v1/games/7882785167/social-links/list'],
  ['competitor-enfosi', 'https://enfosi.wiki/'],
  ['competitor-enfosi-wiki', 'https://enfosi-wiki.wiki/'],
  ['fandom-glaggles', 'https://enfosi.fandom.com/wiki/Glaggles'],
  ['fandom-classes', 'https://enfosi.fandom.com/wiki/Classes'],
  ['domain-before-launch', 'https://enfosiguide.wiki/'],
];
const log = await Promise.all(sources.map(async ([key, url]) => {
  const collectedAt = new Date().toISOString();
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(25000) });
    const body = await response.text();
    await fs.writeFile(path.join(raw, `${key}.txt`), body);
    const record = { key, url, collectedAt, status: response.status, finalUrl: response.url, bytes: Buffer.byteLength(body) };
    await fs.writeFile(path.join(raw, `${key}.metadata.json`), JSON.stringify(record, null, 2));
    return record;
  } catch (e) { return { key, url, collectedAt, status: 'FAILED', error: e.message }; }
}));
const seeds = ['enfosi', ...'abcdefghijklmnopqrstuvwxyz'.split('').map(c=>`enfosi ${c}`), ...['how to','best','guide','codes','classes','weapons','boss','update'].map(c=>`enfosi ${c}`)];
const suggest = [];
// Three requests at a time; retain empty observations and errors separately.
for (let i=0; i<seeds.length; i+=3) {
  const batch = await Promise.all(seeds.slice(i,i+3).map(async query=> {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=${encodeURIComponent(query)}`;
    try { const response=await fetch(url,{signal:AbortSignal.timeout(12000)}); const body=await response.text(); return {query,url,collectedAt:new Date().toISOString(),status:response.status,data:response.ok?JSON.parse(body):null}; }
    catch(e) { return {query,url,status:'FAILED',error:e.message}; }
  }));
  suggest.push(...batch);
}
await fs.writeFile(path.join(raw,'source-fetch-log.json'), JSON.stringify(log,null,2));
await fs.writeFile(path.join(raw,'google-suggest.json'), JSON.stringify(suggest,null,2));
const candidates=[...new Set(suggest.flatMap(r=>r.data?.[1]??[]))];
await fs.writeFile(path.join(root,'research/raw-keywords.json'),JSON.stringify({collectedAt:new Date().toISOString(),source:'Google Suggest, English, US request parameter (not measured geography)',seeds,keywords:candidates},null,2));
console.log(JSON.stringify({sources:log,queries:suggest.length,keywords:candidates},null,2));
