import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Corporate Responsibility | Drexus",
  description:
    "Our commitment to privacy, sustainability, community investment, and ethical business practices.",
  openGraph: {
    title: "Corporate Responsibility | Drexus",
    description:
      "Our commitment to privacy, sustainability, community investment, and ethical business practices.",
    type: "website",
  },
};

export default function CorporateResponsibilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
