import { getAllCaseStudies, CaseStudy } from "./case-studies";
import { getAllEvents, Event } from "./events";
import { getAllInsights, InsightItem } from "./insights";
import { getContentTypeRoute } from "./insights-schema";
import { getActiveJobs, Job } from "./jobs";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "insight" | "event" | "job" | "tool" | "case-study";
  url: string;
  metadata?: Record<string, string | number | boolean | Date>;
  score?: number;
}

export interface SearchableContent {
  insights: InsightItem[];
  events: Event[];
  jobs: Job[];
  caseStudies: CaseStudy[];
}

// Get all searchable content
export async function getSearchableContent(): Promise<SearchableContent> {
  try {
    const insights = await getAllInsights();
    const events = getAllEvents();
    const jobs = getActiveJobs();
    const caseStudies = getAllCaseStudies();

    return {
      insights,
      events,
      jobs,
      caseStudies,
    };
  } catch (error) {
    console.error("Error loading searchable content:", error);
    // Return empty content on error
    return {
      insights: [],
      events: [],
      jobs: [],
      caseStudies: [],
    };
  }
}

// Convert content to search results
export function contentToSearchResults(content: SearchableContent): SearchResult[] {
  const results: SearchResult[] = [];

  // Add insights
  content.insights.forEach((insight) => {
    results.push({
      id: insight.slug,
      title: insight.title,
      description: insight.excerpt,
      type: "insight",
      url: `/insights/${getContentTypeRoute(insight.type)}/${insight.slug}`,
      metadata: {
        date: insight.date,
        readingTime: insight.readingTimeMinutes,
        tags: insight.tags.join(", "),
        persona: insight.persona.join(", "),
      },
    });
  });

  // Add events
  content.events.forEach((event) => {
    results.push({
      id: event.id,
      title: event.title,
      description: event.description,
      type: "event",
      url: `/events/${event.id}`,
      metadata: {
        date: event.date.start,
        location: event.location.city || event.location.platform || "Virtual",
        eventType: event.type,
      },
    });
  });

  // Add jobs
  content.jobs.forEach((job) => {
    results.push({
      id: job.id,
      title: job.title,
      description: job.summary,
      type: "job",
      url: `/careers/${job.id}`,
      metadata: {
        department: job.department,
        location: job.location,
        level: job.level,
      },
    });
  });

  // Add case studies
  content.caseStudies.forEach((study) => {
    results.push({
      id: study.id,
      title: study.title,
      description: study.summary,
      type: "case-study",
      url: `/case-studies/${study.slug}`,
      metadata: {
        industry: study.industry,
        tags: study.services.join(", "),
      },
    });
  });

  return results;
}

// Normalize text for searching
function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

// Search function with highlighting
export function searchContent(query: string, results: SearchResult[]): SearchResult[] {
  if (!query || query.trim() === "") {
    return [];
  }

  const normalizedQuery = normalizeText(query);
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  return results
    .map((result) => {
      let score = 0;
      const titleNorm = normalizeText(result.title);
      const descNorm = normalizeText(result.description);

      // Check each search term
      searchTerms.forEach((term) => {
        // Title matches (highest weight)
        if (titleNorm.includes(term)) {
          score += 10;
          if (titleNorm.startsWith(term)) {
            score += 5; // Bonus for start of title
          }
        }

        // Description matches
        if (descNorm.includes(term)) {
          score += 5;
        }

        // Metadata matches
        if (result.metadata) {
          Object.values(result.metadata).forEach((value) => {
            if (value && normalizeText(String(value)).includes(term)) {
              score += 2;
            }
          });
        }
      });

      return { ...result, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 50); // Limit results
}

// Highlight search terms in text
export function highlightText(text: string, query: string): string {
  if (!query || !text) return text;

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  let highlightedText = text;

  searchTerms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
  });

  return highlightedText;
}

// Get search suggestions based on partial query
export function getSearchSuggestions(query: string, results: SearchResult[], limit = 5): string[] {
  if (!query || query.trim() === "") {
    return [];
  }

  const normalizedQuery = normalizeText(query);
  const suggestions = new Set<string>();

  results.forEach((result) => {
    const titleWords = result.title.split(/\s+/);
    titleWords.forEach((word) => {
      if (normalizeText(word).startsWith(normalizedQuery) && word.length > query.length) {
        suggestions.add(word);
      }
    });
  });

  return Array.from(suggestions).slice(0, limit);
}
