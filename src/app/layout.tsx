import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AppBanner from "@/components/AppBanner";

export const metadata: Metadata = {
  title: "Rich O'Toole | Official Site",
  description:
    "Official website of Rich O'Toole - Texas Country Music Artist. Tour dates, music, and more.",
  openGraph: {
    title: "Rich O'Toole | Official Site",
    description:
      "Official website of Rich O'Toole - Texas Country Music Artist.",
    url: "https://richotoole.com",
    siteName: "Rich O'Toole",
    type: "website",
  },
  icons: {
    icon: "/images/rich_bkgrd_image.webp",
  },
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
      <body className="min-h-full">
        <AppBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}
