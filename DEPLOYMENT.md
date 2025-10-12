# GRI Portfolio - Vercel Deployment Guide

## 🚀 Quick Deployment to Vercel

### Method 1: Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project directory:
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## 📱 Mobile Responsive Features

### ✅ Implemented:
- **Mobile-first navigation** with hamburger menu
- **Responsive breakpoints**: 768px, 480px
- **Touch-friendly buttons** (minimum 44px height)
- **Optimized typography** for mobile screens
- **Flexible layouts** that adapt to screen sizes
- **Mobile-optimized forms** (prevents iOS zoom)

### 🎯 Key Mobile Features:
- Collapsible navigation menu
- Touch-friendly interface
- Optimized image sizes
- Readable typography on small screens
- Fast loading on mobile connections

## 🔧 Build Configuration

### Environment:
- **Framework**: Vite + React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18+ recommended

### Performance Optimizations:
- Lazy loading for images
- Optimized bundle splitting
- Compressed assets
- Fast refresh for development

## 📊 Mobile Testing

Test your deployed site on:
- **Chrome DevTools** (Mobile simulation)
- **Real mobile devices** (iOS/Android)
- **Different screen sizes** (320px - 768px)

## 🌐 Domain Setup

After deployment:
1. Get your Vercel URL (e.g., `gri-portfolio.vercel.app`)
2. Optional: Add custom domain in Vercel settings
3. Configure SSL (automatic with Vercel)

## 📝 Post-Deployment

1. Test all pages on mobile
2. Verify navigation works properly
3. Check image loading and performance
4. Ensure contact form functionality
5. Test across different browsers

Your GRI Portfolio is now ready for production! 🎉