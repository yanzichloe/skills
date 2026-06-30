#!/usr/bin/env python3
"""Sync | **更新日期** | in qieman-skills header tables from file mtime."""

from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATE_ROW = "| **更新日期** | {date} |"
DATE_RE = re.compile(r"^\| \*\*更新日期\*\* \| .+ \|$", re.M)


def mtime_date(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d")


def sync_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    date = mtime_date(path)
    row = DATE_ROW.format(date=date)

    # remove misplaced date row (outside table)
    text = DATE_RE.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)

    marker = "\n## 调用"
    if marker not in text:
        return False

    before, after = text.split(marker, 1)
    # insert as last row of header table (before blank line preceding ## 调用)
    before = before.rstrip("\n")
    if before.endswith("|"):
        new_text = before + "\n" + row + "\n" + marker + after
    else:
        new_text = before + "\n\n" + row + "\n" + marker + after

    if new_text == text:
        return False
    path.write_text(new_text, encoding="utf-8")
    return True


def collect_md_files() -> list[Path]:
    files: list[Path] = []
    for pattern in ("**/SKILL.md", "**/references/*.md"):
        files.extend(ROOT.glob(pattern))
    return sorted(set(files))


def sync_readme() -> None:
    readme = ROOT / "README.md"
    files = [f for f in collect_md_files() if f != readme]
    latest = max(mtime_date(f) for f in files) if files else mtime_date(readme)

    text = readme.read_text(encoding="utf-8")
    line = f"> **包更新日期**：{latest}（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）\n\n"

    if text.startswith("> **包更新日期**"):
        text = re.sub(r"^> \*\*包更新日期\*\*：.+?\n\n", line, text, count=1)
    else:
        text = text.replace(
            "# qieman skills\n\n",
            f"# qieman skills\n\n{line}",
            1,
        )

    # directory table: add 更新日期 column if missing
    if "| 更新日期 |" not in text.split("## 统一布局")[0]:
        text = text.replace(
            "| 文件夹 | `name` | 层级 | 完整规范 |\n"
            "|--------|--------|------|----------|",
            "| 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |\n"
            "|--------|--------|------|----------|----------|",
        )
        rows = {
            "qieman-design-ui/SKILL.md": "qieman-design-ui",
            "qieman-design-ui/references/qieman-design-sell-popup.md": "—（L1）",
            "qieman-design-h5/SKILL.md": "qieman-design-h5",
            "qieman-design-vip/SKILL.md": "qieman-design-vip",
            "qieman-design-pdf/SKILL.md": "qieman-design-pdf",
            "qieman-design-ppt/SKILL.md": "qieman-design-ppt",
            "qieman-design-ppt/references/qieman-design-report.md": "—（L1）",
            "qieman-design-data/SKILL.md": "qieman-design-data",
        }
        for rel, _ in rows.items():
            p = ROOT / rel
            d = mtime_date(p) if p.exists() else "—"
            old = f"| `{rows[rel].split('（')[0].strip('`—')}`" if "（L1）" not in rel else None
            # simpler: patch each known line
        table_patches = [
            ("| `qieman-design-ui` | `qieman-design-ui` | L0 | `SKILL.md` |",
             f"| `qieman-design-ui` | `qieman-design-ui` | L0 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-ui/SKILL.md')} |"),
            ("| —（L1 扩展） | `spec-id: qieman-design-sell-popup` | L1 | `qieman-design-ui/references/qieman-design-sell-popup.md` |",
             f"| —（L1 扩展） | `spec-id: qieman-design-sell-popup` | L1 | `qieman-design-ui/references/qieman-design-sell-popup.md` | {mtime_date(ROOT/'qieman-design-ui/references/qieman-design-sell-popup.md')} |"),
            ("| `qieman-design-h5` | `qieman-design-h5` | L2 | `SKILL.md` |",
             f"| `qieman-design-h5` | `qieman-design-h5` | L2 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-h5/SKILL.md')} |"),
            ("| `qieman-design-vip` | `qieman-design-vip` | L2 | `SKILL.md` |",
             f"| `qieman-design-vip` | `qieman-design-vip` | L2 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-vip/SKILL.md')} |"),
            ("| `qieman-design-pdf` | `qieman-design-pdf` | L2 | `SKILL.md` |",
             f"| `qieman-design-pdf` | `qieman-design-pdf` | L2 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-pdf/SKILL.md')} |"),
            ("| `qieman-design-ppt` | `qieman-design-ppt` | L2 | `SKILL.md` |",
             f"| `qieman-design-ppt` | `qieman-design-ppt` | L2 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-ppt/SKILL.md')} |"),
            ("| —（L1 扩展） | `spec-id: qieman-design-report` | L1 | `qieman-design-ppt/references/qieman-design-report.md` |",
             f"| —（L1 扩展） | `spec-id: qieman-design-report` | L1 | `qieman-design-ppt/references/qieman-design-report.md` | {mtime_date(ROOT/'qieman-design-ppt/references/qieman-design-report.md')} |"),
            ("| `qieman-design-data` | `qieman-design-data` | L2 | `SKILL.md` |",
             f"| `qieman-design-data` | `qieman-design-data` | L2 | `SKILL.md` | {mtime_date(ROOT/'qieman-design-data/SKILL.md')} |"),
        ]
        for old, new in table_patches:
            text = text.replace(old, new)

    readme.write_text(text, encoding="utf-8")


def main() -> None:
    changed = []
    for path in collect_md_files():
        if path.name == "README.md" and path.parent == ROOT:
            continue
        if sync_file(path):
            changed.append(path.relative_to(ROOT))

    sync_readme()

    print(f"Synced update dates for {len(changed)} file(s):")
    for p in changed:
        print(f"  {p}")


if __name__ == "__main__":
    main()
