"use client";

import React from "react";

import { Card, CardBody } from "@heroui/react";

interface PlaybookOverviewProps {
  readingTimeMinutes: number;
  tags: string[];
  children: React.ReactNode;
}

export const PlaybookOverview: React.FC<PlaybookOverviewProps> = ({
  readingTimeMinutes,
  tags,
  children,
}) => {
  return (
    <Card className="mb-8 bg-amber-50 border border-amber-200">
      <CardBody className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">What You&apos;ll Learn</h2>
        <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
        <div className="mt-4 pt-4 border-t border-amber-200 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            <svg
              className="w-4 h-4 inline mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readingTimeMinutes} min playbook
          </span>
          <span className="text-sm text-gray-600">{tags.length} topics covered</span>
        </div>
      </CardBody>
    </Card>
  );
};
