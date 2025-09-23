import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Insights | Drexus",
    default: "Insights & Research | Drexus",
  },
  description:
    "Strategic guidance, industry analysis, and practical frameworks to accelerate your business",
  openGraph: {
    title: "Insights & Research | Drexus",
    description:
      "Strategic guidance, industry analysis, and practical frameworks to accelerate your business",
    type: "website",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
