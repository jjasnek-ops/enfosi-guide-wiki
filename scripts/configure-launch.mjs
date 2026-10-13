import fs from 'node:fs';

const jsonPath = 'src/locales/en.json';
const ui = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
ui.site.name = 'Enfosi Guide Wiki';
ui.footer.copyrightText = '© 2026 Enfosi Guide Wiki. Independent fan guides.';
ui.shared.codesFaq = [{question:'Where should I check code instructions?',answer:'Check the current game interface and developer announcements. A redemption method or valid reward must be verified before this site publishes instructions.'}];
ui.shared.defaultListDescription = 'Browse {title} articles with source notes, practical steps and version limits.';
ui.overview = {
  guides: { overviewTitle:'Enfosi Guides', overviewDescription:'Start a run, inspect disguises, protect the statue, compare classes and prepare for Maniac with clearly sourced Enfosi guides.' },
  updates: { overviewTitle:'Enfosi Updates', overviewDescription:'Verified Enfosi update summaries: official statements, gameplay context and clear distinctions between release and review dates.' },
};
ui.home.meta = {title:'Enfosi Guide Wiki | Roblox Guides & SMILE MORE',description:ui.site.description};
ui.home.hero = {badge:'Unofficial Roblox fan guide · SMILE MORE', title:'Enfosi Guide Wiki', description:'Learn to read the crowd and defend the statue. Start your first run, compare current class information and prepare for Maniac with practical, sourced guides.', ctaPrimary:'Play Enfosi on Roblox', ctaSecondary:'Start the beginner guide', ctaSecondaryHref:'/guides/beginner-guide/', videoId:''};
ui.home.start = {badge:'Your next run',title:'What do you need to learn?',cards:[
  {number:'01',title:'Start a first run',description:'The objective, lobby and a simple learning loop.',icon:'lucide:book-open',href:'/guides/beginner-guide/'},
  {number:'02',title:'Inspect a disguise',description:'Compare the crowd before committing to a fight.',icon:'lucide:scan-eye',href:'/guides/spot-fakes/'},
  {number:'03',title:'Keep the statue safe',description:'A defense routine for a team pulled into combat.',icon:'lucide:shield',href:'/guides/statue-defense/'},
  {number:'04',title:'Prepare for Maniac',description:'Current footage, practical preparation and unknowns.',icon:'lucide:flame',href:'/guides/maniac-mode/'},
]};
ui.home.updates.title='Inside the guide';
ui.home.popular={badge:'Choose a question',title:'Useful starting points',quickLinks:[
 {label:'Which Enfosi is official?',href:'/guides/official-game/'},
 {label:'How should I choose a class?',href:'/guides/classes/'},
 {label:'What does SMILE MORE confirm?',href:'/updates/smile-more/'},
]};
ui.home.explore={title:'Learn one part of the run',description:'Start with the objective. Use current menus for equipment and check the source limits before trusting an older chart.',modules:[
 {order:1,name:'Enfosi disguise inspection',description:'An imperfect disguise is a reason to look carefully.',href:'/guides/spot-fakes/',displayType:'steps',highlights:[{label:'1',detail:'Compare arrivals of the same type',badge:'Observe'},{label:'2',detail:'Check more than one visible feature',badge:'Compare'},{label:'3',detail:'Keep attention on the statue',badge:'Respond'}]},
 {order:2,name:'Enfosi class choices',description:'Read the loadout and restriction together.',href:'/guides/classes/',displayType:'labeled-cards',highlights:[{label:'Current menus',detail:'Use the item and perk descriptions you can see.'},{label:'Roster caveat',detail:'Community references include a special Sobber entry.'}]},
 {order:3,name:'Enfosi Maniac preparation',description:'A harder run starts with a better routine.',href:'/guides/maniac-mode/',displayType:'labeled-cards',highlights:[{label:'Watch the approach',detail:'Inspect the routes in the map you actually enter.'},{label:'Share attention',detail:'Agree who will watch arrivals during a fight.'}]},
 {order:4,name:'Enfosi SMILE MORE',description:'The official description confirms an overhaul and Maniac difficulty.',href:'/updates/smile-more/',displayType:'labeled-cards',highlights:[{label:'Official statement',detail:'The current Roblox description is the source.'},{label:'Dates explained',detail:'A trailer premiere is different from a release date.'}]},
]};
ui.home.faq={title:'Enfosi FAQ',description:'Answers grounded in the current Roblox description and clearly identified source limits.',items:[
 {question:'What is Enfosi?',answer:'Enfosi is a Roblox experience by Tumore. Defend a statue while identifying disguised Enphosians among innocent Glaggles. Weapons, tools and classes change how you play.'},
 {question:'What is the current update?',answer:'The official description currently advertises SMILE MORE, an overhaul with new content and Maniac difficulty. This site checked it on 13 October 2026.'},
 {question:'Can I play on mobile?',answer:'The developer recommends PC. Its description says other devices work but are not the intended setup; this site has not tested every touch or controller control.'},
 {question:'Are there verified Enfosi codes here?',answer:'A current redemption interface and valid rewards were not verified in the launch research. No placeholder codes are published. This does not prove the game has no code system.'},
 {question:'Is this wiki official?',answer:'No. Enfosi Guide Wiki is an independent fan site, not affiliated with or endorsed by Tumore or Roblox.'},
]};
ui.home.closingCta={title:'Take the next lesson into your run.',description:'Open the verified Enfosi experience by Tumore. Use the current lobby and equipment menus when the game changes.',primary:'Play Enfosi on Roblox',secondary:''};
fs.writeFileSync(jsonPath,JSON.stringify(ui,null,2)+'\n');

// Remove only the two known draft scaffolds created by the reviewed initializer.
for(const file of ['src/content/wiki/en/guides/getting-started.mdx','src/content/wiki/en/updates/getting-started.mdx']){
 if(!fs.existsSync(file))continue;
 const text=fs.readFileSync(file,'utf8');if(!text.includes('Getting Started with')||!text.includes('Replace this scaffold'))throw new Error('Unexpected scaffold content');fs.unlinkSync(file);
}
for(const page of ['about','contact','copyright','privacy-policy','terms-of-service']){
 const file=`src/pages/${page}.astro`;fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('2026-08-11','2026-10-13'));
}
fs.writeFileSync('src/components/layout/LegalContent.astro',`---
import { legalContent } from '~/config/legal';
interface Props { page: keyof typeof legalContent; }
const content = legalContent[Astro.props.page];
---
{content.intro.map((paragraph) => <p>{paragraph}</p>)}
{content.sections.map((section) => (
  <section>
    <h2>{section.title}</h2>
    {section.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
    {section.items.length > 0 && <ul>{section.items.map((item) => <li>{item}</li>)}</ul>}
    {section.links.map((link) => <p><a href={link.href} rel={link.href.startsWith('https:') ? 'noopener noreferrer' : undefined}>{link.label}</a></p>)}
  </section>
))}
`);
console.log('Updated launch content, removed two unpublished scaffolds, corrected legal content.');
