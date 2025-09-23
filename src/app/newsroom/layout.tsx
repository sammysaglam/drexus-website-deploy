import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Newsroom | Drexus",
    default: "Newsroom | Drexus",
  },
  description: "Latest news, press releases, and media resources from Drexus",
  openGraph: {
    title: "Newsroom | Drexus",
    description: "Latest news, press releases, and media resources from Drexus",
    type: "website",
  },
};

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
