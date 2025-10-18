"use client";

import React from "react";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavigationWithSearch } from "@/components/layout/NavigationWithSearch";
import { SearchResult } from "@/lib/search";

interface LayoutClientProps {
  children: React.ReactNode;
  searchData: SearchResult[];
}

export function LayoutClient({ children, searchData }: LayoutClientProps) {
  return (
    <>
      <NavigationWithSearch searchData={searchData} />
      {children}
      <FooterMega />
    </>
  );
}
