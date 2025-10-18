"use client";

import React, { useEffect, useState } from "react";

import { Link } from "@heroui/react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  selector?: string;
  maxDepth?: number;
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  selector = "h2, h3",
  maxDepth = 2,
  className = "",
}) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const items: TOCItem[] = [];

    elements.forEach((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      if (!element.id) {
        element.id = id;
      }

      const level = parseInt(element.tagName.charAt(1));
      if (level <= maxDepth + 1) {
        items.push({
          id,
          title: element.textContent || "",
          level: level - 2, // h2 = 0, h3 = 1, etc.
        });
      }
    });

    setHeadings(items);
  }, [selector, maxDepth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={`sticky top-24 ${className}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          On This Page
        </h3>
        <ul className="space-y-2">
          {headings.map(({ id, title, level }) => (
            <li key={id} style={{ paddingLeft: `${level * 1}rem` }}>
              <Link
                href={`#${id}`}
                className={`block py-1 text-sm transition-colors ${
                  activeId === id
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                underline="none"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
