# Yingmi PPT Layout Reference（Y01–Y12）

> 适用范围：盈米基金商务路演 / 公司介绍 / 发布会 HTML 横向翻页 deck。  
> **不用于**且慢内部分享（→ `qieman-web-ppt-design`）或客户财富报告书（→ `qieman-report-design`）。  
> 视觉继承 `themes-yingmi.md`；禁止页内改品牌色、字体、圆角。  
> `data-layout` **优先写短码** `Y01`…`Y12`（长 ID 仅作别名，校验脚本两者都认）。

### 与 guizang 的边界（选版前必读）

做 **`yingmi-ppt-design` 交付物时，页内排版只认本文件的 Y01–Y12**，不直接套用 guizang 的 layout：

| 来源 | 用什么 | 何时用 |
|------|--------|--------|
| **guizang-ppt-skill** | 翻页壳 / 交互 | **始终**：`100vw×100vh`、←→、滚轮、触屏、圆点、ESC |
| **本文件 + `themes-yingmi.md`** | 视觉 + 版式 | **始终**：色/字/背景 + **Y01–Y12** 填内容 |
| guizang `layouts.md` / S01–S22 / 杂志·瑞士骨架 | **不用进交付 HTML** | 仅可作「这类信息不曾见」时的**灵感对照**；落地仍须映射到 Y01–Y11，对不上再用 **Y12** |

**硬规则：**

1. 生成 / 改页时打开的是 `layouts-yingmi.md`，不是 guizang 的 `layouts.md`。  
2. 禁止把 guizang 类名 / `data-layout`（如 S01、swiss 分区）原样写进盈米 `index.html`。  
3. 若 guizang 某版式「想法可用」：先表内找最近似 **Y04–Y11**；仍放不下 → **Y12**（边距必守），**不是**再开一份 guizang 骨架。

一句话：**交互抄 guizang，排版锁盈米。**

---

## 0. 版式总表

| 短码 | 长 ID（别名） | 意图 | 背景类 | 主视觉槽 |
|------|---------------|------|--------|----------|
| Y01 | `cover-left-text-right-visual` | 封面 | `cover` | 右 3D / 背景自带 |
| Y02 | `toc-left-label-right-list` | 目录 | `toc` | 无 |
| Y03 | `section-number-title-bottom-left` | 子封面 | `section` | 无 |
| Y04 | `content-image-left-text-right` | 竖图 + 文 + 3KPI | `page` | 竖图 2:5 |
| Y05 | `content-text-left-image-right` | 两组观点 + 横图 | `page` | 横图 |
| Y06 | `timeline-staircase` | 历程 4–5 段 | `page` | 无 |
| Y07 | `awards-card-grid` | 奖项 3–5 卡 | `page` | 奖杯图 |
| Y08 | `closing-centered` | 封底 | `closing` | 无 |
| Y09 | `kpi-hero-grid` | 无图大数字 3–4 | `page` | 无 |
| Y10 | `comparison-two-col` | 左右对比 | `page` | 无 |
| Y11 | `principles-three-col` | 三列要点 | `page` | 无 |
| **Y12** | `content-custom` | **内页自定义（兜底）** | `page` | 自定，须守边距 |

**硬纪律：**

1. **优先**走 Y01–Y11；只有内容形状无法匹配、且删减会损害结论时，才用 **Y12**。  
2. 禁止另起 `Y13` / 未登记短码 / 随意新造 `data-layout`。  
3. **Y12 不是免视觉规范**：色、字、圆角仍锁 `themes-yingmi.md`；**页边距必须严格遵守**下文「边距」与 §13。

**边距（相对单位优先 · 全版式硬约束，Y12 同级）：**

```text
左右：var(--ymi-safe-x) ≈ clamp(48px, 4.27vw, 82px)   ← 禁止 < 48px，禁止写死更小的 padding
上下内容区：var(--ymi-safe-y) ≈ clamp(40px, 6.3vh, 68px)
底部导航安全区：≥ 7–9vh（圆点不可遮正文；内容容器加 .nav-safe-bottom）
Logo 净空：四周 ≥ 24px；右上 Logo 页内容区须为 Logo 预留（勿顶到 logo-tr）
```

