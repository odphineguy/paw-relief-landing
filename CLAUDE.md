# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page landing site for Paw Relief, a pet allergy tracking app. Built with Vite, React, Tailwind CSS, and Framer Motion.

## Development Commands

```bash
# Start development server (runs at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Single-Page App Structure
- **No routing**: This is a single-page app using hash-based anchor navigation (`#home`, `#features`, etc.)
- **ScrollToAnchor**: Component handles smooth scrolling to hash anchors
- **Navigation**: Uses regular `<a href="#section">` links, NOT React Router

### Component Organization
```
src/
├── App.jsx              # Main app component that composes all sections
├── main.jsx             # React entry point
├── index.css            # Tailwind imports + custom animations
├── components/          # Reusable UI components
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── ScrollToAnchor.jsx
│   ├── Marquee.jsx      # Custom scrolling marquee component
│   └── [other components]
└── pages/               # Full-page sections (not actual routes)
    ├── Home.jsx
    ├── Features.jsx
    ├── Screenshots.jsx
    └── HelpCenter.jsx
```

### Path Aliases
- `@/` maps to `src/` directory (configured in `vite.config.js`)
- Use `@/components/` and `@/pages/` for imports

### Static Assets
- **Location**: `public/uploads/`
- **Reference**: `/uploads/filename.ext` (absolute path from public root)
- **Screenshots carousel**: Update the `screenshots` array in `src/pages/Screenshots.jsx` after adding images to `public/uploads/`

### Key Components

**App.jsx**: Renders all sections in order as a single-page layout. No routing logic.

**ScrollToAnchor**: Utility component that:
- Listens to hash changes in URL
- Smoothly scrolls to matching anchor IDs
- Handles both initial load and hashchange events

**Marquee**: Custom infinite scrolling component used in Screenshots section:
- Props: `className`, `pauseOnHover`, `repeat`, `reverse`
- Clones children to create seamless loop
- CSS animations defined in `src/index.css`

## Styling

- **Tailwind CSS**: Primary styling framework
- **Custom animations**: Defined in `src/index.css` (e.g., `animate-marquee`, `animate-marquee-reverse`)
- **Framer Motion**: Used for scroll-triggered animations and interactive hover effects
  - Use `whileHover` and `animate` props for hover effects instead of Tailwind classes (Framer Motion's inline styles override Tailwind)
  - Keep hover transitions fast (150ms) for responsive feel
  - Example pattern for interactive cards:
    ```jsx
    <motion.div
      whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.15 } }}
      animate={{ opacity: isActive ? 1 : 0.8, transition: { duration: 0.15 } }}
    >
    ```

## Deployment

- **Hosting**: Vercel (auto-deploys from main branch)
- **Repository**: https://github.com/odphineguy/paw-relief-landing
- Build command: `npm run build`
- Output directory: `dist`
