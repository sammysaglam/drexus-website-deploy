import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Security | Drexus",
  description:
    "Learn about our security practices, SDLC, penetration testing, and incident response procedures.",
  openGraph: {
    title: "Security | Drexus",
    description:
      "Learn about our security practices, SDLC, penetration testing, and incident response procedures.",
    type: "website",
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
