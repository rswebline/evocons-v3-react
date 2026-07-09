#!/bin/bash

# Vai automaticamente nella root del progetto
cd "$(dirname "$0")/.." || exit 1

# Verifica che sia stato passato un messaggio di commit
if [ -z "$1" ]; then
    echo "Uso:"
    echo "  ./gitpush.sh \"messaggio commit\""
    exit 1
fi

echo "========================================="
echo " Evocons - Git Push"
echo "========================================="

git status

echo ""
read -p "Procedere con add, commit e push? (y/N): " confirm

if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "Operazione annullata."
    exit 0
fi

echo ""
echo ">> npm run build"

npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "Build fallita. Commit annullato."
    exit 1
fi

echo ""
echo ">> git add ."
git add .

echo ""
echo ">> git commit"
git commit -m "$1"

if [ $? -ne 0 ]; then
    echo ""
    echo "Commit non eseguito."
    exit 1
fi

echo ""
echo ">> git push origin main"
git push origin main

echo ""
echo "========================================="
echo " Operazione completata."
echo "========================================="
