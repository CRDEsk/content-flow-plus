# Favicon Setup Guide

## Overview
The website is configured to use the golden shield CRD logo as the favicon. You need to add the image files to the `public/` folder.

## Required Files

Place these files in the `/public/` directory:

1. **favicon.ico** - 16x16, 32x32, 48x48 (multi-size ICO file)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **android-chrome-192x192.png** - 192x192 pixels (for Android)
5. **android-chrome-512x512.png** - 512x512 pixels (for Android)
6. **apple-touch-icon.png** - 180x180 pixels (for iOS)

## Image Specifications

### Design Requirements:
- **Logo**: Golden shield with "CRD" letters
- **Background**: Transparent or dark background
- **Color**: Golden (#D4AF37) with glow effect
- **Format**: PNG for all sizes except favicon.ico

### Size Guidelines:
- **favicon.ico**: Multi-size ICO (16x16, 32x32, 48x48)
- **Small icons** (16x16, 32x32): Simple, recognizable at small sizes
- **Large icons** (192x192, 512x512): Full detail with glow effect
- **Apple Touch Icon** (180x180): Optimized for iOS devices

## How to Generate Favicons

### Option 1: Online Tools
1. Use [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your golden shield logo (high resolution, square)
3. Configure settings:
   - Theme color: #D4AF37
   - Background color: #000000
   - iOS: Enable
   - Android: Enable
4. Download and extract all files to `/public/`

### Option 2: Manual Creation
1. Start with a high-resolution square image (1024x1024 or larger)
2. Export/resize to each required size
3. Use an ICO converter for favicon.ico
4. Ensure all PNGs have transparent backgrounds

## File Structure

```
public/
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  ├── apple-touch-icon.png
  └── site.webmanifest (already created)
```

## Testing

After adding the files:
1. Clear browser cache
2. Check favicon in browser tab
3. Test on mobile devices (iOS/Android)
4. Verify in browser DevTools > Application > Manifest

## Notes

- The current `favicon.ico` in `/public/` will be replaced
- All links are already configured in `index.html`
- The `site.webmanifest` file is already created
- Theme color matches your brand (#D4AF37)

