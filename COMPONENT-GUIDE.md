# Component Usage Guide - Decor'em by Sonya Mehta

## 📦 Reusable Components

All components are designed to be modular and reusable with props.

---

## 🎬 AnimationWrapper

Wrapper component for Framer Motion animations.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to animate |
| `animation` | string | 'fade-up' | Animation type |
| `delay` | number | 0 | Animation delay in seconds |
| `duration` | number | 0.6 | Animation duration in seconds |
| `className` | string | '' | Additional CSS classes |

### Animation Types
- `fade-up` - Fade in while moving up
- `fade-in` - Simple fade in
- `fade-down` - Fade in while moving down
- `slide-left` - Slide in from left
- `slide-right` - Slide in from right
- `scale-in` - Scale in from 95%
- `zoom-in` - Zoom in from 80%

### Usage Example
```jsx
<AnimationWrapper animation="fade-up" delay={0.2}>
  <div>Your content here</div>
</AnimationWrapper>
```

---

## 🎯 SectionHeader

Standardized header for page sections.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `overline` | string | optional | Small text above title |
| `title` | string | required | Main section title |
| `subtitle` | string | optional | Subtitle/description |
| `align` | string | 'center' | Text alignment (left/center/right) |
| `className` | string | '' | Additional CSS classes |

### Usage Example
```jsx
<SectionHeader
  overline="What We Do"
  title="Our Services"
  subtitle="Comprehensive design solutions for every space."
  align="center"
  className="mb-16"
/>
```

---

## 🎨 HeroSection

Full-screen hero section with image, text, and CTAs.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Main hero title |
| `subtitle` | string | optional | Subtitle/overline |
| `description` | string | optional | Hero description |
| `image` | string | required | Background image path |
| `primaryCTA` | string | 'Start Your Project' | Primary button text |
| `primaryLink` | string | '/contact' | Primary button link |
| `secondaryCTA` | string | optional | Secondary button text |
| `secondaryLink` | string | optional | Secondary button link |
| `overlay` | boolean | true | Show dark overlay |
| `height` | string | 'min-h-screen' | Hero height class |

### Usage Example
```jsx
<HeroSection
  title="Transforming Homes into Expressions of Personality"
  subtitle="Luxury Interior Design"
  description="Experience personalized design excellence."
  image="/images/hero/livingroom.jpg"
  primaryCTA="Start Your Project"
  primaryLink="/contact"
  secondaryCTA="View Portfolio"
  secondaryLink="/portfolio"
/>
```

---

## 🏠 ServiceCard

Card component for displaying services.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Service title |
| `description` | string | required | Brief description |
| `image` | string | required | Service image path |
| `link` | string | optional | Link to details |
| `delay` | number | 0 | Animation delay |
| `className` | string | '' | Additional CSS classes |

### Usage Example
```jsx
<ServiceCard
  title="Kitchen Design"
  description="Modern, modular kitchens built for beauty and function."
  image="/images/kitchens/kitchen-1.jpg"
  link="/services#kitchen"
  delay={0.1}
/>
```

---

## 💬 TestimonialCarousel

Animated carousel for client testimonials.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testimonials` | array | required | Array of testimonial objects |
| `autoPlay` | boolean | true | Enable auto-play |
| `interval` | number | 5000 | Auto-play interval (ms) |

### Testimonial Object Structure
```javascript
{
  id: 1,
  name: "Client Name",
  location: "Houston, TX",
  project: "Kitchen Renovation",
  rating: 5,
  quote: "Amazing experience...",
  image: "/images/team/client-1.jpg",
  date: "2024-09-15"
}
```

### Usage Example
```jsx
<TestimonialCarousel 
  testimonials={testimonialsData}
  autoPlay={true}
  interval={6000}
/>
```

---

## 🔄 BeforeAfterSlider

Interactive before/after image comparison.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `beforeImage` | string | required | Path to before image |
| `afterImage` | string | required | Path to after image |
| `title` | string | optional | Slider title |
| `initialPosition` | number | 50 | Initial slider position (0-100) |

### Usage Example
```jsx
<BeforeAfterSlider
  beforeImage="/images/portfolio/before.jpg"
  afterImage="/images/portfolio/after.jpg"
  title="Kitchen Transformation"
  initialPosition={50}
/>
```

---

## 📢 CTASection

Call-to-action section with buttons.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | CTA title |
| `description` | string | optional | CTA description |
| `primaryText` | string | 'Get Started' | Primary button text |
| `primaryLink` | string | '/contact' | Primary button link |
| `secondaryText` | string | optional | Secondary button text |
| `secondaryLink` | string | optional | Secondary button link |
| `variant` | string | 'default' | Style variant |
| `className` | string | '' | Additional CSS classes |

### Variants
- `default` - Light background with border
- `dark` - Dark background with white text
- `gradient` - Gradient background

### Usage Example
```jsx
<CTASection
  title="Ready to Transform Your Space?"
  description="Schedule your complimentary consultation today."
  primaryText="Schedule Consultation"
  primaryLink="/contact"
  secondaryText="View Portfolio"
  secondaryLink="/portfolio"
  variant="gradient"
/>
```

---

## 🎣 Custom Hooks

### useScrollAnimation

Trigger animations on scroll using IntersectionObserver.

```javascript
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const [ref, isVisible] = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: true
});

return (
  <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
    Content
  </div>
);
```

### useStaggerAnimation

Stagger animations for list items.

```javascript
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const [ref, visibleItems] = useStaggerAnimation(6, 100);

return (
  <div ref={ref}>
    {items.map((item, index) => (
      <div 
        key={index}
        className={visibleItems.includes(index) ? 'animate-fade-up' : 'opacity-0'}
      >
        {item}
      </div>
    ))}
  </div>
);
```

### useParallax

Create parallax scroll effect.

```javascript
import { useParallax } from '../hooks/useScrollAnimation';

const parallaxStyle = useParallax(0.5);

return <div style={parallaxStyle}>Parallax content</div>;
```

---

## 🎨 Utility Classes

### Typography
- `.display-1`, `.display-2` - Large display headings
- `.heading-xl`, `.heading-lg`, `.heading-md`, `.heading-sm` - Section headings
- `.body-xl`, `.body-lg`, `.body-base`, `.body-sm` - Body text
- `.subtitle` - Subtitle text
- `.overline` - Small uppercase text
- `.quote` - Blockquote styling
- `.caption` - Small caption text

### Buttons
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

### Layout
- `.container-custom` - Max-width container with padding
- `.section-padding` - Standard section padding

### Effects
- `.hover-lift` - Lift effect on hover
- `.hover-zoom` - Image zoom on hover
- `.hover-accent` - Change to accent color on hover

---

## 📋 Best Practices

1. **Always use props** - Never hardcode content in components
2. **Semantic HTML** - Use appropriate HTML elements
3. **Accessibility** - Include ARIA labels where needed
4. **Performance** - Use Next.js Image component for images
5. **Animations** - Keep animations subtle (0.6s default)
6. **Responsive** - Test on mobile, tablet, and desktop
7. **Reusability** - Design components to work in multiple contexts

---

## 🔍 Testing Components

Before committing changes:
- [ ] Test on Chrome, Firefox, Safari
- [ ] Check mobile responsiveness
- [ ] Verify animations work smoothly
- [ ] Ensure proper prop validation
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios
- [ ] Validate HTML structure

---

For more information, refer to individual component files in `/src/components/`.
