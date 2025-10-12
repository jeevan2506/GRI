# HEIC to JPG Conversion Instructions

## Issue
HEIC files are not supported by most web browsers, which is why your images aren't showing on the main page.

## Solution: Convert HEIC to JPG

### Method 1: Using Windows Photos App (Easiest)
1. Open each HEIC file in Windows Photos app
2. Click the "..." menu → "Save as"
3. Choose JPG format
4. Save with these names in the `src/assets/` folder:
   - `IMG_0448.jpg`
   - `IMG_0537.jpg`
   - `IMG_4082.jpg`
   - `IMG_4101.jpg`

### Method 2: Using Online Converter
1. Visit: https://convertio.co/heic-jpg/
2. Upload your HEIC files
3. Download as JPG
4. Rename and place in `src/assets/` folder

### Method 3: Using GIMP (Free Software)
1. Download GIMP: https://www.gimp.org/downloads/
2. Install HEIC plugin
3. Open HEIC files and export as JPG

## After Conversion
Once you have the JPG files, I'll update the galleryData.js to use them:

```javascript
export const galleryImages = [
  {
    src: '/src/assets/IMG_0448.jpg',
    caption: 'Field visit with local artisans'
  },
  {
    src: '/src/assets/IMG_0537.jpg',
    caption: 'Workshop on frugal innovation'
  },
  {
    src: '/src/assets/IMG_4082.jpg',
    caption: 'Community co-design session'
  },
  {
    src: '/src/assets/IMG_4101.jpg',
    caption: 'Rural prototype testing'
  }
]
```

## Temporary Solution
I've temporarily replaced your HEIC images with placeholder images from Unsplash so the website works properly. Once you convert your HEIC files to JPG, we can replace these placeholders with your actual images.

## File Sizes
- Recommended JPG quality: 80-90%
- Max resolution: 1200px width (for web performance)
- This will keep file sizes reasonable while maintaining good quality