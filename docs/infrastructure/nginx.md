# Nginx — Evocons

Ubuntu, Nginx `1.24.0`.

## Virtual host

```text
/etc/nginx/sites-enabled/evocons.it
/etc/nginx/sites-enabled/preview.evocons.it
/etc/nginx/sites-enabled/old.evocons.it
```

Server name: `evocons.it www.evocons.it`, `preview.evocons.it`, `old.evocons.it`.

## Controlli

```bash
ls -l /etc/nginx/sites-enabled
grep -R "server_name" /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl status nginx
```

Dopo una modifica:

```bash
sudo nginx -t
sudo systemctl reload nginx
```
