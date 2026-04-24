import type { Metadata } from "next";
import TacoSetlistSection from "@/components/TacoSetlistSection";

export const metadata: Metadata = {
  title: "Taco Setlist",
  description:
    "The taco map built for Texas Country fans on tour. Find the best taco spots near every show, search the Top 50 touring artists' schedules, and plan your roadtrip — all in one app.",
  openGraph: {
    title: "Taco Setlist - Where Texas Country Music Meets Tacos",
    description:
      "Follow the Texas Country touring circuit and eat well doing it. Top 50 tour dates, taco reviews, and roadtrip planning — all in one app.",
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
