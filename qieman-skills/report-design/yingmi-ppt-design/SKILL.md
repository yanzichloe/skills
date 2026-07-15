---
name: yingmi-ppt-design
layer: L2
license: Complete terms in LICENSE.txt
description: >-
  盈米基金商务路演 HTML 横向翻页 PPT（L2）。生成单文件 100vw×100vh 网页 deck：
  宋体标题、品牌蓝 #00269A、蓝橙柔光背景、左文右视觉封面、目录/子封面/时间轴/奖项/KPI/对比/三列及自定义内页等登记版式（Y01–Y12）。
  交互对齐 guizang-ppt-skill（键盘←→、滚轮、触屏、圆点、ESC 索引）。
  触发词：盈米 PPT、盈米路演、yingmi deck、商务路演 HTML、公司介绍演示稿、盈米发布会幻灯片。
---

# yingmi-ppt-design

| 字段 | 值 |
|------|-----|
| **ID** | `yingmi-ppt-design` |
| **层级** | L2 |
| **场景** | 单文件 HTML 横向翻页 PPT（盈米商务路演 / 公司介绍 / 发布会） |
| **规范** | 本文件 `SKILL.md` |
| **视觉** | `references/themes-yingmi.md` |
| **版式** | `references/layouts-yingmi.md` |
| **交互原型** | [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) |
| **更新日期** | 2026-07-15 |

## 这个 Skill 做什么

生成一份**单文件 HTML**的横向翻页演示文稿：

- **画布**：`100vw × 100vh` 全屏横滑（对齐 guizang，非 720pt 固定画布）
- **视觉**：盈米路演风 — Source Han Serif CN 宋体、品牌蓝 `#00269A`、强调橙 `#FF5100`、柔光背景资产
- **版式**：12 个登记布局 Y01–Y12（封面 → 目录 → 子封面 → 图文/KPI/对比/三列/时间轴/奖项 → **自定义内页 Y12** → 封底）；优先 Y01–Y11，无法匹配时用 Y12 且**页边距必须守规范**。**页内排版只走 `layouts-yingmi.md`，不直接套 guizang layout**
- **交互**：键盘 ← → / 空格、滚轮、触屏左右滑、底部圆点、ESC 缩略图索引、Home / End（**仅此一层对齐 guizang**）

**不引入**：guizang 的 `layouts.md` / S01–S22 / 瑞士骨架进交付 HTML；杂志衬线+流体 WebGL、瑞士风 IKB/无圆角；且慢报告页 `#E3EFFE` 白卡片；且慢网页 PPT 灰底 `#F9FAFB` + PingFang。

## 与现有 skill 的分工

| Skill | 产出形态 | 何时用 |
|-------|----------|--------|
| `qieman-web-ppt-design` | 且慢品牌网页 PPT（`#1B88EE` / PingFang / Q01–Q12） | 且慢内部分享、绩效总结 |
| `qieman-report-design` | 720pt×405pt 财富报告导出 | 客户报告书、PDF/PPT 还原 |
| `qieman-report-swipe-design` | 报告视觉 + guizang 翻页 | 且慢报告现场演示 |
| **`yingmi-ppt-design`** | **盈米路演视觉 + guizang 翻页** | **盈米基金商务路演、公司介绍、发布会** |

> 且慢蓝 ≠ 盈米深蓝。本 skill 主色是 `#00269A`，不是 `#1B88EE`。

## 调用

```bash
npx openskills read yingmi-ppt-design
# 涉及对外收益/投顾宣传时追加：
npx openskills read qieman-financial-compliance-guidelines
```

---

## 何时使用

**合适：**
- 盈米基金 / 且慢上级集团视角的商务路演、公司介绍、品牌发布
- 战略汇报、高管演讲、行业峰会演示
- 「浏览器直接打开」的单文件 16:9 演讲 deck
- 用户给文档 / 大纲 / 旧 PPT，要求**盈米路演视觉**

**不合适：**
- 且慢产品内部分享 / 绩效网页 PPT → `qieman-web-ppt-design`
- 客户财富报告书（页眉页脚声明、720pt）→ `qieman-report-design`
- 原生可编辑 `.pptx` → `qieman-ppt-design`
- 大段多列表格、多人协作编辑 → 不适合静态 HTML

**触发词：**
- 盈米 PPT、盈米路演、yingmi deck、商务路演 HTML
- 公司介绍演示稿、盈米发布会幻灯片、横向翻页 + 盈米视觉

---

## 工作流

### Step 1 · 需求澄清（动手前必做）

