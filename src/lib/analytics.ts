import { track as vercelTrack } from "@vercel/analytics";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Type definitions for analytics values - these should match the 'value' field from constants
export type RoleValue =
  | "CEO/Founder"
  | "CTO"
  | "VP Engineering"
  | "Engineering Manager"
  | "Senior Engineer"
  | "Engineer"
  | "Product Manager"
  | "Project Manager"
  | "Scrum Master"
  | "DevOps Engineer"
  | "Data Scientist"
  | "Business Analyst"
  | "Consultant"
  | "Other";

export type CompanySizeValue =
  | "1-10 employees"
  | "11-50 employees"
  | "51-200 employees"
  | "201-1000 employees"
  | "1000+ employees";

export type IndustryValue =
  | "Technology"
  | "Healthcare"
  | "Finance"
  | "E-commerce"
  | "Education"
  | "Manufacturing"
  | "Retail"
  | "SaaS"
  | "Consulting"
  | "Media & Entertainment"
  | "Real Estate"
  | "Logistics & Transportation"
  | "Energy & Utilities"
  | "Government"
  | "Non-profit"
  | "Professional Services"
  | "Other";

/**
 * Schema for all analytics events
 */
export type AnalyticsEvents = {
  "Executed Marketing Tool": {
    location:
      | "/tools/ai-marketing-plan"
      | "/tools/conversion-audit"
      | "/tools/experiment-planner"
      | "/tools/latency-budget-calculator"
      | "/tools/mvp-scope-builder"
      | "/tools/risk-ledger"
      | "/tools/roi-calculator"
      | "/tools/vendor-diligence-scorecard"
      | "/tools/compare-your-process"
      | "/tools/project-feedback-loop";
    toolName:
      | "AI Marketing Plan Generator"
      | "Conversion Audit"
      | "Experiment Planner"
      | "Latency Budget Calculator"
      | "MVP Scope Builder"
      | "Risk Ledger"
      | "ROI Calculator"
      | "Vendor Diligence Scorecard"
      | "Compare Your Process"
      | "Project Feedback Loop";
    industry: IndustryValue;
    companySize: CompanySizeValue;
    role: RoleValue;
  };
  "Booking Modal Opened": undefined;
};

/**
 * Track Google Ads conversion
 */
function trackGoogleAdsConversion({
  conversionLabel,
  value = 0,
}: {
  conversionLabel: string;
  value?: number;
}): void {
  if (typeof window !== "undefined" && window.gtag) {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    if (adsId) {
      window.gtag("event", "conversion", {
        send_to: `${adsId}/${conversionLabel}`,
        value: value,
        currency: "CHF",
        // Automatically include page location for all Google Ads events
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }
}

/**
 * Type-safe analytics tracking function
 * Tracks events across multiple analytics providers:
 * - Vercel Analytics
 * - Google Ads (for conversion tracking)
 */
export function track<K extends keyof AnalyticsEvents>(
  eventName: K,
  data: AnalyticsEvents[K]
): void {
  // Track in Vercel Analytics
  vercelTrack(eventName, data);

  // Track in Google Ads for specific conversion events
  if (eventName === "Booking Modal Opened") {
    trackGoogleAdsConversion({ conversionLabel: "tHDxCIacqK4bELXLvOJB" });
  }
}
