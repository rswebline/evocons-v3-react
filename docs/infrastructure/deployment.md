# Deployment — evocons.it

Repository: `https://github.com/rswebline/evocons-v3-react`

Stack: Vite, React, JavaScript.

## Ambienti

- Produzione: `https://www.evocons.it`
- Preview: `https://preview.evocons.it`
- Precedente: `https://old.evocons.it`

## Procedura

```bash
git status
git pull
npm install
npm run build
```

La build viene prodotta in `dist/` e copiata nella document root Nginx. Prima del push: `git status` e `git diff`. Non estrarre ZIP nella root del repository senza commit o `git stash -u`.
