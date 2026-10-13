# Enfosi Guide Wiki

Independent English guides for [Enfosi by Tumore on Roblox](https://www.roblox.com/games/78353262320982/Enfosi).

Canonical domain: https://enfosiguide.wiki. Hosting: Cloudflare Pages; deployment status is recorded in reports/launch-verification.md. Do not infer launch from this URL declaration.

Built from [PNGTRID/AnvilWiki](https://github.com/PNGTRID/AnvilWiki), version 2.37.0, commit d4fce654128ce75a8355291ebf792584026de2b7. MIT license and attribution retained. Astro 7 / MDX / Tailwind / Pagefind, static dist output.

## Develop and verify

Node >=22.13, pnpm 11. Frozen install: pnpm install --frozen-lockfile.

- pnpm dev
- pnpm check
- pnpm lint
- pnpm test
- pnpm check-config
- pnpm check-content
- pnpm check-i18n --strict-ui
- pnpm build
- pnpm check-links
- node scripts/audit-site.mjs

The site fork runs 16 shared-runtime suites (199 tests). Eight upstream suites require removed demo/marketing/codes fixtures and are explicitly excluded in vitest.config.ts. They remain in the source for provenance. Three generic fixture assertions were adapted to the English-only, renamed site. Astro checks application files; test fixtures are outside its typecheck scope.

The upstream template-generator E2E and independent ops-toolkit CI jobs are not part of this site's CI. This fork does not modify their implementation. A weekly upstream issue-creation schedule is disabled; maintenance dates are documented without creating reminders.

## Content rules and resuming work

Read AGENTS.md and reports/current-delivery-status.md, execution-log.md, blockers.md, next-actions.md before editing. Research evidence is in research/evidence-ledger.md. Only READY pages or useful explicitly limited PARTIAL pages may publish. Codes, rankings, damage values and hidden unlocks need current verification.

Seven guide/update articles are published in this edition. No placeholder or empty category is routed. Ads, comments and extra beacons are disabled. GA4 G-LMPJRR4876 is configured in site.ts and loads only after optional-cookie acceptance; the privacy page describes the actual behavior. Original transcripts and credential-bearing diagnostics stay local and ignored.

## Deployment

SITE_URL in wrangler.toml is https://enfosiguide.wiki. Local Astro sitemap uses the same configured site URL. pnpm build emits dist/, Pagefind and /sitemap.xml (copied from the actual generated sitemap-0.xml). Pages project: enfosi-guide-wiki, production branch main. Deployment is CLI direct upload; a push alone does not deploy. IndexNow waits for PRODUCTION_DOMAIN_ACTIVE=true after real apex activation.

Use wrangler pages deploy dist --project-name enfosi-guide-wiki --branch main with existing Cloudflare authorization. Never copy tokens into source, shell arguments or reports. Record the deployed commit and verify production URLs independently.

Corrections and copyright requests: [GitHub issues](https://github.com/jjasnek-ops/enfosi-guide-wiki/issues/new).
