import React from "react";

import { MDXComponents } from "mdx/types";
import Image from "next/image";

import { Aside } from "@/components/ui/Aside";
import { Callout } from "@/components/ui/Callout";
import { DownloadCTA } from "@/components/ui/DownloadCTA";
import { StatBlock } from "@/components/ui/StatBlock";

import { Checklist } from "./Checklist";
import { DoDont } from "./DoDont";
import { Figure } from "./Figure";
import { ProsCons } from "./ProsCons";
import { Quote } from "./Quote";
import { Step } from "./Step";

export const mdxComponents: MDXComponents = {
  // Typography
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 id={id} className="text-xl md:text-2xl font-serif font-semibold text-navy-900 mt-6 mb-3">
      {children}
    </h4>
  ),
  h5: ({ children, id }) => (
    <h5 id={id} className="text-lg md:text-xl font-serif font-semibold text-navy-900 mt-4 mb-2">
      {children}
    </h5>
  ),
  h6: ({ children, id }) => (
    <h6 id={id} className="text-base md:text-lg font-serif font-semibold text-navy-900 mt-4 mb-2">
      {children}
    </h6>
  ),
  p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 ml-4 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Links
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-700 underline transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700">
      {children}
    </blockquote>
  ),

  // Code
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6">{children}</pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-gray-300">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-gray-300">{children}</tr>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-gray-900">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-3 text-gray-700">{children}</td>,

  // Horizontal Rule
  hr: () => <hr className="my-8 border-gray-300" />,

  // Images
  img: ({ src, alt }) => (
    <div className="relative my-6">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={400}
        className="rounded-lg shadow-md max-w-full h-auto"
        style={{ objectFit: "cover" }}
      />
    </div>
  ),

  // Custom Components
  Callout,
  Aside,
  DownloadCTA,
  StatBlock,
  Figure,
  Quote,
  Checklist,
  ProsCons,
  DoDont,
  Step,
};
