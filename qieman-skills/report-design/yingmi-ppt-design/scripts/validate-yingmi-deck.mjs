#!/usr/bin/env node
/**
 * validate-yingmi-deck.mjs
 * 盈米路演 HTML deck 静态校验：登记版式、背景类、THANKS、基础纪律
 *
 * Usage: node scripts/validate-yingmi-deck.mjs <index.html>
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/validate-yingmi-deck.mjs <index.html>');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const htmlNoComments = html.replace(/<!--[\s\S]*?-->/g, '');
const errors = [];
const warnings = [];
const isTemplate = /template-yingmi/i.test(basename(file));

const SHORT = ['Y01', 'Y02', 'Y03', 'Y04', 'Y05', 'Y06', 'Y07', 'Y08', 'Y09', 'Y10', 'Y11', 'Y12'];
const LONG_TO_SHORT = {
  'cover-left-text-right-visual': 'Y01',
  'toc-left-label-right-list': 'Y02',
  'section-number-title-bottom-left': 'Y03',
  'content-image-left-text-right': 'Y04',
  'content-text-left-image-right': 'Y05',
  'timeline-staircase': 'Y06',
  'awards-card-grid': 'Y07',
  'closing-centered': 'Y08',
  'kpi-hero-grid': 'Y09',
  'comparison-two-col': 'Y10',
  'principles-three-col': 'Y11',
  'content-custom': 'Y12',
};
const ALLOWED = new Set([...SHORT, ...Object.keys(LONG_TO_SHORT)]);

const BG_FOR_LAYOUT = {
  Y01: 'cover',
  Y02: 'toc',
  Y03: 'section',
  Y04: 'page',
  Y05: 'page',
  Y06: 'page',
  Y07: 'page',
  Y08: 'closing',
  Y09: 'page',
  Y10: 'page',
  Y11: 'page',
  Y12: 'page',
};

function normalizeLayout(raw) {
  if (!raw) return null;
  if (SHORT.includes(raw)) return raw;
  return LONG_TO_SHORT[raw] || null;
}

function bgClass(tag) {
  const cls = tag.match(/\bclass="([^"]*)"/)?.[1] ?? '';
  // 只读 class，避免匹配到 <section> 标签名
  if (/\bcover\b/.test(cls)) return 'cover';
  if (/\btoc\b/.test(cls)) return 'toc';
  if (/\bsection\b/.test(cls)) return 'section';
  if (/\bclosing\b/.test(cls)) return 'closing';
  if (/\bpage\b/.test(cls)) return 'page';
  return null;
}

const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlNoComments.matchAll(slideRe)].map((m, idx) => ({
  idx: idx + 1,
  html: m[0],
  tag: m[0].match(/<section\b[^>]*>/)?.[0] ?? '',
}));

if (!slides.length) errors.push('未找到 <section class="slide">。');
if (!html.includes('#deck')) errors.push('缺少 #deck 横向翻页容器。');
if (!html.includes('translateX') && !html.includes('100vw')) {
  warnings.push('未检测到 100vw 翻页 transform，请确认使用 template-yingmi.html。');
}
if (/\b720pt\b/.test(html) && !/qieman-report-design/.test(html)) {
  errors.push('检测到 720pt 固定画布；yingmi-ppt-design 必须使用 100vw×100vh。');
}
if (html.includes('[必填]') && !isTemplate) {
  errors.push('仍存在 [必填] 占位符，请全部替换。');
}
if (/\bHTANKS\b/.test(html)) {
  errors.push('封底文案写成了 HTANKS，应改为 THANKS。');
}
if (/#1B88EE|#E3EFFE|#F9FAFB/i.test(html) && !/--ymi-brand:\s*#00269A/i.test(html)) {
  warnings.push('检测到且慢/报告色值，请确认未混用 #1B88EE / #E3EFFE。');
}
if (/--ymi-brand:\s*(?!#00269A)/i.test(html) && /--ymi-brand:\s*#[0-9A-Fa-f]{3,8}/.test(html)) {
  const brand = html.match(/--ymi-brand:\s*(#[0-9A-Fa-f]{3,8})/);
  if (brand && brand[1].toUpperCase() !== '#00269A') {
    errors.push(`品牌主色为 ${brand[1]}，必须为 #00269A。`);
  }
}

const layouts = [];
const structureKeys = [];

slides.forEach((slide) => {
  const raw = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];
  if (!raw) {
    errors.push(`第 ${slide.idx} 页: 缺少 data-layout（Y01–Y12）。`);
    layouts.push(null);
    structureKeys.push('none');
    return;
  }
  if (!ALLOWED.has(raw)) {
    errors.push(`第 ${slide.idx} 页: data-layout="${raw}" 未登记。`);
  }
  const short = normalizeLayout(raw);
  layouts.push(short);
  if (raw && !/^Y\d{2}$/.test(raw) && SHORT.includes(short)) {
    warnings.push(`第 ${slide.idx} 页: 建议将 data-layout 改为短码 ${short}（现为长 ID）。`);
  }

  const bg = bgClass(slide.tag);
  if (!bg) {
    errors.push(`第 ${slide.idx} 页: 缺少背景类 cover|toc|page|section|closing。`);
  } else if (short && BG_FOR_LAYOUT[short] && BG_FOR_LAYOUT[short] !== bg) {
    // Y02 允许 toc 或 page
    if (!(short === 'Y02' && (bg === 'toc' || bg === 'page'))) {
      errors.push(
        `第 ${slide.idx} 页: ${short} 应使用背景类「${BG_FOR_LAYOUT[short]}」，当前为「${bg}」。`
      );
    }
  }

  // 内容结构指纹：连续三页同主体结构
  const sk =
    short === 'Y04' ||
    short === 'Y05' ||
    short === 'Y09' ||
    short === 'Y10' ||
    short === 'Y11' ||
    short === 'Y12'
      ? short
      : short || 'other';
  structureKeys.push(sk);

  if (!/\bdata-theme=/.test(slide.tag)) {
    warnings.push(`第 ${slide.idx} 页: 建议添加 data-theme=light|dark。`);
  }

  // Y12：自定义内页必须有 nav-safe-bottom，且不得缩边距
  if (short === 'Y12') {
    if (!/\bnav-safe-bottom\b/.test(slide.html)) {
      errors.push(`第 ${slide.idx} 页 (Y12): 缺少 .nav-safe-bottom，底部导航安全区未声明。`);
    }
    if (!/\blayout-custom\b/.test(slide.html)) {
      warnings.push(`第 ${slide.idx} 页 (Y12): 建议使用 .layout-custom 作为自定义内容根容器。`);
    }
    // 禁止写死小于安全边距的左右 padding
    const badPad = slide.html.match(/padding(?:-left|-right|-inline)?\s*:\s*([0-9.]+)(px|rem)/gi) || [];
    for (const decl of badPad) {
      const m = decl.match(/([0-9.]+)(px|rem)/i);
      if (!m) continue;
      const n = parseFloat(m[1]);
      const unit = m[2].toLowerCase();
      if (unit === 'px' && n < 48) {
        errors.push(
          `第 ${slide.idx} 页 (Y12): ${decl.trim()} 小于规范左右安全边距下限 48px。`
        );
      }
    }
  }
});

for (let i = 2; i < structureKeys.length; i++) {
  const a = structureKeys[i];
  const b = structureKeys[i - 1];
  const c = structureKeys[i - 2];
  if (a && a === b && a === c && /^Y(0[4-79]|1[012])$/.test(a)) {
    errors.push(`第 ${i + 1} 页: 连续 3 页同为 ${a} 结构，违反版式节奏。`);
  }
}

const hasCover = layouts.includes('Y01');
const hasClosing = layouts.includes('Y08');
if (slides.length >= 2 && !hasCover) warnings.push('缺少 Y01 封面。');
if (slides.length >= 2 && !hasClosing) warnings.push('缺少 Y08 封底。');

const unique = new Set(layouts.filter(Boolean));
if (slides.length >= 10 && unique.size < 6) {
  warnings.push(`仅使用 ${unique.size} 种版式，≥10 页建议覆盖 ≥6 种。`);
}

const pageRuns = slides.filter((s) => /\bpage\b/.test(s.tag)).length;
if (pageRuns >= 4 && !layouts.includes('Y03') && slides.length >= 8) {
  warnings.push('多页内容 deck 建议插入 Y03 子封面打断节奏。');
}

if (warnings.length) {
  console.warn('Warnings:');
  warnings.forEach((w) => console.warn(`- ${w}`));
}

if (errors.length) {
  console.error('❌ validate-yingmi-deck FAILED');
  errors.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}

console.log(
  `✅ validate-yingmi-deck OK (${slides.length} slides, ${unique.size} layouts: ${[...unique].join(', ')})`
);
