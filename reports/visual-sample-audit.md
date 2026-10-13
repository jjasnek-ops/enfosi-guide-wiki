# Visual and interaction audit

Status: COMPLETED for observed local scope, initial Pages desktop render verified. Formal-domain browser audit: BLOCKED until DNS migration confirmation. No Lighthouse score or performance timing was measured.

Actual local browser: http://127.0.0.1:4326. Desktop homepage, article and guide list rendered; six list thumbnails complete and naturalWidth 422. Screenshots home-desktop.png, article-desktop.png and list-desktop.png. Some earlier article screenshots predate the final icon and consent styling; final phone samples show current code.

390×844 actual viewport: homepage/menu, beginner article and classes table tested. Browser viewport wrapper did not apply to the intended tab; corrected using documented CDP Emulation on the project tab and verified innerWidth=390. Document scrollWidth=375 (scrollbar), article table width/scrollWidth=343. Menu opens and its Guides link navigates. TOC opens and a selected link changes hash to #how-should-you-judge-your-first-attempt. FAQ mobile question expands to the developer's PC recommendation. Toggle theme changes html to dark and body background rgb(9,14,26). Phone screenshots home-mobile.png, menu-mobile.png, article-mobile-dark.png, classes-mobile.png. Overrides cleared after tests.

Pagefind actual search Maniac returns seven indexed results including relevant article/section links. 404 route visibly renders Page Not Found, search and home links; nonexistent route returns 404 in live HTTP audit. Browser error logs empty in the tested page states. All 700 generated internal links resolve; that checks links beyond the few actually clicked.

Consent: before choosing, Google tag script absent. Decline hides banner and keeps tag count zero. Final button rgb(100,109,24) with white text corrects the former bright-lime/white contrast. Original editorial share cards are labeled, not presented as gameplay photos. Ads remain off.

Production receipt and any later GA event evidence are in launch-verification.md / ga4-verification.json. No unsupported browser/performance claims.
