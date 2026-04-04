import type { Metadata } from "next";
import BandsintownWidget from "@/components/BandsintownWidget";

export const metadata: Metadata = {
  title: "Tour | Rich O'Toole",
  description: "Upcoming tour dates and shows for Rich O'Toole.",
};

const CDN = "https://cdn.shopify.com/s/files/1/0754/4255/3057/files";

const latestAlbums = [
  {
    title: "God is a Gentleman",
    image: `${CDN}/God_is_a_Gentleman_Album_Cover.jpg`,
    buyLink: "https://itunes.apple.com/us/album/god-is-a-gentleman/1846851468?app=itunes&ls=1",
  },
  {
    title: "Ghost",
    image: `${CDN}/GHOST-3000x3000-FINAL_34fedfa4-3df4-4bf7-9f47-a855e46616e9.jpg`,
    buyLink: "https://itunes.apple.com/us/album/ghost/1747221673?app=itunes&ls=1",
  },
  {
    title: "New York",
    image: `${CDN}/RT_New_York.webp`,
    buyLink: "https://music.apple.com/us/album/new-york/1508714327?app=itunes",
  },
];

export default function TourPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Bandsintown Widget */}
      <section className="pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BandsintownWidget />
        </div>
      </section>

      {/* Latest Albums */}
      <section className="py-9 px-4">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-8">Latest Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestAlbums.map((album) => (
              <div key={album.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full mb-4"
                />
                <h3 className="text-xl text-white mb-2">{album.title}</h3>
                <a
                  href={album.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
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
