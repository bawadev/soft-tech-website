# Deployment Guide - Soft Tech Website

This guide covers deployment options and best practices for the Soft Tech website.

## Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace all placeholder images with actual company images
- [ ] Update contact email: `contact@softtech.com`
- [ ] Add real company address and phone number
- [ ] Update blog posts with actual content
- [ ] Review and update all text content
- [ ] Add real case study data
- [ ] Update company names in testimonials

### 2. Configuration
- [ ] Set up environment variables (see `.env.example`)
- [ ] Configure form submission endpoint
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Update metadata in `app/layout.tsx`
- [ ] Update site URL in metadata

### 3. SEO & Performance
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Set up Google Search Console
- [ ] Configure analytics
- [ ] Test Core Web Vitals
- [ ] Optimize images (compress and convert to WebP if needed)

### 4. Testing
- [ ] Test all links and navigation
- [ ] Test form submission
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test accessibility with screen readers
- [ ] Run Lighthouse audit

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., soft-tech.com)
   - Update DNS records as instructed

#### Environment Variables in Vercel:
- Go to Project Settings > Environment Variables
- Add all variables from `.env.example`

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. Add environment variables in Site Settings

### Option 3: AWS Amplify

1. Connect your GitHub repository
2. Build settings are auto-detected for Next.js
3. Add environment variables
4. Deploy

### Option 4: Self-Hosted (VPS/Docker)

#### Using PM2

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "soft-tech" -- start
   pm2 save
   pm2 startup
   ```

#### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/next.config.js ./
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json

   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t soft-tech-website .
   docker run -p 3000:3000 soft-tech-website
   ```

## Post-Deployment

### 1. DNS Configuration

For custom domain, update your DNS records:

```
Type: A
Name: @
Value: [Your server IP or Vercel IP]

Type: CNAME
Name: www
Value: [Your domain or Vercel domain]
```

### 2. SSL Certificate

- Vercel: Automatic SSL
- Other platforms: Use Let's Encrypt or Cloudflare

### 3. Monitoring

Set up monitoring for:
- Uptime (UptimeRobot, Pingdom)
- Performance (Google Analytics, Vercel Analytics)
- Errors (Sentry)

### 4. Analytics Setup

#### Google Analytics
1. Create GA4 property
2. Get tracking ID
3. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Implement tracking in `app/layout.tsx`

### 5. Form Integration

Update `components/sections/Contact.tsx` to connect to your backend:

```typescript
const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
```

Options for form handling:
- Formspree
- SendGrid API
- Custom backend API
- Netlify Forms
- Vercel Functions

## Performance Optimization

### Before Going Live

1. **Run Build**
   ```bash
   npm run build
   ```

2. **Analyze Bundle**
   ```bash
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

3. **Test Performance**
   - Run Lighthouse in Chrome DevTools
   - Target scores: 90+ for all metrics
   - Fix any issues before deployment

### Optimization Tips

1. **Images**: Already optimized with Next.js Image component
2. **Fonts**: Using next/font for optimal loading
3. **CSS**: Tailwind CSS is purged in production
4. **JavaScript**: Code splitting is automatic in Next.js

## Maintenance

### Regular Updates

1. **Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Next.js Updates**
   ```bash
   npm install next@latest react@latest react-dom@latest
   ```

3. **Content Updates**
   - Update blog posts regularly
   - Keep portfolio section current
   - Update team information

### Backup

- Database backups (if using one)
- Code backups via Git
- Content backups

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check `next.config.js` remotePatterns
   - Verify image URLs are accessible

2. **Build fails**
   - Check for TypeScript errors
   - Verify all dependencies are installed
   - Check Node.js version (18+)

3. **Form not submitting**
   - Verify API endpoint is correct
   - Check CORS settings
   - Test with browser console open

4. **Slow performance**
   - Check image sizes
   - Review bundle size
   - Enable caching headers

## Support

For deployment support:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
- Community: Next.js GitHub Discussions

---

**Ready to Deploy?** Follow the checklist above and choose your preferred deployment option!
