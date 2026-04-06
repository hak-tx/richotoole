import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import AppBanner from "@/components/AppBanner";
import { ArtistJsonLd, WebsiteJsonLd, SoftwareAppJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://richotoole.com"),
  title: {
    default: "Rich O'Toole | Official Site",
    template: "%s | Rich O'Toole",
  },
  description:
    "Official website of Rich O'Toole - Texas Country Music Artist from Houston, TX. Tour dates, music, discography, merch, and the Taco Setlist app.",
  keywords: [
    "Rich O'Toole",
    "Texas Country Music",
    "Red Dirt Country",
    "Country Rock",
    "Houston Texas",
    "God Is a Gentleman",
    "Ghost album",
    "Texas music",
    "country singer songwriter",
    "Taco Setlist",
    "tour dates",
    "live music Texas",
  ],
  authors: [{ name: "Rich O'Toole" }],
  creator: "Rich O'Toole",
  openGraph: {
    title: "Rich O'Toole | Official Site",
    description:
      "Texas Country Music Artist from Houston, TX. 75M+ streams, 500K+ albums sold. Tour dates, music, discography, and merch.",
    url: "https://richotoole.com",
    siteName: "Rich O'Toole",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/rich_bkgrd_image.webp",
        width: 1200,
        height: 630,
        alt: "Rich O'Toole - Texas Country Music Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rich O'Toole | Official Site",
    description:
      "Texas Country Music Artist. 75M+ streams, 500K+ albums sold.",
    images: ["/images/rich_bkgrd_image.webp"],
    creator: "@RichOToole",
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
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "apple-itunes-app": "app-id=6760601913",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0H40HQXKE9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0H40HQXKE9');
          `}
        </Script>
        <ArtistJsonLd />
        <WebsiteJsonLd />
        <SoftwareAppJsonLd />
      </head>
      <body className="min-h-full">
        <AppBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}
