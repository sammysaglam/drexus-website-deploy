"use client";

import React from "react";

import { Chip } from "@heroui/react";
import Link from "next/link";

interface TagChipsProps {
  tags: string[];
}

export const TagChips: React.FC<TagChipsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          size="sm"
          variant="flat"
          as={Link}
          href={`/insights?tag=${encodeURIComponent(tag)}`}
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
};
