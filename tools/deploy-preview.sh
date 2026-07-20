#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="$PROJECT_ROOT/dist/"
REMOTE_USER="stefano"
REMOTE_HOST="49.13.211.89"
REMOTE_PATH="/var/www/preview.evocons.it/"
SITE_URL="https://preview.evocons.it"

cd "$PROJECT_ROOT"

echo "========================================="
echo " Evocons - Deploy produzione"
echo "========================================="
echo ""
echo "Destinazione:"
echo "  ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "Errore: npm non è disponibile."
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "Errore: rsync non è disponibile."
  exit 1
fi

read -r -p "Pubblicare la build su preview.evocons.it? (y/N): " confirm

if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "Deploy annullato."
  exit 0
fi

echo ""
echo ">> Build di produzione"
npm run build

if [[ ! -f "${DIST_DIR}index.html" ]]; then
  echo ""
  echo "Errore: dist/index.html non trovato."
  echo "Deploy annullato."
  exit 1
fi

echo ""
echo ">> Pubblicazione sul VPS"
rsync \
  -avz \
  --delete \
  --omit-dir-times \
  --human-readable \
  --itemize-changes \
  "$DIST_DIR" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

echo ""
echo ">> Verifica del sito"

if command -v curl >/dev/null 2>&1; then
  HTTP_STATUS="$(curl -L -s -o /dev/null -w "%{http_code}" "$SITE_URL")"

  if [[ "$HTTP_STATUS" == "200" ]]; then
    echo "Sito raggiungibile: HTTP $HTTP_STATUS"
  else
    echo "Attenzione: il sito risponde con HTTP $HTTP_STATUS"
    exit 1
  fi
else
  echo "curl non disponibile: verifica HTTP saltata."
fi

echo ""
echo "========================================="
echo " Deploy completato"
echo " $SITE_URL"
echo "========================================="
