# Drexus - Strategic Business Intelligence Platform

A production-grade Next.js application built with TypeScript, HeroUI (formerly NextUI), and Tailwind
CSS, featuring an enterprise-ready design inspired by Gartner-like aesthetics.

## 🚀 Features

- **Enterprise-Grade UI**: Professional design with deep navy and cool gray color scheme
- **Component Library**: Reusable UI components built with HeroUI
- **MDX Content Pipeline**: Dynamic content management for articles and insights
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG-compliant with strong focus states and keyboard navigation
- **SEO Optimized**: Complete with sitemap, robots.txt, and OpenGraph metadata
- **Type Safety**: Full TypeScript support with strict mode enabled

## 📋 Prerequisites

- Node.js 18.x or higher
- Yarn package manager
- Git

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/drexus.git
cd drexus
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:3000` (or the port specified in
`DREXUS_WEBSITE_PORT`).

## 📦 Available Scripts

- `yarn dev` - Start the development server with Turbopack
- `yarn build` - Build the production application
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
drexus/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles and theme
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── PageHeader.tsx
│   │   │   ├── StatBlock.tsx
│   │   │   ├── ResourceCard.tsx
│   │   │   └── ...
│   │   ├── layout/         # Layout components
│   │   │   ├── NavMega.tsx
│   │   │   └── FooterMega.tsx
│   │   └── mdx/            # MDX components
│   └── lib/                # Utility functions
├── content/                # MDX content
│   └── insights/
│       └── articles/
├── data/                   # JSON data files
│   ├── events.json
│   └── tools.json
├── public/                 # Static assets
│   └── robots.txt
├── docs/                   # Documentation
│   ├── editorial-style.md  # Content writing guidelines
│   ├── CONTENT_WRITING_QUICKSTART.md  # Quick reference
│   ├── NAVIGATION_ACCESSIBILITY.md  # Keyboard nav guide
│   ├── briefs.json         # 10 content briefs for articles
│   ├── CONTENT_BRIEFS_README.md  # How to use briefs
│   └── CONTENT_CALENDAR.md # Publishing schedule
└── tailwind.config.ts      # Tailwind configuration
```

## 🎨 Design System

### Colors

- **Primary**: Navy (`#081534`, `#0C2247`)
- **Secondary**: Blue (`#1D4ED8`)
- **Neutral**: Gray scale from `gray-50` to `gray-900`
- **Background**: White (`#FFFFFF`)

### Typography

- **Headings**: Merriweather (serif)
- **Body**: Inter (sans-serif)

### Spacing

Uses a consistent spacing scale from `spacing-1` (0.25rem) to `spacing-64` (16rem).

## 🧩 Key Components

### UI Components

- `PageHeader` - Page title with breadcrumbs
- `StatBlock` - Statistics display with trends
- `TestimonialCard` - Customer testimonials
- `ResourceCard` - Content cards for articles/reports
- `EventCard` - Event listings with details
- `DownloadCTA` - Download call-to-action blocks
- `Callout` - Highlighted information boxes
- `Aside` - Sidebar content containers
- `TableOfContents` - Auto-generated TOC for articles

### Layout Components

- `NavMega` - Mega navigation menu with dropdowns
- `FooterMega` - Comprehensive footer with links

## 📝 Content Management

### Writing Guidelines

Before creating content, review our editorial standards:

- **[Editorial Style Guide](./docs/editorial-style.md)** - Voice, tone, and writing rules
- **[Content Quick Start](./docs/CONTENT_WRITING_QUICKSTART.md)** - Templates and examples

### Creating New Content

1. Choose the appropriate content type and create an `.mdx` file:
   - Articles: `/content/insights/articles/[slug].mdx`
   - Reports: `/content/insights/special-reports/[slug].mdx`
   - Trends: `/content/insights/trends/[slug].mdx`
   - Benchmarks: `/content/insights/benchmarks/[slug].mdx`
   - Playbooks: `/content/insights/playbooks/[slug].mdx`

2. Add validated frontmatter (all fields required):

```yaml
---
title: "Reduce Sprint Planning to 45 Minutes"
slug: "reduce-sprint-planning-time"
excerpt: "Practical framework to cut planning time by 70% while improving clarity"
date: "2024-01-20"
type: "article" # or "special-report", "trend", "benchmark", "playbook"
persona: ["product", "product-lead"] # P1-P5 personas
readingTimeMinutes: 8
tags: ["agile", "productivity", "planning"]
ogImage: "/images/og/sprint-planning.jpg"
author:
  name: "Sarah Chen"
  title: "Principal Product Strategist"
  avatar: "/avatars/sarah-chen.jpg"
cta: # Optional
  label: "Download Sprint Planning Template"
  href: "/tools/sprint-planning-template"
---
```

3. Write content following our style guide, using MDX components:

```mdx
<Callout type="info" title="What is Async Prep?">
  Pre-meeting activities that eliminate live discussion of known items.
</Callout>

<StatBlock
  label="Time Saved"
  value="2.5 hrs"
  trend={{ value: 70, isPositive: true }}
  description="Per sprint for a 7-person team"
/>

<Checklist
  title="Pre-Planning Checklist"
  items={[
    { text: "Stories have acceptance criteria", checked: true },
    { text: "Dependencies mapped", checked: true },
    { text: "Capacity confirmed", checked: false },
  ]}
/>

<DoDont
  dos={["Share context 48hrs before", "Set explicit timebox"]}
  donts={["Discuss new requirements live", "Skip the retro"]}
/>
```

## 🔧 Configuration

### Tailwind CSS

Custom theme configuration is in `tailwind.config.ts`, including:

- Custom colors matching the design system
- Extended spacing scale
- HeroUI plugin integration

### TypeScript

Strict mode is enabled with comprehensive type checking. Type definitions for components are
included.

### ESLint & Prettier

Code quality tools are pre-configured with:

- Next.js recommended rules
- TypeScript support
- Prettier integration
- Import ordering

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

### Environment Variables

Required environment variables:

- `DREXUS_WEBSITE_PORT` - Port for the application (default: 3000)

### Recommended Platforms

- Vercel (recommended for Next.js)
- AWS Amplify
- Netlify
- Docker containers

## 📈 Performance Optimizations

- Turbopack for faster builds
- Image optimization with Next.js Image
- Font optimization with next/font
- Code splitting and lazy loading
- Framer Motion for performant animations

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance (≥ 4.5:1)
- Screen reader friendly
- Reduced motion support

## 🧪 Testing

(Testing setup can be added based on requirements)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support, email support@drexus.com or join our Slack channel.

---

Built with ❤️ by the Drexus Team
