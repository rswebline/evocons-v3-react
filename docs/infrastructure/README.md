# Evocons Infrastructure Runbook

Questa cartella documenta DNS, Google Workspace, Nginx, deployment, SSL, VPS e disaster recovery di `evocons.it`.

## Verifica rapida

```bash
dig A evocons.it +short
dig A www.evocons.it +short
dig A preview.evocons.it +short
dig A old.evocons.it +short
dig MX evocons.it +short

curl -I https://evocons.it
curl -I https://preview.evocons.it
curl -I https://old.evocons.it
```
