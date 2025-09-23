"use client";

import React from "react";

import { Button } from "@heroui/react";
import Link from "next/link";

interface ArticleCTAProps {
  cta?: {
    label: string;
    href: string;
  };
}

export const ArticleCTA: React.FC<ArticleCTAProps> = ({ cta }) => {
  if (!cta) return null;

  return (
    <div className="mt-12 p-8 bg-navy-900 text-white rounded-lg text-center">
      <h3 className="text-2xl font-serif font-bold mb-4">Ready to Apply These Insights?</h3>
      <Button
        as={Link}
        href={cta.href}
        size="lg"
        className="bg-white text-navy-900 hover:bg-gray-100"
      >
        {cta.label}
      </Button>
    </div>
  );
};
