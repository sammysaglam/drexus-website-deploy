"use client";

import { Button } from "@heroui/react";

interface SearchButtonProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  showShortcut?: boolean;
  className?: string;
}

export function SearchButton({
  onClick,
  size = "sm",
  showShortcut = true,
  className = "",
}: SearchButtonProps) {
  return (
    <Button
      size={size}
      variant="light"
      aria-label="Search (Cmd+K)"
      onClick={onClick}
      className={className}
      endContent={
        showShortcut && (
          <span className="hidden sm:inline-block text-xs text-gray-500 ml-1">⌘K</span>
        )
      }
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
  );
}
