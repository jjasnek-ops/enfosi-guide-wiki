# Template initialization

Status: COMPLETED. Date: 2026-10-13, Asia/Shanghai.

- Source: https://github.com/PNGTRID/AnvilWiki
- Upstream SHA: d4fce654128ce75a8355291ebf792584026de2b7, version 2.37.0.
- MIT LICENSE preserved, including original contributors' notice.
- Actual installed stack: Astro 7.3.2, MDX 8.0.1, Tailwind 3.4.19, Pagefind 1.5.2. Node 22.19.0; pnpm 11.25.0. Upstream declares Node >=22.13 and pnpm 11.1.1.
- Read README, AGENTS, PRD architecture, content-format, deployment/apply-template docs, schema, initializer deletion/write behavior, prompt sequencing, and anvil-new-article skill.
- `pnpm apply-template --answers research/template-answers.json --dry-run`, exit 0. One extra answer is expected because dry-run skips the final proceed prompt.
- Verified all recursive deletion targets stay within the newly cloned project. `pnpm apply-template --answers research/template-answers.json`, exit 0. Removed 11 demo articles, 24 demo assets, landing routes/config and unused Japanese UI; generated two draft scaffolds and a stable public IndexNow key.
- English only, guides/updates navigation, SITE_URL=https://enfosiguide.wiki, ads/comments/analytics disabled.
- Roblox adaptation uses native content/config layers. No framework migration or runtime framework introduced.
- Known template defect: generic About/Copyright text advertises unsupported codes/Discord and cannot represent the site's actual coverage. A small data-driven legal-content correction is necessary before release.
- Homepage hero initially occupies 68vh; reduce to a readable introduction after visual inspection. Generated branded covers are editorial cards, never described as game screenshots.
