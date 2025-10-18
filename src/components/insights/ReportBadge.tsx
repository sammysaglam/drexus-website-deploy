"use client";

import React from "react";

import { Chip } from "@heroui/react";

interface ReportBadgeProps {
  type: string;
}

export const ReportBadge: React.FC<ReportBadgeProps> = ({ type }) => {
  const getChipColor = () => {
    switch (type) {
      case "special-report":
        return "warning";
      case "trend":
        return "primary";
      case "benchmark":
        return "secondary";
      default:
        return "default";
    }
  };

  const getLabel = () => {
    switch (type) {
      case "special-report":
        return "Special Report";
      case "trend":
        return "Trend";
      case "benchmark":
        return "Benchmark";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <Chip color={getChipColor()} variant="flat" className="mb-4">
      {getLabel()}
    </Chip>
  );
};
