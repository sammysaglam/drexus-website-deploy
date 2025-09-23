"use client";

import React, { useState, useMemo, useEffect } from "react";

import { Button, Input, Select, SelectItem, Chip, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import { ResourceCard } from "@/components/ui/ResourceCard";
import {
  ContentTypes,
  Personas,
  type InsightsFrontmatter,
  type ContentType,
  type Persona,
  getContentTypeRoute,
} from "@/lib/insights-schema";

// Client-side date formatter
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Mock data with popularity scores
const mockInsights: (InsightsFrontmatter & { popularityScore?: number })[] = [
  {
    title: "Building MVPs That Scale: A Technical Guide",
    slug: "mvp-scope-one-pager",
    excerpt:
      "Learn how to architect your MVP for future growth without over-engineering. Practical strategies from 100+ successful launches.",
    date: "2024-01-15",
    type: "article",
    persona: ["founder", "cto"],
    readingTimeMinutes: 8,
    tags: ["MVP", "Architecture", "Scaling"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Sarah Chen",
      title: "Principal Engineer",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 95,
  },
  {
    title: "The Rise of 'Friday Receipts': Transparency Rituals That Stick",
    slug: "friday-receipts-transparency-rituals",
    excerpt:
      "How top-performing teams are replacing status meetings with asynchronous progress receipts.",
    date: "2024-04-12",
    type: "trend",
    persona: ["founder", "product-lead", "cto"],
    readingTimeMinutes: 7,
    tags: ["process", "transparency", "communication"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Chris Anderson",
      title: "VP of Delivery",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 88,
  },
  {
    title: "State of B2B SaaS: 2024 Benchmarks Report",
    slug: "2025-software-delivery-playbook",
    excerpt:
      "Comprehensive analysis of 500+ B2B SaaS companies. Key metrics, growth rates, and strategic insights for the year ahead.",
    date: "2024-01-10",
    type: "special-report",
    persona: ["founder", "product-lead"],
    readingTimeMinutes: 15,
    tags: ["SaaS", "Benchmarks", "Strategy"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Michael Torres",
      title: "Head of Research",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 92,
  },
  {
    title: "The Rise of AI-Powered Operations",
    slug: "ai-powered-operations",
    excerpt:
      "How leading companies are using AI to transform their operations. Real examples, implementation strategies, and ROI data.",
    date: "2024-01-08",
    type: "trend",
    persona: ["ops", "cto"],
    readingTimeMinutes: 10,
    tags: ["AI", "Operations", "Automation"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Dr. Emily Watson",
      title: "AI Solutions Architect",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 72,
  },
  {
    title: "Engineering Productivity Metrics: 2024 Benchmarks",
    slug: "latency-budgets-by-flow",
    excerpt:
      "Key metrics for measuring and improving engineering team productivity. Data from top-performing tech companies.",
    date: "2024-01-05",
    type: "benchmark",
    persona: ["cto", "product-lead"],
    readingTimeMinutes: 12,
    tags: ["Engineering", "Metrics", "Productivity"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "David Lee",
      title: "VP of Engineering",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 65,
  },
  {
    title: "The Remote Team Scaling Playbook",
    slug: "four-experiments-per-month",
    excerpt:
      "A step-by-step guide to effectively scaling remote engineering and product teams without sacrificing culture or efficiency.",
    date: "2023-12-20",
    type: "playbook",
    persona: ["founder", "ops", "product-lead"],
    readingTimeMinutes: 18,
    tags: ["Remote Work", "Team Management", "Scaling"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Sophia Rodriguez",
      title: "Head of People & Culture",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 78,
  },
  {
    title: "Conversion Triage: Fix Revenue Before Rebuild",
    slug: "conversion-triage-before-rebuild",
    excerpt: "Find and fix the 20% of friction causing 80% of the loss.",
    date: "2024-01-03",
    type: "article",
    persona: ["ops", "product"],
    readingTimeMinutes: 9,
    tags: ["conversion", "latency", "forms", "ops"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Sarah Mitchell",
      title: "Head of Growth Engineering",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 85,
  },
  {
    title: "Activation Benchmarks for B2B SaaS Trials",
    slug: "b2b-saas-trial-activation-benchmarks",
    excerpt:
      "What percentage of trial users should activate? When? How? Based on data from 200+ B2B SaaS companies.",
    date: "2024-04-16",
    type: "benchmark",
    persona: ["founder", "product", "ops"],
    readingTimeMinutes: 9,
    tags: ["saas", "activation", "benchmarks", "conversion", "growth"],
    ogImage: "/api/placeholder/800/400",
    author: {
      name: "Michael Torres",
      title: "Head of Growth Analytics",
      avatar: "/api/placeholder/64/64",
    },
    popularityScore: 78,
  },
];

type SortOption = "newest" | "popular";

export default function InsightsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL params
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "all");
  const [selectedPersona, setSelectedPersona] = useState(searchParams.get("persona") || "all");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "all");
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "newest"
  );
  const [itemsShown, setItemsShown] = useState(9);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("q", searchQuery);
    if (selectedType !== "all") params.set("type", selectedType);
    if (selectedPersona !== "all") params.set("persona", selectedPersona);
    if (selectedTag !== "all") params.set("tag", selectedTag);
    if (sortBy !== "newest") params.set("sort", sortBy);

    const queryString = params.toString();
    const newUrl = queryString ? `/insights?${queryString}` : "/insights";

    // Use replace to update URL without adding to history stack
    router.replace(newUrl, { scroll: false });
  }, [searchQuery, selectedType, selectedPersona, selectedTag, sortBy, router]);

  const initialInsights = mockInsights;

  // Filter insights
  const filteredInsights = useMemo(() => {
    const filtered = initialInsights.filter((insight) => {
      // Search query filter
      if (
        searchQuery &&
        !(
          insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      ) {
        return false;
      }

      // Type filter
      if (selectedType !== "all" && insight.type !== selectedType) {
        return false;
      }

      // Persona filter
      if (selectedPersona !== "all" && !insight.persona.includes(selectedPersona as Persona)) {
        return false;
      }

      // Tag filter
      if (selectedTag !== "all" && !insight.tags.includes(selectedTag)) {
        return false;
      }

      return true;
    });

    // Sort insights
    if (sortBy === "popular") {
      filtered.sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0));
    } else {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [searchQuery, selectedType, selectedPersona, selectedTag, sortBy, initialInsights]);

  // Get popular insights for sidebar
  const popularInsights = useMemo(() => {
    return [...initialInsights]
      .sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
      .slice(0, 5);
  }, [initialInsights]);

  // Extract unique tags from all insights
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialInsights.forEach((insight) => {
      insight.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [initialInsights]);

  const typeLabels: Record<ContentType | "all", string> = {
    all: "All Types",
    article: "Article",
    "special-report": "Special Report",
    trend: "Trend",
    benchmark: "Benchmark",
    playbook: "Playbook",
  };

  const personaLabels: Record<string, string> = {
    all: "All Personas",
    founder: "Founder",
    ops: "Operations",
    product: "Product Manager",
    "product-lead": "Product Lead",
    cto: "CTO",
  };

  const handleLoadMore = () => {
    setItemsShown((prev) => prev + 9);
  };

  const hasActiveFilters =
    selectedType !== "all" || selectedPersona !== "all" || selectedTag !== "all" || searchQuery;

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Search Bar */}
              <div className="mb-6">
                <Input
                  type="text"
                  placeholder="Search insights by keyword, topic, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="lg"
                  startContent={
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  }
                  classNames={{
                    inputWrapper: "shadow-sm",
                  }}
                  aria-label="Search insights"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Type Filter */}
                <Select
                  label="Content Type"
                  placeholder="Select type"
                  selectedKeys={[selectedType]}
                  onChange={(e) => setSelectedType(e.target.value)}
                  classNames={{
                    trigger: "shadow-sm",
                  }}
                  items={[
                    { key: "all", label: "All Types" },
                    ...ContentTypes.map((type) => ({ key: type, label: typeLabels[type] })),
                  ]}
                  aria-label="Filter by content type"
                >
                  {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                </Select>

                {/* Persona Filter */}
                <Select
                  label="For Who"
                  placeholder="Select persona"
                  selectedKeys={[selectedPersona]}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  classNames={{
                    trigger: "shadow-sm",
                  }}
                  items={[
                    { key: "all", label: "All Personas" },
                    ...Personas.map((persona) => ({ key: persona, label: personaLabels[persona] })),
                  ]}
                  aria-label="Filter by persona"
                >
                  {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                </Select>

                {/* Tag Filter */}
                <Select
                  label="Topic"
                  placeholder="Select topic"
                  selectedKeys={[selectedTag]}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  classNames={{
                    trigger: "shadow-sm",
                  }}
                  items={[
                    { key: "all", label: "All Topics" },
                    ...allTags.map((tag) => ({ key: tag, label: tag })),
                  ]}
                  aria-label="Filter by topic"
                >
                  {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                </Select>

                {/* Sort Dropdown */}
                <Select
                  label="Sort By"
                  placeholder="Sort order"
                  selectedKeys={[sortBy]}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  classNames={{
                    trigger: "shadow-sm",
                  }}
                  items={[
                    { key: "newest", label: "Newest First" },
                    { key: "popular", label: "Most Popular" },
                  ]}
                  aria-label="Sort insights"
                >
                  {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                </Select>
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {selectedType !== "all" && (
                    <Chip onClose={() => setSelectedType("all")} variant="flat" size="sm">
                      Type: {typeLabels[selectedType as ContentType]}
                    </Chip>
                  )}
                  {selectedPersona !== "all" && (
                    <Chip onClose={() => setSelectedPersona("all")} variant="flat" size="sm">
                      For: {personaLabels[selectedPersona]}
                    </Chip>
                  )}
                  {selectedTag !== "all" && (
                    <Chip onClose={() => setSelectedTag("all")} variant="flat" size="sm">
                      Topic: {selectedTag}
                    </Chip>
                  )}
                  {searchQuery && (
                    <Chip onClose={() => setSearchQuery("")} variant="flat" size="sm">
                      Search: &quot;{searchQuery}&quot;
                    </Chip>
                  )}
                </div>
              )}
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-gray-600"
            >
              <p className="text-sm">
                Showing <strong>{Math.min(itemsShown, filteredInsights.length)}</strong> of{" "}
                <strong>{filteredInsights.length}</strong> insights
              </p>
            </motion.div>

            {/* Insights Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredInsights.slice(0, itemsShown).map((insight, index) => (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ResourceCard
                    title={insight.title}
                    description={insight.excerpt}
                    link={`/insights/${getContentTypeRoute(insight.type)}/${insight.slug}`}
                    image={insight.ogImage}
                    type={typeLabels[insight.type]}
                    readTime={`${insight.readingTimeMinutes} min read`}
                    tags={insight.tags}
                    eyebrow={
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                          {typeLabels[insight.type]}
                        </span>
                        {insight.popularityScore && insight.popularityScore > 80 && (
                          <span className="text-xs font-semibold text-orange-600">🔥 Popular</span>
                        )}
                      </div>
                    }
                    footer={
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-2">
                          {insight.persona.slice(0, 2).map((p) => (
                            <Chip key={p} size="sm" variant="flat">
                              {personaLabels[p]}
                            </Chip>
                          ))}
                          {insight.persona.length > 2 && (
                            <Chip size="sm" variant="flat">
                              +{insight.persona.length - 2}
                            </Chip>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{formatDate(insight.date)}</span>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {filteredInsights.length > itemsShown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <Button
                  onPress={handleLoadMore}
                  variant="bordered"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Load More ({filteredInsights.length - itemsShown} remaining)
                </Button>
              </motion.div>
            )}

            {/* Empty State */}
            {filteredInsights.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center py-12 text-gray-600"
              >
                <p className="text-lg mb-4">No insights found matching your criteria.</p>
                <Button
                  onPress={() => {
                    setSelectedType("all");
                    setSelectedPersona("all");
                    setSelectedTag("all");
                    setSearchQuery("");
                  }}
                  variant="bordered"
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Popular This Month */}
              <Card className="shadow-md">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold mb-4">🔥 Popular This Month</h3>
                  <div className="space-y-3">
                    {popularInsights.map((insight, index) => (
                      <Link
                        key={insight.slug}
                        href={`/insights/${getContentTypeRoute(insight.type)}/${insight.slug}`}
                        className="group block"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-sm font-bold text-gray-400">{index + 1}</span>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {insight.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">
                                {typeLabels[insight.type]}
                              </span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">
                                {insight.readingTimeMinutes} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Browse By Persona */}
              <Card className="shadow-md">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold mb-4">👤 Browse By Role</h3>
                  <div className="space-y-2">
                    {Personas.map((persona) => {
                      const count = initialInsights.filter((i) =>
                        i.persona.includes(persona)
                      ).length;

                      return (
                        <Button
                          key={persona}
                          as={Link}
                          href={`/insights?persona=${persona}`}
                          variant="light"
                          className="w-full justify-between"
                          endContent={<span className="text-sm text-gray-500">{count}</span>}
                        >
                          {personaLabels[persona]}
                        </Button>
                      );
                    })}
                  </div>
                </CardBody>
              </Card>

              {/* Newsletter CTA */}
              <Card className="shadow-md bg-gradient-to-br from-blue-50 to-white">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold mb-2">📧 Weekly Insights</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get our best frameworks and research delivered to your inbox every Friday.
                  </p>
                  <Button as={Link} href="/subscribe" color="primary" className="w-full">
                    Subscribe Free
                  </Button>
                </CardBody>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
