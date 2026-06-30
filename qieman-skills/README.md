# qieman skills

且慢设计 skill 集合。官方约定：**文件夹名 = `SKILL.md` 的 `name` 字段**；完整规范均内嵌于各目录 `SKILL.md`。

## 目录

| 文件夹 | `name` | 层级 | 完整规范 |
|--------|--------|------|----------|
| `qieman-design-ui` | `qieman-design-ui` | L0 | `SKILL.md` |
| —（L1 扩展） | `spec-id: qieman-sell-popup-design` | L1 | `qieman-design-ui/references/qieman-sell-popup-design.md` |
| `qieman-design-h5` | `qieman-design-h5` | L2 | `SKILL.md` |
| `qieman-design-vip` | `qieman-design-vip` | L2 | `SKILL.md` |
| `qieman-design-report` | `qieman-design-report` | L2 | `SKILL.md` |
| `qieman-design-pdf` | `qieman-design-pdf` | L2 | `SKILL.md` |
| `qieman-design-ppt` | `qieman-design-ppt` | L2 | `SKILL.md` |
| `qieman-design-data` | `qieman-design-data` | L2 | `SKILL.md` |

分层说明见 `qieman-design-ui/SKILL.md` → **Skill Layering**。

## 统一 `SKILL.md` 布局

每个 skill 入口文件采用相同结构：

```markdown
---
version: alpha
name: <与文件夹同名>
title: <展示标题>
layer: L0 | L2
license: Complete terms in LICENSE.txt
description: >-
  ...
extends: qieman-design-ui   # L2 必填；L0 省略
---

# <title>

| 项 | 说明 |
|---|---|
| **Skill ID** | `<name>` |
| **层级** | … |
| **完整规范** | 本文件 `SKILL.md` |
| **L1 扩展** | …（仅 L0） |
| **前置依赖** | L0 `qieman-design-ui`（仅 L2） |

## 调用

```bash
npx openskills read <name>
```

---

## Overview / 概述
（正文规范…）
```

L1 扩展文件（`references/qieman-sell-popup-design.md`）沿用相同 frontmatter 字段，入口表格使用 **Spec ID** 与 **前置依赖** 指向 L0 `SKILL.md`。

## 调用示例

```bash
npx openskills read qieman-design-ui
npx openskills read qieman-design-h5
npx openskills read qieman-design-report
```

Cursor 报告幻灯片入口：`.cursor/skills/qieman-report-ppt/SKILL.md`（`name: qieman-report-ppt`）。
