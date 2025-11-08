# Decor'em by Sonya Mehta - Setup Instructions

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

Or if you prefer yarn:

```powershell
yarn install
```

### 2. Environment Setup

The `.env` file has been created with placeholder values. Update the following:

- `NEXT_PUBLIC_PHONE` - Your business phone number
- `NEXT_PUBLIC_EMAIL` - Your business email
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID (optional)
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID (optional)

### 3. Add Images

Create the image directory structure and add your images:

```
public/
└── images/
    ├── hero/
    │   ├── livingroom.jpg
    │   ├── about.jpg
    │   ├── services.jpg
    │   ├── process.jpg
    │   ├── portfolio.jpg
    │   ├── testimonials.jpg
    │   ├── inspiration.jpg
    │   ├── blog.jpg
    │   ├── contact.jpg
    │   └── renovation.jpg
    ├── kitchens/
    ├── living/
    ├── bedrooms/
    ├── bathrooms/
    ├── commercial/
    ├── team/
    ├── blog/
    ├── inspiration/
    └── logos/
```

### 4. Run Development Server

```powershell
npm run dev
```

The site will be available at: `http://localhost:3000`

### 5. Build for Production

```powershell
npm run build
npm start
```

## 📁 Project Structure Summary

```
/decorem-website
├── /public                 # Static assets (images, favicon)
├── /src
│   ├── /components        # Reusable React components
│   ├── /pages            # Next.js pages (routes)
│   ├── /styles           # CSS files (global, theme, animations)
│   ├── /data             # JSON data files
│   └── /hooks            # Custom React hooks
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` and `src/styles/theme.css` to change the color palette.

### Typography

Google Fonts (Playfair Display & Lato) are loaded in `src/styles/globals.css`.

### Content

Update JSON files in `/src/data/`:
- `services.json` - Service offerings
- `testimonials.json` - Client reviews
- `portfolio.json` - Project showcases
- `process.json` - Design process steps

### Components

All components are in `/src/components/` and accept props for customization:
- `HeroSection.jsx`
- `ServiceCard.jsx`
- `TestimonialCarousel.jsx`
- `BeforeAfterSlider.jsx`
- `CTASection.jsx`
- `AnimationWrapper.jsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

```powershell
npm run build
```

Then drag the `.next` folder to Netlify or use their CLI.

## ✅ Checklist Before Launch

- [ ] Add all images to `/public/images/`
- [ ] Update `.env` with real contact information
- [ ] Update `next-seo.config.js` with real URLs
- [ ] Replace placeholder images in components
- [ ] Add Google Analytics tracking ID
- [ ] Test all pages and forms
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target 90+)
- [ ] Set up contact form backend
- [ ] Configure domain DNS

## 📞 Support

For questions or issues during setup, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with ❤️ for Decor'em by Sonya Mehta**
