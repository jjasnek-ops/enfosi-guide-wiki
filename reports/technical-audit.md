# Technical audit

Status: COMPLETED for local build checks; browser/production checks recorded separately.

| Command / check | Outcome |
|---|---|
| pnpm install --frozen-lockfile | COMPLETED, exit 0 |
| pnpm check | COMPLETED, 0 errors/warnings after fixes |
| pnpm lint | COMPLETED, exit 0 |
| pnpm test | COMPLETED, 199/199 applicable tests, 16 suites |
| pnpm check-config | COMPLETED, nav/locale/domain consistency |
| pnpm check-content | COMPLETED, seven MDX files |
| pnpm check-i18n --strict-ui | COMPLETED, English only |
| pnpm template-audit | COMPLETED, 14/14 |
| pnpm build | COMPLETED, static HTML and Pagefind |
| pnpm check-links | COMPLETED, 700 links / 29 HTML pages |
| node scripts/audit-site.mjs | COMPLETED, 29 HTML pages / 28 sitemap URLs, no errors |
| pnpm check-sitemap https://enfosiguide.wiki | COMPLETED, exit0;28 URLs200 |
| pnpm test:e2e | NOT_APPLICABLE to this game fork's release; template fixtures/marketing removed |

Repairs: initializer-generated empty scaffolds removed; generic legal claims replaced; homepage CTA points to its actual named guide; mobile menu receives accessible name; generic configurable logo; default Astro sitemap origin changed from demo domain to site config; /sitemap.xml published from generated sitemap; stale favicon replaced. Empty alt attributes on redundant card thumbnails are valid decorative HTML, not missing ALT.

Application typecheck excludes upstream test fixtures. Eight demo-specific suites excluded explicitly; generic parse/locale/title fixture assumptions updated. Initial failed outputs retained in reports/test-initial.log; no claim that the unmodified template's entire suite passes on a rebranded fork.

All sitemap URLs are real generated pages on the canonical host. No draft, codes, Japanese fallback, placeholder or 404 URL enters sitemap. JSON-LD parses, canonical/description/title/H1 checks pass. Ads/comments/beacons absent. Genuine GA4 ID configured with consent-gated loading; decline verified unloaded. Actual mobile/search checks completed in visual-sample-audit.md. GA reception is independently verified later.
