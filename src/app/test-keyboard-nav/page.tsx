"use client";

import React, { useEffect, useState } from "react";

import { NavMega, FooterMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";

export default function KeyboardNavTestPage() {
  const [keyLog, setKeyLog] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<{
    tabNavigation: boolean;
    escapeKey: boolean;
    arrowKeys: boolean;
    focusTrap: boolean;
  }>({
    tabNavigation: false,
    escapeKey: false,
    arrowKeys: false,
    focusTrap: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const activeElement = document.activeElement;
      const tagName = activeElement?.tagName.toLowerCase();
      const className = activeElement?.className || "no-class";

      setKeyLog((prev) => [...prev.slice(-9), `${key} - ${tagName} - ${className}`]);

      // Test various keyboard features
      if (key === "Tab") {
        setTestResults((prev) => ({ ...prev, tabNavigation: true }));
      }
      if (key === "Escape") {
        setTestResults((prev) => ({ ...prev, escapeKey: true }));
      }
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        setTestResults((prev) => ({ ...prev, arrowKeys: true }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavMega />

      <main id="main-content">
        <PageHeader
          title="Keyboard Navigation Test"
          subtitle="Test accessibility features of the mega navigation"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Test", href: "/test" },
            { label: "Keyboard Navigation" },
          ]}
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Test Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Test Instructions</h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">1. Tab Navigation</h3>
                    <p className="text-sm text-gray-600">
                      Press Tab to navigate through all interactive elements. Use Shift+Tab to go
                      backwards.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">2. Mega Menu Navigation</h3>
                    <p className="text-sm text-gray-600">
                      Focus on a menu item with dropdown and press Enter or Space to open. Use arrow
                      keys to navigate within the menu.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">3. Escape Key</h3>
                    <p className="text-sm text-gray-600">
                      Press Escape to close any open mega menu or search bar.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">4. Focus Trap</h3>
                    <p className="text-sm text-gray-600">
                      When a mega menu is open, Tab navigation should be trapped within the menu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Test Results */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Test Results</h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        testResults.tabNavigation ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                    <span>Tab Navigation Detected</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        testResults.escapeKey ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                    <span>Escape Key Detected</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        testResults.arrowKeys ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                    <span>Arrow Keys Detected</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Key Press Log</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
                    {keyLog.length === 0 ? (
                      <p className="text-gray-500">No keys pressed yet...</p>
                    ) : (
                      keyLog.map((log, index) => (
                        <div key={index} className="py-1">
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Test Areas */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Focus Order Test</h2>

              <p className="text-gray-600 mb-6">
                Tab through these elements to verify proper focus order:
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Button 1
                </button>
                <a
                  href="#"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Link 1
                </a>
                <input
                  type="text"
                  placeholder="Input field"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
