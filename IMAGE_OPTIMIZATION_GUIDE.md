# Image Optimization Guide - Fixing Slow Loading

## Current Issue
Your images are very large (2-5 MB each), causing slow website loading:
- IMG_0448.jpg: **5.25 MB** ⚠️
- IMG_0537.jpg: **3.68 MB** ⚠️
- IMG_4082.jpg: **3.77 MB** ⚠️
- IMG_1654.jpg: **2.48 MB** ⚠️

**Target size for web: 200-500 KB each**

## Quick Fix Options

### Option 1: Online Image Compressor (Easiest)
1. Visit: https://tinypng.com/ or https://compressor.io/
2. Upload your JPG files one by one
3. Download the compressed versions
4. Replace the files in `src/assets/` folder
5. **Expected result: 80-90% size reduction**

### Option 2: Using Windows Paint (Built-in)
1. Open each image in Paint
2. Click "Resize" → Choose "Pixels"
3. Set width to **800-1000 pixels** (maintain aspect ratio)
4. Save as JPG with **85% quality**
5. Replace original files

### Option 3: Using Free Software (GIMP)
1. Download GIMP (free): https://www.gimp.org/downloads/
2. Open each image
3. Image → Scale Image → Set width to **800-1000px**
4. File → Export As → Choose JPG → Set quality to **85%**
5. Save and replace files

### Option 4: PowerShell Script (Advanced)
```powershell
# Run this in PowerShell from the assets folder
Add-Type -AssemblyName System.Drawing
$files = Get-ChildItem *.jpg
foreach ($file in $files) {
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $newWidth = 800
    $newHeight = [int]($img.Height * $newWidth / $img.Width)
    $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($newImg)
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
    $newImg.Save("optimized_$($file.Name)", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    $newImg.Dispose()
    $graphics.Dispose()
}
```

## Performance Improvements Already Applied
✅ Added lazy loading to images
✅ Proper alt text for accessibility  
✅ Responsive image sizing

## Expected Results After Optimization
- **Loading time: 10-15 seconds → 2-3 seconds**
- **Better user experience**
- **Mobile-friendly performance**
- **Maintained image quality**

## Priority Images to Optimize (in order)
1. **IMG_0448.jpg** (5.25 MB - highest priority)
2. **IMG_4082.jpg** (3.77 MB)
3. **IMG_0537.jpg** (3.68 MB)
4. **IMG_1654.jpg** (2.48 MB)

**Recommendation: Use TinyPNG.com for quickest results!**