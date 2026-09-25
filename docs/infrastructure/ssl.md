# SSL/TLS — evocons.it

Gestione: Let’s Encrypt / Certbot.

Host: `evocons.it`, `www.evocons.it`, `preview.evocons.it`, `old.evocons.it`.

```bash
sudo certbot certificates
sudo certbot renew --dry-run
systemctl status certbot.timer
```

Verifica:

```bash
curl -I https://evocons.it
curl -I https://preview.evocons.it
curl -I https://old.evocons.it
```

Non rigenerare certificati durante un incidente DNS finché i record non risolvono verso il VPS.
