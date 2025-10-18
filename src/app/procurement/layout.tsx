import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Security & Procurement | Drexus",
  description:
    "Everything your procurement team needs to evaluate us. Security checklist, compliance, policies, and documentation.",
  openGraph: {
    title: "Security & Procurement | Drexus",
    description:
      "Everything your procurement team needs to evaluate us. Security checklist, compliance, policies, and documentation.",
    type: "website",
  },
};

export default function ProcurementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
