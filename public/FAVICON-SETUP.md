# Favicon and Icon Setup Instructions

This directory needs the following favicon and icon files for complete SEO and PWA support.

## Required Files

### Favicon Files
- `favicon.ico` (48x48 or 32x32, multi-resolution)
- `icon-16x16.png` (16x16)
- `icon-32x32.png` (32x32)

### Apple Touch Icons
- `apple-touch-icon.png` (180x180)

### Android Chrome Icons
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)

### Windows Tiles
- `mstile-150x150.png` (150x150)

### Safari Pinned Tab
- `safari-pinned-tab.svg` (monochrome SVG)

### Open Graph & Twitter Images
- `og-image.jpg` (1200x630) - Homepage Open Graph image
- `twitter-image.jpg` (1200x675) - Homepage Twitter Card image
- `og-blog.jpg` (1200x630) - Blog page Open Graph image
- `twitter-blog.jpg` (1200x675) - Blog page Twitter Card image
- `logo.png` (Square, at least 512x512) - Company logo

## How to Generate These Files

### Option 1: Using Online Tools
1. Visit https://realfavicongenerator.net/
2. Upload your logo (SVG or high-resolution PNG, minimum 512x512)
3. Customize settings for each platform
4. Download the generated package
5. Extract all files to this directory

### Option 2: Using Design Tools
1. Create your logo in a vector format (Illustrator, Figma, etc.)
2. Export at the required sizes listed above
3. Use ImageMagick to convert to ICO format:
   ```bash
   convert icon-32x32.png icon-16x16.png favicon.ico
   ```

### Option 3: Manual Creation
For each required size:
1. Open your logo in an image editor (Photoshop, GIMP, etc.)
2. Resize canvas to exact dimensions (maintain aspect ratio)
3. Export as PNG (or SVG for safari-pinned-tab)
4. Optimize with tools like TinyPNG or ImageOptim

## Brand Colors
Based on the website theme:
- Primary: #3b82f6 (Blue)
- Accent: #8b5cf6 (Purple)
- Background: #ffffff (White)

Use these colors consistently across all icons and images.

## Testing
After adding all files, test with:
1. Google's Rich Results Test: https://search.google.com/test/rich-results
2. Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
3. Twitter Card Validator: https://cards-dev.twitter.com/validator
4. Favicon Checker: https://realfavicongenerator.net/favicon_checker

## Current Status
- [x] site.webmanifest configured
- [x] browserconfig.xml configured
- [ ] Favicon files need to be generated
- [ ] Social media images need to be created