用户已给完整大纲 + 素材时可跳过；否则一次对齐：

| # | 问题 | 目的 |
|---|------|------|
| 1 | **受众与场景？** 路演 / 峰会 / 对内战略 / 发布会 | 语气与合规强度 |
| 2 | **时长？** | 15min≈8–10 页，30min≈14–18 页，45min≈20–25 页 |
| 3 | **原始素材？** 文档 / 数据 / 旧 PPT / 图片 | 有则基于素材，无则搭叙事弧 |
| 4 | **必须出现的章节？** 公司简介 / 历程 / 奖项 / KPI | 决定版式路由 |
| 5 | **Logo / 背景资产是否齐全？** | 见 `themes-yingmi.md` 背景映射 |
| 6 | **硬约束？** 必须含的数据 / 禁止出现的表述 | 避免返工 |

#### 叙事弧（无大纲时）

```
钩子 Hook        → 1 页：封面（cover）
定调 Context     → 1 页：目录（toc）
主体 Core        → 若干章：每章子封面 + 1–3 内容页
  （穿插 timeline / awards）
收束 Closing     → 1 页：封底（closing）
```

建议保存为 `项目/ppt/大纲-v1.md`。

#### 图片约定

- 路径：`项目/XXX/ppt/images/`（与 `index.html` 同级）
- 命名：`{页号}-{语义}.{ext}`，如 `04-campus.jpg` / `07-award.png`
- 规格：宽 ≥ 1600px；内容图圆角 **40px**（见 themes）
- 背景资产：按页类型调用固定名（`bg-fengmian-01` 等），禁止自行改名

### Step 2 · 拷贝模板

```bash
mkdir -p "项目/XXX/ppt/images" "项目/XXX/ppt/assets"
cp "<SKILL_ROOT>/assets/template-yingmi.html" "项目/XXX/ppt/index.html"
cp -R "<SKILL_ROOT>/assets/logos" "<SKILL_ROOT>/assets/backgrounds" \
      "<SKILL_ROOT>/assets/screenshot-backgrounds" "项目/XXX/ppt/assets/"
```

模板内背景路径为 `assets/screenshot-backgrounds/style-a/bg-*.jpg`（优先）与 `assets/backgrounds/bg-*.svg`（兜底）。拷贝后保持相对路径不变。

拷贝后立即改掉：

| 位置 | 改为 |
|------|------|
| `<title>` | 实际 deck 标题 |
| `[必填]` 占位符 | 全部替换 |
| `:root` 变量 | 与 `themes-yingmi.md` 一致（`#00269A` / `#333333` / `#FF5100`） |

`grep "[必填]" index.html` 确认清零。

### Step 3 · 预检类名（最重要）

写任何 slide 之前，Read 模板 `<style>` 全文。`layouts-yingmi.md` 用到的类必须已在模板定义。

**模板是唯一类名来源** — 不发明新类；微调用 inline `style`。

#### 画布与安全区（对齐 themes）

```text
逻辑画布：16:9（实现为 100vw × 100vh 全屏页）
安全边距：左右 ≥ 82px 等价，上下 ≥ 68px 等价
内容不得贴边（全幅背景图除外）
```

底部分页圆点区域为导航安全区：正文/图片/caption 最低处不得进入底部 ~7vh。

#### 主题节奏

| `section` 类 / 背景 | 用途 | 背景资产 |
|---------------------|------|----------|
| `slide cover` | 封面 | `bg-fengmian-01` |
| `slide toc` / `slide page` | 目录、内容、时间轴、奖项 | `bg-page-01` |
| `slide section` | 子封面 / 章节分隔 | `bg-zifengmian-01` |
| `slide closing` | 封底 | `bg-fengdi-01` |

**硬规则：**
- 不能连续 3 页以上同主题背景（全 `bg-page-01` 超过 3 页须插入子封面）
- 多章 deck 每章开头必须有 `section-number-title-bottom-left`
- 封面与封底不可省略（完整路演至少含 cover + closing）

生成后：`grep 'data-layout=' index.html` 核对版式分布。

### Step 4 · 选版式填充

打开 **`references/layouts-yingmi.md`**（不是 guizang 的 `layouts.md`），按路由表选骨架，粘贴到 `<!-- SLIDES_HERE -->`。

**guizang vs 盈米（选版纪律）：** 交互壳可参考 guizang；**每一页 `data-layout` 必须是 Y01–Y12**。禁止把 guizang S 码 / 杂志·瑞士 HTML 骨架原样贴进 deck。若只是「看着像 guizang 某 layout」→ 映射到最近似 Y04–Y11，对不上再用 Y12（边距仍守规范）。

