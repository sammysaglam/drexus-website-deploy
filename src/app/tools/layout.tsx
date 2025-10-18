import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Tools | Drexus",
    default: "Free Tools & Calculators | Drexus",
  },
  description:
    "Practical tools to accelerate your planning and decision-making. No email required.",
  openGraph: {
    title: "Free Tools & Calculators | Drexus",
    description:
      "Practical tools to accelerate your planning and decision-making. No email required.",
    type: "website",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
