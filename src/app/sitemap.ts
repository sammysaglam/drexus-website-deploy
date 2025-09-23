import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://drexus.com";
  const currentDate = new Date();

  // Static pages with their priorities
  const urls: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    // Main sections
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Company pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/culture`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/newsroom`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Trust pages
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/procurement`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/corporate-responsibility`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/brand-kit`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    // Contact & Legal
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Solution pages
  const solutionPages = [
    "mvp-fast",
    "ops-conversion",
    "roadmap-unblock",
    "vendor-diligence",
    "pilot-2-week",
    "scale-up-without-hiring",
  ];
  solutionPages.forEach((page) => {
    urls.push({
      url: `${baseUrl}/solutions/${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // Service pages
  const servicePages = [
    "discovery-scope",
    "product-strategy",
    "ux-ui",
    "frontend-react",
    "backend-node",
    "mobile-react-native",
    "devops-sre",
    "data-analytics",
    "security-compliance",
    "performance-marketing",
    "content-brand-motion",
    "marketing-ops-hubspot",
    "experimentation-growth",
    "support-maintenance",
  ];
  servicePages.forEach((page) => {
    urls.push({
      url: `${baseUrl}/services/${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Industry pages
  const industryPages = ["saas", "fintech", "ecommerce", "marketplaces", "healthtech", "media"];
  industryPages.forEach((page) => {
    urls.push({
      url: `${baseUrl}/industries/${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Tool pages
  const toolPages = [
    "mvp-scope-builder",
    "vendor-diligence-scorecard",
    "risk-ledger",
    "experiment-planner",
    "conversion-audit",
    "latency-budget-calculator",
    "roi-calculator",
    "ai-marketing-plan",
  ];
  toolPages.forEach((page) => {
    urls.push({
      url: `${baseUrl}/tools/${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // For dynamic content (insights, events, etc.), you would typically
  // import and iterate through them here. For now, adding a few examples:

  // Example insight pages
  urls.push({
    url: `${baseUrl}/insights/articles/mvp-scope-one-pager`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  urls.push({
    url: `${baseUrl}/insights/changelog`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.4,
  });

  return urls;
}
