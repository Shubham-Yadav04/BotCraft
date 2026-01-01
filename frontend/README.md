# BotCraft - Personal AI Bot Creation Platform

A modern, responsive Next.js landing page for BotCraft - a service that allows users to create personal AI bots by providing context and information about themselves.

## Features

- 🎨 **Modern Design**: Professional gradients, shadows, and animations
- 🌓 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Server-side rendering with Next.js 16
- 🎭 **Rich Animations**: Framer Motion and GSAP animations
- 🎪 **Interactive Elements**: Hover effects, scroll triggers, and smooth transitions
- 🎯 **Professional Typography**: Multiple font families (Inter, Poppins, Space Grotesk)
- 🎨 **Tailwind CSS**: Utility-first styling with custom components

## Tech Stack

- **Framework**: Next.js 16.1.1 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + GSAP
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Inter, Poppins, Space Grotesk)
- **Theme**: next-themes for dark/light mode
- **Marquee**: react-fast-marquee for testimonials

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Navigation with theme toggle
│   │   ├── HeroSection.tsx         # Main hero with animations
│   │   ├── FeaturesSection.tsx     # Feature grid with hover effects
│   │   ├── HowItWorksSection.tsx   # Step-by-step process
│   │   ├── TestimonialsSection.tsx # Marquee testimonials
│   │   ├── PricingSection.tsx      # Pricing plans
│   │   ├── Footer.tsx              # Footer with links
│   │   └── AnimatedBackground.tsx  # Floating particles
│   ├── providers/
│   │   └── theme-provider.tsx      # Theme context provider
│   ├── globals.css                 # Global styles and utilities
│   ├── layout.tsx                  # Root layout with metadata
│   └── page.tsx                    # Main page component
├── public/                         # Static assets
└── package.json                    # Dependencies and scripts
```

## Key Features Implemented

### 🎨 Design & Styling
- Professional gradient backgrounds and text effects
- Glass morphism effects with backdrop blur
- Custom CSS utilities for consistent spacing and typography
- Responsive grid layouts with proper breakpoints

### 🎭 Animations & Interactions
- **Framer Motion**: Page transitions, scroll-triggered animations, hover effects
- **GSAP**: Floating background elements, continuous animations
- **Scroll Effects**: Parallax scrolling, fade-in animations
- **Interactive Elements**: Button hover states, card animations

### 🌓 Theme System
- System preference detection
- Smooth theme transitions
- Dark/light mode optimized colors
- Persistent theme selection

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid systems
- Optimized typography scaling
- Touch-friendly interactions

### ⚡ Performance
- Server-side rendering (SSR)
- Optimized font loading
- Efficient animation libraries
- Minimal bundle size

## Customization

### Colors & Gradients
Modify the gradient classes in `globals.css`:
```css
.gradient-text {
  @apply bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent;
}
```

### Animations
Adjust animation settings in component files:
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};
```

### Content
Update text content, features, pricing, and testimonials directly in the component files.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.