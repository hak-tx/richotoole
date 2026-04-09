import type { Metadata } from "next";
import TacoSetlistSection from "@/components/TacoSetlistSection";

export const metadata: Metadata = {
  title: "Taco Setlist",
  description:
    "The 1st Taco Review App in Texas. Rate & review tacos everywhere you go. Discover the best tacos in every city — plus get Rich O'Toole's latest tour dates, stream his music, and shop merch.",
  openGraph: {
    title: "Taco Setlist - Where Texas Music Meets Texas Tacos",
    description:
      "Rate & review tacos everywhere you go. Tour dates, music, and merch from Rich O'Toole.",
    images: ["/images/taco-setlist-icon.webp"],
  },
};

export default function TacoSetlistPage() {
  return (
    <div className="bg-black min-h-screen">
      <TacoSetlistSection />
    </div>
  );
}
