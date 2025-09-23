import fs from "fs";
import path from "path";

import matter from "gray-matter";

import {
  InsightsFrontmatter,
  validateFrontmatter,
  getContentTypeRoute as getTypeRoute,
} from "./insights-schema";

// Re-export for convenience
export { getContentTypeRoute } from "./insights-schema";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

export interface InsightItem extends InsightsFrontmatter {
  content: string;
  slug: string;
  filePath: string;
}

// Helper to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Helper to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Get all content items
export async function getAllInsights(): Promise<InsightItem[]> {
  const contentTypes = ["articles", "special-reports", "trends", "benchmarks", "playbooks"];
  const items: InsightItem[] = [];

  for (const contentType of contentTypes) {
    const dirPath = path.join(CONTENT_DIR, contentType);

    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      continue;
    }

    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      try {
        const frontmatter = validateFrontmatter(data);
        items.push({
          ...frontmatter,
          content,
          slug: frontmatter.slug || file.replace(".mdx", ""),
          filePath,
        });
      } catch (error) {
        console.error(`Invalid frontmatter in ${filePath}:`, error);
      }
    }
  }

  // Sort by date (newest first)
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get content by type
export async function getInsightsByType(type: InsightsFrontmatter["type"]): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();
  return allInsights.filter((item) => item.type === type);
}

// Get content by persona
export async function getInsightsByPersona(persona: string): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();
  return allInsights.filter((item) =>
    item.persona.includes(persona as InsightsFrontmatter["persona"][number])
  );
}

// Get content by tags
export async function getInsightsByTags(tags: string[]): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();
  return allInsights.filter((item) => tags.some((tag) => item.tags.includes(tag)));
}

// Get single insight by slug and type
export async function getInsightBySlug(
  slug: string,
  type: InsightsFrontmatter["type"]
): Promise<InsightItem | null> {
  const contentTypeDir = getTypeRoute(type);
  const filePath = path.join(CONTENT_DIR, contentTypeDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  try {
    const frontmatter = validateFrontmatter(data);
    return {
      ...frontmatter,
      content,
      slug,
      filePath,
    };
  } catch (error) {
    console.error(`Invalid frontmatter in ${filePath}:`, error);
    return null;
  }
}

// Get related content
export async function getRelatedInsights(
  currentItem: InsightItem,
  limit: number = 3
): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();

  // Filter out current item
  const otherInsights = allInsights.filter((item) => item.slug !== currentItem.slug);

  // Score each item based on similarity
  const scoredInsights = otherInsights.map((item) => {
    let score = 0;

    // Same type gets higher score
    if (item.type === currentItem.type) score += 3;

    // Shared personas
    const sharedPersonas = item.persona.filter((p) => currentItem.persona.includes(p));
    score += sharedPersonas.length * 2;

    // Shared tags
    const sharedTags = item.tags.filter((t) => currentItem.tags.includes(t));
    score += sharedTags.length;

    return { item, score };
  });

  // Sort by score and return top items
  return scoredInsights
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((scored) => scored.item);
}

// Search insights
export async function searchInsights(query: string): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();
  const searchTerm = query.toLowerCase();

  return allInsights.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.excerpt.toLowerCase().includes(searchTerm) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      item.content.toLowerCase().includes(searchTerm)
    );
  });
}

// Get unique tags
export async function getAllTags(): Promise<string[]> {
  const allInsights = await getAllInsights();
  const tagSet = new Set<string>();

  allInsights.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

// Get insights sorted by popularity
export async function getInsightsByPopularity(): Promise<InsightItem[]> {
  const allInsights = await getAllInsights();

  // Sort by popularity score (highest first), fallback to date if no score
  return allInsights.sort((a, b) => {
    const scoreA = a.popularityScore ?? 0;
    const scoreB = b.popularityScore ?? 0;

    if (scoreA === scoreB) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    return scoreB - scoreA;
  });
}

// Get top popular insights
export async function getPopularInsights(limit: number = 5): Promise<InsightItem[]> {
  const insights = await getInsightsByPopularity();
  return insights.slice(0, limit);
}
