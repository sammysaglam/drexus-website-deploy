import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Check if we're in production environment
  const isProduction =
    process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production";

  if (isProduction) {
    // Production: Allow all crawlers with current rules
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/_next/", "/admin/", "/*.json$", "/tools/*/results"],
          crawlDelay: 2,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          crawlDelay: 1,
        },
        {
          userAgent: "Bingbot",
          allow: "/",
          crawlDelay: 1,
        },
        {
          userAgent: "AhrefsBot",
          disallow: "/",
        },
        {
          userAgent: "SemrushBot",
          disallow: "/",
        },
        {
          userAgent: "DotBot",
          disallow: "/",
        },
        {
          userAgent: "MJ12bot",
          disallow: "/",
        },
      ],
      sitemap: "https://drexus.com/sitemap.xml",
    };
  } else {
    // Staging/Preview/Development: Disallow all crawlers
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }
}
