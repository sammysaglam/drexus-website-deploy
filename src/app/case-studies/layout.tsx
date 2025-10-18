import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Case Studies | Drexus",
    default: "Case Studies | Drexus",
  },
  description:
    "Real results from real partnerships. See how we've helped companies achieve their goals.",
  openGraph: {
    title: "Case Studies | Drexus",
    description:
      "Real results from real partnerships. See how we've helped companies achieve their goals.",
    type: "website",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
