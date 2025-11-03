import { z } from "zod";

// Define content types
export const ContentTypes = [
  "article",
  "special-report",
  "trend",
  "benchmark",
  "playbook",
] as const;
export type ContentType = (typeof ContentTypes)[number];

// Define personas
export const Personas = ["founder", "ops", "product", "product-lead", "cto"] as const;
export type Persona = (typeof Personas)[number];

// Author schema
export const AuthorSchema = z.object({
  name: z.string(),
  title: z.string(),
  avatar: z.string(),
});

// CTA schema
export const CTASchema = z.object({
  label: z.string(),
  href: z.string(),
});

// Main frontmatter schema
export const InsightsFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be kebab-case"),
  excerpt: z.string().max(180, "Excerpt must be 180 characters or less"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  type: z.enum(ContentTypes),
  persona: z.array(z.enum(Personas)),
  readingTimeMinutes: z.number().positive(),
  tags: z.array(z.string()).max(6, "Maximum 6 tags allowed"),
  ogImage: z.string(),
  author: AuthorSchema,
  canonicalUrl: z.string().url().optional(),
  cta: CTASchema.optional(),
  popularityScore: z.number().min(0).max(100).optional(),
  lastReviewed: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),
});

export type InsightsFrontmatter = z.infer<typeof InsightsFrontmatterSchema>;

// Helper to validate frontmatter
export function validateFrontmatter(data: unknown): InsightsFrontmatter {
  return InsightsFrontmatterSchema.parse(data);
}

// Helper to get content type route
export function getContentTypeRoute(type: ContentType): string {
  const routes: Record<ContentType, string> = {
    article: "articles",
    "special-report": "special-reports",
    trend: "trends",
    benchmark: "benchmarks",
    playbook: "playbooks",
  };
  return routes[type];
}
