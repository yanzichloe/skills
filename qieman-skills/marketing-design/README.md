# marketing-design

且慢 **营销传播** skill 分类。文件夹名 = 各目录 `SKILL.md` 的 `name` 字段。

## Skill 清单

| `name` | 层级 | 路径 | 职责 |
|--------|------|------|------|
| `qieman-h5-design` | L2 | `qieman-h5-design/SKILL.md` | App 内营销 H5、活动页、策略介绍页 |
| `qieman-vip-design` | L2 | `qieman-vip-design/SKILL.md` | 高净值私域海报、VIP 视觉、九宫格传播 |

两者均 `extends: qieman-ui-design`，生成时 **先读 L0，再读本类 L2**。

## 调用路由（Agent 必读）

### 1. 营销 H5 / 活动页 → `qieman-ui-design` + `qieman-h5-design`

**触发词（含同义表述）：**

- **H5 页面设计、H5 设计、营销 H5**
- **活动页设计、活动页、营销活动页**
- **营销页设计、营销页、策略介绍页**
- App 内长页、权益页、投教专题页、功能上线页

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-h5-design
```

> H5 内若含 **卖出挽留弹窗**，再叠 **L1** `qieman-sell-popup-design`（见 [`../app-design/README.md`](../app-design/README.md)）。

### 2. VIP 私域海报 → `qieman-ui-design` + `qieman-vip-design`

**触发词（含同义表述）：**

- **且慢高净值私域宣传海报、高净值私域海报**
- **VIP 视觉设计、VIP 设计、VIP 海报**
- **高客营销设计、高净值营销、高客海报**
- **顾问设计、顾问朋友圈、投顾私域传播**
- 300 万+ 门槛海报、九宫格传播、私域邀请图

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-vip-design
```

### 3. 组合场景

| 场景 | 调用 skill |
|------|------------|
| 标准营销 H5 | `qieman-ui-design` + `qieman-h5-design` |
| 营销 H5 + 卖出挽留弹窗 | `qieman-ui-design` + `qieman-h5-design` + `qieman-sell-popup-design` |
| VIP 9:16 海报 / 九宫格 | `qieman-ui-design` + `qieman-vip-design` |

## 分层关系

```
qieman-ui-design (L0, app-design)
├── qieman-h5-design (L2, marketing-design)
└── qieman-vip-design (L2, marketing-design)
```

详细 token 与 Pattern 见各 skill 目录下的 `SKILL.md`；全局分层说明见 `../app-design/qieman-ui-design/SKILL.md` → **Skill Layering**。
