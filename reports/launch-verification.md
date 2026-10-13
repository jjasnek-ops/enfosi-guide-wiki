# Launch verification

Verified 2026-10-13, Asia/Shanghai. Overall requested formal-domain launch: BLOCKED. This does not invalidate the actual Pages deployment.

| Milestone | Status | Evidence |
|---|---|---|
| GitHub push | COMPLETED | https://github.com/jjasnek-ops/enfosi-guide-wiki; main; release commit 1667a6b09ac2945078ceb1178b1cd7579df638ef |
| Cloudflare deploy | COMPLETED | Production deployment d8ae4560-ea44-40b3-9172-411841e2c7cf; source 1667a6b |
| Stable Pages HTTPS | COMPLETED | https://enfosi-guide-wiki.pages.dev |
| Immutable deployment URL | COMPLETED | https://d8ae4560.enfosi-guide-wiki.pages.dev |
| Expected source published | COMPLETED | Public /.well-known/anvilwiki-deploy.txt returned full release SHA |
| Pages HTTP/core assets | COMPLETED | reports/pages-live.json: 24 routes, zero failures; unknown path 404 |
| Pages browser render/search/mobile | COMPLETED | pages-home-final.png, pages-article-mobile.png, pages-search-mobile.png; search seven results; browser error logs empty |
| Canonical/robots/sitemap | COMPLETED | Canonical https://enfosiguide.wiki; 28 real sitemap URLs; sitemap.xml/robots return 200 on Pages |
| Apex DNS delegation | BLOCKED | Still launch1/launch2.spaceship.net, validating AD:true; domain-dns-state.json |
| Apex HTTPS and requested site | BLOCKED | apex-current-state.json: SSL connection failed. Never bypassed TLS checks |
| Pages apex custom domain | BLOCKED | Actual wizard requires Cloudflare DNS transfer; pending zone cannot complete binding |
| GSC ownership | COMPLETED | Actual Ownership verified dialog; gsc-verified.png; DNS TXT lookup Status0 AD:true |
| Sitemap submission/fetch in GSC | NOT_STARTED | Depends on actual apex connection |
| GA4 property/Web stream | COMPLETED | Stream 16119725645, G-LMPJRR4876; ga4-stream.png |
| Consent and GA4 network receipt on Pages | COMPLETED | No Google script before choice; after acceptance one homepage page_view and one beginner page_view, each HTTP204; ga4-verification.json |
| GA4 actual apex receipt | BLOCKED | Apex connection not complete |
| GA4 processed reports/realtime confirmation | PENDING | HTTP204 is network receipt, not proof that a dashboard finished processing |
| Google discovery/indexing/impressions/clicks | PENDING | No confirmed search outcome, no claimed organic traffic |
| IndexNow | NOT_STARTED | Initial workflow failure retained; latest run skipped by domain-active guard |

The GA4 page-view checks are deliberate test traffic on the Pages host, not organic users. Both checked page loads issued one page_view each, with no observed duplicate. Decline was tested on localhost and kept the tag unloaded. Ads, comments and additional beacons remain disabled.

Release CI https://github.com/jjasnek-ops/enfosi-guide-wiki/actions/runs/38394611352 completed success. Its IndexNow follow-up https://github.com/jjasnek-ops/enfosi-guide-wiki/actions/runs/38394706933 was skipped. Deployment is supported CLI direct upload, not a connected Git-triggered deployment. Audit-only commits after the release do not change served source; release SHA above is the actual deployed marker.

Cloudflare zone is Free/pending. Spaceship DNSSEC has not been disabled; no nameserver change has been made. Assigned future nameservers: armfazh.ns.cloudflare.com and laura.ns.cloudflare.com. Preserve GSC TXT through any authorized migration. Only the already-requested action-time DNSSEC confirmation is needed to continue; subsequent propagation/certificate completion is external state, not implied authorization.

Maintenance nodes are relative to actual apex activation: +3/+7/+14/+28 days. If Oct13 then Oct16/20/27 and Nov10, otherwise shift. No recurring reminders were created. See next-actions.md for a concrete resume sequence.
