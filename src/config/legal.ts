import { site } from './site';

interface LegalSection { title: string; paragraphs: string[]; items: string[]; links: Array<{ label: string; href: string }> }
interface LegalDocument { intro: string[]; sections: LegalSection[] }
const contact = { label: 'Send a correction or copyright request on GitHub', href: 'https://github.com/jjasnek-ops/enfosi-guide-wiki/issues/new' };
const section = (title: string, paragraphs: string[], items: string[] = [], links: LegalSection['links'] = []): LegalSection => ({ title, paragraphs, items, links });

export const legalContent: Record<'about' | 'privacy-policy' | 'terms-of-service' | 'copyright' | 'contact', LegalDocument> = {
  about: {
    intro: [`${site.name} is an independent English fan guide to ${site.game.name}, the Roblox experience by ${site.game.developer}. ${site.legalNotice}`],
    sections: [
      section('What this edition covers', ['The launch edition covers starting a run, inspecting disguises, defending the statue, comparing class information, preparing for Maniac, and understanding the official SMILE MORE summary.'], [], [{ label: 'Browse the published guides', href: '/guides/' }]),
      section('How facts are checked', ['Developer statements, observed gameplay and community reports are distinguished in each guide. Dates describe an actual review; unknown numbers and unlock routes are held until supported. We do not claim to have personally played or tested every mechanic.'], [], [{ label: 'Read the official-game identity check', href: '/guides/official-game/' }]),
      section('Corrections', ['Include the affected page, difficulty, version context and a public source or video timestamp. Do not post passwords, tokens or private account details.'], [], [contact]),
      section('Template attribution', ['Built with AnvilWiki, an MIT-licensed Astro template. The source repository retains its license and attribution.'], [], [{ label: 'AnvilWiki template source', href: 'https://github.com/PNGTRID/AnvilWiki' }]),
    ],
  },
  'privacy-policy': {
    intro: [`${site.name} is a static guide site. Reading guides and using local search does not require an account.`],
    sections: [
      section('Hosting and external services', ['Cloudflare hosts the site and may process ordinary request information to deliver pages and protect its network. This launch has advertising, GA4, analytics beacons and embedded comments disabled.', 'Following Roblox, community-wiki, GitHub or YouTube links takes you to services with their own policies. Video previews can request a thumbnail from YouTube; the player loads after interaction.']),
      section('Browser storage', ['The site stores theme preferences locally in your browser. Search uses a locally delivered Pagefind index. No guide-reading account database or form submission backend is operated by this site.']),
      section('Contact information', ['GitHub handles information you submit through an issue under its own policies. Issues are public: share only details needed to describe a correction or request.']),
      section('Updates and questions', ['If analytics or advertising is enabled later, this page will be updated to describe the actual service and consent behavior. Policy reviewed 13 October 2026.'], [], [contact]),
    ],
  },
  'terms-of-service': {
    intro: ['These guides are provided as an informational fan resource. Use them with the version and source limits shown on each page.'],
    sections: [
      section('Accuracy and game changes', ['The game is in progress. A guide may become outdated after an update. No ranking, completion result, availability, reward or uninterrupted service is guaranteed.']),
      section('Content and attribution', ['Original guide text and editorial artwork belong to their respective authors. Game names, marks, footage and linked third-party content retain their respective owners. Attribute short quotations and link to the original page; do not republish entire guides. The software template retains its MIT license.']),
      section('External destinations', ['External links are references. This site does not control Roblox accounts, game purchases, community wikis, video channels or their policies.']),
      section('Independent fan project', [site.legalNotice], [], [contact]),
    ],
  },
  copyright: {
    intro: [`${site.name} claims no ownership of ${site.game.name}, Roblox, the game’s characters, or third-party footage.`],
    sections: [
      section('Original and third-party material', ['Editorial cards and explanatory diagrams created for this site are labeled as such. Linked gameplay remains on its original service. Source citations identify material used for factual reference.']),
      section('Copyright requests', ['Provide the affected URL, the work you own, the material at issue and how to reach you through the issue thread. We will review the request. Do not include sensitive account information in a public issue.'], [], [contact]),
      section('Template license', ['AnvilWiki contributors retain the copyright notice in the MIT LICENSE included with this project.'], [], [{ label: 'View the repository license', href: 'https://github.com/jjasnek-ops/enfosi-guide-wiki/blob/main/LICENSE' }]),
    ],
  },
  contact: {
    intro: ['Use the project’s GitHub issue form for guide corrections, site problems or copyright requests. A GitHub account may be required.'],
    sections: [
      section('Contact the guide site', ['Include the guide URL and the specific statement or problem. For gameplay corrections, include the difficulty and a public source with a timestamp.'], [], [contact]),
      section('Contact the game developer', ['This wiki cannot handle Roblox account support or game purchases. The developer’s verified experience page is the starting point for game-specific information.'], [], [{ label: `Open ${site.game.name} by ${site.game.developer} on Roblox`, href: site.social.official }]),
    ],
  },
};
