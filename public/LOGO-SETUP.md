# Logo Setup Instructions for Softx World

## Main Logo File

Save your logo image as **`logo.png`** in the `/public` directory.

**Recommended specifications:**
- Format: PNG with transparent background
- Size: 512x512 pixels (or larger, square aspect ratio)
- Color: Full color version with the blue/purple gradient

## Favicon Files Needed

Create the following favicon versions from your logo and place them in the `/public` directory:

### Required Files:

1. **favicon.ico** (32x32, 16x16)
   - Multi-size ICO file for browser tabs
   - Legacy browser support

2. **icon-16x16.png** (16x16)
   - Small browser tab icon

3. **icon-32x32.png** (32x32)
   - Standard browser tab icon

4. **apple-touch-icon.png** (180x180)
   - iOS home screen icon
   - Should have slight padding and no transparency

5. **android-chrome-192x192.png** (192x192)
   - Android home screen icon

6. **android-chrome-512x512.png** (512x512)
   - High-resolution Android icon

7. **safari-pinned-tab.svg** (vector)
   - Monochrome SVG for Safari pinned tabs
   - Should be a simplified, solid black version

## Quick Generation Options

### Option 1: Using Online Tools
- Visit https://realfavicongenerator.net/
- Upload your logo.png
- Download the generated favicon package
- Replace files in `/public` directory

### Option 2: Using ImageMagick (Command Line)
```bash
cd /home/bawa/work/Startup/soft-tech-website/public

# Generate various sizes from logo.png
convert logo.png -resize 16x16 icon-16x16.png
convert logo.png -resize 32x32 icon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 android-chrome-192x192.png
convert logo.png -resize 512x512 android-chrome-512x512.png

# Generate multi-size favicon.ico
convert logo.png -resize 32x32 -resize 16x16 favicon.ico
```

### Option 3: Using GIMP or Photoshop
1. Open logo.png
2. Export/Save As each required size
3. For favicon.ico, use a plugin or online converter

## Current Logo Design

Your Softx World logo features:
- Stylized "X" with orbital swoosh elements
- Blue to purple gradient
- Modern, tech-forward aesthetic
- Circular composition

## Where Logos Are Used

The logo is currently integrated in:
- ✅ Navigation bar (top left)
- ✅ Footer
- ✅ Browser tab (favicon)
- ✅ Mobile home screen icons
- ✅ SEO metadata (og:image references)

## Next Steps

1. Save your main logo as `/public/logo.png`
2. Generate all favicon versions using one of the methods above
3. Run `npm run dev` to see your logo in action
4. Test on different browsers and devices

## Metadata References

The logo is referenced in:
- `app/layout.tsx` - Favicon configurations
- `lib/seo/schemas.ts` - Organization logo URL
- `components/ui/Navigation.tsx` - Header logo
- `components/ui/Footer.tsx` - Footer logo
- `public/site.webmanifest` - PWA icons
