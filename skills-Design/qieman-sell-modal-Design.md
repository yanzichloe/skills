---
version: alpha
name: qieman-sell-retention-modal
summary: 且慢 App 卖出挽留底部弹窗 HTML 设计规范。
description: 用于生成且慢 App 内“卖出挽留 / 退出确认 / 持有陪伴 / 赎回前提示”等底部弹窗。页面尺寸基于 375 × 812px，弹窗自屏幕底部滑出、全宽贴底，高度自适应；不含关闭按钮与顶部拖拽条。视觉遵循 Qieman-UI-Design skills，以柔和渐变背景、居中标题、左对齐正文、轻量收益/风险提示、明确主次按钮为核心；强调专业、克制、可信，不做阻断式营销。
globs: "生成的界面/**/*.html"
alwaysApply: false

colors:
  brand-primary: "#1B88EE"
  brand-primary-hover: "#2F7BEC"
  brand-primary-soft: "#E7F3FF"
  brand-primary-pale: "#F3F9FF"
  ink-title: "#1F2D3D"
  ink-body: "#333333"
  ink-secondary: "#606060"
  ink-tertiary: "#999999"
  ink-disabled: "#CCCCCC"
  on-primary: "#FFFFFF"
  white: "#FFFFFF"
  page-mask: "rgba(15, 37, 64, 0.42)"
  card-subtle: "rgba(255, 255, 255, 0.72)"
  card-solid: "#FFFFFF"
  caution-red: "#FA440C"
  warning-orange: "#EA9500"
  warm-orange: "#F5A623"
  success-teal: "#07AD8F"
  blue-gradient-start: "#C7E3FF"
  blue-gradient-end: "#F0F6FF"
  yellow-gradient-start: "#FFF1D4"
  yellow-gradient-end: "#FEF4FC"
  purple-gradient-start: "#DFE1FF"
  purple-gradient-end: "#F1F2FB"
  red-gradient-start: "#FFEBE1"
  red-gradient-end: "#FEF4FC"
  orange-gradient-start: "#FFE5D2"
  orange-gradient-end: "#FFF6F0"
  divider-soft: "rgba(27, 136, 238, 0.10)"
  transparent: "transparent"

typography:
  title:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 24pt
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: 0
    textAlign: center
  body:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 15pt
    fontWeight: 400
    lineHeight: 1.48
    letterSpacing: 0
    textAlign: left
  body-strong:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 15pt
    fontWeight: 600
    lineHeight: 1.42
    letterSpacing: 0
  helper:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 11pt
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
    textAlign: left
  helper-strong:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 11pt
    fontWeight: 600
    lineHeight: 1.42
    letterSpacing: 0
  button-primary:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 16pt
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  button-secondary:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 15pt
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0
  metric:
    fontFamily: "DIN Alternate, MiSans, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: 22pt
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.15pt
  micro:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 10pt
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  none: 0px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 32px
  sheet-top: 24px
  pill: 999px
  full: 999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  modal-padding-x: 24px
  modal-padding-top: 28px
  modal-padding-bottom: 20px
  content-gap: 16px
  button-gap: 10px

canvas:
  appWidth: 375px
  appHeight: 812px
  modalPlacement: bottom
  modalWidth: 100%
  modalMaxHeight: "min(88vh, 680px)"
  modalHeight: auto
  safeBottom: "calc(20px + env(safe-area-inset-bottom, 0px))"
  sheetRadiusTop: "{rounded.xl}"

backgroundThemes:
  blue:
    name: 稳健陪伴 / 专业建议 / 长期持有
    gradient: "linear-gradient(180deg, {colors.blue-gradient-start} 0%, {colors.blue-gradient-end} 100%)"
    start: "{colors.blue-gradient-start}"
    end: "{colors.blue-gradient-end}"
    accent: "{colors.brand-primary}"
  yellow:
    name: 权益提醒 / 服务价值 / 礼遇提示
    gradient: "linear-gradient(180deg, {colors.yellow-gradient-start} 0%, {colors.yellow-gradient-end} 100%)"
    start: "{colors.yellow-gradient-start}"
    end: "{colors.yellow-gradient-end}"
    accent: "{colors.warning-orange}"
  purple:
    name: 情绪安抚 / 波动陪伴 / 智能分析
    gradient: "linear-gradient(180deg, {colors.purple-gradient-start} 0%, {colors.purple-gradient-end} 100%)"
    start: "{colors.purple-gradient-start}"
    end: "{colors.purple-gradient-end}"
    accent: "#6D72E8"
  red:
    name: 回撤提醒 / 亏损确认 / 风险提示
    gradient: "linear-gradient(180deg, {colors.red-gradient-start} 0%, {colors.red-gradient-end} 100%)"
    start: "{colors.red-gradient-start}"
    end: "{colors.red-gradient-end}"
    accent: "{colors.caution-red}"
  orange:
    name: 费用提示 / 赎回影响 / 机会成本
    gradient: "linear-gradient(180deg, {colors.orange-gradient-start} 0%, {colors.orange-gradient-end} 100%)"
    start: "{colors.orange-gradient-start}"
    end: "{colors.orange-gradient-end}"
    accent: "{colors.warm-orange}"

