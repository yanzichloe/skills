#!/usr/bin/env bash
# Publish qieman-skills to https://github.com/yanzichloe/skills
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$ROOT/qieman-skills"
CLONE_DIR="$ROOT/skills-sync-temp"
REPO="https://github.com/yanzichloe/skills.git"
BRANCH="main"

if [[ ! -d "$SRC" ]]; then
  echo "错误: 找不到 $SRC" >&2
  exit 1
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "请先设置 GitHub Token（需 repo 权限）：" >&2
  echo "  export GITHUB_TOKEN=ghp_xxxxxxxx" >&2
  exit 1
fi

if [[ ! -d "$CLONE_DIR/.git" ]]; then
  echo "克隆仓库..."
  git clone --depth 1 "$REPO" "$CLONE_DIR"
fi

echo "同步 qieman-skills ..."
rsync -a --delete --exclude '.DS_Store' "$SRC/" "$CLONE_DIR/qieman-skills/"

cd "$CLONE_DIR"
git add qieman-skills

if git diff --cached --quiet; then
  echo "无新变更，尝试直接推送..."
else
  git commit -m "$(cat <<'EOF'
Sync qieman-skills from local canonical tree.

EOF
)"
fi

REMOTE="https://x-access-token:${GITHUB_TOKEN}@github.com/yanzichloe/skills.git"
git push "$REMOTE" "$BRANCH"
echo "已发布: https://github.com/yanzichloe/skills/tree/main/qieman-skills"
