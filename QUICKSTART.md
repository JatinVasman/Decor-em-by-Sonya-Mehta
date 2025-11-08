# 🚀 Quick Start Guide - Decor'em by Sonya Mehta

## Installation (5 minutes)

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Update environment variables** in `.env`:
   - Add your phone number
   - Add your email address
   - Add analytics IDs (optional)

3. **Run development server:**
   ```powershell
   npm run dev
   ```

4. **Open browser:** http://localhost:3000

---

## 📁 Project Structure at a Glance

```
/decorem-website
├── /public/images/          ← Add your images here
├── /src
│   ├── /components/        ← Reusable UI components
│   ├── /pages/            ← Website pages (routes)
│   ├── /styles/           ← CSS files
│   ├── /data/             ← Edit content here (JSON)
│   └── /hooks/            ← Custom React hooks
├── package.json
├── next.config.js
└── tailwind.config.js
```

---

## ✏️ How to Edit Content

### Services
Edit `src/data/services.json`

### Testimonials
Edit `src/data/testimonials.json`

### Portfolio Projects
Edit `src/data/portfolio.json`

### Process Steps
Edit `src/data/process.json`

### Page Content
Edit files in `src/pages/`:
- `index.jsx` - Home page
- `about.jsx` - About page
- `services.jsx` - Services page
- `portfolio.jsx` - Portfolio page
- `process.jsx` - Process page
- `contact.jsx` - Contact page
- etc.

---

## 🎨 Common Tasks

### Change Colors
Edit `tailwind.config.js` or `src/styles/theme.css`

### Add a New Page
1. Create `src/pages/newpage.jsx`
2. Add link in `src/components/Navbar.jsx`
3. Add link in `src/components/Footer.jsx`

### Add Images
1. Place images in `public/images/[category]/`
2. Reference in code: `/images/category/image.jpg`

### Update Contact Info
Edit `.env` file (phone, email, address)

### Change Fonts
Edit `src/styles/globals.css` (Google Fonts import)

---

## 🧩 Component Quick Reference

### Create a Hero Section
```jsx
<HeroSection
  title="Your Title"
  description="Your description"
  image="/images/hero/your-image.jpg"
  primaryCTA="Button Text"
  primaryLink="/link"
/>
```

### Create a Service Card
```jsx
<ServiceCard
  title="Service Name"
  description="Brief description"
  image="/images/services/service.jpg"
  link="/services#anchor"
/>
```

### Add a CTA Section
```jsx
<CTASection
  title="Ready to Start?"
  description="Let's work together"
  primaryText="Contact Us"
  primaryLink="/contact"
  variant="gradient"
/>
```

### Add Testimonials
```jsx
<TestimonialCarousel 
  testimonials={testimonialsData}
  autoPlay={true}
/>
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | #C9A76F | Buttons, accents |
| Sage | #A8B5A2 | Secondary accents |
| Charcoal | #2B2B2B | Body text |
| Warm White | #FAF9F6 | Background |
| Dark Navy | #1E2A36 | Footer, dark sections |

---

## 📱 Responsive Classes

| Class | Breakpoint | Size |
|-------|------------|------|
| `sm:` | 640px+ | Small tablets |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Laptops |
| `xl:` | 1280px+ | Desktops |

Example: `text-2xl md:text-4xl lg:text-6xl`

---

## 🚀 Build & Deploy

### Build for Production
```powershell
npm run build
```

### Test Production Build
```powershell
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import repository on vercel.com
3. Deploy automatically

---

## 📚 Documentation

- **Full README:** `README.md`
- **Setup Guide:** `SETUP.md`
- **Design System:** `DESIGN-SYSTEM.md`
- **Component Guide:** `COMPONENT-GUIDE.md`
- **Content Guide:** `CONTENT-GUIDE.md`

---

## 🆘 Common Issues

### Port 3000 already in use
```powershell
# Kill the process using port 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
```

### Images not loading
- Ensure images are in `public/images/`
- Use `/images/...` (not `./images/...`)
- Check file extensions match exactly

### Styles not applying
```powershell
# Clear Next.js cache
Remove-Item -Path ".next" -Recurse -Force
npm run dev
```

---

## ✅ Pre-Launch Checklist

- [ ] All images added to `/public/images/`
- [ ] Contact info updated in `.env`
- [ ] Test on Chrome, Firefox, Safari
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully
- [ ] Replace placeholder content
- [ ] Add Google Analytics ID
- [ ] Test contact form
- [ ] Update SEO metadata

---

**Need Help?** 
- Check documentation files
- Visit Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

---

**Version:** 1.0.0  
**Last Updated:** November 8, 2025
