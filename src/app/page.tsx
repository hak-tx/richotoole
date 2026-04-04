import Image from "next/image";
import BandsintownWidget from "@/components/BandsintownWidget";
import SocialIcons from "@/components/SocialIcons";

const CDN = "https://cdn.shopify.com/s/files/1/0754/4255/3057/files";

export default function Home() {
  return (
    <>
      {/* Section: Hero image (image_with_text_y3VVyT) */}
      <section>
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={`${CDN}/rich_bkgrd_image.jpg`}
            alt="Rich O'Toole"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Section: "New Album" heading (rich_text_mXhx43) */}
      <section className="bg-[#0a0a0a] pt-9 pb-5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-normal text-white">
            New Album
          </h1>
        </div>
      </section>

      {/* Section: God Is a Gentleman album (image_with_text_ftdjCT) */}
      <section className="bg-[#0a0a0a] pt-3 pb-0 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 items-center">
          <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
            <Image
              src={`${CDN}/God_is_a_Gentleman_Album_Cover.jpg`}
              alt="God Is a Gentleman"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center py-8 md:py-0">
            <a
              href="https://itunes.apple.com/us/album/god-is-a-gentleman/1846851468?app=itunes&ls=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-white/10 transition-colors"
            >
              Order on iTunes
            </a>
          </div>
        </div>
      </section>

      {/* Section: "LISTEN TO ALL OF RICH O'TOOLE'S MUSIC HERE" (rich_text_kapxtX) */}
      <section className="bg-[#0a0a0a] pt-5 pb-5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-normal text-white">
            LISTEN TO ALL OF RICH O&apos;TOOLE&apos;S MUSIC HERE
          </h2>
        </div>
      </section>

      {/* Section: Discography button (rich_text_GYTkQV) */}
      <section className="bg-[#0a0a0a] pt-3 pb-3 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="/discography"
            className="inline-block border border-white text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-white/10 transition-colors"
          >
            Discography
          </a>
        </div>
      </section>

      {/* Section: Music streaming links (custom_liquid_fFfxC9) */}
      <section className="bg-[#0a0a0a] pt-1 pb-24 px-4">
        <div className="flex justify-center mt-5">
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {/* Buy on iTunes */}
            <a
              href="https://music.apple.com/us/artist/rich-otoole/191054733?app=itunes"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/Apple_logo_white_svg.png?v=1745111984`}
                alt="iTunes / Apple Logo"
                width={24}
                height={24}
              />
              <span>Buy on iTunes</span>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0?si=dEC64sG_RWiXFDDvVFPVtA"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/Spotify_Primary_Logo_RGB_White.png?v=1745111451`}
                alt="Spotify Logo"
                width={24}
                height={24}
              />
              <span>Stream on Spotify</span>
            </a>

            {/* Apple Music */}
            <a
              href="https://music.apple.com/us/artist/rich-otoole/191054733"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN}/Apple_logo_white_svg.png?v=1745111984`}
                alt="Apple Logo"
                width={24}
                height={24}
              />
              <span>Stream on Apple Music</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Merch Store banner (image_banner_Cphdky) */}
      <section className="relative">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={`${CDN}/Screenshot_2025-12-18_at_8.46.43_PM.png`}
            alt="Merch Store"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-[#0a0a0a]/60 px-8 py-6 inline-block">
              <h2 className="text-3xl sm:text-5xl font-normal text-white mb-6">
                MERCH STORE
              </h2>
              <a
                href="https://godtexasandtacos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-white/10 transition-colors"
              >
                SHOP HERE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: "UPCOMING SHOWS" heading (rich_text_wQtXJp) */}
      <section className="bg-[#0a0a0a] pt-12 pb-0 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-white">
            UPCOMING SHOWS
          </h2>
        </div>
      </section>

      {/* Section: Bandsintown widget (custom_liquid_PaAxLV) */}
      <section className="bg-black pt-3 pb-5 px-4">
        <div className="max-w-4xl mx-auto">
          <BandsintownWidget />
        </div>
      </section>

      {/* Section: Booking (rich_text_ktBPKw) */}
      <section className="bg-[#0a0a0a] pt-10 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
            BOOKING
          </h2>
          <p className="text-gray-300 mb-1">Jimmy Dasher</p>
          <p className="text-gray-300 mb-1">Countdown Talent</p>
          <p className="mb-4">
            <a
              href="mailto:jimmy@countdowntalent.com"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              jimmy@countdowntalent.com
            </a>
          </p>
          <a
            href="mailto:jimmy@countdowntalent.com"
            className="inline-block border border-white text-white uppercase tracking-widest px-8 py-3 text-sm hover:bg-white/10 transition-colors"
          >
            EMAIL
          </a>
        </div>
      </section>

      {/* Section: Bio (rich_text_KHTfzg) */}
      <section className="bg-[#0a0a0a] pt-10 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
            Bio
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Rich O&apos;Toole is a household name in the Texas Country genre. With 75
            Million streams and half a million albums sold he is just starting his
            career. His 9th album &quot;God Is a Gentleman&quot; will be released this
            Friday on PTO Records. Check out one of Rich&apos;s high energy full band
            shows or an intimate acoustic evening with Rich.
          </p>
        </div>
      </section>

      {/* Social Media icons (from footer/theme) */}
      <section className="bg-[#0a0a0a] pt-8 pb-16 px-4">
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
