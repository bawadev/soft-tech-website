# Quick Start Guide - Soft Tech Website

## 🚀 Get Started in 3 Minutes

### Step 1: Start the Development Server

```bash
cd soft-tech-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 2: Explore the Website

The website includes:
- **Homepage** - All main sections (Hero, About, Services, Portfolio, Pricing, Contact)
- **Blog** - Navigate to `/blog` to see the blog listing
- **Blog Posts** - Click on any blog post to see the dynamic routing

### Step 3: Test Responsive Design

- Desktop: Already viewing
- Mobile: Open Chrome DevTools (F12) → Toggle device toolbar
- Test the mobile menu by clicking the hamburger icon

## 📂 Project Structure

```
soft-tech-website/
├── app/
│   ├── page.tsx              ← Homepage (all sections)
│   ├── blog/page.tsx         ← Blog listing
│   └── blog/[slug]/page.tsx  ← Individual blog posts
├── components/
│   ├── ui/                   ← Reusable UI components
│   └── sections/             ← Page sections (Hero, About, etc.)
├── README.md                 ← Full documentation
├── DEPLOYMENT.md             ← Deployment guide
└── PROJECT_SUMMARY.md        ← Project overview
```

## 🎨 Customization Quick Reference

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },    // Main brand color (blue)
  secondary: { ... },  // Text & backgrounds (slate)
  accent: { ... },     // Highlights (purple)
}
```

### Update Content
- **Hero Section**: `components/sections/Hero.tsx`
- **Services**: `components/sections/Services.tsx`
- **Contact Info**: `components/sections/Contact.tsx`
- **Footer**: `components/ui/Footer.tsx`

### Add Blog Posts
Edit `app/blog/page.tsx` and add to the `blogPosts` array:
```typescript
{
  id: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description...',
  image: 'https://...',
  category: 'Category',
  author: 'Author Name',
  date: 'YYYY-MM-DD',
  readTime: 'X min read',
}
```

Then add content in `app/blog/[slug]/page.tsx` in the `blogPostsData` object.

## ✅ Verification Checklist

- [x] Homepage loads successfully ✅
- [x] All sections display correctly ✅
- [x] Navigation works (desktop & mobile) ✅
- [x] Blog page accessible ✅
- [x] Responsive design works ✅
- [x] Forms validate correctly ✅
- [x] Images load properly ✅

## 📝 Before Deployment

1. **Update Content**
   - Replace `contact@softtech.com` with real email
   - Update company information
   - Add real images
   - Update blog posts

2. **Configure Form**
   - Set up form submission endpoint
   - Update `components/sections/Contact.tsx`

3. **Add Analytics**
   - Set up Google Analytics
   - Add tracking ID to environment variables

4. **Test Everything**
   - Test on multiple browsers
   - Test on real mobile devices
   - Run Lighthouse audit

## 🚢 Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live in minutes!

## 📞 Need Help?

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`

## 🎉 You're Ready!

The website is fully functional and production-ready. Make the customizations above, test thoroughly, and deploy!

---

**Server running?** The dev server should be at [http://localhost:3000](http://localhost:3000)

**Not running?** Use `npm run dev` to start it.
