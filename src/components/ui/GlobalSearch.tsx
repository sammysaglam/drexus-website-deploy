"use client";

import { useState, useEffect } from "react";

import { Button } from "@heroui/react";

import { SiteSearch, searchHighlightStyles } from "@/components/search/SiteSearch";
import { SearchResult } from "@/lib/search";

interface GlobalSearchProps {
  searchData?: SearchResult[];
}

export function GlobalSearch({ searchData = [] }: GlobalSearchProps) {
  const [showSearch, setShowSearch] = useState(false);

  // Handle keyboard shortcut Cmd/Ctrl+K
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: searchHighlightStyles }} />
      <Button
        size="sm"
        variant="light"
        aria-label="Search (Cmd+K)"
        onClick={() => setShowSearch(true)}
        endContent={<span className="hidden sm:inline-block text-xs text-gray-500 ml-1">⌘K</span>}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </Button>
      <SiteSearch
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        searchData={searchData}
      />
    </>
  );
}
