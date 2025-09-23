import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Culture | Drexus",
  description:
    "Discover the Drexus culture. We build an environment where great people do their best work.",
  openGraph: {
    title: "Culture | Drexus",
    description:
      "Discover the Drexus culture. We build an environment where great people do their best work.",
    type: "website",
  },
};

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
