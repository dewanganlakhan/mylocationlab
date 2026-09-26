#!/usr/bin/env bash
#
# Deploy MyLocationLab to Cloudflare Pages.
#
# Usage:
#   ./deploy.sh                 Build and deploy to the "main" branch (production)
#   ./deploy.sh --branch dev    Deploy to a preview branch instead
#   ./deploy.sh --dry-run       Build only, no upload
#
# Requires: Node >= 22.12, and a Cloudflare login (`npx wrangler login`).
set -euo pipefail

PROJECT_NAME="mylocationlab"
BRANCH="main"
DRY_RUN=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch) BRANCH="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    *) echo "Unknown option: $1" >&2; exit 1 ;;
  esac
done

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is not installed. Node >= 22.12 is required." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "==> Installing dependencies..."
  npm ci
fi

echo "==> Building site..."
npm run build

if [ "$DRY_RUN" = true ]; then
  echo "==> Dry run complete. Built output is in dist/ (nothing deployed)."
  exit 0
fi

echo "==> Deploying to Cloudflare Pages (project: ${PROJECT_NAME}, branch: ${BRANCH})..."
npx wrangler pages deploy dist \
  --project-name="${PROJECT_NAME}" \
  --branch="${BRANCH}" \
  --commit-dirty=true

echo "==> Done. Production URL: https://mylocationlab.com"
