# Deployment Guide for Smelita Aroma Website

## Quick Deployment to Vercel (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
2. Name it: `smelita-aroma` (or any name you prefer)
3. Don't initialize with README, .gitignore, or license
4. Copy the repository URL

### Step 2: Connect to GitHub

Run these commands in your terminal:

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in 2-3 minutes!

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., smelitaaroma.com)
4. Follow DNS configuration instructions

---

## Alternative: Netlify Deployment

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to https://www.netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

## Alternative: Manual Build & Deploy

### Build for Production

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# The output will be in .next folder
```

### Deploy to Any Hosting Service

You can deploy the built project to:
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render
- Any Node.js hosting service

---

## Environment Variables (if needed)

If you add environment variables later:
1. Go to your hosting platform's dashboard
2. Find "Environment Variables" section
3. Add your variables there

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify images display properly
- [ ] Test WhatsApp links
- [ ] Test Instagram links
- [ ] Verify email addresses are correct
- [ ] Test product pages
- [ ] Test cart functionality
- [ ] Check mobile responsiveness

---

## Support

For issues, check:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