shadows:
  none: "none"
  modal: "0 -8px 32px rgba(27, 78, 140, 0.12)"
  object: "0 12px 32px rgba(27, 136, 238, 0.14)"

components:
  app-shell:
    width: "{canvas.appWidth}"
    minHeight: "{canvas.appHeight}"
    backgroundColor: "#F5F7FA"
    position: relative
    overflow: hidden
  modal-mask:
    position: fixed
    inset: 0
    backgroundColor: "{colors.page-mask}"
    display: flex
    alignItems: flex-end
    justifyContent: center
  retention-modal:
    width: "{canvas.modalWidth}"
    maxHeight: "{canvas.modalMaxHeight}"
    height: auto
    overflow: auto
    background: "{backgroundThemes.blue.gradient}"
    rounded: "{canvas.sheetRadiusTop} {canvas.sheetRadiusTop} 0 0"
    padding: "{spacing.modal-padding-top} {spacing.modal-padding-x} {canvas.safeBottom}"
    shadow: "{shadows.modal}"
  hero-visual:
    width: 100%
    height: 118px
    marginBottom: "{spacing.md}"
    objectFit: contain
    shadow: "{shadows.object}"
  modal-title:
    typography: "{typography.title}"
    textColor: "{colors.ink-title}"
    textAlign: center
    marginBottom: "{spacing.lg}"
  modal-body:
    typography: "{typography.body}"
    textColor: "{colors.ink-body}"
    textAlign: left
    marginBottom: "{spacing.content-gap}"
  insight-card:
    backgroundColor: "{colors.card-subtle}"
    border: none
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    marginTop: "{spacing.md}"
  evidence-row:
    display: flex
    alignItems: center
    gap: "{spacing.sm}"
    padding: "10px 0"
    border: none
  metric-card:
    backgroundColor: "rgba(255, 255, 255, 0.72)"
    border: none
    rounded: "{rounded.lg}"
    padding: "14px 12px"
    textAlign: center
  primary-button:
    height: 48px
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-primary}"
    rounded: "{rounded.pill}"
    border: none
    width: 100%
  secondary-button:
    height: 44px
    backgroundColor: "{colors.transparent}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.button-secondary}"
    rounded: "{rounded.pill}"
    border: none
    width: 100%
  helper-note:
    typography: "{typography.helper}"
    textColor: "{colors.ink-tertiary}"
    textAlign: left
    marginTop: "{spacing.sm}"
---

# 且慢卖出挽留弹窗 HTML Skill

## Overview

且慢卖出挽留弹窗是一套用于 App 内卖出、赎回、退出策略、暂停计划等关键动作前的 **轻量确认与理性陪伴弹窗**。它的目标不是强行阻止用户卖出，而是在用户做出不可逆或高影响操作前，补充必要信息、解释卖出影响、提供更稳妥的替代方案，并保留清晰的继续卖出路径。

视觉核心是：**375 × 812px App 画布、底部全宽弹窗、顶部圆角 24px、高度自适应、24pt 居中标题、15pt 左对齐正文、11pt 左对齐辅助说明**。弹窗要像一次专业投顾提醒，语气克制、可信、温和，不做强营销、不制造焦虑。

