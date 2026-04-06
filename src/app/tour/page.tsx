import type { Metadata } from "next";
import BandsintownWidget from "@/components/BandsintownWidget";
import ITunesBuyButton from "@/components/ITunesBuyButton";

export const metadata: Metadata = {
  title: "Tour Dates",
  description:
    "See Rich O'Toole live. Upcoming tour dates, ticket info, and show schedule for Texas Country's hardest-working artist.",
  openGraph: {
    title: "Rich O'Toole Tour Dates",
    description: "See Rich O'Toole live. Upcoming shows and ticket info.",
    images: ["/images/rich_bkgrd_image.webp"],
  },
};

const latestAlbums = [
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
];

export default function TourPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Logo + ON TOUR header */}
      <section className="pt-10 pb-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rich-logo-dark-transparent.png"
            alt="Rich O'Toole"
            className="mx-auto mb-6 w-64 sm:w-80 md:w-96 h-auto"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">ON TOUR</h1>
        </div>
      </section>

      <section className="pt-4 pb-12 px-4">
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
                <ITunesBuyButton albumId={album.albumId} label="Buy Now" />
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
