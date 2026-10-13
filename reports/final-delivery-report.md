# Enfosi Guide Wiki 交付报告

核验日：2026-10-13。正式域名工程上线 **COMPLETED**；DNSSEC 已恢复，公开验证 AD:true。Google 收录/搜索成果仍单独 PENDING。

**A. 项目**

正式域名 https://enfosiguide.wiki 已接通且 HTTPS 有效。可用站点 https://enfosi-guide-wiki.pages.dev；GitHub https://github.com/jjasnek-ops/enfosi-guide-wiki。部署代码 SHA：1667a6b09ac2945078ceb1178b1cd7579df638ef；Cloudflare 生产部署 ID：d8ae4560-ea44-40b3-9172-411841e2c7cf。AnvilWiki v2.37.0 / d4fce654128ce75a8355291ebf792584026de2b7，MIT 保留；Astro/MDX/Pagefind 静态产物，CLI direct upload。随后提交的验收报告与实际部署代码 SHA 分开记录。

**B. SEO**

262 个去重候选词，242 个通过首轮过滤，七个有证据的意图发布。242 不代表全部已验证有效需求。Similarweb 真实浏览器读取100/225行，Google / Worldwide / 全流量 / 截至10月10日最近28天：enfosi 19.5K、enfosi wiki 8.4K；KD/CPC null，美国国家筛选因 Custom packages 付费限制 BLOCKED，未购买或绕过。不能称美国月搜索量。

Trends 的全球7/30天及美国30天均实际读取，与 GPTs 对照；指数分别独立归一化。10月初上升，后续波动，不能保证持续增长。五个实际 SERP 观察：主词/wiki/guide/beginner 4分，Maniac 3分；视频区与不足十个可见标题的采集范围均明示，没有冒充严格前十蓝链排名。适合优先完善当前版本的新手、辨识、守护目标及 Maniac 准备；原始序列、页面矩阵及来源见 research/。

**C. 内容**

| 发布内容 | 当前可用 URL | 证据/范围 |
|---|---|---|
| Beginner guide | https://enfosiguide.wiki/guides/beginner-guide/ | A/B，READY |
| Spot fakes | https://enfosiguide.wiki/guides/spot-fakes/ | A/B/C，PARTIAL，辨识线索有明确限制 |
| Statue defense | https://enfosiguide.wiki/guides/statue-defense/ | A/B，READY |
| Classes | https://enfosiguide.wiki/guides/classes/ | A/B/C，PARTIAL，不提供无证据排名/解锁 |
| Maniac mode | https://enfosiguide.wiki/guides/maniac-mode/ | A/B，PARTIAL，准备而非完整机制表 |
| Official game | https://enfosiguide.wiki/guides/official-game/ | A，READY |
| SMILE MORE update | https://enfosiguide.wiki/updates/smile-more/ | A/B，READY，区分 API 更新时间与发布日 |

官方体验确认 place78353262320982 / universe7882785167 / Tumore。七篇之外有首页、有效分类、FAQ、法律/联系、标签等实际页面；不存在空示例分类。兑换码、具体武器/Boss数值、概率、隐藏解锁、职业等级榜继续 HOLD。没有个人实机完整通关验证，社区线索不冒充确定规则。

**D. 工程**

COMPLETED：应用检查/lint/适用199测试（16套件）、内容/配置/语言检查、构建29 HTML页、28 sitemap URL、700内部链接、24线上URL状态检查。八个已删除演示内容依赖的上游套件明确排除，不能称完整上游测试全通过。Pagefind七篇文章索引，实际线上Maniac搜索返回七个结果。桌面/390×844手机：首页、菜单、TOC、FAQ、表格、暗色、搜索、404均已检验；无横向溢出及所查控制台错误。图像优化、canonical、robots、sitemap、JSON-LD及ALT检查通过。没有声称 Lighthouse 分数。

**E. 上线**

GitHub、Pages、正式域名 DNS/HTTPS/核心站点全部 COMPLETED。Pages 显示 Active / SSL enabled，NS/DS/A/TXT 公开验证全部 AD:true。已按授权临时暂停 DNSSEC、切换后发布 Cloudflare 的真实新 DS 并恢复保护。24个线上URL及28个sitemap URL全部符合预期。

GSC所有权与sitemap提交 COMPLETED。Google首页和Maniac实时测试均可抓取、可索引；索引数据库当前仍显示未收录。Sitemap最近处理状态 FAILED（Couldn't fetch），有效XML及所有URL访问检查通过，原因未确认，后续处理 PENDING，不能报成抓取成功。GA4正式域名首页和新手攻略各一次page_view/204，均为测试访问；GA4报表及自然流量 PENDING。

**F. 总结**

英文核心站点已在正式域名上线，七篇原始攻略/更新、代码、DNSSEC、证据与审计已交付。无待处理上线授权。后续关注GSC sitemap失败状态是否恢复、真实收录/曝光/点击和GA4自然着陆页；不要把验收访问当自然流量。真实内容限制仍是职业/伪装/Maniac未验证的完整数值与解锁。检查节点：10月16/20/27及11月10日。没有创建提醒。只按官方更新、新证据、重要错误或真实搜索机会改稿。