**Key Characteristics:**
- 页面尺寸基于 `375 × 812px` 进行设计。
- 弹窗固定为**底部弹窗（Bottom Sheet）**：自屏幕底部滑出，全宽贴底，仅顶部两角圆角 `24px`。
- 弹窗高度自适应，内容不固定死高；内容较多时允许弹窗内部滚动，最大高度不超过 `min(88vh, 680px)`。
- 底部内边距需叠加 `env(safe-area-inset-bottom)` 以适配 iPhone 安全区。
- 背景色根据主题从 5 组渐变中随机或语义选择，方向统一为自上而下 `180deg`。
- 标题**固定居中排版**，字号 `24pt`；正文**固定左对齐**，字号 `15pt`；辅助说明**固定左对齐**，字号 `11pt`。
- 必须调用并继承 `Qieman-UI-Design skills` 的基础品牌规范、字体、按钮、间距和可访问性规则。
- 主按钮负责承接挽留动作；次按钮必须清晰提供「继续卖出 / 仍要卖出」路径。
- 底部弹窗**不出现关闭按钮（×）**，也**不出现顶部拖拽条 / Home 指示条**（`sheet-handle`）；用户仅通过主次按钮完成选择。
- 禁止通过隐藏次按钮、弱化继续卖出路径、制造恐慌文案来达成挽留。

## When to Use

使用本 Skill 当用户提出以下需求：

- 生成且慢 UI 弹窗。
- 设计 App 弹窗。
- 设计卖出挽留、赎回确认、退出策略提醒、卖出前风险提示。
- 生成基于 `375 × 812px` 的 App 底部弹窗 HTML。
- 需要底部全宽弹窗、高度自适应、顶部圆角 24px。
- 需要根据主题随机配置蓝 / 黄 / 紫 / 红 / 橙渐变背景。
- 需要结合且慢投顾、基金、策略、持有陪伴、市场波动等场景进行卖出前提示。

不要用于：

- 普通营销 H5 首屏。
- PC Web 弹窗。
- 纯数据看板。
- 需要复杂交易流程、多步骤表单或全屏确认页的场景。
- 强运营活动弹窗，例如抽奖、领券、积分任务等。

## Dependencies

本 Skill 必须优先继承：

```md
Qieman-UI-Design skills
```

继承内容包括：

- 且慢品牌蓝 `#1B88EE`。
- App 字体栈：`PingFang SC / Microsoft YaHei / system-ui`。
- CTA 主按钮蓝色规范。
- 卡片圆角、轻量留白、互联网金融简洁风格。
- 禁止纯黑、避免低幼、避免过度营销。

当本 Skill 与通用 UI Skill 冲突时，以本 Skill 的弹窗尺寸、间距和字号规则为准。

## Colors

### Brand & Action

