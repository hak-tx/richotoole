import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
    icon: "https://cdn.shopify.com/s/files/1/0754/4255/3057/files/rich_bkgrd_image.jpg",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
