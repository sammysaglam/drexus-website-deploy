"use client";

import { useEffect } from "react";

import Link from "next/link";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <NavMega />
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-3xl font-semibold text-navy-800 mb-6">Something went wrong!</h2>
          <p className="text-xl text-gray-600 mb-8">
            We apologize for the inconvenience. An unexpected error occurred. Our team has been
            notified and is working to fix the issue.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-block px-6 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block px-6 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-700">Error: {error.message}</p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}
        </div>
      </main>
      <FooterMega />
    </>
  );
}
