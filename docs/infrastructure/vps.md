# VPS Hetzner

- Provider: Hetzner
- Sistema operativo: Ubuntu
- IPv4: `49.13.211.89`
- Web server: Nginx `1.24.0`

Siti: `evocons.it`, `preview.evocons.it`, `old.evocons.it`, `stefanorago.it`, `rswebline.it`.

## Accesso

```bash
ssh stefano@49.13.211.89
ssh stefano@evocons.it
```

Se l’IP funziona ma il dominio no, verificare prima il DNS.

## Controlli

```bash
uptime
df -h
free -h
sudo systemctl status nginx
sudo nginx -t
sudo ss -lntp
```
