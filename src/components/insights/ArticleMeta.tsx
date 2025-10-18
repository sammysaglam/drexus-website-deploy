"use client";

import React from "react";

import { Chip, Avatar } from "@heroui/react";
import Link from "next/link";

interface ArticleMetaProps {
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  date: string;
  readingTimeMinutes: number;
  tags: string[];
}

export function ArticleMeta({ author, date, readingTimeMinutes, tags }: ArticleMetaProps) {
  return (
    <>
      {/* Author info */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
        <Avatar
          src={author.avatar}
          alt={author.name}
          size="lg"
          className="border-2 border-gray-200"
        />
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-600">{author.title}</p>
          <p className="text-sm text-gray-500">
            {date} • {readingTimeMinutes} min read
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 w-full">Topics</h4>
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
    </>
  );
}
