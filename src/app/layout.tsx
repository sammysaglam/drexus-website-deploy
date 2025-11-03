import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { PlausibleAnalytics } from "@/components/analytics/PlausibleAnalytics";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/OrganizationSchema";

import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "Times", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drexus.com"),
  title: {
    default: "Drexus | Strategic Business Intelligence",
    template: "%s | Drexus",
  },
  description:
    "Actionable insights and strategic intelligence for enterprise leaders. Transform your decision-making with data-driven research and expert analysis.",
  keywords: [
    "business intelligence",
    "strategic planning",
    "enterprise analytics",
    "market research",
    "executive insights",
  ],
  authors: [{ name: "Drexus" }],
  creator: "Drexus",
  publisher: "Drexus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drexus.com",
    siteName: "Drexus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drexus - Strategic Business Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drexus",
    creator: "@drexus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans">
        {/* Google Ads Conversion Tracking */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}
        <Script src="https://t.contentsquare.net/uxa/a2e4b14ca2b29.js" />
        <Script
          id="hs-script-loader"
          src="//js-eu1.hs-scripts.com/146903334.js"
          strategy="lazyOnload"
        />
        <Analytics />
        <OrganizationSchema />
        <WebSiteSchema />
        <PlausibleAnalytics domain="drexus.com" />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
