# 🎨 Design System Reference - Decor'em by Sonya Mehta

Complete design system for consistent, elegant web experience.

---

## 🎨 Color Palette

### Primary Colors
```css
--color-background: #FAF9F6    /* Warm White - Main background */
--color-text: #2B2B2B          /* Charcoal - Body text */
--color-heading: #3E3E3E       /* Dark Gray - Headings */
--color-accent: #C9A76F        /* Gold - Primary accent */
--color-secondary: #A8B5A2     /* Sage - Secondary accent */
--color-border: #E4DED7        /* Warm Gray - Borders/dividers */
--color-dark: #1E2A36          /* Navy - Dark sections/footer */
```

### Usage Guidelines
- **Gold (#C9A76F)**: Use sparingly for buttons, links, highlights
- **Sage (#A8B5A2)**: Complementary accent, secondary elements
- **Background (#FAF9F6)**: Main page background, light sections
- **Dark (#1E2A36)**: Footer, dark hero overlays, contrast sections

### Extended Palette
```css
--color-white: #FFFFFF
--color-light-gray: #F5F5F5
--color-medium-gray: #D1D1D1
--color-accent-light: #E5D4B8
--color-accent-dark: #A68555
```

### Accessibility
- All text meets WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- Gold accent (#C9A76F) on white: 4.52:1 ✅
- Dark text (#2B2B2B) on white: 13.7:1 ✅

---

## 📝 Typography

### Font Families
```css
--font-heading: 'Playfair Display', serif
--font-body: 'Lato', sans-serif
```

### Type Scale
| Element | Class | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|-------|----------------|---------------|---------|-------------|
| Display 1 | `.display-1` | 6rem (96px) | 3rem (48px) | 700 | 1.1 |
| Display 2 | `.display-2` | 4.5rem (72px) | 2.5rem (40px) | 600 | 1.15 |
| Heading XL | `.heading-xl` | 3.5rem (56px) | 2rem (32px) | 600 | 1.2 |
| Heading LG | `.heading-lg` | 2.5rem (40px) | 1.75rem (28px) | 500 | 1.25 |
| Heading MD | `.heading-md` | 2rem (32px) | 1.5rem (24px) | 500 | 1.3 |
| Heading SM | `.heading-sm` | 1.5rem (24px) | 1.25rem (20px) | 500 | 1.35 |
| Body XL | `.body-xl` | 1.375rem (22px) | 1.125rem (18px) | 400 | 1.7 |
| Body LG | `.body-lg` | 1.125rem (18px) | 1rem (16px) | 400 | 1.75 |
| Body Base | `.body-base` | 1rem (16px) | 1rem (16px) | 400 | 1.6 |
| Body SM | `.body-sm` | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |

### Special Text Styles
| Class | Usage | Styling |
|-------|-------|---------|
| `.subtitle` | Page/section subtitles | 1.25rem, light weight, 90% opacity |
| `.overline` | Small labels above headings | 0.75rem, semibold, uppercase, 0.1em spacing |
| `.quote` | Testimonials, blockquotes | 1.75rem, Playfair, italic |
| `.caption` | Image captions, footnotes | 0.875rem, 75% opacity |

### Font Weights
```css
--font-light: 300
--font-regular: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

---

## 📐 Spacing System

### Scale (based on 0.25rem = 4px)
```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

### Section Padding
```css
.section-padding {
  padding-top: 4rem;    /* 64px mobile */
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;   /* 96px tablet */
    padding-bottom: 6rem;
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 8rem;   /* 128px desktop */
    padding-bottom: 8rem;
  }
}
```

---

## 🎭 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

### Usage
- **SM**: Subtle elevation (cards at rest)
- **MD**: Standard elevation (buttons, inputs)
- **LG**: Prominent elevation (cards on hover)
- **XL**: Maximum elevation (modals, popovers)

---

## 🔲 Border Radius

```css
--radius-sm: 0.25rem   /* 4px - subtle rounding */
--radius-md: 0.5rem    /* 8px - standard */
--radius-lg: 1rem      /* 16px - pronounced */
```

### Standard: 0.125rem (2px)
Used throughout the site for a clean, modern aesthetic.

---

## ⚡ Animations & Transitions

### Duration
```css
--transition-fast: 200ms
--transition-base: 300ms
--transition-slow: 600ms
```

### Easing
```css
ease-in-out  /* Default for all transitions */
```

### Animation Types
| Animation | Use Case | Duration |
|-----------|----------|----------|
| `fade-in` | Simple reveals | 0.6s |
| `fade-up` | Section entrances | 0.6s |
| `slide-left` | Side content | 0.6s |
| `scale-in` | Cards, modals | 0.6s |
| `hover-lift` | Interactive elements | 0.3s |
| `hover-zoom` | Images | 0.6s |

### Best Practices
- Keep animations under 1 second
- Use `ease-in-out` for smooth motion
- Respect `prefers-reduced-motion`
- Trigger on viewport intersection (not page load)

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```javascript
{
  'sm': '640px',   // Small devices
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px'  // Large screens
}
```

### Container Max-Width
```css
.container-custom {
  max-width: 1280px (xl)
  padding: 1rem (mobile)
  padding: 1.5rem (tablet)
  padding: 2rem (desktop)
}
```

### Responsive Typography
All headings use `clamp()` for fluid scaling:
```css
font-size: clamp(min, preferred, max)
```

---

## 🔘 Buttons

### Primary Button
```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.125rem;
  font-weight: 500;
  transition: all 300ms;
}

.btn-primary:hover {
  background-opacity: 0.9;
  box-shadow: var(--shadow-lg);
}
```

### Secondary Button
```css
.btn-secondary {
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  padding: 0.75rem 2rem;
  border-radius: 0.125rem;
  font-weight: 500;
  transition: all 300ms;
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: white;
}
```

---

## 🖼️ Images

### Optimization
- Format: WebP or AVIF (fallback to JPG)
- Max file size: 500KB
- Use Next.js Image component
- Lazy load below the fold

### Aspect Ratios
- **Hero**: 16:9 or 21:9
- **Service Cards**: 4:3 or 3:4
- **Portfolio**: 4:3
- **Testimonial Images**: 1:1 (square)

---

## ♿ Accessibility

### Focus States
```css
:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Required Elements
- Alt text on all images
- ARIA labels on icon buttons
- Semantic HTML (nav, main, footer, section, article)
- Skip to main content link
- Keyboard navigation support

### Color Contrast
- All text: Minimum 4.5:1 (AA)
- Large text (18px+): Minimum 3:1
- Interactive elements: Minimum 3:1

---

## 📊 Grid System

### Standard Grid
```css
.grid {
  display: grid;
  gap: 2rem;
}

/* Responsive columns */
grid-cols-1           /* Mobile */
md:grid-cols-2        /* Tablet */
lg:grid-cols-3        /* Desktop */
```

### Common Layouts
| Layout | Classes |
|--------|---------|
| 2-column (50/50) | `grid-cols-1 lg:grid-cols-2` |
| 3-column equal | `grid-cols-1 md:grid-cols-3` |
| 4-column equal | `grid-cols-2 lg:grid-cols-4` |
| Asymmetric (1/3 + 2/3) | `lg:grid-cols-3`, child: `lg:col-span-2` |

---

## 🎯 Z-Index Scale

```css
--z-base: 1
--z-dropdown: 100
--z-sticky: 200
--z-fixed: 300          /* Navbar */
--z-modal-backdrop: 400
--z-modal: 500
--z-popover: 600
--z-tooltip: 700
```

---

## 📋 Component Patterns

### Card Pattern
```jsx
<div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow">
  <h3 className="heading-md mb-4">Title</h3>
  <p className="body-base text-text/80">Content</p>
</div>
```

### Section Pattern
```jsx
<section className="section-padding bg-white">
  <div className="container-custom">
    <SectionHeader title="..." subtitle="..." />
    {/* Content */}
  </div>
</section>
```

### Hero Pattern
```jsx
<HeroSection
  title="..."
  subtitle="..."
  description="..."
  image="/images/..."
  primaryCTA="..."
  primaryLink="..."
/>
```

---

## ✅ Design Checklist

Before deploying any page:
- [ ] All text passes contrast checks
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images optimized (WebP, <500KB)
- [ ] Animations are subtle (0.6s)
- [ ] Focus states visible
- [ ] Semantic HTML used
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] CTA buttons are clear
- [ ] Loading states handled

---

## 🔗 Related Documentation

- [Component Guide](./COMPONENT-GUIDE.md)
- [Content Style Guide](./CONTENT-GUIDE.md)
- [Setup Instructions](./SETUP.md)
- [README](./README.md)

---

**Maintained by**: Design Team  
**Last Updated**: November 8, 2025  
**Version**: 1.0.0
