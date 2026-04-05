import type { Metadata } from "next";
import ITunesBuyButton from "@/components/ITunesBuyButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Discography | Rich O'Toole",
  description: "Complete discography of Rich O'Toole - all albums.",
};

const albums = [
  {
    title: "God is a Gentleman",
    image: "/images/God_is_a_Gentleman_Album_Cover.webp",
    albumId: "god-is-a-gentleman/1846851468",
  },
  {
    title: "Ghost",
    image: "/images/GHOST-3000x3000-FINAL.webp",
    albumId: "ghost/1747221673",
  },
  {
    title: "New York",
    image: "/images/RT_New_York.webp",
    albumId: "new-york/1508714327",
  },
  {
    title: "American Kid",
    image: "/images/RT_American_Kid.webp",
    albumId: "american-kid/1198717567",
  },
  {
    title: "Jaded",
    image: "/images/RT_Jaded.webp",
    albumId: "jaded/883297855",
  },
  {
    title: "In a Minute or 2",
    image: "/images/RT_In_a_minute_or_2.webp",
    albumId: "in-a-minute-or-2/675377522",
  },
];

export default function DiscographyPage() {
  return (
    <div className="bg-black min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {albums.map((album, i) => (
          <ScrollReveal
            key={album.title}
            animation={i % 2 === 0 ? "slide-left" : "slide-right"}
            delay={i * 100}
          >
            <div className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={album.image}
                alt={album.title}
                className="w-full rounded-sm mb-3 sm:mb-4"
              />
              <ITunesBuyButton albumId={album.albumId} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