每个 `<section>` 必须写短码 `data-layout`（优先 `Y01`…`Y12`；长 ID 仅作别名）：

```html
<section class="slide page" data-layout="Y04">
```

| 短码 | 用途 | 背景类 |
|------|------|--------|
| Y01 | 封面：左文右视觉 | `cover` |
| Y02 | 目录 / 议程 | `toc` |
| Y03 | 章节子封面 | `section` |
| Y04 | 竖图 + 简介 + 3 KPI | `page` |
| Y05 | 两组观点 + 横图 | `page` |
| Y06 | 发展历程 4–5 段 | `page` |
| Y07 | 荣誉奖项 3–5 卡 | `page` |
| Y08 | 封底 THANKS 居中 | `closing` |
| Y09 | 无图 KPI 大字报 3–4 | `page` |
| Y10 | 左右对比 A vs B | `page` |
| Y11 | 三列原则 / 业务层 | `page` |
| Y12 | 自定义内页（兜底，边距必守） | `page` |

**自动选版**：严格按 `layouts-yingmi.md` §1（按内容形状）。无竖图大数字 → Y09；对比 → Y10；恰好三列 → Y11。Y01–Y11 均无法匹配且删减会伤结论 → **Y12**（须 `layout-custom` + `nav-safe-bottom`，左右继承 `--ymi-safe-x`）。**禁止**再造 Y13 / 未登记短码。

**版式多样性：**
- ≥10 页：建议覆盖 ≥ 6 种短码
- 禁止连续 3 页同一主体结构（如三连 Y04 / Y09 / Y12）

### Step 5 · 合规与自检

1. **先跑校验脚本**（必做）：
   ```bash
   node "<SKILL_ROOT>/scripts/validate-yingmi-deck.mjs" "项目/XXX/ppt/index.html"
   ```
2. 对照 `layouts-yingmi.md` **§15 P0 清单**与 `themes-yingmi.md` 输出校验
3. 对外宣传含收益/投顾表述时叠加合规 skill
4. 浏览器打开 `index.html` **逐页目视**（代码不能替代视觉验收）

**交互验收（与 guizang 一致）：**

| 操作 | 行为 |
|------|------|
| `←` `→` / 空格 / PageUp·Down | 翻页 |
| 滚轮 / 触屏左右滑 | 翻页 |
| 底部圆点 | 跳转 |
| **ESC** | 缩略图索引，点击跳转 |
| Home / End | 首尾页 |

### Step 6 · 预览与迭代

```bash
open "项目/XXX/ppt/index.html"
```

90% 调整通过 inline（字号 / gap / 图高）完成；**禁止**改品牌主色 hex、禁止换无衬线正文、禁止把圆角从 40px 改成瑞士直角风。

---

## 画布与交互规范

### 尺寸（对齐 guizang）

```css
#deck { position: fixed; height: 100vh; display: flex; }
.slide { width: 100vw; height: 100vh; flex: 0 0 100vw; }
/* JS: deck.style.width = total * 100 + 'vw' */
/* JS: deck.style.transform = `translateX(${-idx * 100}vw)` */
```

**禁止**本 skill 产出使用 `720pt × 405pt` + `fitDeck()`（那是 `qieman-report-design`）。

### 视觉（继承 themes-yingmi）

| Token | 值 | 用途 |
|-------|-----|------|
| 品牌蓝 | `#00269A` | 编号、时间轴、图表主色 |
| 正文色 | `#333333` | 标题与正文（禁止纯黑） |
| 强调橙 | `#FF5100` | 关键数据 / 结论，单页面积 ≤ 10% |
| 字体 | Source Han Serif CN | 中文与数字（降级见 themes） |
| 内容图圆角 | 40px | 禁止厚阴影 |
| 卡片圆角 | 28–40px | 白底轻投影 |

Logo：封面左上；目录/内容/时间轴/奖项右上；子封面用背景自带 Logo（勿再叠 img）；封底居中于主标题下。

### 动效建议（轻量，对齐 guizang 思路）

- 首期可用 CSS transition + 翻页；可选 Motion One（本地 `motion.min.js` + CDN 兜底）
- 每页一个语义配方即可（封面 cascade、数据 scale、时间轴序列），禁止全员同一 generic fade
- 可选 `B` 键低功耗：停动画、强制 reveal 静态终态（路演场地网络差时有用）

---

