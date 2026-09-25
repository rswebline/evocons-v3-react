# Zona DNS — evocons.it

Provider DNS attuale: SiteGround  
VPS: Hetzner  
IPv4: `49.13.211.89`

## Record web

| Tipo | Nome | Valore | Funzione |
|---|---|---|---|
| A | `@` | `49.13.211.89` | Dominio principale |
| CNAME | `www` | `evocons.it.` | Alias del dominio principale |
| A | `preview` | `49.13.211.89` | Ambiente preview |
| A | `old` | `49.13.211.89` | Versione precedente |

## MX Google Workspace

| Priorità | Destinazione |
|---:|---|
| 1 | `ASPMX.L.GOOGLE.COM.` |
| 5 | `ALT1.ASPMX.L.GOOGLE.COM.` |
| 5 | `ALT2.ASPMX.L.GOOGLE.COM.` |
| 10 | `ALT3.ASPMX.L.GOOGLE.COM.` |
| 10 | `ALT4.ASPMX.L.GOOGLE.COM.` |

## TXT rilevati

DMARC: `v=DMARC1; p=none; aspf=r; adkim=r;`

SPF: da acquisire integralmente e verificare prima di modificarlo. Il valore visualizzato includeva `v=spf1 +a +mx +ip4:35.207.85.63 include:evocons.it.spf.auto.dnssm...`.

## Verifica

```bash
dig A evocons.it +short
dig A www.evocons.it +short
dig A preview.evocons.it +short
dig A old.evocons.it +short
dig MX evocons.it +short
dig TXT evocons.it +short
dig TXT _dmarc.evocons.it +short
```

## Incidente luglio 2026

La zona DNS risultò quasi completamente svuotata su SiteGround. Furono ricreati manualmente i record A, CNAME e MX. Conservare screenshot, copia della zona e risposta del supporto.
