# Next actions / resume

Updated 2026-10-13T12:03:36.751Z. Read current-delivery-status, execution-log and blockers first.

1. Wait for the human's already-pending DNSSEC migration answer. If denied, retain the secure registrar delegation and Pages URL. If approved, disable only this domain's DNSSEC, remove old DS, then change only enfosiguide.wiki to Cloudflare's assigned nameservers. Recheck DS/delegation before changing records. Preserve the GSC TXT value from gsc-dns-check.json in the new zone. Replace only the two known Spaceship parking A records with the Pages CNAME through custom-domain setup. Do not touch other domains or unrelated records.
2. Once the zone is active, complete Pages custom-domain binding; wait for certificate/active state. Enable Cloudflare DNSSEC and publish its exact DS at Spaceship. Verify validating DNS and HTTPS. No guessed DS data.
3. Run scripts/verify-live.ps1 -BaseUrl https://enfosiguide.wiki -ReportName apex-live; then actual production browser mobile/search/404/canonical checks. Update each independent milestone. Enable repository variable PRODUCTION_DOMAIN_ACTIVE=true only after correct apex + deployed marker verified; manual IndexNow submission only then.
4. Submit https://enfosiguide.wiki/sitemap.xml in the already verified GSC domain asset and inspect real fetch/URL results. Record discovery/indexing separately. Verify consent-gated GA4 page_view on actual apex and avoid reporting audit/test visits as organic users.
5. Publish more pages only after independent evidence clears HOLD. Do not duplicate intents or relabel dates without a substantive change.

Maintenance checks: launch day +3/+7/+14/+28. If apex activates Oct 13, these dates are Oct 16/20/27 and Nov 10; shift to actual activation date if later. Check GSC indexing/errors and impressions first, then queries/CTR/rank, GA4 organic landing pages and meaningful engagement, and actual Roblox update changes. Sustained demand decay with no exposure is a reason to stop low-value expansion. These are documented nodes; no reminders were created.

Deploy using pnpm build, then pnpm dlx wrangler@4.149.0 pages deploy dist --project-name enfosi-guide-wiki --branch main. Set CF_PAGES_COMMIT_SHA to the release commit before building. Keep credentials out of arguments/reports. Never rerun apply-template, configure-launch, finish-assets or prepare-delivery over the completed site. Resume with the existing checkout/remote.
