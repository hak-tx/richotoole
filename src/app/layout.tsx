import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rich O'Toole | Official Website",
  description:
    "Official website of Rich O'Toole - Texas Country Music Artist. Tour dates, music, videos, and more.",
  openGraph: {
    title: "Rich O'Toole | Official Website",
    description:
      "Official website of Rich O'Toole - Texas Country Music Artist.",
    url: "https://richotoole.com",
    siteName: "Rich O'Toole",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
