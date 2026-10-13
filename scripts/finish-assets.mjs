import fs from 'node:fs';
const png=fs.readFileSync('public/favicon-32x32.png');
const head=Buffer.alloc(22);head.writeUInt16LE(1,2);head.writeUInt16LE(1,4);head[6]=32;head[7]=32;head.writeUInt16LE(1,10);head.writeUInt16LE(32,12);head.writeUInt32LE(png.length,14);head.writeUInt32LE(22,18);
fs.writeFileSync('public/favicon.ico',Buffer.concat([head,png]));
// The generated WebP is the current share card; no demo SVG fallback remains.
if(fs.existsSync('public/images/hero.svg'))fs.unlinkSync('public/images/hero.svg');
for(const name of ['en-guides-getting-started.png','en-updates-getting-started.png']){
 const file=`src/assets/covers/${name}`;if(fs.existsSync(file))fs.unlinkSync(file);
}
const manifest=JSON.parse(fs.readFileSync('public/manifest.json','utf8'));manifest.name='Enfosi Guide Wiki';fs.writeFileSync('public/manifest.json',JSON.stringify(manifest,null,2)+'\n');
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));pkg.name='enfosi-guide-wiki';pkg.description='Independent English Enfosi guides for Roblox, built with AnvilWiki.';pkg.homepage='https://enfosiguide.wiki';pkg.repository.url='https://github.com/jjasnek-ops/enfosi-guide-wiki.git';pkg.bugs.url='https://github.com/jjasnek-ops/enfosi-guide-wiki/issues';if(!pkg.scripts.postbuild.includes('postbuild-launch'))pkg.scripts.postbuild+=' && node scripts/postbuild-launch.mjs';fs.writeFileSync('package.json',JSON.stringify(pkg,null,2)+'\n');
