"use client";

import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

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
          { label: "Articles", href: "/insights/articles" },
          { label: "Special Reports", href: "/insights/special-reports" },
          { label: "Trends", href: "/insights/trends" },
          { label: "Benchmarks", href: "/insights/benchmarks" },
          { label: "Playbooks", href: "/insights/playbooks" },
          { label: "Newsletter", href: "/insights/newsletter" },
        ],
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
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
        ],
      },
      {
        title: "Analysis Tools",
        items: [
          { label: "Conversion Audit", href: "/tools/conversion-audit" },
          { label: "Latency Budget Calculator", href: "/tools/latency-budget-calculator" },
          { label: "ROI Calculator", href: "/tools/roi-calculator" },
          { label: "AI Marketing Plan Generator", href: "/tools/ai-marketing-plan-generator" },
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
          { label: "On-Demand", href: "/events/on-demand" },
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
          { label: "Leadership", href: "/leadership" },
          { label: "Culture", href: "/culture" },
          { label: "Careers", href: "/careers" },
          { label: "Newsroom", href: "/newsroom" },
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

export const NavMega: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState<{
    section: number;
    item: number;
  } | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

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

  // Focus trap for mega menu
  useEffect(() => {
    if (!activeMenu || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      "a[href], button:not([disabled]), input:not([disabled])"
    );

    if (focusableElements.length === 0) return;

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

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [activeMenu]);

  // Focus search input when opened
  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, itemIndex: number) => {
    const currentItem = navItems[itemIndex];
    if (!currentItem.megaMenu) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setActiveMenu(activeMenu === currentItem.label ? null : currentItem.label);
        setFocusedItemIndex({ section: 0, item: 0 });
        break;
      case "ArrowDown":
        e.preventDefault();
        setActiveMenu(currentItem.label);
        setFocusedItemIndex({ section: 0, item: 0 });
        break;
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
      <div className="w-full border-b border-gray-200 py-2 hidden lg:block bg-white">
        <div className="container mx-auto px-6 max-w-screen-2xl flex justify-between items-center">
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
            <Button size="sm" color="primary" variant="flat" as={Link} href="/contact/book-a-call">
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
        <div className="container mx-auto px-6 max-w-screen-2xl flex items-center justify-between w-full">
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden"
            />
            <NavbarBrand>
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-navy-900">DREXUS</span>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-8" justify="center">
            {navItems.map((item, index) => (
              <NavbarItem key={item.label}>
                {item.megaMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item.label)}
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setFocusedItemIndex(null);
                    }}
                  >
                    <button
                      className="flex items-center text-gray-700 hover:text-navy-900 font-medium transition-colors py-2"
                      aria-expanded={activeMenu === item.label}
                      aria-haspopup="true"
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
                      {activeMenu === item.label && (
                        <motion.div
                          ref={menuRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-screen max-w-5xl bg-white rounded-lg shadow-xl border border-gray-200"
                          onKeyDown={(e) => handleMegaMenuKeyDown(e, item)}
                        >
                          <div className="grid grid-cols-3 gap-8 p-8">
                            {item.megaMenu.map((section, sectionIndex) => (
                              <div key={section.title}>
                                <h3 className="font-semibold text-gray-900 mb-4">
                                  {section.title}
                                </h3>
                                <ul className="space-y-3">
                                  {section.items.map((link, linkIndex) => (
                                    <li key={link.label}>
                                      <Link
                                        href={link.href}
                                        className={`block text-gray-600 hover:text-blue-600 transition-colors ${
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
                                        <div className="font-medium">{link.label}</div>
                                        {link.description && (
                                          <div className="text-sm text-gray-500 mt-1">
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
          <NavbarContent justify="end" className="lg:hidden">
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
              className="w-full border-t border-gray-200 overflow-hidden absolute top-full left-0 right-0 bg-white"
            >
              <div className="container mx-auto px-6 py-4 max-w-screen-2xl">
                <Input
                  ref={searchRef}
                  placeholder="Search insights, tools, and resources..."
                  size="lg"
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
                      onClick={() => setShowSearch(false)}
                      className="text-gray-500"
                    >
                      Cancel
                    </Button>
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <NavbarMenu>
          <div className="space-y-4 py-4">
            {/* Mobile Search */}
            <div className="px-2 pb-4 border-b border-gray-200">
              <Input
                placeholder="Search..."
                size="md"
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
              <Button as={Link} href="/contact/book-a-call" color="primary" className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
