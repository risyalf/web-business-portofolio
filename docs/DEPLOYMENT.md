# Deployment Documentation - Alris Digital Portfolio

## Domain
- **URL**: `https://alrisdigital.web.id/`
- **SSL**: Automatic TLS managed by Caddy (Let's Encrypt / ZeroSSL)

## Architecture & Build
- **Type**: Astro Static Site
- **Build tool**: Bun (`bun run build`)
- **Distribution folder**: `/home/risyal/projects/web-business-portofolio/dist`

## Caddy Configuration
Config location: `/etc/caddy/sites-enabled/alrisdigital`

```caddyfile
alrisdigital.web.id {
    root * /home/risyal/projects/web-business-portofolio/dist
    encode zstd gzip

    @static {
        path /_astro/* /portofolio/* *.svg *.png *.jpg *.jpeg *.webp *.css *.js
    }
    header @static Cache-Control "public, max-age=31536000, immutable"

    @html {
        path *.html /
    }
    header @html Cache-Control "public, max-age=0, must-revalidate"

    try_files {path} {path}/ /index.html
    file_server
}
```

## Update & Redeploy Workflow
```bash
cd /home/risyal/projects/web-business-portofolio
git pull origin main
bun install
bun run build
# Files in dist are automatically served; no Caddy reload needed unless Caddyfile changes
```