## 核心设计原则

> 违反任一条，「盈米路演感」会明显减弱。

1. **深蓝权威 + 暖橙数据** — `#00269A` 唯一品牌蓝；`#FF5100` 只点关键结论
2. **宋体即气质** — Source Han Serif CN，禁止用无衬线体系替换正文/标题去「现代化」
3. **柔光背景资产按名调用** — `bg-fengmian-01` / `bg-page-01` / `bg-zifengmian-01` / `bg-fengdi-01`
4. **结构优于装饰** — 靠字号对比与留白；禁止霓虹、赛博、重度玻璃拟态
5. **单页单结论** — 正文 > 220 字拆页；单页强调数据建议 3 个、最多 4 个
6. **登记版式纪律** — 只走 Y01–Y12（优先 Y01–Y11；兜底 Y12 且边距必守），模板类名必须存在；交付前跑 `validate-yingmi-deck.mjs`
7. **guizang 交互，盈米视觉** — 翻页壳可参考 guizang，视觉不得混入杂志风 / 瑞士风 / 且慢灰底

---

## 资源文件导览

```
yingmi-ppt-design/
├── SKILL.md
├── assets/
│   ├── template-yingmi.html      ← 种子（含 Y01–Y12 示例 + guizang 翻页/ESC）
│   ├── screenshot-backgrounds/style-a/  ← 官方 JPG 背景（优先）
│   ├── backgrounds/              ← SVG 兜底柔光背景
│   └── logos/                    ← yingmi-logo-regular.svg / white.svg
├── scripts/
│   └── validate-yingmi-deck.mjs  ← 登记版式 / 背景 / THANKS 校验
└── references/
    ├── themes-yingmi.md          ← 全局主题（色 / 字 / Logo / 背景）
    └── layouts-yingmi.md         ← Y01–Y12 + 内容形状选版 + HTML 骨架（含自定义内页边距）
```

**推荐阅读顺序：**
1. 本 `SKILL.md`
2. `themes-yingmi.md` → 锁色与字体
3. Read `assets/template-yingmi.html` `<style>` + 示例 `<section>`
4. `layouts-yingmi.md` → 按正式内容替换示例页
5. 生成后跑 P0 清单 + 浏览器交互验收

---

## 与 guizang-ppt-skill 的对照

| guizang 做法 | 盈米版映射 |
|--------------|------------|
| 翻页 / 键盘 / 圆点 / ESC | **直接对齐**（交互层） |
| `template.html` / `template-swiss.html` | `template-yingmi.html`（视觉与版式已换成盈米） |
| 风格 A/B 双轨 | **单轨**：盈米商务路演 |
| `layouts.md` 10 种 / S01–S22 | **不要原样使用** → 映射 `layouts-yingmi.md` 的 Y01–Y12；对不上用 Y12 |
| `themes.md` 多套预设 | `themes-yingmi.md` 单一品牌系统 |
| WebGL + Motion 重度动效 | 首期轻量 CSS / 可选 Motion；保留 guizang 导航 |
| 无金融品牌锁色 | **锁** `#00269A` / `#FF5100` / 宋体 / 背景资产名 |

> **交互抄 guizang，排版锁盈米。** 详见 `layouts-yingmi.md`「与 guizang 的边界」。

---

## Do's and Don'ts

### Do

- 用 `100vw×100vh` 横向翻页壳
- 严格继承 `themes-yingmi.md` 与 `layouts-yingmi.md`
- 封面左文右视觉、子封面大号章节数字、封底居中
- 交付前做键盘 / 滚轮 / 触屏 / ESC 验收

### Don't

- 不要用且慢 `#1B88EE` 或报告画布 `#E3EFFE` 冒充盈米
- 不要用瑞士直角无圆角、杂志 WebGL 流体当默认
- 不要把 guizang `layouts.md` / S01–S22 骨架直接写进盈米 HTML；不要自创第 13 种布局或改背景资产名；不要把 HTANKS 当封底文案；Y12 仅作兜底且须守 `--ymi-safe-x/y`
- 不要把强调橙铺满装饰；不要纯黑 `#000` 正文
- 不要输出 720pt 合并导出页当作本 skill 交付物

---

## 示例请求

```text
按 yingmi-ppt-design 做一份盈米基金公司介绍网页 PPT，约 12 页，含目录、发展历程和奖项，浏览器横向翻页。
```

```text
把这份路演大纲做成单文件 HTML deck，视觉按盈米商务路演（宋体 + #00269A），交互对齐 guizang 翻页。
```
