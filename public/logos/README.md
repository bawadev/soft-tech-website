# Company Logos

This directory contains professional SVG logos for the companies mentioned on the Softx World website.

## Current Logos

The following logo files are professional SVG designs with accurate brand colors:

1. **new-york-life.svg** - New York Life Insurance
2. **workwave.svg** - Work Wave
3. **mapbe.svg** - Mapbe Well Being
4. **virtusa.svg** - Virtusa
5. **codegen.svg** - Codegen
6. **ifs.svg** - IFS

## Logo Details

Each logo has been designed with:
- Accurate brand colors
- Professional iconography
- Scalable SVG format
- Clean, modern design

**Brand Colors Used:**
- New York Life: #003087 (Navy Blue)
- WorkWave: #4CAF50 / #2E7D32 (Green)
- Mapbe Well Being: #4CAF50 / #2E7D32 (Green)
- Virtusa: #E31E24 (Red)
- Codegen: #00A3E0 (Blue)
- IFS: #FF6600 (Orange)

## How to Replace with Official Logos (Optional)

### Option 1: Using Official Logos

1. **Download official logos** from each company's brand/press kit:
   - New York Life: https://www.newyorklife.com/newsroom/media-kit
   - WorkWave: https://www.workwave.com/about-us/press-kit/
   - Others: Contact the company's marketing department or check their website

2. **Save logos** in this directory with the same filenames
3. **Recommended format**: SVG (vector) or PNG with transparent background
4. **Recommended size**: 200x60px or similar aspect ratio

### Option 2: Using High-Quality Logo Images

If you have PNG/JPG logos:
1. Ensure they have transparent backgrounds (PNG preferred)
2. Optimize them using tools like TinyPNG or ImageOptim
3. Save with the same filenames (you can use .png extension)
4. Update the file extensions in `/components/ui/TrustedBy.tsx` if needed

### Option 3: Creating Custom SVG Logos

If you have design skills:
1. Create SVG logos matching each company's brand guidelines
2. Keep dimensions around 200x60px viewBox
3. Use appropriate brand colors
4. Maintain simplicity for better scalability

## Brand Guidelines

When using actual company logos, ensure you:
- ✅ Follow each company's brand guidelines
- ✅ Use approved logo versions
- ✅ Maintain proper spacing and sizing
- ✅ Don't modify or distort logos
- ✅ Have permission to display the logos

## File Specifications

**Ideal logo specifications:**
- Format: SVG (preferred) or PNG
- Dimensions: 200x60px (3.33:1 aspect ratio)
- Background: Transparent
- Color: Full color (grayscale effect is applied via CSS)
- File size: < 50KB

## Where Logos Are Displayed

These logos appear in:
- Hero section (via TrustedBy component)
- About section (company badges)

The logos are displayed with:
- Grayscale filter by default
- Full color on hover
- Responsive sizing
- Tooltip showing full company name

## Testing

After replacing logos:
1. Start dev server: `npm run dev`
2. Visit http://localhost:3200
3. Check the hero section
4. Hover over logos to ensure they display correctly
5. Test on mobile and desktop views

## Legal Note

Ensure you have the right to use each company's logo on your website. This may require:
- Partnership agreements
- Written permission
- Compliance with brand guidelines
- Proper attribution if required
