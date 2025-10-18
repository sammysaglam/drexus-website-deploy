import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Legal | Drexus",
    default: "Legal | Drexus",
  },
  description: "Legal information, terms of service, and privacy policies for Drexus services",
  openGraph: {
    title: "Legal | Drexus",
    description: "Legal information, terms of service, and privacy policies for Drexus services",
    type: "website",
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
