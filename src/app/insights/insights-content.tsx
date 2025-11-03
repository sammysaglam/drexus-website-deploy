"use client";

import React, { useState, useMemo, useEffect } from "react";

import { Button, Input, Select, SelectItem, Chip, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ResourceCard } from "@/components/ui/ResourceCard";
import { type InsightItem } from "@/lib/insights";
import {
  ContentTypes,
  Personas,
  type ContentType,
  type Persona,
  getContentTypeRoute,
} from "@/lib/insights-schema";

// Client-side date formatter - consistent with server
function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00"); // Ensure consistent timezone
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
}

type SortOption = "newest" | "popular";

interface InitialFilters {
  searchQuery: string;
  selectedType: string;
  selectedPersona: string;
  selectedTag: string;
  sortBy: string;
}

interface InsightsContentProps {
  initialInsights: InsightItem[];
  initialFilters: InitialFilters;
}

export default function InsightsContent({ initialInsights, initialFilters }: InsightsContentProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Initialize with server-provided values
  const [searchQuery, setSearchQuery] = useState(initialFilters.searchQuery);
  const [selectedType, setSelectedType] = useState(initialFilters.selectedType);
  const [selectedPersona, setSelectedPersona] = useState(initialFilters.selectedPersona);
  const [selectedTag, setSelectedTag] = useState(initialFilters.selectedTag);
  const [sortBy, setSortBy] = useState<SortOption>(initialFilters.sortBy as SortOption);
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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/subscribe-insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          userAgent: navigator.userAgent,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setEmail("");
        // Reset success state after 8 seconds
        setTimeout(() => setSubmitStatus("idle"), 8000);
      } else {
        setSubmitStatus("error");
        console.error("Failed to subscribe:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to subscribe:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    // image={insight.ogImage || "/placeholder.svg"}
                    image={
                      insight.type === "benchmark"
                        ? "/insights/benchmarks.png"
                        : insight.type === "trend"
                          ? "/insights/trends.png"
                          : insight.type === "playbook"
                            ? "/insights/playbooks.png"
                            : insight.type === "special-report"
                              ? "/insights/special-reports.png"
                              : insight.type === "article"
                                ? "/insights/articles.png"
                                : "/drexus-placeholder-image.png"
                    }
                    type={typeLabels[insight.type]}
                    readTime={`${insight.readingTimeMinutes} min read`}
                    tags={insight.tags}
                    eyebrow={
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {typeLabels[insight.type]}
                        </span>
                        {insight.popularityScore && insight.popularityScore > 80 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                            🔥 Popular
                          </span>
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
                  <h3 className="text-lg font-bold mb-6 text-gray-900">🔥 Popular This Month</h3>
                  <div className="space-y-4">
                    {popularInsights.map((insight, index) => (
                      <Link
                        key={insight.slug}
                        href={`/insights/${getContentTypeRoute(insight.type)}/${insight.slug}`}
                        className="group block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">{index + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-relaxed">
                              {insight.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                              <Chip size="sm" variant="flat" className="text-xs">
                                {typeLabels[insight.type]}
                              </Chip>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">
                                {insight.readingTimeMinutes} min read
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

                  {submitStatus === "success" ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-green-800 font-medium">
                          Successfully subscribed to insights!
                        </p>
                      </div>
                      <p className="text-green-700 text-sm mt-1">
                        You'll receive weekly insights and notifications about new content.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="sm"
                        isRequired
                        isDisabled={isSubmitting}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper:
                            "border-gray-300 hover:border-gray-400 focus-within:border-blue-500",
                        }}
                      />
                      <Button
                        type="submit"
                        color="primary"
                        size="sm"
                        className="w-full"
                        isLoading={isSubmitting}
                        isDisabled={!email || isSubmitting}
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe Free"}
                      </Button>
                    </form>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-red-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <p className="text-red-800 text-sm font-medium">Subscription failed</p>
                      </div>
                      <p className="text-red-700 text-xs mt-1">
                        Please try again or contact support.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mt-3">
                    We respect your privacy. Unsubscribe anytime. No spam, ever.
                  </p>
                </CardBody>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
