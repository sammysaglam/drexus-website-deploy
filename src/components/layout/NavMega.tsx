"use client";

import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

import { BookingModal } from "@/components/ui/BookingModal";
import { useBookingModal } from "@/hooks/useBookingModal";

interface MegaMenuItem {
  title: string;
  items: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: MegaMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "Solutions",
    megaMenu: [
      {
        title: "Accelerate Your Business",
        items: [
          {
            label: "MVP Fast-Track",
            href: "/solutions/mvp-fast",
            description: "Launch in weeks, not months",
          },
          {
            label: "Ops Conversion Boost",
            href: "/solutions/ops-conversion",
            description: "Optimize your funnel",
          },
          {
            label: "Roadmap Unblock",
            href: "/solutions/roadmap-unblock",
            description: "Remove technical blockers",
          },
          {
            label: "Vendor Diligence",
            href: "/solutions/vendor-diligence",
            description: "De-risk your partnerships",
          },
          {
            label: "2-Week Pilot",
            href: "/solutions/pilot-2-week",
            description: "Prove concepts rapidly",
          },
          {
            label: "Scale Without Hiring",
            href: "/solutions/scale-up-without-hiring",
            description: "Elastic expert capacity",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    megaMenu: [
      {
        title: "Strategy & Design",
        items: [
          { label: "Discovery & Scoping", href: "/services/discovery-scope" },
          { label: "Product Strategy", href: "/services/product-strategy" },
          { label: "UX/UI Design", href: "/services/ux-ui" },
        ],
      },
      {
        title: "Engineering",
        items: [
          { label: "Frontend (React)", href: "/services/frontend-react" },
          { label: "Backend (Node)", href: "/services/backend-node" },
          { label: "Mobile (React Native)", href: "/services/mobile-react-native" },
          { label: "DevOps & SRE", href: "/services/devops-sre" },
          { label: "Data & Analytics", href: "/services/data-analytics" },
          { label: "Security & Compliance", href: "/services/security-compliance" },
        ],
      },
      {
        title: "Growth & Operations",
        items: [
          { label: "Experimentation & Growth", href: "/services/experimentation-growth" },
          { label: "Marketing Ops (HubSpot)", href: "/services/marketing-ops-hubspot" },
          { label: "Performance Marketing", href: "/services/performance-marketing" },
          { label: "Content & Brand Motion", href: "/services/content-brand-motion" },
          { label: "Support & Maintenance", href: "/services/support-maintenance" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    megaMenu: [
      {
        title: "We Specialize In",
        items: [
          { label: "SaaS", href: "/industries/saas", description: "B2B & B2C software companies" },
          {
            label: "Fintech",
            href: "/industries/fintech",
            description: "Financial technology innovation",
          },
          {
            label: "Ecommerce",
            href: "/industries/ecommerce",
            description: "Digital retail excellence",
          },
          {
            label: "Marketplaces",
            href: "/industries/marketplaces",
            description: "Two-sided platforms",
          },
          {
            label: "Healthtech",
            href: "/industries/healthtech",
            description: "Digital health solutions",
          },
          { label: "Media", href: "/industries/media", description: "Content & entertainment" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    megaMenu: [
      {
        title: "Research & Analysis",
        items: [
          { label: "Insights Hub", href: "/insights" },
          { label: "Articles", href: "/insights?type=article" },
          { label: "Special Reports", href: "/insights?type=special-report" },
          { label: "Trends", href: "/insights?type=trend" },
          { label: "Benchmarks", href: "/insights?type=benchmark" },
          { label: "Playbooks", href: "/insights?type=playbook" },
        ],
      },
    ],
  },
  {
    label: "Tools",
    megaMenu: [
      {
        title: "Planning Tools",
        items: [
          { label: "MVP Scope Builder", href: "/tools/mvp-scope-builder" },
          { label: "Vendor Diligence Scorecard", href: "/tools/vendor-diligence-scorecard" },
          { label: "Risk Ledger", href: "/tools/risk-ledger" },
          { label: "Experiment Planner", href: "/tools/experiment-planner" },
          { label: "Project Feedback Loop", href: "/tools/project-feedback-loop" },
        ],
      },
      {
        title: "Analysis Tools",
        items: [
          { label: "Conversion Audit", href: "/tools/conversion-audit" },
          { label: "Latency Budget Calculator", href: "/tools/latency-budget-calculator" },
          { label: "ROI Calculator", href: "/tools/roi-calculator" },
          { label: "AI Marketing Plan Generator", href: "/tools/ai-marketing-plan" },
          { label: "Compare Your Process", href: "/tools/compare-your-process" },
        ],
      },
    ],
  },
  {
    label: "Events",
    megaMenu: [
      {
        title: "Learn & Connect",
        items: [
          { label: "All Events", href: "/events" },
          { label: "Webinars", href: "/events/webinars" },
          { label: "Workshops", href: "/events/workshops" },
          { label: "Office Hours", href: "/events/office-hours" },
        ],
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Company",
    megaMenu: [
      {
        title: "About Drexus",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Security & Procurement", href: "/procurement" },
        ],
      },
    ],
  },
];

const utilityItems = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// Create searchable data from navigation items
const createSearchableData = (): SearchResult[] => {
  const searchData: SearchResult[] = [];

  // Add utility items
  utilityItems.forEach((item) => {
    searchData.push({
      id: `utility-${item.label.toLowerCase()}`,
      title: item.label,
      href: item.href,
      category: "Utility",
      type: "page",
    });
  });

  // Add navigation items and their mega menu items
  navItems.forEach((navItem) => {
    if (navItem.href) {
      // Direct link items
      searchData.push({
        id: `nav-${navItem.label.toLowerCase()}`,
        title: navItem.label,
        href: navItem.href,
        category: "Navigation",
        type: "page",
      });
    } else if (navItem.megaMenu) {
      // Mega menu items
      navItem.megaMenu.forEach((section) => {
        section.items.forEach((item) => {
          searchData.push({
            id: `mega-${item.label.toLowerCase().replace(/\s+/g, "-")}`,
            title: item.label,
            description: item.description,
            href: item.href,
            category: `${navItem.label} - ${section.title}`,
            type:
              navItem.label === "Tools"
                ? "tool"
                : navItem.label === "Services"
                  ? "service"
                  : navItem.label === "Industries"
                    ? "industry"
                    : navItem.label === "Insights"
                      ? "insight"
                      : navItem.label === "Solutions"
                        ? "solution"
                        : navItem.label === "Events"
                          ? "event"
                          : navItem.label === "Company"
                            ? "company"
                            : "page",
          });
        });
      });
    }
  });

  return searchData;
};

const searchableData = createSearchableData();

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  href: string;
  category: string;
  type: "page" | "tool" | "service" | "industry" | "insight" | "solution" | "event" | "company";
}

export const NavMega = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState<{
    section: number;
    item: number;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<"left" | "center" | "right">("center");
  const [dropdownWidth, setDropdownWidth] = useState<number>(800);
  const [dropdownLeftOffset, setDropdownLeftOffset] = useState<number>(0);
  const { isOpen, openModal, closeModal } = useBookingModal();

  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Calculate dropdown width based on content
  const calculateDropdownWidth = (megaMenu: MegaMenuItem[]) => {
    const numColumns = megaMenu.length;
    const baseColumnWidth = 220; // Increased base width per column
    const gapWidth = (numColumns - 1) * 32; // 32px gap between columns (gap-8)
    const paddingWidth = 48; // 24px padding on each side (p-6)

    // Calculate max content width for each column
    let maxContentWidth = 0;
    megaMenu.forEach((section) => {
      // Calculate title width (more generous character width + buffer)
      const titleWidth = section.title.length * 14 + 40; // Increased from 12px to 14px, more buffer

      // Calculate max item width in this section
      let maxItemWidth = 0;
      section.items.forEach((item) => {
        const itemWidth = item.label.length * 11 + 30; // Increased character width and buffer
        maxItemWidth = Math.max(maxItemWidth, itemWidth);
      });

      // Column width is max of title and items, with some buffer
      const columnWidth = Math.max(titleWidth, maxItemWidth, baseColumnWidth);
      maxContentWidth = Math.max(maxContentWidth, columnWidth);
    });

    const totalWidth = maxContentWidth * numColumns + gapWidth + paddingWidth;
    return Math.min(Math.max(totalWidth, 500), 1400); // Increased min/max widths
  };

  // Calculate dropdown position and constrained width based on viewport
  const calculateDropdownPosition = (
    buttonElement: HTMLElement,
    megaMenu: MegaMenuItem[],
    menuLabel?: string
  ) => {
    const rect = buttonElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const calculatedWidth = calculateDropdownWidth(megaMenu);

    // Special positioning for Services dropdown on large screens
    if (menuLabel === "Services" && viewportWidth >= 1024) {
      const targetLeftPosition = 300; // 300px from left side
      const constrainedWidth = Math.min(calculatedWidth, viewportWidth - targetLeftPosition - 40); // 40px buffer from right
      return {
        position: "left" as const,
        width: constrainedWidth,
        leftOffset: targetLeftPosition - rect.left,
      };
    }

    // Calculate available space on each side
    const spaceLeft = rect.left;
    const spaceRight = viewportWidth - rect.right;

    // Determine maximum width that fits in viewport
    const maxAvailableWidth = Math.min(spaceLeft + spaceRight - 40, viewportWidth - 40); // 40px buffer
    const constrainedWidth = Math.min(calculatedWidth, maxAvailableWidth);

    // Determine position based on available space
    if (spaceLeft < constrainedWidth / 2) {
      return { position: "left", width: constrainedWidth };
    } else if (spaceRight < constrainedWidth / 2) {
      return { position: "right", width: constrainedWidth };
    } else {
      return { position: "center", width: constrainedWidth };
    }
  };

  // Handle scroll for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleEsc = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setShowSearch(false);
        setFocusedItemIndex(null);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Focus trap for mega menu - only when menu is actually open
  useEffect(() => {
    if (!activeMenu || !menuRef.current) return;

    // Use setTimeout to defer the heavy DOM operations and avoid blocking the UI
    const timeoutId = setTimeout(() => {
      const focusableElements = menuRef.current?.querySelectorAll(
        "a[href], button:not([disabled]), input:not([disabled])"
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: globalThis.KeyboardEvent) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      };

      document.addEventListener("keydown", handleTabKey);
      firstElement.focus();

      // Store cleanup function in ref
      cleanupRef.current = () => document.removeEventListener("keydown", handleTabKey);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      // Call cleanup if it exists
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [activeMenu]);

  // Focus search input when opened
  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  // Generate suggestions based on query
  const generateSuggestions = (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const queryLower = query.toLowerCase();
    const results = searchableData
      .filter((item) => {
        const searchText = `${item.title} ${item.description || ""} ${item.category}`.toLowerCase();
        return searchText.includes(queryLower);
      })
      .sort((a, b) => {
        // Prioritize exact title matches
        const aTitleMatch = a.title.toLowerCase().startsWith(queryLower);
        const bTitleMatch = b.title.toLowerCase().startsWith(queryLower);

        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;

        // Then by type priority (tools first, then services, etc.)
        const typePriority = {
          tool: 1,
          solution: 2,
          service: 3,
          industry: 4,
          insight: 5,
          event: 6,
          company: 7,
          page: 8,
        };
        return (typePriority[a.type] || 8) - (typePriority[b.type] || 8);
      })
      .slice(0, 5); // Limit to 5 suggestions

    setSuggestions(results);
    setShowSuggestions(results.length > 0);
    setSelectedSearchIndex(0);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Show suggestions immediately as user types
    generateSuggestions(query);
  };

  // Handle search keyboard navigation
  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const currentResults = showSuggestions ? suggestions : searchResults;
    const hasResults = currentResults.length > 0;

    if (!hasResults) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedSearchIndex((prev) => (prev < currentResults.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedSearchIndex((prev) => (prev > 0 ? prev - 1 : currentResults.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (currentResults[selectedSearchIndex]) {
          window.location.href = currentResults[selectedSearchIndex].href;
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSearchQuery("");
        setSearchResults([]);
        setSuggestions([]);
        break;
    }
  };

  // Close search results and mega menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close search suggestions
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(target) &&
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setShowSuggestions(false);
      }

      // Close mega menu if clicking outside
      if (
        activeMenu &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !Array.from(document.querySelectorAll("[data-mega-menu-trigger]")).some((trigger) =>
          trigger.contains(target)
        )
      ) {
        setActiveMenu(null);
        setFocusedItemIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, itemIndex: number) => {
    const currentItem = navItems[itemIndex];
    if (!currentItem.megaMenu) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        toggleMegaMenu(currentItem.label);
        break;
      case "ArrowDown":
        e.preventDefault();
        setActiveMenu(currentItem.label);
        setFocusedItemIndex(null);
        break;
    }
  };

  const handleMegaMenuClick = (itemLabel: string) => {
    toggleMegaMenu(itemLabel);
  };

  const toggleMegaMenu = (itemLabel: string) => {
    if (activeMenu === itemLabel) {
      setActiveMenu(null);
      setFocusedItemIndex(null);
    } else {
      setActiveMenu(itemLabel);
      setFocusedItemIndex({ section: 0, item: 0 });
    }
  };

  const handleMegaMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>, item: NavItem) => {
    if (!item.megaMenu || !focusedItemIndex) return;

    const { section, item: itemIndex } = focusedItemIndex;
    const currentSection = item.megaMenu[section];
    const totalSections = item.megaMenu.length;
    const totalItems = currentSection.items.length;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (itemIndex < totalItems - 1) {
          setFocusedItemIndex({ section, item: itemIndex + 1 });
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (itemIndex > 0) {
          setFocusedItemIndex({ section, item: itemIndex - 1 });
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        if (section < totalSections - 1) {
          setFocusedItemIndex({ section: section + 1, item: 0 });
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (section > 0) {
          setFocusedItemIndex({ section: section - 1, item: 0 });
        }
        break;
    }
  };

  return (
    <>
      {/* Utility Bar - Outside of Navbar */}
      <div className="w-full border-b border-gray-200 py-2 hidden xl:block bg-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-screen-2xl flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            {utilityItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              variant="bordered"
              className="text-gray-700 border-gray-300"
              as={Link}
              href="/contact/rfp"
            >
              Request Proposal
            </Button>
            <Button size="sm" color="primary" variant="flat" onClick={openModal}>
              Book a Call
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              aria-label="Search"
              onClick={() => setShowSearch(!showSearch)}
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
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-200"
        }`}
        height="80px"
      >
        <div className="sm:container mx-auto md:px-6 max-w-screen-2xl flex items-center justify-between w-full">
          <div className="flex items-center">
            <button
              className="xl:hidden p-4 text-navy-900 relative z-50 flex items-center justify-center w-[26px] min-h-[56px] mr-4"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <NavbarBrand className="mr-4 sm:mr-6 xl:mr-8">
              <Link href="/" className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">DREXUS</span>
              </Link>
            </NavbarBrand>
          </div>

          <NavbarContent
            className="hidden xl:flex gap-4 sm:gap-6 xl:gap-8 flex-1 justify-center"
            justify="end"
          >
            {navItems.map((item, index) => (
              <NavbarItem key={item.label}>
                {item.megaMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={(e) => {
                      // Always update position when hovering, but only open if no menu is active or switching to different menu
                      const { position, width, leftOffset } = calculateDropdownPosition(
                        e.currentTarget,
                        item.megaMenu!,
                        item.label
                      );
                      setDropdownPosition(position as "left" | "center" | "right");
                      setDropdownWidth(width);
                      setDropdownLeftOffset(leftOffset || 0);

                      // Open menu if none is active or if switching to a different menu
                      if (!activeMenu || activeMenu !== item.label) {
                        setActiveMenu(item.label);
                        setFocusedItemIndex(null);
                      }
                    }}
                    onMouseLeave={(e) => {
                      // Only close if we're leaving the entire dropdown area
                      const relatedTarget = e.relatedTarget as HTMLElement;
                      if (
                        relatedTarget instanceof Node &&
                        !e.currentTarget.contains(relatedTarget)
                      ) {
                        setActiveMenu(null);
                        setFocusedItemIndex(null);
                      }
                    }}
                  >
                    <button
                      className="flex items-center text-gray-700 hover:text-navy-900 font-medium transition-colors py-2"
                      aria-expanded={activeMenu === item.label}
                      aria-haspopup="true"
                      data-mega-menu-trigger
                      onClick={() => handleMegaMenuClick(item.label)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {activeMenu === item.label && item.megaMenu && (
                        <motion.div
                          ref={menuRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute mt-2 bg-white rounded-lg shadow-xl border border-gray-200 ${
                            dropdownPosition === "left"
                              ? "left-0"
                              : dropdownPosition === "right"
                                ? "right-0"
                                : "left-1/2 transform -translate-x-1/2"
                          }`}
                          style={{
                            width: `${dropdownWidth}px`,
                            minWidth: "500px",
                            maxWidth: "90vw",
                            ...(dropdownLeftOffset !== 0 && { left: `${dropdownLeftOffset}px` }),
                          }}
                          onKeyDown={(e) => handleMegaMenuKeyDown(e, item)}
                        >
                          <div
                            className="grid gap-4 p-4"
                            style={{
                              gridTemplateColumns: `repeat(${item.megaMenu.length}, minmax(180px, 1fr))`,
                              gap: dropdownWidth < 600 ? "16px" : "32px",
                              padding: dropdownWidth < 600 ? "16px" : "24px",
                            }}
                          >
                            {item.megaMenu.map((section, sectionIndex) => (
                              <div key={section.title} className="min-w-0 flex-shrink-0 pr-2">
                                <h3
                                  className={`font-semibold text-gray-900 mb-3 whitespace-nowrap`}
                                >
                                  {section.title}
                                </h3>
                                <ul className="space-y-2">
                                  {section.items.map((link, linkIndex) => (
                                    <li key={link.label}>
                                      <Link
                                        href={link.href}
                                        className={`block text-gray-600 hover:text-blue-600 transition-colors py-1 ${
                                          focusedItemIndex?.section === sectionIndex &&
                                          focusedItemIndex?.item === linkIndex
                                            ? "text-blue-600 outline-none ring-2 ring-blue-500 ring-offset-2 rounded px-2 -mx-2"
                                            : ""
                                        }`}
                                        tabIndex={-1}
                                        ref={(el) => {
                                          if (
                                            focusedItemIndex?.section === sectionIndex &&
                                            focusedItemIndex?.item === linkIndex &&
                                            el
                                          ) {
                                            el.focus();
                                          }
                                        }}
                                      >
                                        <div className={`font-medium`}>{link.label}</div>
                                        {link.description && (
                                          <div className="text-xs text-gray-500 mt-0.5">
                                            {link.description}
                                          </div>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-navy-900 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </NavbarItem>
            ))}
          </NavbarContent>
          {/* Mobile utility buttons */}
          <NavbarContent justify="end" className="xl:hidden">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              aria-label="Search"
              onPress={() => setShowSearch(!showSearch)}
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
          </NavbarContent>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full border-t border-gray-200 absolute top-full left-0 right-0 bg-white"
            >
              <div className="container mx-auto px-6 py-4 max-w-screen-2xl">
                <div className="relative">
                  <Input
                    ref={searchRef}
                    placeholder="Search insights, tools, and resources..."
                    size="lg"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    startContent={
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                      <Button
                        size="sm"
                        variant="light"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery("");
                          setSearchResults([]);
                          setSuggestions([]);
                          setShowSuggestions(false);
                        }}
                        className="text-gray-500"
                      >
                        Cancel
                      </Button>
                    }
                  />

                  {/* Search Suggestions Dropdown */}
                  <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.div
                        ref={searchResultsRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] max-h-80 overflow-y-auto"
                      >
                        <div className="py-2">
                          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
                            Suggestions
                          </div>
                          {suggestions.map((result, index) => (
                            <Link
                              key={result.id}
                              href={result.href}
                              className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                                index === selectedSearchIndex
                                  ? "bg-blue-50 border-r-4 border-blue-500"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowSearch(false);
                                setSearchQuery("");
                                setSearchResults([]);
                                setSuggestions([]);
                                setShowSuggestions(false);
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                    {result.type === "tool" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "service" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "industry" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "insight" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "solution" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "event" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "company" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                      </svg>
                                    )}
                                    {result.type === "page" && (
                                      <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900 truncate">
                                      {result.title}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full flex-shrink-0">
                                      {result.type}
                                    </span>
                                  </div>
                                  {result.description && (
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                                      {result.description}
                                    </p>
                                  )}
                                  <p className="text-xs text-gray-500 mt-1 truncate">
                                    {result.category}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <NavbarMenu>
          <div className="space-y-4 py-4">
            {/* Mobile Search */}
            <div className="px-2 pb-4 border-b border-gray-200">
              <div className="relative">
                <Input
                  placeholder="Search..."
                  size="md"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  startContent={
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  }
                />

                {/* Mobile Search Suggestions */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] max-h-80 overflow-y-auto"
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
                          Suggestions
                        </div>
                        {suggestions.map((result, index) => (
                          <Link
                            key={result.id}
                            href={result.href}
                            className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                              index === selectedSearchIndex
                                ? "bg-blue-50 border-r-4 border-blue-500"
                                : ""
                            }`}
                            onClick={() => {
                              setShowSearch(false);
                              setSearchQuery("");
                              setSearchResults([]);
                              setSuggestions([]);
                              setShowSuggestions(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                  {result.type === "tool" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "service" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "industry" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "insight" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "solution" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "event" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "company" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                      />
                                    </svg>
                                  )}
                                  {result.type === "page" && (
                                    <svg
                                      className="w-4 h-4 text-gray-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-gray-900 truncate">
                                    {result.title}
                                  </span>
                                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full flex-shrink-0">
                                    {result.type}
                                  </span>
                                </div>
                                {result.description && (
                                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                                    {result.description}
                                  </p>
                                )}
                                <p className="text-xs text-gray-500 mt-1 truncate">
                                  {result.category}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <NavbarMenuItem key={item.label}>
                {item.href ? (
                  <Link className="w-full text-gray-700" href={item.href} size="lg">
                    {item.label}
                  </Link>
                ) : (
                  <div className="w-full">
                    <p className="font-semibold text-gray-900 mb-2">{item.label}</p>
                    {item.megaMenu && (
                      <div className="ml-4 space-y-2">
                        {item.megaMenu.map((section) => (
                          <div key={section.title}>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {section.title}
                            </p>
                            <div className="ml-4 space-y-1">
                              {section.items.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block text-sm text-gray-600"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </NavbarMenuItem>
            ))}

            {/* Mobile Utility Items */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              {utilityItems.map((item) => (
                <NavbarMenuItem key={item.label}>
                  <Link className="w-full text-gray-700" href={item.href}>
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-2">
              <Button as={Link} href="/contact/rfp" variant="bordered" className="w-full">
                Request Proposal
              </Button>
              <Button onClick={openModal} color="primary" className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </NavbarMenu>
      </Navbar>
      {isOpen && <BookingModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
};
