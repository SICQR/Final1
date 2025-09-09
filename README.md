# HOTMESS Editorial Commerce — Next.js + Sanity + Tailwind

# HOTMESS Editorial Commerce — Next.js + Sanity + Tailwind

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   - Add your `SANITY_PROJECT_ID` and `SANITY_DATASET`
   - Set `ADMIN_USER` and `ADMIN_PASS` for admin access

3. **Configure Sanity CMS**
   - Create a [Sanity project](https://www.sanity.io/get-started)
   - Add your schema types to `/schemas/index.ts`
   - Update the project ID in your environment variables

4. **Run locally**
   ```bash
   npm run dev        # Next.js development server (http://localhost:3000)
   npm run studio     # Sanity Studio (http://localhost:3333)
   ```

5. **Build and test**
   ```bash
   npm run build      # Build for production
   npm run lint       # Check code quality
   npm start          # Start production server
   ```

6. **Deploy**
   - Push to GitHub
   - Connect repo to [Vercel](https://vercel.com)
   - Add environment variables from `.env.example` in Vercel dashboard
   - Deploy automatically on push!

   **Environment Variables for Deployment:**
   - `SANITY_PROJECT_ID` - Your Sanity project ID
   - `SANITY_DATASET` - Usually "production"
   - `ADMIN_USER` - Admin username for /admin route
   - `ADMIN_PASS` - Admin password for /admin route

## 🌈 Features

- **CMS-powered lookbook** — parallax, scroll, overlays, video/SVG, custom fonts.
- **Animated dropdowns/overlays** — Radix UI + Framer Motion.
- **Shop with instant search** — demo Shopify API included.
- **Admin/editor UI** — update slides, overlays, fonts via browser.
- **Affiliate dashboard** — QR, stats, payouts.

## 👥 Collaborators

Add collaborators by GitHub username or email in your repo settings.

## 💬 Support

DM @SICQR or open an issue for help!