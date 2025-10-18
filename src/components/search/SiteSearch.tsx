"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  Chip,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SearchResult, searchContent, highlightText, getSearchSuggestions } from "@/lib/search";

interface SiteSearchProps {
  isOpen: boolean;
  onClose: () => void;
  searchData: SearchResult[];
}

export function SiteSearch({ isOpen, onClose, searchData }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Perform search
  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query, searchData);
      setResults(searchResults);
      setSuggestions(getSearchSuggestions(query, searchData));
      setSelectedIndex(0);
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, [query, searchData]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          router.push(selected.url);
          onClose();
        }
      }
    },
    [results, selectedIndex, router, onClose]
  );

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      insight: "primary",
      event: "success",
      job: "secondary",
      tool: "warning",
      "case-study": "danger",
    };
    return colors[type] || "default";
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      insight: "Insight",
      event: "Event",
      job: "Job",
      tool: "Tool",
      "case-study": "Case Study",
    };
    return labels[type] || type;
  };

  const formatDate = (date?: string | number | boolean | Date) => {
    if (!date) return "";
    if (typeof date === "boolean") return "";

    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) return "";

    // Ensure consistent timezone for server/client consistency
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      placement="top"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          },
        },
      }}
    >
      <ModalContent>
        <ModalHeader className="pb-0">
          <Input
            ref={searchInputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search insights, events, jobs, and more..."
            size="lg"
            classNames={{
              input: "text-lg",
              inputWrapper: "bg-gray-50",
            }}
            startContent={
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
            endContent={
              query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-gray-600"
                  type="button"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )
            }
          />
        </ModalHeader>
        <ModalBody className="max-h-[60vh] overflow-y-auto pb-6">
          {query && results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found for "{query}"</p>
              {suggestions.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Did you mean:</p>
                  <div className="flex gap-2 justify-center">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="text-sm text-navy-600 hover:text-navy-700"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((result, index) => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={onClose}
                  className={`block ${index === selectedIndex ? "ring-2 ring-navy-500 rounded-lg" : ""}`}
                >
                  <Card isPressable className="hover:shadow-md transition-shadow">
                    <CardBody className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Chip
                              size="sm"
                              color={
                                getTypeColor(result.type) as
                                  | "primary"
                                  | "success"
                                  | "secondary"
                                  | "warning"
                                  | "danger"
                                  | "default"
                              }
                              variant="flat"
                            >
                              {getTypeLabel(result.type)}
                            </Chip>
                            {result.metadata?.date && (
                              <span className="text-xs text-gray-500">
                                {formatDate(result.metadata.date)}
                              </span>
                            )}
                          </div>
                          <h3
                            className="font-semibold text-navy-900"
                            dangerouslySetInnerHTML={{
                              __html: highlightText(result.title, query),
                            }}
                          />
                          <p
                            className="text-sm text-gray-600 mt-1 text-truncate-2"
                            dangerouslySetInnerHTML={{
                              __html: highlightText(result.description, query),
                            }}
                          />
                          <div className="flex items-center gap-4 mt-2">
                            {result.metadata?.location && (
                              <span className="text-xs text-gray-500">
                                📍 {String(result.metadata.location)}
                              </span>
                            )}
                            {result.metadata?.department && (
                              <span className="text-xs text-gray-500">
                                🏢 {String(result.metadata.department)}
                              </span>
                            )}
                            {result.metadata?.readingTime && (
                              <span className="text-xs text-gray-500">
                                ⏱️ {String(result.metadata.readingTime)} min read
                              </span>
                            )}
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {!query && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Start typing to search across all content</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["MVP", "React", "Events", "Jobs", "Case Studies"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

// Mark styles for search highlighting
export const searchHighlightStyles = `
  mark {
    background-color: #fef3c7;
    color: inherit;
    padding: 0 2px;
    border-radius: 2px;
  }
`;