模板 `.slide` 已含左右 / 上下安全 padding；自定义内容应落在此安全框内，**禁止**负 margin / `position` 把字图拖出安全区。

---

## 1. 自动选版（按内容形状 · P0）

生成前用本表，**数据类型必须匹配版式**：

```text
首页                              → Y01
目录 / 议程                       → Y02
仅章节编号 + 章节标题             → Y03
竖图 + 简介 + 3 KPI               → Y04
使命/愿景/两组观点 + 横图         → Y05
年份 / 阶段 3–5                   → Y06
奖项 / 资质 3–5                   → Y07
结束页                            → Y08
3–4 个大数字、无大图              → Y09
A vs B / 前后 / 左右双列对比      → Y10
恰好 3 项原则 / 业务 / 能力层     → Y11
无法匹配 Y01–Y11，且删减会伤结论  → Y12（自定义内页，边距必守）
可删减仍匹配                      → 最近似 Y04–Y11 + 删减（优先于 Y12）
```

| 错误匹配（禁止） | 应改用 |
|------------------|--------|
| 无竖图却用 Y04 | Y09 |
| 对比要点做成 Y05 两段文 | Y10 |
| 三业务塞进 Y04 KPI | Y11 |
| 本可用 Y09/Y10/Y11 却偷懒用 Y12 | 改回对应登记版式 |
| 连续 ≥3 页同一内容结构（如三连 Y04） | 插入 Y03 或换 Y05/Y09/Y10/Y11/Y12 |

多样性格：**≥10 页** deck 建议覆盖 ≥ **6** 种短码；完整公司介绍建议含 Y01–Y08 中 ≥6，并视内容补 Y09–Y12。Y12 不宜占全文过半。

---

## 2. Y01 · 封面

**何时用：** 路演 / 公司介绍开场。  
**何时不用：** 章节切换（用 Y03）、结束（用 Y08）。

```html
<section class="slide cover" data-layout="Y01" data-theme="light">
  <img class="logo logo-tl" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-cover">
    <div class="cover-copy">
      <h1 class="t-cover">[主标题 1–2 行]</h1>
      <p class="t-speaker">主讲人：[姓名]</p>
    </div>
    <div class="cover-visual img-slot" aria-hidden="true"><!-- 或留空由背景承载 --></div>
  </div>
</section>
```

**槽位：** 标题 ≤2 行、每行 ≤11 字；主讲人 1 行；无卡片/目录/页码。  
**禁止：** 标题居中；Logo 右上；叠加复杂说明。

---

## 3. Y02 · 目录

```html
<section class="slide toc" data-layout="Y02" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-toc">
    <div>
      <div class="toc-label-zh">目录</div>
      <div class="toc-label-en">Contents</div>
    </div>
    <div class="toc-list">
      <div class="toc-row"><div class="t-toc-num">01</div><div class="t-toc-title">[章节]</div></div>
      <!-- 最多 7 条；超出拆两页 -->
    </div>
  </div>
</section>
```

**禁止：** 目录做成卡片；圆点列表替代序列号；复杂图标。

---

## 4. Y03 · 子封面

```html
<section class="slide section" data-layout="Y03" data-theme="dark">
  <!-- bg-zifengmian-01.jpg 已含右上白色 Logo，勿再叠 img -->
  <div class="layout-section">
    <div class="t-section-num">01</div>
    <div class="t-section-title">[章节标题 · 1 行]</div>
  </div>
</section>
```

**禁止：** 居中；加副标题/正文/数据；数字放右侧；在 JPG 背景上再叠白色 Logo（会重影）。多章 deck **每章开头**必须有一页 Y03。

---

## 5. Y04 · 左图右文

**何时用：** 竖图 + 简介 + 恰好 3 个 KPI。无竖图 → **Y09**。

