# 🗺️ Site Architecture - Decor'em by Sonya Mehta

## Site Map

```
Decor'em by Sonya Mehta Website
│
├── 🏠 Home (/)
│   ├── Hero Section
│   ├── Services Overview (6 cards)
│   ├── Why Choose Us
│   ├── Testimonials Carousel
│   └── CTA Section
│
├── 👤 About (/about)
│   ├── Hero Section
│   ├── Sonya's Story
│   ├── Values (3 pillars)
│   ├── Awards & Recognition
│   └── CTA Section
│
├── 🎨 Services (/services)
│   ├── Hero Section
│   ├── All Services Grid (6 services)
│   ├── What's Included
│   └── CTA Section
│
├── 📋 Process (/process)
│   ├── Hero Section
│   ├── 6-Step Process
│   │   ├── 1. Discovery & Consultation
│   │   ├── 2. Concept Development
│   │   ├── 3. Design Refinement
│   │   ├── 4. Project Planning
│   │   ├── 5. Implementation
│   │   └── 6. Final Reveal & Styling
│   ├── FAQ Section
│   └── CTA Section
│
├── 🖼️ Portfolio (/portfolio)
│   ├── Hero Section
│   ├── Category Filter
│   ├── Project Grid (6 projects)
│   │   ├── Kitchens
│   │   ├── Living Rooms
│   │   ├── Bedrooms
│   │   ├── Bathrooms
│   │   └── Commercial
│   └── CTA Section
│
├── 💬 Testimonials (/testimonials)
│   ├── Hero Section
│   ├── Featured Carousel
│   ├── All Reviews Grid (6 reviews)
│   ├── Stats Section
│   └── CTA Section
│
├── 💡 Inspiration (/inspiration)
│   ├── Hero Section
│   ├── Design Collections (6 styles)
│   ├── Pinterest-Style Gallery
│   └── CTA Section
│
├── 📰 Blog (/blog)
│   ├── Hero Section
│   ├── Featured Post
│   ├── Category Filter
│   ├── Articles Grid (6 posts)
│   ├── Newsletter Signup
│   └── CTA Section
│
└── 📞 Contact (/contact)
    ├── Hero Section
    ├── Contact Information
    ├── Contact Form
    └── Map (embedded)
```

---

## 🧩 Component Hierarchy

### Global Layout
```
_app.jsx
├── DefaultSeo (Global SEO)
├── Navbar (Fixed)
│   ├── Logo/Brand
│   ├── Navigation Links (9 pages)
│   ├── Contact Info
│   ├── Primary CTA Button
│   └── Mobile Menu (hamburger)
│
├── Main Content Area
│   └── [Page Component]
│       ├── NextSeo (Page-specific)
│       ├── HeroSection
│       ├── Page Content
│       │   ├── SectionHeader
│       │   ├── ServiceCard / Content
│       │   ├── TestimonialCarousel
│       │   ├── BeforeAfterSlider
│       │   └── AnimationWrapper
│       └── CTASection
│
└── Footer
    ├── Brand Info
    ├── Services Links (6)
    ├── Company Links (6)
    ├── Contact Info
    ├── Newsletter Signup
    ├── Social Media Links (3)
    └── Legal Links (3)
```

---

## 📱 Navigation Structure

### Primary Navigation (Desktop)
```
Navbar (Top - Fixed)
├── Home
├── About
├── Services
├── Portfolio
├── Process
├── Testimonials
├── Inspiration
├── Blog
└── Contact (CTA Button)
```

### Mobile Navigation
```
Hamburger Menu (Slide-in)
├── All Pages (vertical list)
├── Contact Info
│   ├── Phone
│   └── Email
└── Primary CTA Button
```

### Footer Navigation
```
Footer (4 Columns)
├── Brand + Social Media
├── Services (6 links)
├── Company (6 links)
└── Contact Info + Newsletter
```

---

## 🗂️ Data Architecture

### Services Data Structure
```json
{
  "id": "unique-id",
  "title": "Service Name",
  "description": "Brief description",
  "longDescription": "Detailed description",
  "image": "/images/path/to/image.jpg",
  "features": ["Feature 1", "Feature 2"],
  "link": "/portfolio#category"
}
```

### Testimonials Data Structure
```json
{
  "id": 1,
  "name": "Client Name",
  "location": "City, Houston",
  "project": "Project Type",
  "rating": 5,
  "quote": "Testimonial text",
  "image": "/images/team/client.jpg",
  "date": "YYYY-MM-DD"
}
```

### Portfolio Data Structure
```json
{
  "id": "project-id",
  "category": "kitchens|living|bedrooms|bathrooms|commercial",
  "title": "Project Title",
  "location": "City, Houston",
  "year": 2024,
  "description": "Brief description",
  "longDescription": "Detailed description",
  "images": ["/image1.jpg", "/image2.jpg"],
  "featured": true|false,
  "tags": ["tag1", "tag2"]
}
```

### Process Data Structure
```json
{
  "steps": [
    {
      "number": 1,
      "title": "Step Title",
      "shortDescription": "One-liner",
      "description": "Full description",
      "duration": "1-2 weeks",
      "deliverables": ["Item 1", "Item 2"],
      "icon": "IconName"
    }
  ],
  "faq": [
    {
      "question": "Question?",
      "answer": "Answer text"
    }
  ]
}
```

---

## 🎨 Style Architecture

### CSS File Structure
```
/src/styles/
├── globals.css          → Base styles, Tailwind directives, global resets
├── theme.css           → CSS variables, color palette, design tokens
├── animations.css      → Keyframes, animation classes, transitions
└── typography.css      → Font classes, text styles, type scale
```

