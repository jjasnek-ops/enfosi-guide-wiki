# Launch verification

Updated 2026-10-13T13:36:59.306Z. **Requested formal-domain engineering launch: COMPLETED.**

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