- **Brand Primary** (`{colors.brand-primary}` — #1B88EE)：主按钮、关键行动、核心强调。
- **Brand Hover / Pressed** (`{colors.brand-primary-hover}` — #2F7BEC)：按钮按压态或高亮状态。
- **Brand Soft** (`{colors.brand-primary-soft}` — #E7F3FF)：轻量标签、提示底色。
- **On Primary** (`{colors.on-primary}` — #FFFFFF)：主按钮文字。

### Text

- **Title Ink** (`{colors.ink-title}` — #1F2D3D)：标题文字。
- **Body Ink** (`{colors.ink-body}` — #333333)：正文。
- **Secondary Ink** (`{colors.ink-secondary}` — #606060)：次按钮、次级信息。
- **Tertiary Ink** (`{colors.ink-tertiary}` — #999999)：辅助说明、风险提示。
- **Disabled Ink** (`{colors.ink-disabled}` — #CCCCCC)：禁用态，不用于正文。

### Modal Background Themes

背景色根据主题随机配置；若用户没有指定主题，可在 5 组中随机选择，但需保证与文案语义相符。所有渐变方向统一为：

```css
linear-gradient(180deg, START 0%, END 100%)
```

| Theme | Start | End | 推荐场景 |
|---|---:|---:|---|
| Blue | `#C7E3FF` | `#F0F6FF` | 稳健陪伴、长期持有、专业建议 |
| Yellow | `#FFF1D4` | `#FEF4FC` | 权益提醒、服务价值、机会说明 |
| Purple | `#DFE1FF` | `#F1F2FB` | 情绪安抚、智能分析、波动陪伴 |
| Red | `#FFEBE1` | `#FEF4FC` | 回撤提醒、亏损确认、风险提示 |
| Orange | `#FFE5D2` | `#FFF6F0` | 费用影响、赎回成本、机会成本 |

### Theme Selection Rules

- 用户因为短期波动想卖出：优先使用 Purple 或 Blue。
- 用户当前亏损或回撤较大：优先使用 Red，但画面要柔和，不要恐吓。
- 用户卖出会产生费用、错过持有权益或影响计划：优先使用 Orange 或 Yellow。
- 用户处于长期策略或投顾组合：优先使用 Blue。
- 不确定语义时，默认使用 Blue。

### Color Don'ts

- 不要使用大面积绿色表达金融收益；且慢金融场景中绿色容易与下跌、亏损产生歧义。
- 不要使用高饱和红色做整屏警告。
- 不要在渐变背景外再叠复杂装饰渐变。
- 不要给白色信息卡加灰色硬描边；通过透明白、间距和底色区分层次。

## Typography

### Font Family

```css
font-family: PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif;
```

数字可使用：

```css
font-family: DIN Alternate, MiSans, PingFang SC, Microsoft YaHei, system-ui, sans-serif;
```

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| `{typography.title}` | 24pt | 600 | 1.22 | 弹窗标题，**固定居中** |
| `{typography.body}` | 15pt | 400 | 1.48 | 主正文、解释说明，**固定左对齐** |
| `{typography.body-strong}` | 15pt | 600 | 1.42 | 正文重点词、金额、结论 |
| `{typography.helper}` | 11pt | 400 | 1.45 | 辅助说明、风险提示、来源说明，**固定左对齐** |
| `{typography.helper-strong}` | 11pt | 600 | 1.42 | 辅助说明重点 |
| `{typography.button-primary}` | 16pt | 600 | 1.0 | 主按钮文字 |
| `{typography.button-secondary}` | 15pt | 400 | 1.0 | 次按钮文字 |
| `{typography.metric}` | 22pt | 600 | 1.0 | 金额、收益率、持有天数等核心数字 |

### Typography Principles

- 标题**固定居中排版**，且只表达一个核心结论。
- 标题必须使用 `text-align: center`，禁止左对齐、右对齐。
- 正文必须使用 `text-align: left`，禁止居中或右对齐。
- 辅助说明必须使用 `text-align: left`，禁止居中或右对齐。
- 标题优先 1 行，最多 2 行；超过 2 行必须压缩文案。
- 正文每行不超过 16 个中文字符的阅读密度，避免一大段铺满。
- 辅助说明必须比正文弱，不抢主信息。
- 数字可以略大，但不要做成营销大字报。
- 不要使用 700 或 800 的粗字重；金融场景保持 600 以内更可信。

## Layout

### Canvas

所有设计基于 App 画布：

```css
.app-shell {
  width: 375px;
  min-height: 812px;
  position: relative;
  overflow: hidden;
}
```

### Modal Placement（底部弹窗）

弹窗**固定为底部弹窗**，自屏幕底部滑出，全宽贴底：

```css
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(15, 37, 64, 0.42);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.retention-modal {
  width: 100%;
  max-height: min(88vh, 680px);
  height: auto;
  overflow: auto;
  border-radius: 24px 24px 0 0;
  padding: 28px 24px calc(20px + env(safe-area-inset-bottom, 0px));
  box-shadow: 0 -8px 32px rgba(27, 78, 140, 0.12);
}
```

解释：

- 弹窗自底部对齐（`align-items: flex-end`），不使用顶部间距或居中悬浮。
- 宽度全宽 `100%`，左右无外边距；内容区内边距左右 `24px`。
- 仅顶部两角圆角 `24px`，底部两角为 `0` 贴边。
- 弹窗高度根据内容自适应。
- 若内容过长，弹窗内部滚动，而不是挤压按钮或溢出屏幕。
- 底部内边距叠加 `safe-area-inset-bottom`，适配 iPhone 底部安全区。

### Modal Internal Structure

推荐结构：

```html
<div class="app-shell">
  <div class="modal-mask">
    <section class="retention-modal theme-blue">
      <div class="hero-visual"></div>
      <h1 class="modal-title">现在卖出，可能错过后续修复</h1>
      <p class="modal-body">市场短期波动较大，建议先看看账户诊断和持有建议，再决定是否卖出。</p>
      <div class="insight-card"></div>
      <div class="actions">
        <button class="primary-button">查看持有建议</button>
        <button class="secondary-button">仍要卖出</button>
      </div>
      <p class="helper-note">投资有风险，历史表现不代表未来。</p>
    </section>
  </div>
</div>
```

### Spacing Rhythm

- 弹窗内边距：顶部 `28px`，左右 `24px`，底部 `20px + safe-area`。
- 视觉插图与标题间距：`16px`。
- 标题与正文间距：`20px`。
- 正文与信息卡间距：`16px`。
- 信息卡与按钮区间距：`20px`。
- 主按钮与次按钮间距：`10px`。
- 辅助说明与按钮区间距：`8px`。

### Modal Height Control

内容高度优先级：

1. 标题和行动按钮必须完整展示。
2. 正文最多 3 行。
3. 信息卡最多 3 条。
4. 辅助说明最多 2 行。
5. 插图高度可从 118px 压缩到 88px。
6. 内容仍超出时，信息卡区域滚动，不压缩按钮。

## Components

### `modal-mask`

半透明遮罩层，用于让用户意识到当前处于关键交易确认节点。

- 背景：`rgba(15, 37, 64, 0.42)`。
- 布局：`align-items: flex-end`，弹窗贴底。
- 不使用纯黑遮罩。
- 不要遮罩过重，避免压迫感。

### `retention-modal`

核心底部弹窗容器。

- 宽度：`100%`（全宽贴底）。
- 圆角：顶部 `24px 24px 0 0`，底部 `0`。
- 背景：主题渐变。
- 阴影：`0 -8px 32px rgba(27, 78, 140, 0.12)`（向上投射）。
- 高度：自适应。
- 最大高度：`min(88vh, 680px)`。
- **禁止元素**：不得出现关闭按钮（×）、顶部拖拽条 / Home 指示条（`sheet-handle`）。

### `hero-visual`

顶部视觉区，建议使用轻量金融插图、账户卡片、波动曲线、投顾陪伴元素。

- 高度：默认 `118px`。
- 内容多时可压缩到 `88px`。
- 不要出现复杂文字。
- 不要使用低幼 IP。
- 不要堆叠太多金融卡片，最多 2–3 个视觉元素。
- 可以使用透明玻璃卡片、折线图、持有计划图标、日历/目标图标。

### `modal-title`

弹窗核心观点。

- 必须使用 `{typography.title}`。
- **固定居中排版**：`text-align: center`，禁止左对齐、右对齐。
- 应表达一个明确判断，例如：
  - `现在卖出，可能错过后续修复`
  - `市场波动时，更适合先看诊断`
  - `卖出前，先确认这 2 个影响`
  - `这笔卖出可能影响你的目标计划`

样式：

```css
.modal-title {
  margin: 0 0 20px;
  color: #1F2D3D;
  font-size: 24pt;
  font-weight: 600;
  line-height: 1.22;
  text-align: center;
}
```

### `modal-body`

解释标题背后的原因。

- 使用 `{typography.body}`。
- **固定左对齐**：`text-align: left`，禁止居中或右对齐。
- 建议 1–3 行。
- 避免空泛劝说，必须有具体原因：市场波动、持有期限、费用影响、资产配置偏离、目标计划影响。

样式：

```css
.modal-body {
  margin: 0;
  color: #333333;
  font-size: 15pt;
  line-height: 1.48;
  text-align: left;
}
```

### `insight-card`

承载挽留证据或替代方案。

适合内容：

- 当前策略仍在目标区间内。
- 持有时间较短，短期波动不代表长期结果。
- 卖出可能产生费用或影响计划连续性。
- 可先选择调仓、降低金额、暂停定投、查看投顾建议。

样式：

```css
.insight-card {
  background: rgba(255,255,255,.72);
  border: none;
  border-radius: 18px;
  padding: 16px;
}
```

### `evidence-row`

信息卡内的条目行。

- 每行由图标、标题、说明组成。
- 最多 3 行。
- 不使用灰色描边分割线。
- 可用 `gap`、淡底色块或微弱蓝色透明线区分。

推荐文案结构：

```text
市场波动：近 1 个月波动放大，短期卖出可能放大损失
持有计划：当前配置仍匹配你的稳健目标
替代方案：可先查看调仓建议，再决定是否卖出
```

### `metric-card`

用于显示一个关键数据。

- 适合展示：持有天数、累计收益、卖出费用、目标完成度、回撤区间。
- 数字使用 `{typography.metric}`。
- 卡片无描边。
- 不要超过 2 个并排指标。

### `primary-button`

主行动按钮，用于承接理性挽留路径。

推荐按钮文案：

- `查看持有建议`
- `先看账户诊断`
- `看看调仓方案`
- `继续持有并提醒我`
- `联系顾问确认`

样式：

```css
.primary-button {
  height: 48px;
  border-radius: 999px;
  background: #1B88EE;
  color: #FFFFFF;
  font-size: 16pt;
  font-weight: 600;
  border: none;
}
```

### `secondary-button`

次行动按钮，用于保留用户原始意图。

推荐按钮文案：

- `仍要卖出`
- `继续卖出`
- `确认卖出`
- `暂不查看，继续操作`

规则：

- 必须清晰可见。
- 不得隐藏在角落。
- 不得使用极低对比度。
- 不得写成含糊文案，例如「不了」或「跳过」。
- 不得比主按钮更强，但必须可点击、可理解。

### `helper-note`

辅助说明和风险提示。

- 使用 `11pt`。
- **固定左对齐**：`text-align: left`，禁止居中或右对齐。
- 文案要短，最多 2 行。
- 适合放：历史业绩不代表未来、基金有风险、投顾建议仅供参考等。

样式：

```css
.helper-note {
  margin: 8px 0 0;
  color: #999999;
  font-size: 11pt;
  line-height: 1.45;
  text-align: left;
}
```

## Content Strategy

### 信息优先级

卖出挽留弹窗的内容排序应遵循：

1. 用户为什么要停一下。
2. 卖出可能带来的影响。
3. 有什么更稳妥的替代方案。
4. 用户仍然可以继续卖出。

### 推荐文案公式

```text
标题：现在卖出，可能【具体影响】
正文：结合你的【账户 / 策略 / 持有时间 / 市场环境】，建议先【查看建议 / 确认影响】。
证据：最多 2–3 条影响或建议。
主按钮：查看建议 / 看看方案
次按钮：仍要卖出
```

### 场景文案示例

#### 短期波动卖出

```text
标题：市场波动时，先别急着卖出
正文：近阶段市场波动放大，短期卖出可能把浮动亏损变成实际亏损。建议先看看账户诊断，再做决定。
主按钮：先看账户诊断
次按钮：仍要卖出
```

#### 亏损状态卖出

```text
标题：现在卖出，可能锁定亏损
正文：当前策略仍处于正常波动区间，若不是急需用钱，可以先查看持有建议和调仓方案。
主按钮：查看持有建议
次按钮：继续卖出
```

#### 费用影响

```text
标题：卖出前，先确认费用影响
正文：本次卖出可能产生手续费，也会影响后续持有计划。建议确认成本后再继续操作。
主按钮：查看费用明细
次按钮：确认卖出
```

#### 目标计划影响

```text
标题：这笔卖出可能影响目标进度
正文：当前账户与长期目标仍有关联，卖出后可能降低目标达成概率。建议先看看调整方案。
主按钮：看看调整方案
次按钮：仍要卖出
```

#### 顾问陪伴

```text
标题：需要顾问帮你再看一眼吗
正文：如果是因为市场波动想卖出，顾问可以结合你的账户情况，给出更具体的持有或调整建议。
主按钮：联系顾问确认
次按钮：继续卖出
```

## Interaction Rules

### Button Order

默认按钮顺序：

1. 主按钮：挽留 / 建议 / 诊断路径。
2. 次按钮：继续卖出路径。

主按钮视觉更强，但不能让次按钮难以识别。

### Dismiss Behavior

弹窗不提供关闭按钮或拖拽条，用户通过按钮明确选择：

- 点击次按钮：进入原卖出流程。
- 点击主按钮：进入诊断、建议、调仓或顾问服务。

### Pressed State

按钮按压态统一：

```css
button:active {
  transform: scale(0.98);
}
```

不要使用复杂动效。底部弹窗出现时使用自底向上滑入 + 透明度：

```css
@keyframes sheetIn {
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
}

.retention-modal {
  animation: sheetIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}
```

动画时长控制在 `240–320ms`。

## Visual Direction

### Good Visuals

可以使用：

- 折线图玻璃卡片。
- 账户诊断小卡片。
- 投顾建议图标。
- 目标进度小图形。
- 柔和金融数据卡。
- 抽象波动曲线。
- 小船、灯塔、指南针等“陪伴和方向”隐喻，但要简洁。

### Bad Visuals

避免使用：

- 夸张金币、红包、收益爆炸图。
- 过度营销的人物大表情。
- 低幼 IP 或玩具感插画。
- 大面积绿色涨跌图。
- 恐吓式红色警告画面。
- 复杂背景装饰，导致正文难读。

## HTML Implementation Template

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>且慢卖出挽留弹窗</title>
  <style>
    :root {
      --brand-primary: #1B88EE;
      --ink-title: #1F2D3D;
      --ink-body: #333333;
      --ink-secondary: #606060;
      --ink-tertiary: #999999;
      --theme-start: #C7E3FF;
      --theme-end: #F0F6FF;
      --safe-bottom: env(safe-area-inset-bottom, 0px);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif;
      background: #EEF3F8;
      color: var(--ink-body);
    }

    .app-shell {
      width: 375px;
      min-height: 812px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      background: #F6F8FB;
    }

    .modal-mask {
      position: absolute;
      inset: 0;
      background: rgba(15, 37, 64, 0.42);
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .retention-modal {
      position: relative;
      width: 100%;
      max-height: min(88vh, 680px);
      overflow: auto;
      border-radius: 24px 24px 0 0;
      padding: 28px 24px calc(20px + var(--safe-bottom));
      background: linear-gradient(180deg, var(--theme-start) 0%, var(--theme-end) 100%);
      box-shadow: 0 -8px 32px rgba(27, 78, 140, 0.12);
      animation: sheetIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
      -webkit-overflow-scrolling: touch;
    }

    .hero-visual {
      height: 118px;
      margin: 6px 0 16px;
      border-radius: 22px;
      background: rgba(255,255,255,.38);
    }

    .modal-title {
      margin: 0 0 20px;
      color: var(--ink-title);
      font-size: 24pt;
      font-weight: 600;
      line-height: 1.22;
      text-align: center;
    }

    .modal-body {
      margin: 0;
      color: var(--ink-body);
      font-size: 15pt;
      line-height: 1.48;
      text-align: left;
    }

    .insight-card {
      margin-top: 16px;
      padding: 16px;
      border: none;
      border-radius: 18px;
      background: rgba(255,255,255,.72);
    }

    .actions {
      margin-top: 20px;
      display: grid;
      gap: 10px;
    }

    .primary-button,
    .secondary-button {
      width: 100%;
      border: none;
      border-radius: 999px;
      transition: transform .12s ease;
    }

    .primary-button {
      height: 48px;
      background: var(--brand-primary);
      color: #FFFFFF;
      font-size: 16pt;
      font-weight: 600;
    }

    .secondary-button {
      height: 44px;
      background: transparent;
      color: var(--ink-secondary);
      font-size: 15pt;
      font-weight: 400;
    }

    .helper-note {
      margin: 8px 0 0;
      color: var(--ink-tertiary);
      font-size: 11pt;
      line-height: 1.45;
      text-align: left;
    }

    button:active { transform: scale(.98); }

    @keyframes sheetIn {
      from { opacity: 0; transform: translateY(100%); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <main class="app-shell">
    <div class="modal-mask">
      <section class="retention-modal" role="dialog" aria-modal="true" aria-labelledby="retention-title">
        <div class="hero-visual" aria-hidden="true"></div>
        <h1 class="modal-title" id="retention-title">市场波动时，先别急着卖出</h1>
        <p class="modal-body">近阶段市场波动放大，短期卖出可能把浮动亏损变成实际亏损。建议先看看账户诊断，再做决定。</p>
        <div class="insight-card">
          <p class="helper-note">当前策略仍处于正常波动区间，历史表现不代表未来。</p>
        </div>
        <div class="actions">
          <button class="primary-button">先看账户诊断</button>
          <button class="secondary-button">仍要卖出</button>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

## Do's and Don'ts

### Do

- 使用 `375 × 812px` 作为 App 设计基准。
- 固定为底部弹窗：全宽贴底、顶部圆角 `24px`、自底滑入。
- 弹窗高度自适应，内容超出时内部滚动，最大高度 `min(88vh, 680px)`。
- 使用 5 组主题渐变之一，方向统一自上而下。
- 标题使用 `24pt` 并**固定居中**（`text-align: center`）。
- 正文使用 `15pt` 并**固定左对齐**（`text-align: left`），辅助说明使用 `11pt` 并**固定左对齐**。
- 主按钮使用品牌蓝，承接“查看建议 / 账户诊断 / 调仓方案”。
- 保留清晰的「仍要卖出」路径。
- 用真实影响解释挽留，不要只写情绪化劝阻。
- 将金融图形做轻、做少、做清楚。

### Don't

- 不要隐藏或弱化继续卖出路径。
- 不要把弹窗做成居中悬浮卡片或强营销活动卡。
- 不要使用恐吓式文案，例如“现在卖出一定会亏”。
- 不要承诺收益或暗示保本。
- 不要使用大面积绿色。
- 不要在弹窗卡片上添加灰色硬描边。
- 不要添加关闭按钮（×）或顶部拖拽条 / Home 指示条。
- 不要把标题左对齐。
- 不要把正文居中或右对齐。
- 不要把辅助说明居中或右对齐。
- 不要把标题写得过长。
- 不要塞入超过 3 条证据说明。
- 不要出现复杂表格、完整走势图或密集数据。
- 不要使用纯黑遮罩或高压迫暗色背景。

## Accessibility

- 弹窗容器使用 `role="dialog"` 和 `aria-modal="true"`。
- 标题使用 `aria-labelledby` 关联。
- 主按钮和次按钮点击区域高度不低于 `44px`。
- 文本颜色对比度要足够，尤其是在浅黄、浅紫渐变背景上。
- 不要仅靠颜色表达风险或收益，需要配合文字说明。

## Responsive Behavior

虽然基准为 `375 × 812px`，但 HTML 生成时应允许轻微适配：

```css
.app-shell {
  width: min(100vw, 375px);
  min-height: 812px;
}
```

小屏规则：

- 宽度小于 360px 时，内容区内边距左右可降为 `20px`。
- 标题保持 24pt，若溢出可降为 22pt。
- 插图高度优先压缩。
- 按钮高度不得低于 44px。

高屏规则：

- 不要把弹窗无限拉高，仍受 `min(88vh, 680px)` 约束。
- 信息卡可以增加留白，但主结构不变。
- 底部仍贴边对齐，不改为居中弹窗。

## Generation Workflow

1. 判断场景：波动、亏损、费用、目标影响、顾问陪伴。
2. 选择主题渐变：Blue / Yellow / Purple / Red / Orange。
3. 生成一个**固定居中**的 24pt 标题，表达核心提醒。
4. 生成 1–3 行 15pt **左对齐**正文，解释具体影响。
5. 生成最多 3 条证据或替代方案。
6. 设置主按钮，承接更理性的下一步。
7. 设置次按钮，保留继续卖出路径。
8. 加入 11pt **左对齐**风险提示或辅助说明。
9. 检查尺寸：375 × 812、底部全宽、顶部圆角 24px、自适应高度、无关闭按钮与拖拽条。
10. 检查是否继承 Qieman-UI-Design skills。

## Quality Checklist

生成完成后逐项检查：

- [ ] 页面尺寸是否基于 `375 × 812px`。
- [ ] 弹窗是否为底部弹窗（全宽贴底、`align-items: flex-end`）。
- [ ] 弹窗顶部圆角是否为 `24px`，底部是否为 `0`。
- [ ] 是否**未出现**关闭按钮和顶部拖拽条（`sheet-handle`）。
- [ ] 弹窗是否高度自适应，最大高度不超过 `min(88vh, 680px)`。
- [ ] 渐变方向是否为自上而下。
- [ ] 是否使用 5 组指定渐变色之一。
- [ ] 标题是否为 `24pt` 且**固定居中**（`text-align: center`，非左对齐）。
- [ ] 正文是否为 `15pt` 且**固定左对齐**（`text-align: left`）。
- [ ] 辅助说明是否为 `11pt` 且**固定左对齐**（`text-align: left`）。
- [ ] 主按钮是否使用且慢品牌蓝。
- [ ] 是否保留清晰的「仍要卖出」按钮。
- [ ] 是否避免收益承诺和恐吓式文案。
- [ ] 是否避免大面积绿色。
- [ ] 是否避免灰色硬描边和复杂装饰。
- [ ] 是否符合 Qieman-UI-Design skills 的基础规范。

## Iteration Guide

1. 先固定弹窗骨架，再调整文案和主题色。
2. 主题色只在 5 组渐变中选择，不额外发明新渐变。
3. 按钮文案先区分主次，再微调语气。
4. 证据卡优先减少信息，而不是增加分割线。
5. 用户反馈“太营销”时，减少插图和夸张数字，强化解释和选择权。
6. 用户反馈“没有挽留感”时，补充具体影响和替代方案，而不是加重视觉。
7. 用户反馈“太高”时，优先压缩插图高度和证据条数，不压缩按钮。
8. 用户反馈“像阻断”时，提升次按钮可见性，并把文案改成尊重用户选择。

## Known Gaps

- 本 Skill 不定义完整交易链路，只定义卖出前弹窗。
- 本 Skill 不处理交易合规条款全文展示；如需展示长条款，应跳转二级页面或底部弹层。
- 本 Skill 不定义真实投顾建议算法，仅定义建议内容的视觉与文案呈现方式。
- 本 Skill 不适用于 PC、H5 长页面或全屏交易确认页。
