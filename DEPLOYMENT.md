# Deployment Guide

## Cloudflare Pages Deployment (Recommended)

This project is configured for Cloudflare Workers/Pages deployment.

### Steps:

1. **Install Wrangler CLI** (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   npm run build
   wrangler pages deploy dist/client
   ```

### Alternative: Connect GitHub to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create Application** → **Pages**
3. Connect your GitHub repository: `Thebad-company/iconsbase-video-funnel`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
   - **Root directory**: `/` (leave empty)
5. Click **Save and Deploy**

---

## Vercel Deployment (Requires Configuration Changes)

If you prefer Vercel, you need to switch from Cloudflare adapter to Vercel adapter.

### Required Changes:

1. Create `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist/client",
     "framework": null,
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/api/server"
       }
     ]
   }
   ```

2. Update `vite.config.ts` to use Vercel adapter (requires custom configuration)

3. Remove or rename `wrangler.jsonc`

**Note**: This requires significant configuration changes and may not be fully supported by the current build setup.

---

## Recommendation

**Use Cloudflare Pages** - the project is already configured for it, and Cloudflare offers:
- Free tier with generous limits
- Global CDN
- Excellent performance
- Native support for TanStack Start
- No configuration changes needed
