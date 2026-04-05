import BandsintownWidget from "@/components/BandsintownWidget";
import SocialIcons from "@/components/SocialIcons";
import TacoSetlistSection from "@/components/TacoSetlistSection";
import ITunesBuyButton from "@/components/ITunesBuyButton";

export default function Home() {
  return (
    <>
      {/* Section: Hero image */}
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rich_bkgrd_image.webp"
          alt="Rich O'Toole"
          className="w-full object-cover"
          style={{ maxHeight: "80vh" }}
        />
      </section>

      {/* Section: "New Album" heading */}
      <section className="bg-black pt-9 pb-5 px-4">
        <div className="max-w-[1600px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl text-white">New Album</h1>
        </div>
      </section>

      {/* Section: God Is a Gentleman album */}
      <section className="bg-black pt-3 pb-0 px-4">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-0 items-center">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/God_is_a_Gentleman_Album_Cover.webp"
              alt="God Is a Gentleman"
              className="w-full"
            />
          </div>
          <div className="text-center py-8 md:py-0">
            <ITunesBuyButton albumId="god-is-a-gentleman/1846851468" label="Order on iTunes" />
          </div>
        </div>
      </section>

      {/* Section: Taco Setlist App Promo */}
      <TacoSetlistSection />

      {/* Section: "LISTEN TO ALL..." heading */}
      <section className="bg-black pt-5 pb-5 px-4">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl text-white">
            LISTEN TO ALL OF RICH O&apos;TOOLE&apos;S MUSIC HERE
          </h2>
        </div>
      </section>

      {/* Section: Discography button */}
      <section className="bg-black pt-3 pb-3 px-4">
        <div className="max-w-[1600px] mx-auto text-center">
          <a href="/discography" className="btn-secondary uppercase tracking-widest text-sm">
            Discography
          </a>
        </div>
      </section>

      {/* Section: Music streaming links */}
      <section className="bg-black pt-1 pb-24 px-4">
        <div className="flex justify-center mt-5">
          <div className="flex gap-6 items-center flex-wrap justify-center">
            <a
              href="https://music.apple.com/us/artist/rich-otoole/191054733?app=itunes"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span>Buy on iTunes</span>
            </a>
            <a
              href="https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0?si=dEC64sG_RWiXFDDvVFPVtA"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              <span>Stream on Spotify</span>
            </a>
            <a
              href="https://music.apple.com/us/artist/rich-otoole/191054733"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span>Stream on Apple Music</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Merch Store banner */}
      <section className="relative bg-black">
        <div className="text-center py-16 px-4">
          <h2 className="text-3xl sm:text-5xl text-white mb-6">MERCH STORE</h2>
          <a
            href="https://godtexasandtacos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary uppercase tracking-widest text-sm"
          >
            SHOP HERE
          </a>
        </div>
      </section>

      {/* Section: "UPCOMING SHOWS" heading */}
      <section className="bg-black pt-12 pb-0 px-4">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white">UPCOMING SHOWS</h2>
        </div>
      </section>

      {/* Section: Bandsintown widget */}
      <section className="bg-black pt-3 pb-5 px-4">
        <div className="max-w-4xl mx-auto">
          <BandsintownWidget />
        </div>
      </section>

      {/* Section: Booking */}
      <section className="bg-black pt-10 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">BOOKING</h2>
          <p className="text-gray-300 mb-1">Jimmy Dasher</p>
          <p className="text-gray-300 mb-1">Countdown Talent</p>
          <p className="mb-4">
            <a href="mailto:jimmy@countdowntalent.com" className="text-gray-300 hover:text-white transition-colors underline">
              jimmy@countdowntalent.com
            </a>
          </p>
          <a href="mailto:jimmy@countdowntalent.com" className="btn-secondary uppercase tracking-widest text-sm">
            EMAIL
          </a>
        </div>
      </section>

      {/* Section: Bio */}
      <section className="bg-black pt-10 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">Bio</h2>
          <p className="text-gray-300 leading-relaxed">
            Rich O&apos;Toole is a household name in the Texas Country genre. With 75
            Million streams and half a million albums sold he is just starting his
            career. His 9th album &quot;God Is a Gentleman&quot; will be released this
            Friday on PTO Records. Check out one of Rich&apos;s high energy full band
            shows or an intimate acoustic evening with Rich.
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-black pt-8 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg mb-8">
            Follow Rich O&apos;Toole on your favorite social media platforms below.
          </p>
          <SocialIcons />
        </div>
      </section>
    </>
  );
}
