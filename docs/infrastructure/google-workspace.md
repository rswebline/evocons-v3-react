# Google Workspace — evocons.it

## Stato verificato

- dominio verificato;
- Gmail attiva;
- invio, ricezione e reply funzionanti;
- MX pubblicati correttamente.

Account verificato: `s.rago@evocons.it`.

## SPF

Recuperare il record completo, verificare tutti i sistemi mittenti ed evitare più record SPF separati. Per Google Workspace è normalmente necessario `include:_spf.google.com`.

## DKIM

Verificare in Google Admin: App → Google Workspace → Gmail → Autentica email. Poi controllare:

```bash
dig TXT <selettore>._domainkey.evocons.it +short
```

## DMARC

Valore rilevato: `v=DMARC1; p=none; aspf=r; adkim=r;`. Prima di passare a `quarantine` o `reject`, verificare SPF, DKIM e allineamento.

## Test

Controllare nelle intestazioni: `SPF: PASS`, `DKIM: PASS`, `DMARC: PASS`.
