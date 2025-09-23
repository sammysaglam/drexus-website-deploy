import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Pricing | Drexus",
  description: "Transparent, hour-based pricing. No surprises, no lock-in. Pay for what you need.",
  openGraph: {
    title: "Pricing | Drexus",
    description:
      "Transparent, hour-based pricing. No surprises, no lock-in. Pay for what you need.",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
