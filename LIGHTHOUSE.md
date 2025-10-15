# Lighthouse (Desktop)

Target scores (local dev, no network throttling):
- Performance: 98-100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Tips followed:
- Static assets optimized; minimal JS
- Metadata and social images configured in `app/layout.tsx`
- No render-blocking fonts; Next Font loader used
- Image components with width/height via `fill` and responsive containers
- Proper headings and landmarks
