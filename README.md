# Soft Tech - AI-Powered Business Solutions Website

A modern, professional Next.js website for Soft Tech, an AI-powered software company specializing in business transformation and competitive advantage through cutting-edge technology solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with excellent tablet and desktop scaling
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Performance**: Optimized Core Web Vitals with image optimization and lazy loading
- **Accessibility**: WCAG-compliant with proper ARIA labels and semantic markup
- **Interactive UI**: Smooth animations and micro-interactions using Tailwind CSS
- **Blog System**: Dynamic blog with routing and rich content support
- **Contact Form**: Validated form with React Hook Form and Zod schema validation

## 📦 Project Structure

```
soft-tech-website/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic blog post pages
│   │   └── page.tsx               # Blog listing page
│   ├── globals.css                # Global styles and Tailwind layers
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Homepage
├── components/
│   ├── sections/
│   │   ├── About.tsx             # About Us section
│   │   ├── Contact.tsx           # Contact form section
│   │   ├── Hero.tsx              # Hero/Landing section
│   │   ├── Portfolio.tsx         # Portfolio/Case studies
│   │   ├── Pricing.tsx           # Pricing section
│   │   ├── Services.tsx          # Services section
│   │   └── index.ts              # Section exports
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Card.tsx              # Card component
│       ├── Container.tsx         # Container wrapper
│       ├── Footer.tsx            # Footer component
│       ├── Input.tsx             # Form input component
│       ├── Navigation.tsx        # Header navigation
│       ├── Section.tsx           # Section wrapper
│       ├── Textarea.tsx          # Textarea component
│       └── index.ts              # UI component exports
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Slate tones for text and backgrounds
- **Accent**: Purple for highlights (#a855f7)

### Typography

- Font Family: Inter (Google Fonts)
- Heading scales: 4xl to 6xl (responsive)
- Body text: base to xl

### Components

All components follow a consistent design pattern:
- Hover effects with smooth transitions
- Shadow elevations for depth
- Rounded corners for modern aesthetic
- Responsive padding and spacing

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd soft-tech-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Sections

### 1. Hero Section
- Compelling headline emphasizing client acquisition
- Clear value proposition with CTA buttons
- Trust indicators (7+ years experience, 50+ projects, 24/7 support)
- Professional hero image with floating feature cards

### 2. About Us
- Company values and unique differentiators
- Team expertise highlighting Fortune 500 experience
- Trust badges from major companies (New York Life, Work Wave, Virtusa, etc.)

### 3. Services
Six comprehensive AI-powered services:
- AI-Powered Chat Agents
- Legacy System Migrations
- AI Knowledge Systems
- Strategic Consultation
- Website Maintenance & Tech Upgrades
- User Analysis & Customer Acquisition

### 4. Portfolio/Case Studies
Real success stories with:
- Project details and descriptions
- Quantifiable metrics and results
- Technology tags
- Company branding

### 5. Pricing
Three tiers with custom pricing model:
- Starter (Small businesses)
- Professional (Growing businesses) - Most Popular
- Enterprise (Large-scale operations)

All packages include lifetime support and continuous upgrades.

### 6. Contact Form
Professional contact form with:
- Form validation using Zod
- Multiple contact methods
- Service selection dropdown
- Response time expectations
- Trust badges

### 7. Blog
- SEO-optimized blog layout
- Category filtering
- Featured posts
- Dynamic routing for individual posts
- Newsletter subscription

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# API endpoints (if needed)
NEXT_PUBLIC_API_URL=your_api_url

# Form submission endpoint
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

### Image Optimization

Images are configured to work with:
- Unsplash (via remotePatterns in next.config.js)
- Local images in `/public` directory

### Metadata & SEO

Metadata is configured in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter card
- Keywords
- Robots directives

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's instructions for Next.js deployment.

## 📱 Responsive Breakpoints

- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

All components are mobile-first and scale beautifully across devices.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Proper heading hierarchy

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Content

Update content in component files:
- `components/sections/` - Main page sections
- `app/blog/page.tsx` - Blog posts data
- `components/ui/Footer.tsx` - Footer links and info

### Images

Replace placeholder images with your own:
- Update Unsplash URLs with your images
- Or use local images in `/public` directory

## 📊 Performance

Optimizations included:
- Image optimization with Next.js Image component
- Lazy loading for images
- CSS optimization with Tailwind
- Font optimization with next/font
- Minimal JavaScript bundle size

## 🔐 Form Handling

The contact form is ready for integration:
1. Replace the simulated API call in `components/sections/Contact.tsx`
2. Add your form submission endpoint
3. Configure success/error handling

Example integration:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## 📄 License

This project is built for Soft Tech. All rights reserved.

## 🤝 Support

For questions or support:
- Email: contact@softtech.com
- Response time: Within 24 hours
- Support: 24/7 Available

## 🎉 Credits

- Built with Next.js, React, TypeScript, and Tailwind CSS
- Icons and imagery from Unsplash
- Font: Inter from Google Fonts

---

**Note**: Remember to update placeholder content, images, and contact information with actual company data before deploying to production.
