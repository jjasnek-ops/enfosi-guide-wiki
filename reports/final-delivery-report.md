# Enfosi Guide Wiki 交付报告

核验日：2026-10-13。整体正式域名上线状态 **BLOCKED**；Pages 真实部署 **COMPLETED**。

**A. 项目**

正式域名 https://enfosiguide.wiki 尚未接通。可用站点 https://enfosi-guide-wiki.pages.dev；GitHub https://github.com/jjasnek-ops/enfosi-guide-wiki。部署代码 SHA：1667a6b09ac2945078ceb1178b1cd7579df638ef；Cloudflare 生产部署 ID：d8ae4560-ea44-40b3-9172-411841e2c7cf。AnvilWiki v2.37.0 / d4fce654128ce75a8355291ebf792584026de2b7，MIT 保留；Astro/MDX/Pagefind 静态产物，CLI direct upload。随后提交的验收报告与实际部署代码 SHA 分开记录。

**B. SEO**

262 个去重候选词，242 个通过首轮过滤，七个有证据的意图发布。242 不代表全部已验证有效需求。Similarweb 真实浏览器读取100/225行，Google / Worldwide / 全流量 / 截至10月10日最近28天：enfosi 19.5K、enfosi wiki 8.4K；KD/CPC null，美国国家筛选因 Custom packages 付费限制 BLOCKED，未购买或绕过。不能称美国月搜索量。

Trends 的全球7/30天及美国30天均实际读取，与 GPTs 对照；指数分别独立归一化。10月初上升，后续波动，不能保证持续增长。五个实际 SERP 观察：主词/wiki/guide/beginner 4分，Maniac 3分；视频区与不足十个可见标题的采集范围均明示，没有冒充严格前十蓝链排名。适合优先完善当前版本的新手、辨识、守护目标及 Maniac 准备；原始序列、页面矩阵及来源见 research/。

**C. 内容**

| 发布内容 | 当前可用 URL | 证据/范围 |
|---|---|---|
| Beginner guide | https://enfosi-guide-wiki.pages.dev/guides/beginner-guide/ | A/B，READY |
| Spot fakes | https://enfosi-guide-wiki.pages.dev/guides/spot-fakes/ | A/B/C，PARTIAL，辨识线索有明确限制 |
| Statue defense | https://enfosi-guide-wiki.pages.dev/guides/statue-defense/ | A/B，READY |
| Classes | https://enfosi-guide-wiki.pages.dev/guides/classes/ | A/B/C，PARTIAL，不提供无证据排名/解锁 |
| Maniac mode | https://enfosi-guide-wiki.pages.dev/guides/maniac-mode/ | A/B，PARTIAL，准备而非完整机制表 |
| Official game | https://enfosi-guide-wiki.pages.dev/guides/official-game/ | A，READY |
| SMILE MORE update | https://enfosi-guide-wiki.pages.dev/updates/smile-more/ | A/B，READY，区分 API 更新时间与发布日 |

官方体验确认 place78353262320982 / universe7882785167 / Tumore。七篇之外有首页、有效分类、FAQ、法律/联系、标签等实际页面；不存在空示例分类。兑换码、具体武器/Boss数值、概率、隐藏解锁、职业等级榜继续 HOLD。没有个人实机完整通关验证，社区线索不冒充确定规则。

**D. 工程**

COMPLETED：应用检查/lint/适用199测试（16套件）、内容/配置/语言检查、构建29 HTML页、28 sitemap URL、700内部链接、24线上URL状态检查。八个已删除演示内容依赖的上游套件明确排除，不能称完整上游测试全通过。Pagefind七篇文章索引，实际线上Maniac搜索返回七个结果。桌面/390×844手机：首页、菜单、TOC、FAQ、表格、暗色、搜索、404均已检验；无横向溢出及所查控制台错误。图像优化、canonical、robots、sitemap、JSON-LD及ALT检查通过。没有声称 Lighthouse 分数。

**E. 上线**

GitHub和Pages部署 COMPLETED。正式域名DNS/HTTPS/站点 BLOCKED：Spaceship现有DNSSEC开启，授权委派仍为旧nameserver，HTTPS探测失败；Cloudflare自定义域名向导要求先转入其DNS。等待此前一项“暂时关闭DNSSEC、移除旧DS、切换nameserver、切换后重新启用”的确认，未修改这两项设置。

GSC域名所有权 COMPLETED，验证TXT在当前DNS上生效且AD:true；sitemap提交 NOT_STARTED。GA4属性/数据流 COMPLETED，G-LMPJRR4876；同意后加载，首页和新手攻略各一次page_view返回204。测试访问不是自然流量；GA4报表处理 PENDING，正式域名接收 BLOCKED。Google发现/收录/曝光/点击 PENDING，没有伪报搜索成果。

**F. 总结**

可访问的英文核心站点、代码、证据和审计已交付。未完成正式域名连接、其线上验收和GSC sitemap提交；并未将Pages替代域名冒充最终验收。真实风险：短期热度波动、强Wiki竞争、游戏持续更新、PARTIAL页面的机制缺口。第3/7/14/28天以实际域名激活日为基准，检查收录错误、曝光/查询/CTR/排名、GA4真实自然着陆页及官方更新。只有新证据或技术问题触发修改，不仅为刷新日期改稿。断点恢复从四份状态/日志/阻塞/下一步报告及AGENTS.md继续。

临时关闭DNSSEC会暂停DNS签名验证。浏览器操作规则要求对降低安全保护进行即时确认，因此该一步不能由总体建站授权代替；此前确认问题仍待回复。
