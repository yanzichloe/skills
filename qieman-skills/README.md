# qieman skills

> **包更新日期**：2026-06-30（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）

> **包更新日期**：2026-06-30（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）

> **包更新日期**：2026-06-30（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）

> **包更新日期**：2026-06-30（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）

且慢设计 skill 集合。官方约定：**文件夹名 = `SKILL.md` 的 `name` 字段**；完整规范均内嵌于各目录 `SKILL.md`。

## 目录

| 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |
|--------|--------|------|----------|----------|
| `qieman-design-ui` | `qieman-design-ui` | L0 | `SKILL.md` | 2026-06-30 |
| —（L1 扩展） | `spec-id: qieman-design-sell-popup` | L1 | `qieman-design-ui/references/qieman-design-sell-popup.md` | 2026-06-30 |
| `qieman-design-h5` | `qieman-design-h5` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-vip` | `qieman-design-vip` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-pdf` | `qieman-design-pdf` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-ppt` | `qieman-design-ppt` | L2 | `SKILL.md` | 2026-06-30 |
| —（L1 扩展） | `spec-id: qieman-design-report` | L1 | `qieman-design-ppt/references/qieman-design-report.md` | 2026-06-30 |
| `qieman-design-data` | `qieman-design-data` | L2 | `SKILL.md` | 2026-06-30 |

分层说明见 `qieman-design-ui/SKILL.md` → **Skill Layering**；PPT 细分见 `qieman-design-ppt/SKILL.md` → **Skill Layering（PPT 细分场景）**。

## 统一布局

### Frontmatter（无 `version` / `title`）

**L0 / L2 `SKILL.md`：**

```yaml
---
name: <与文件夹同名>
layer: L0 | L2
license: Complete terms in LICENSE.txt
description: >-
  ...
extends: qieman-design-ui   # L2 必填；L0 省略
# colors / typography …（按需）
---
```

**L1 扩展 `.md`：**

```yaml
---
spec-id: <规范 ID>
layer: L1
extends: <父级 skill name>
license: Complete terms in LICENSE.txt
description: >-
  ...
---
```

### 头部信息栏

**L0 / L2：**

```markdown
# <name>

| 字段 | 值 |
|------|-----|
| **ID** | `<name>` |
| **层级** | L0 / L2 |
| **场景** | …（L2 可选） |
| **规范** | 本文件 `SKILL.md` |
| **L1 扩展** | …（若有） |
| **依赖** | …（L2） |
| **更新日期** | YYYY-MM-DD（文件最新修改日，运行 `scripts/sync-updated-at.py` 同步） |

## 调用

```bash
npx openskills read <name>
```

---
```

**L1：**

```markdown
# <spec-id>

| 字段 | 值 |
|------|-----|
| **ID** | `<spec-id>` |
| **层级** | L1 |
| **规范** | 本文件 |
| **依赖** | 父级 `SKILL.md` |
| **更新日期** | YYYY-MM-DD |

## 调用
…
---
```

---

## 更新日期维护

规范文件变更后，在 `qieman-skills` 目录执行：

```bash
python3 scripts/sync-updated-at.py
```

脚本按各文件**最新修改时间（mtime）**写入头部信息栏 `| **更新日期** |`，并刷新本 README 目录表与包更新日期。

## 调用示例

```bash
npx openskills read qieman-design-ui
npx openskills read qieman-design-ppt
# HTML 报告幻灯片：再读 qieman-design-ppt/references/qieman-design-report.md
```

Cursor 报告幻灯片入口：`.cursor/skills/qieman-design-report/SKILL.md`（快捷入口，规范真源为 `qieman-design-ppt` L1 扩展）。
