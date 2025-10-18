"use client";

import React from "react";

import { Link } from "@heroui/react";

export function SimplifiedFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-lg text-navy-900">
              Drexus
            </Link>
            <p className="text-sm text-gray-600 mt-1">Strategic Business Intelligence</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-navy-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-navy-900">
              Contact
            </Link>
            <Link href="/legal/privacy" className="text-gray-600 hover:text-navy-900">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-gray-600 hover:text-navy-900">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">© 2024 Drexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
