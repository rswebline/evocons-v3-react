# Disaster Recovery — Evocons

## Diagnosi

```bash
dig A evocons.it +short
dig A www.evocons.it +short
dig A preview.evocons.it +short
dig A old.evocons.it +short
dig MX evocons.it +short
ssh stefano@49.13.211.89
curl -I https://evocons.it
```

## Ripristino DNS minimo

```text
A      @         49.13.211.89
CNAME  www       evocons.it.
A      preview   49.13.211.89
A      old       49.13.211.89
```

MX Google Workspace:

```text
1  ASPMX.L.GOOGLE.COM.
5  ALT1.ASPMX.L.GOOGLE.COM.
5  ALT2.ASPMX.L.GOOGLE.COM.
10 ALT3.ASPMX.L.GOOGLE.COM.
10 ALT4.ASPMX.L.GOOGLE.COM.
```

## Ripristino repository locale

```bash
git stash -u
git fetch origin
git restore --source=origin/main --staged --worktree .
```

## Chiusura incidente

Documentare data, sintomo, causa, interventi, record ricreati, tempo di ripristino e azioni preventive.