```html
<section class="slide page" data-layout="Y04" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-img-text nav-safe-bottom">
    <div class="frame-img r-2x5"><img src="images/XX-campus.jpg" alt=""></div>
    <div class="body-block">
      <h2 class="t-page">[标题]</h2>
      <p class="t-body">[5–8 行；>220 字拆页]</p>
      <div class="kpi-row">
        <div><div class="t-kpi">[数]</div><div class="t-kpi-label">[标签]</div></div>
        <div><div class="t-kpi">[数]</div><div class="t-kpi-label">[标签]</div></div>
        <div><div class="t-kpi">[数]</div><div class="t-kpi-label">[标签]</div></div>
      </div>
    </div>
  </div>
</section>
```

**禁止：** 横图硬裁竖图；数据叠图上；强调数据 >4。

---

## 6. Y05 · 左文右图

```html
<section class="slide page" data-layout="Y05" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-text-img nav-safe-bottom">
    <div>
      <h2 class="t-page">[标题]</h2>
      <div class="mission-block">
        <div class="mission-item">
          <h3 class="t-group accent">[组题 1]</h3>
          <p class="t-body">[正文]</p>
        </div>
        <div class="mission-item">
          <h3 class="t-group brand">[组题 2]</h3>
          <p class="t-body">[正文]</p>
        </div>
      </div>
    </div>
    <div class="frame-img r-16x9"><img src="images/XX-scene.jpg" alt=""></div>
  </div>
</section>
```

**规则：** 组题强调橙单页最多 1 次；横图 16:9 / 3:2 / 4:3。  
**禁止：** 厚重双卡片；右侧 ≥2 张大图；对比列表冒充两组观点（→ Y10）。

---

## 7. Y06 · 发展历程

```html
<section class="slide page" data-layout="Y06" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-timeline nav-safe-bottom">
    <h2 class="t-page">发展历程</h2>
    <div class="timeline-stairs"><!-- 默认 4 列；5 列加 cols-5 -->
      <div class="tl-col">
        <p class="tl-note">[阶段说明]</p>
        <div class="tl-stem"></div>
        <div class="tl-bar">[年份]</div>
      </div>
      <!-- 重复 3–4 次 -->
    </div>
  </div>
</section>
```

**禁止：** 密集节点图；一页 >5 阶段；彩虹色年份。

---

## 8. Y07 · 荣誉奖项

```html
<section class="slide page" data-layout="Y07" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-awards nav-safe-bottom">
    <h2 class="t-page">荣誉<span class="brand">奖项</span></h2>
    <p class="t-body awards-lead">[可选一句说明]</p>
    <div class="awards-grid"><!-- 3–5；默认 4；cols-3 / cols-5 -->
      <div class="card award-card">
        <div class="award-visual"><img src="images/XX-award.png" alt=""></div>
        <div class="award-name">[奖项名 ≤2 行]</div>
      </div>
    </div>
  </div>
</section>
```

**禁止：** >5 卡；卡片样式不统一；金色花纹底。

---

## 9. Y08 · 封底

```html
<section class="slide closing" data-layout="Y08" data-theme="dark">
  <div class="layout-closing">
    <div class="t-closing">THANKS</div>
    <img class="logo-center" src="assets/logos/yingmi-logo-white.svg" alt="盈米基金">
    <p class="t-closing-sub">改变中国人买基金的方式</p>
  </div>
</section>
```

**固定文案：** 主标题 `THANKS`（禁止写成 HTANKS）；小标题默认品牌 slogan。  
**禁止：** 联系方式 / 二维码 / 左对齐 / 内容页 Logo 位。

---

## 10. Y09 · KPI 大字报（新增）

**何时用：** 3–4 个核心数字为唯一主角，**无大图**。  
**何时不用：** 有竖图简介故事 → Y04；要讲流程 → Y11。

```html
<section class="slide page" data-layout="Y09" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-kpi-hero nav-safe-bottom">
    <h2 class="t-page">[标题]</h2>
    <p class="t-body kpi-lead">[口径 / 时间范围，1 行]</p>
    <div class="kpi-hero-grid"><!-- 3 列默认；4 列加 cols-4 -->
      <div class="kpi-hero-item">
        <div class="t-kpi">[数]</div>
        <div class="t-kpi-label">[标签]</div>
      </div>
      <div class="kpi-hero-item">
        <div class="t-kpi">[数]</div>
        <div class="t-kpi-label">[标签]</div>
      </div>
      <div class="kpi-hero-item">
        <div class="t-kpi">[数]</div>
        <div class="t-kpi-label">[标签]</div>
      </div>
    </div>
  </div>
</section>
```

