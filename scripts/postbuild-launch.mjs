import fs from 'node:fs';
// Give the requested /sitemap.xml endpoint the same generated URL set.
fs.copyFileSync('dist/sitemap-0.xml', 'dist/sitemap.xml');
console.log('Published sitemap.xml from the actual generated sitemap.');
