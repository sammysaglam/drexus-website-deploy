"use client";

import { useState, useEffect, createContext, useContext } from "react";

import { SiteSearch, searchHighlightStyles } from "@/components/search/SiteSearch";
import { SearchResult } from "@/lib/search";

import { NavMega } from "./NavMega";
import { SearchButton } from "./SearchButton";

interface NavigationWithSearchProps {
  searchData: SearchResult[];
}

// Context to share search functionality
const SearchContext = createContext<{
  openSearch: () => void;
}>({ openSearch: () => {} });

export const useSearch = () => useContext(SearchContext);

// Export SearchButton for use in NavMega
export { SearchButton };

export function NavigationWithSearch({ searchData }: NavigationWithSearchProps) {
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

  const searchContextValue = {
    openSearch: () => setShowSearch(true),
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      <style dangerouslySetInnerHTML={{ __html: searchHighlightStyles }} />
      <NavMega />
      <SiteSearch
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        searchData={searchData}
      />
    </SearchContext.Provider>
  );
}
