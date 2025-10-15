# Accessibility Checklist Implemented

- Semantic headings and landmarks (`header`, `main`, `footer` via layout structure)
- Accessible names on interactive elements (e.g., hero CTA has `aria-label`)
- Focus styles with visible ring (`focus-visible:ring` in Tailwind)
- Color contrast: dark background with high-contrast text; buttons exceed WCAG AA
- Forms: associated labels, required fields, client + server validation messages
- Tables: th/td structure, readable on small screens (scroll container)
- Images: descriptive `alt` text, decorative icons marked via `aria-hidden`
- Keyboard: all controls reachable and operable via keyboard
- Skip animations and parallax for reduced motion by default (none used)
