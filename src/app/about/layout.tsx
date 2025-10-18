import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | About | Drexus",
    default: "About | Drexus",
  },
  description:
    "Learn about Drexus's mission, values, and journey in transforming how companies build software",
  openGraph: {
    title: "About | Drexus",
    description:
      "Learn about Drexus's mission, values, and journey in transforming how companies build software",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