**槽位：** KPI 3 或 4；单页结论一句；无图、无卡片墙。  
**禁止：** 塞进图表/列表；用假进度条装饰；数字用非 `#FF5100` 强调色冒充。

---

## 11. Y10 · 左右对比（新增）

**何时用：** A vs B、旧 vs 新、问题 vs 方案，各 2–5 条要点。  
**何时不用：** 两组散文观点 + 配图 → Y05。

```html
<section class="slide page" data-layout="Y10" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-compare nav-safe-bottom">
    <h2 class="t-page">[对比标题]</h2>
    <p class="t-body compare-lead">[可选 lead]</p>
    <div class="compare-grid">
      <div class="compare-col">
        <div class="compare-tag">[左标签]</div>
        <h3 class="t-group">[左标题]</h3>
        <ul class="compare-list">
          <li>[要点]</li>
          <li>[要点]</li>
        </ul>
      </div>
      <div class="compare-col compare-col--accent">
        <div class="compare-tag">[右标签]</div>
        <h3 class="t-group">[右标题]</h3>
        <ul class="compare-list">
          <li>[要点]</li>
          <li>[要点]</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**槽位：** 左右各 ≤5 条；右列可用 `compare-col--accent` 突出方案侧。  
**禁止：** 三列对比；每条做成独立厚阴影卡；右列堆大图。

---

## 12. Y11 · 三列要点（新增）

**何时用：** 恰好 3 个能力层 / 业务线 / 原则。  
**何时不用：** 4+ 项 → 拆页或奖项式网格勿混用；2 项对比 → Y10。

```html
<section class="slide page" data-layout="Y11" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-principles nav-safe-bottom">
    <h2 class="t-page">[标题]</h2>
    <div class="principles-grid">
      <div class="principle">
        <div class="principle-num">01</div>
        <h3 class="t-group">[层名]</h3>
        <p class="t-body">[说明 ≤60 字]</p>
      </div>
      <div class="principle">
        <div class="principle-num">02</div>
        <h3 class="t-group">[层名]</h3>
        <p class="t-body">[说明 ≤60 字]</p>
      </div>
      <div class="principle">
        <div class="principle-num">03</div>
        <h3 class="t-group">[层名]</h3>
        <p class="t-body">[说明 ≤60 字]</p>
      </div>
    </div>
  </div>
</section>
```

**禁止：** 改成 2/4 列；编号用橙面积铺底；每列再塞 KPI 数字墙。

---

## 13. Y12 · 自定义内页（兜底）

**何时用：** 内容形状无法匹配 Y04–Y11（例如：四象限、流程图 + 旁注、表格型要点、特殊信息架构），且**删减后仍无法**塞进登记版式。  
**何时不用：** 封面 / 目录 / 子封面 / 封底（仍必须 Y01 / Y02 / Y03 / Y08）；可用 Y09–Y11 表达的数字 / 对比 / 三列。

### 页边距（P0 · 不可让步）

Y12 **唯一放宽**的是栅格与模块组合；边距与主题不得放宽：

| 项 | 必须 |
|----|------|
| 左右 | 继承 `.slide` 的 `padding-inline: var(--ymi-safe-x)`；自定义容器 **禁止**再写更小的左右 padding / 负 margin 把内容顶出安全区 |
| 上下 | 内容顶距用 `padding-top: clamp(72px, 9vh, 96px)`（与其它内页一致）或≥ `var(--ymi-safe-y)` |
| 底部 | 内容根节点必须带 `nav-safe-bottom`；最低处 ≥ 离视口底 7–9vh |
| Logo | 右上 `logo-tr` regular；内容勿侵入 Logo 盒 + 24px 净空 |
| 背景 | 仅 `class="slide page"` + `bg-page-01`；禁止自造封面/封底色顶替内页 |

### HTML 骨架

```html
<section class="slide page" data-layout="Y12" data-theme="light">
  <img class="logo logo-tr" src="assets/logos/yingmi-logo-regular.svg" alt="盈米基金">
  <div class="layout-custom nav-safe-bottom">
    <h2 class="t-page">[标题 · ≤2 行]</h2>
    <!-- 以下为自定义区：可用 grid/flex；仅用模板已有 token 类 -->
    <div class="custom-body">
      <!-- 优先复用：.t-body .t-group .t-kpi .t-kpi-label .card .frame-img .brand .accent -->
      <!-- 布局微调用少量 inline style（gap / 列宽 / 图高）；禁止改 #00269A / #FF5100 / 字体栈 / 40px 圆角 -->
    </div>
  </div>
