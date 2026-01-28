# Assets 资源文件

本目录包含UI界面设计中使用的资源文件，包括logo、图标、模板等。

## 目录结构

```
assets/
├── logos/          # Logo文件（PNG, SVG, JPG等格式）
│   ├── logo.svg    # SVG格式logo（推荐，可缩放）
│   ├── logo.png    # PNG格式logo（透明背景）
│   └── logo-dark.png  # 深色背景版本
└── README.md       # 本说明文件
```

## 如何添加Logo

1. **准备Logo文件**
   - 推荐使用SVG格式（矢量图，可无损缩放）
   - PNG格式（支持透明背景，适合不同尺寸）
   - 建议提供多个版本：标准版、深色背景版、浅色背景版

2. **放置文件**
   - 将logo文件放入 `assets/logos/` 目录
   - 使用清晰的命名：如 `logo.svg`, `logo-white.svg`, `logo-dark.svg`

3. **在代码中使用**
   - 在HTML中：`<img src="assets/logos/logo.svg" alt="Logo">`
   - 在CSS中：`background-image: url('assets/logos/logo.svg');`
   - 在React中：`import logo from './assets/logos/logo.svg'`

## Logo使用规范

- **尺寸**: 根据使用场景选择合适的尺寸
- **颜色**: 遵循UI规范中的颜色系统
- **背景**: 确保logo在不同背景下都清晰可见
- **格式**: 优先使用SVG，需要时使用PNG

## 注意事项

- Assets文件不会被加载到context中，而是直接用于输出
- 确保logo文件大小合理，避免影响性能
- 保持文件命名规范，便于查找和使用
