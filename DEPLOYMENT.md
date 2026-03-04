# Maykott Holdings — Deployment Guide
## GoDaddy Deluxe Hosting

---

## Option A: Node.js Server Deployment (Recommended)

GoDaddy Deluxe plans support Node.js hosting. This gives you full Next.js features (SSR, API routes, etc.).

### Prerequisites
- GoDaddy Deluxe cPanel hosting with Node.js support
- SSH access to your hosting account
- Domain: `www.maykott.com` pointed to GoDaddy nameservers

---

### Step 1: Build the Production Bundle

```bash
# In the website/ directory
npm run build
```

This creates an optimized `.next/` folder.

### Step 2: Configure Environment Variables

Create a `.env.production` file:

```env
NEXT_PUBLIC_SITE_URL=https://www.maykott.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # Google Analytics (optional)
CONTACT_EMAIL=inquiry@maykott.com

# For future CMS integration:
# CONTENTFUL_SPACE_ID=...
# CONTENTFUL_ACCESS_TOKEN=...
```

> **Important:** Never commit `.env.production` to version control.

### Step 3: Upload Files to GoDaddy

**Via cPanel File Manager or SFTP:**

Upload the following:
```
.next/           (build output)
public/          (static assets)
node_modules/    (dependencies)
package.json
package-lock.json
next.config.ts
```

Or via SSH:
```bash
# On GoDaddy server
cd ~/public_html
git clone <your-repo-url> .
npm ci --production
npm run build
```

### Step 4: Configure Node.js App in cPanel

1. Go to **cPanel → Software → Setup Node.js App**
2. Click **Create Application**
3. Set:
   - Node version: `20.x` or latest LTS
   - Application mode: `Production`
   - Application root: `/home/username/public_html`
   - Application URL: `maykott.com`
   - Application startup file: `node_modules/.bin/next`
   - Passenger startup file: `server.js`
4. Environment variables: add from Step 2
5. Click **Create**

### Step 5: Create server.js (Required for cPanel)

Create `server.js` in the website root:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

### Step 6: Set Up Domain

In GoDaddy DNS:
- **A Record**: `@` → your server IP
- **CNAME**: `www` → `@`
- Enable SSL certificate (Let's Encrypt via cPanel)

---

## Option B: Static Export (Alternative)

If you prefer a static site (no Node.js runtime needed):

### Step 1: Enable Static Export

In `next.config.ts`, uncomment:
```typescript
output: "export",
trailingSlash: true,
```

**Note:** This disables server-side dynamic routes. All data must be static.

### Step 2: Build

```bash
npm run build
```

This creates an `out/` directory with all HTML, CSS, JS files.

### Step 3: Upload `out/` to GoDaddy

Upload the entire `out/` folder contents to `public_html/` via:
- cPanel File Manager
- SFTP (FileZilla)
- cPanel Git

### Step 4: Configure .htaccess for SPA routing

Create `public_html/.htaccess`:

```apache
Options -MultiViews
RewriteEngine On
RewriteBase /

# Handle Next.js trailing slash routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## SSL / HTTPS Setup

1. In GoDaddy cPanel → **SSL/TLS**
2. Install Let's Encrypt certificate (free) for `maykott.com` and `www.maykott.com`
3. Enable HTTPS redirect

---

## Performance Recommendations

- Enable **Gzip compression** in cPanel → Optimize Website
- Enable **CloudFlare CDN** (free plan) for global delivery
- Set cache headers: static assets cache for 1 year
- Enable **GoDaddy CDN** (available in dashboard)

---

## Maintenance & Updates

```bash
# To update the site after code changes:
npm run build          # Rebuild
# Re-upload changed files
# Restart Node.js app in cPanel (if using Option A)
```

For automated deploys, set up **GitHub Actions** to push to your GoDaddy server on merge to `main`.

---

## Domain Email Setup

Since you have `maykott.com`:

1. In GoDaddy → **Email** → **Professional Email**
2. Create: `inquiry@maykott.com`, `press@maykott.com`
3. Update contact form to send to `inquiry@maykott.com`

---

## Support Contacts

- GoDaddy Support: 24/7 live chat at godaddy.com
- Technical issues: SSH into server and check logs:
  ```bash
  pm2 logs  # or
  tail -f /var/log/nodejs/app.log
  ```
