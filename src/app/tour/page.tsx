import type { Metadata } from "next";
import BandsintownWidget from "@/components/BandsintownWidget";

export const metadata: Metadata = {
  title: "Tour | Rich O'Toole",
  description: "Upcoming tour dates and shows for Rich O'Toole.",
};

const latestAlbums = [
  {
    title: "God is a Gentleman",
    image: "/images/God_is_a_Gentleman_Album_Cover.webp",
    buyLink: "https://music.apple.com/us/album/god-is-a-gentleman/1846851468",
  },
  {
    title: "Ghost",
    image: "/images/GHOST-3000x3000-FINAL.webp",
    buyLink: "https://music.apple.com/us/album/ghost/1747221673",
  },
  {
    title: "New York",
    image: "/images/RT_New_York.webp",
    buyLink: "https://music.apple.com/us/album/new-york/1508714327",
  },
];

export default function TourPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BandsintownWidget />
        </div>
      </section>

      <section className="py-9 px-4">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-8">Latest Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestAlbums.map((album) => (
              <div key={album.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={album.image} alt={album.title} className="w-full mb-4" />
                <h3 className="text-xl text-white mb-2">{album.title}</h3>
                <a href={album.buyLink} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  Buy Now
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/discography" className="btn-secondary uppercase tracking-widest text-sm">
              Discography
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
