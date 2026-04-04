import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
