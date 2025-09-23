import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Brand Kit | Drexus",
  description:
    "Official Drexus brand assets and usage guidelines. Download logos, colors, and templates.",
  openGraph: {
    title: "Brand Kit | Drexus",
    description:
      "Official Drexus brand assets and usage guidelines. Download logos, colors, and templates.",
    type: "website",
  },
};

export default function BrandKitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