### Component-Specific Styles
```
Each component uses:
├── Tailwind utility classes (primary)
├── Custom CSS classes from /styles/ (secondary)
└── Inline styles via Framer Motion (animations only)
```

---

## 🔄 User Journey Flows

### Primary User Flow (New Visitor)
```
1. Land on Home
   ↓
2. View Services Overview
   ↓
3. Read Testimonials
   ↓
4. Click "Schedule Consultation"
   ↓
5. Fill Contact Form
   ↓
6. Submit → Conversion ✅
```

### Secondary Flow (Exploring Work)
```
1. Land on Home
   ↓
2. Click "View Portfolio"
   ↓
3. Filter by Category
   ↓
4. View Project Details
   ↓
5. Click "Start Your Project"
   ↓
6. Contact Form → Conversion ✅
```

### Research Flow (Learning Process)
```
1. Land via Search
   ↓
2. Navigate to Process
   ↓
3. Read 6-Step Guide
   ↓
4. View FAQ
   ↓
5. Click "Schedule Consultation"
   ↓
6. Contact Form → Conversion ✅
```

---

## 🎯 Conversion Points

### Primary CTAs (Most Important)
- Hero sections → "Start Your Project" → /contact
- CTA sections → "Schedule Consultation" → /contact
- Navbar → "Start Your Project" button → /contact

### Secondary CTAs
- "View Portfolio" → /portfolio
- "View Our Process" → /process
- "Explore Services" → /services
- Newsletter signups → Email capture

### Tertiary CTAs
- Phone number (click to call)
- Email address (click to email)
- Social media links

---

## 📊 Content Matrix

| Page | H1 | Main Sections | Primary CTA | Secondary CTA |
|------|-----|---------------|-------------|---------------|
| Home | "Transforming Homes..." | Hero, Services, Why Us, Testimonials, CTA | Start Project | View Portfolio |
| About | "Design Rooted in..." | Hero, Story, Values, Awards, CTA | Start Project | View Work |
| Services | "Comprehensive Design..." | Hero, Services Grid, Included, CTA | Schedule | View Portfolio |
| Process | "Design Made Simple" | Hero, 6 Steps, FAQ, CTA | Schedule | View Portfolio |
| Portfolio | "Our Work Speaks..." | Hero, Filter, Projects Grid, CTA | Schedule | View Process |
| Testimonials | "Trusted by..." | Hero, Carousel, Reviews, Stats, CTA | Schedule | — |
| Inspiration | "Find Your Style" | Hero, Collections, Gallery, CTA | Schedule | View Portfolio |
| Blog | "Design Insights..." | Hero, Featured, Articles, Newsletter, CTA | Schedule | — |
| Contact | "Start Your Journey" | Hero, Info, Form, Map | Call Now | — |

---

## 🔍 SEO Structure

### URL Structure
```
https://www.decoremsonya.com/
├── /                    (Home)
├── /about              (About)
├── /services           (Services)
├── /process            (Process)
├── /portfolio          (Portfolio)
├── /testimonials       (Testimonials)
├── /inspiration        (Inspiration)
├── /blog               (Blog)
└── /contact            (Contact)
```

### Future URLs (Expandable)
```
├── /portfolio/[project-slug]    (Individual project pages)
├── /blog/[post-slug]           (Individual blog posts)
├── /services/[service-slug]    (Individual service pages)
```

### Meta Structure (All Pages)
- Title: "[Page] | Decor'em by Sonya Mehta"
- Description: Unique 150-160 characters
- OG Image: Page-specific 1200x630
- Schema.org: LocalBusiness + Page-specific
- Keywords: Houston interior design + page-specific

---

## 🚀 Technical Architecture

### Framework Stack
```
Next.js 14 (React 18)
├── Pages Router
├── Static Site Generation (SSG)
├── Image Optimization
└── SEO Optimization

Tailwind CSS 3
├── Custom Theme
├── Utility-First
└── JIT Compiler

Framer Motion 10
├── Scroll Animations
├── Page Transitions
└── Interactive Elements

Additional Libraries
├── next-seo (SEO management)
├── lucide-react (Icons)
└── React Hooks (State management)
```

### Build Process
```
Development
npm run dev → http://localhost:3000

Production
npm run build
  ↓
.next/ folder generated
  ↓
npm start → Production server
  OR
Vercel Deploy → Global CDN
```

---

## 📦 Asset Management

### Image Organization
```
/public/images/
├── /hero/           → Hero background images (9)
├── /kitchens/       → Kitchen project images
├── /living/         → Living room images
├── /bedrooms/       → Bedroom images
├── /bathrooms/      → Bathroom images
├── /commercial/     → Commercial project images
├── /team/           → Team & client photos
├── /logos/          → Logo variations
├── /blog/           → Blog post images
└── /inspiration/    → Inspiration gallery images
```

### Image Specifications
- Format: WebP (primary), AVIF (optimized), JPG (fallback)
- Max file size: 500KB
- Hero images: 1920x1080 or 2560x1440
- Service cards: 800x600 (4:3)
- Portfolio: 1200x900 (4:3)
- Testimonials: 400x400 (1:1)

---

## 🔐 Security & Performance

### Security Features
- Environment variables (.env)
- No exposed API keys
- Form validation
- HTTPS enforced (Vercel)
- CORS configured

### Performance Features
- Image optimization (Next.js)
- Code splitting (automatic)
- Lazy loading (below fold)
- Font optimization
- Minified CSS/JS
- Gzip compression
- CDN delivery (Vercel)

### Target Metrics
- Lighthouse Performance: 90+
- First Contentful Paint: <2s
- Time to Interactive: <3.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

---

**Last Updated**: November 8, 2025  
**Version**: 1.0.0  
**Status**: Production Ready
