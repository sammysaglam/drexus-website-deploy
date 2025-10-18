"use client";

import Script from "next/script";

interface PlausibleAnalyticsProps {
  domain: string;
  customDomain?: string;
  enabled?: boolean;
}

export function PlausibleAnalytics({
  domain,
  customDomain = "plausible.io",
  enabled = process.env.NODE_ENV === "production",
}: PlausibleAnalyticsProps) {
  if (!enabled) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={domain}
        src={`https://${customDomain}/js/script.js`}
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() { 
            (window.plausible.q = window.plausible.q || []).push(arguments) 
          }
        `}
      </Script>
    </>
  );
}

// Custom event tracking
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props });
  }
}

// Goal tracking
export function trackGoal(goalName: string, revenue?: number) {
  if (typeof window !== "undefined" && window.plausible) {
    const props = revenue ? { revenue } : undefined;
    window.plausible(goalName, { props });
  }
}

// Declare plausible on window
declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> }
    ) => void;
  }
}
