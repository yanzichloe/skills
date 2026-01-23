---
name: data-visualization
description: Comprehensive data visualization toolkit for creating charts, graphs, and interactive visualizations. Use when users request creating data visualizations, charts, graphs, dashboards, or data analysis visualizations. Supports multiple chart types (bar, line, pie, scatter, heatmap, etc.) and output formats (HTML, PNG, SVG, PDF). Works with various libraries including matplotlib, Plotly, D3.js, and Chart.js.
---

# Data Visualization

## Overview

This skill enables creating professional data visualizations including static charts, interactive graphs, and dashboard components. Supports multiple chart types, output formats, and visualization libraries.

## Quick Start

### Chart Type Selection

Choose the appropriate chart type based on data and purpose:

- **Bar/Column charts**: Compare categories, show rankings
- **Line charts**: Show trends over time, continuous data
- **Pie/Donut charts**: Show proportions, part-to-whole relationships
- **Scatter plots**: Show correlations, relationships between variables
- **Heatmaps**: Show density, correlations, or matrix data
- **Area charts**: Show cumulative values over time
- **Box plots**: Show distributions, quartiles, outliers
- **Histograms**: Show frequency distributions

### Output Format Selection

- **HTML**: Interactive charts (Plotly, Chart.js, D3.js) - best for web sharing
- **PNG/JPG**: Static images (matplotlib, seaborn) - best for documents, presentations
- **SVG**: Scalable vector graphics - best for web and print
- **PDF**: Vector format - best for reports and documents

### Library Selection

- **matplotlib/seaborn**: Python, static charts, publication-quality
- **Plotly**: Python/JavaScript, interactive charts, dashboards
- **Chart.js**: JavaScript, lightweight, web-friendly
- **D3.js**: JavaScript, highly customizable, advanced visualizations

## Creating Charts

### Python (matplotlib/seaborn)

For static, publication-quality charts:

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Set style
sns.set_style("whitegrid")
plt.figure(figsize=(10, 6))

# Create chart based on type
# Bar chart example
plt.bar(x, y)
plt.xlabel('X Label')
plt.ylabel('Y Label')
plt.title('Chart Title')
plt.tight_layout()
plt.savefig('chart.png', dpi=300, bbox_inches='tight')
```

See `references/matplotlib_guide.md` for detailed patterns and examples.

### Python (Plotly)

For interactive charts and dashboards:

```python
import plotly.graph_objects as go
import plotly.express as px

# Express API (simpler)
fig = px.bar(df, x='category', y='value', title='Chart Title')
fig.write_html('chart.html')

# Graph Objects API (more control)
fig = go.Figure(data=[go.Bar(x=x, y=y)])
fig.update_layout(title='Chart Title')
fig.write_html('chart.html')
```

See `references/plotly_guide.md` for interactive chart patterns.

### JavaScript (Chart.js)

For lightweight web charts:

```html
<canvas id="myChart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: { labels: [...], datasets: [...] },
  options: { responsive: true }
});
</script>
```

See `references/chartjs_guide.md` for Chart.js patterns.

### JavaScript (D3.js)

For highly customizable visualizations:

See `references/d3_guide.md` for D3.js patterns and examples.

## Chart Templates

Pre-built templates are available in `assets/templates/`:

- `bar_chart_template.html` - Interactive bar chart template
- `line_chart_template.html` - Interactive line chart template
- `dashboard_template.html` - Multi-chart dashboard template
- `python_matplotlib_template.py` - Python matplotlib starter template

## Color Palette

**Default Chart Palette**: Use the 12-color palette defined in `references/color_palettes.md` as the primary choice for all visualizations. This palette includes colors from chart01 (#69B1F4) through chart12 (#6B9CCA), providing consistent, professional styling across all charts.

See `references/color_palettes.md` for the complete palette with usage examples for Python, JavaScript, and CSS.

## Best Practices

1. **Choose appropriate chart type** for your data and message
2. **Use consistent colors** - use the default chart palette from `references/color_palettes.md` as the primary choice
3. **Label clearly** - include titles, axis labels, legends, data labels
4. **Consider accessibility** - use colorblind-friendly palettes when needed, add alt text
5. **Optimize for output** - HTML for interactivity, PNG for documents
6. **Responsive design** - ensure charts work on different screen sizes

## Advanced Features

### Multi-chart Dashboards

Combine multiple charts into dashboards. See `references/dashboards.md` for dashboard patterns.

### Data Processing

Use scripts in `scripts/` for common data processing tasks:
- `process_data.py` - Data cleaning and preparation utilities
- `export_chart.py` - Chart export utilities

### Custom Styling

Apply themes and styling. See `references/styling_guide.md` for customization options.

## Resources

### scripts/
- `process_data.py` - Data processing utilities
- `export_chart.py` - Chart export helpers

### references/
- `matplotlib_guide.md` - matplotlib/seaborn patterns and examples
- `plotly_guide.md` - Plotly interactive chart patterns
- `chartjs_guide.md` - Chart.js web chart patterns
- `d3_guide.md` - D3.js advanced visualization patterns
- `color_palettes.md` - Color scheme recommendations
- `dashboards.md` - Dashboard design patterns
- `styling_guide.md` - Chart styling and theming

### assets/
- `templates/` - Pre-built chart templates