</section>
```

### 允许 / 禁止

**允许：**

- `display: grid | flex` 自组 2–4 列、象限、步骤条（非 Y06 阶梯轴时）  
- 复用已有 utility：`.t-*` / `.card` / `.frame-img` / `.kpi-row`  
- 单页 1 个结论；强调色面积 ≤ 10%

**禁止：**

- 用 Y12 代替封面 / 目录 / 子封面 / 封底  
- 为自定义页引入无衬线正文、瑞士直角、霓虹/玻璃拟态、且慢蓝 `#1B88EE`  
- `position: absolute` 把标题/KPI 钉到贴边（破坏安全区）  
- 正文 >220 字不拆页；强调数据 >4  
- 连续 ≥3 页 Y12（须穿插登记版式或 Y03）  
- 新造全局 CSS 类冒充「第 13 种登记版式」却不声明 `Y12`

### 使用前自检（写 slide 前勾选）

1. 是否已对照 §1 确认 **Y04–Y11 均不匹配**？  
2. 左右是否仅依赖 `--ymi-safe-x`，无额外缩小？  
3. 是否已加 `nav-safe-bottom`？  
4. Logo / 圆角 / 色 / 字体是否未改 themes？

---

## 14. 页面通用规则

### 页眉 / Logo

| 页类型 | Logo |
|--------|------|
| Y01 封面 | 左上 `logo-tl` regular |
| Y02/Y04–Y07/Y09–Y12 | 右上 `logo-tr` regular |
| Y03 子封面 | **不叠 HTML Logo**（`bg-zifengmian-01.jpg` 已烘焙） |
| Y08 封底 | 居中 white（在 THANKS 下） |

### 密度

- 单页单结论；正文 >220 字拆页；禁止靠缩小字号塞料  
- 强调数据建议 3、最多 4；单页大图 ≤1（Y07 除外）  
- 内容最低处不得进入底部圆点区（~7vh）

### 节奏

- 不能连续 ≥3 页仅用 `page` + 同一主体结构（含三连 Y12）  
- 多章：每章开头 Y03  
- 完整路演：不可省略 Y01 与 Y08

---

## 15. P0 校验清单

生成后必须：

- [ ] 跑 `node scripts/validate-yingmi-deck.mjs <index.html>` 通过  
- [ ] 每页 `data-layout` ∈ Y01–Y12（或登记长 ID）  
- [ ] Y12 页：左右边距未小于 `--ymi-safe-x`；含 `nav-safe-bottom`；背景为 `page`  
- [ ] 画布为 `100vw×100vh` 横滑，非 720pt  
- [ ] 字体 Source Han Serif CN（及降级栈）；主色 `#00269A`；正文 `#333333`  
- [ ] 强调数据用 `.t-kpi` / `#FF5100`  
- [ ] 背景类与版式绑定：cover / toc|page / section / closing  
- [ ] 图片圆角 40px；Logo 未变形、位置正确  
- [ ] 封底文案为 `THANKS`（非 HTANKS）  
- [ ] 无 `[必填]`；标题未超过 2 行强挤  
- [ ] 浏览器验收：←→ / 滚轮 / 触屏 / 圆点 / ESC  

对外含收益/投顾表述时叠加 `qieman-financial-compliance-guidelines`。
