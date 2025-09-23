# QA Checklist & Testing Guide

## Overview

This document outlines the quality assurance checks performed on the Drexus website and provides instructions for running automated tests and manual checks.

## Automated Tests

### 1. Accessibility Audit

Run the accessibility audit script to check for common a11y issues:

```bash
npm run check:accessibility
# or
npx tsx scripts/accessibility-audit.ts
```

This checks for:
- Images without alt text
- Links/buttons without accessible labels
- Form inputs without labels
- Non-interactive elements with onClick handlers
- Heading hierarchy issues
- Color contrast problems

### 2. Linting & Type Checking

```bash
# ESLint
npm run lint

# TypeScript type checking
npm run type-check

# Prettier formatting
npm run format:check
```

### 3. Build Testing

```bash
# Test production build
npm run build

# Test all pages load correctly
npm run start
# Then visit http://localhost:3000 and check key pages
```

### 4. Content Validation

```bash
# Validate MDX frontmatter
npx tsx scripts/validate-frontmatter.ts

# Check internal links
npx tsx scripts/check-internal-links.ts

# Verify action boxes
npx tsx scripts/check-action-boxes.ts
```

## Manual QA Checklist

### ✅ Search Functionality
- [ ] Search modal opens with Cmd/Ctrl+K
- [ ] Search results display correctly
- [ ] Results are filterable by type
- [ ] Keyboard navigation works (arrow keys, Enter)
- [ ] Search highlights matching terms
- [ ] Mobile search is accessible

### ✅ Accessibility
- [ ] Skip to main content link works
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader announces content properly
- [ ] Color contrast meets WCAG AA standards
- [ ] Reduced motion preferences respected

### ✅ Performance
- [ ] Lighthouse score > 90 for all categories
- [ ] Images lazy load below the fold
- [ ] Fonts are preloaded
- [ ] No layout shift (CLS < 0.1)
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s

### ✅ SEO
- [ ] All pages have unique meta titles/descriptions
- [ ] Sitemap.xml generates correctly at /sitemap.xml
- [ ] Robots.txt is accessible at /robots.txt
- [ ] Canonical URLs are set correctly
- [ ] OpenGraph tags present on all pages
- [ ] JSON-LD structured data validates

### ✅ Responsive Design
- [ ] Mobile layouts (320px - 768px)
- [ ] Tablet layouts (768px - 1024px)
- [ ] Desktop layouts (1024px+)
- [ ] Images scale appropriately
- [ ] Touch targets are 44x44px minimum
- [ ] Horizontal scrolling is prevented

### ✅ Error Handling
- [ ] 404 page displays correctly
- [ ] 500 error page handles runtime errors
- [ ] Form validation messages are clear
- [ ] Network errors handled gracefully
- [ ] Loading states for async content

### ✅ Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Forms & Interactions
- [ ] Contact forms validate properly
- [ ] Tool forms show success states
- [ ] Email capture modals work
- [ ] Downloads generate correctly
- [ ] Calendar (.ics) files download
- [ ] Share buttons function

### ✅ Analytics
- [ ] Plausible/PostHog script loads
- [ ] Page views tracked
- [ ] Custom events fire correctly
- [ ] No console errors
- [ ] Privacy-compliant (no cookies)

## Performance Budget

Target metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: < 200KB (initial JS)
- **Image Sizes**: < 100KB (optimized)

## Testing Tools

### Online Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebAIM WAVE](https://wave.webaim.org/)
- [Schema.org Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Browser Extensions
- axe DevTools (accessibility)
- Lighthouse (performance)
- React Developer Tools
- WAVE (accessibility)

### Command Line
```bash
# Run all checks
npm run qa:all

# Individual checks
npm run check:accessibility
npm run check:links
npm run check:mdx
```

## Deployment Checklist

Before deploying to production:

1. [ ] Run full build locally
2. [ ] Test all interactive features
3. [ ] Verify environment variables
4. [ ] Check API endpoints
5. [ ] Test on staging environment
6. [ ] Run automated tests
7. [ ] Performance audit passes
8. [ ] Security headers configured
9. [ ] SSL certificate valid
10. [ ] Monitoring alerts set up

## Known Issues & Limitations

1. **Search**: Currently client-side only, may be slow with large datasets
2. **Images**: Using placeholder divs in some places, need actual images
3. **PDF Generation**: Currently generates HTML stubs, not actual PDFs
4. **Analytics**: Requires configuration of Plausible domain
5. **Email**: Forms currently use mailto:, need backend integration

## Continuous Monitoring

Set up monitoring for:
- Uptime monitoring (e.g., UptimeRobot)
- Performance monitoring (e.g., SpeedCurve)
- Error tracking (e.g., Sentry)
- Analytics dashboards
- Search console errors
- Accessibility monitoring

## Support

For QA issues or questions:
- Create GitHub issue with `qa` label
- Include browser/device info
- Provide steps to reproduce
- Attach screenshots if applicable

