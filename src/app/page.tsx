import Image from "next/image";
import BandsintownWidget from "@/components/BandsintownWidget";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <>
      {/* Hero Image */}
      <section>
        <div className="w-full">
          <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/hero.jpg"
              alt="Rich O'Toole"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Upcoming Shows - Bandsintown Widget */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-center uppercase tracking-[0.3em] mb-10 text-gray-200">
            Upcoming Shows
          </h2>
          <BandsintownWidget />
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.3em] mb-8 text-gray-200">
            Booking
          </h2>
          <p className="text-gray-300 text-lg mb-1">Jimmy Dasher</p>
          <p className="text-gray-400 mb-2">Countdown Talent</p>
          <a
            href="mailto:jimmy@countdowntalent.com"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            jimmy@countdowntalent.com
          </a>
          <div className="mt-6">
            <a
              href="mailto:jimmy@countdowntalent.com"
              className="inline-block border border-white/30 hover:border-white text-white uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-8 text-gray-200">
            Bio
          </h2>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            Rich O&apos;Toole is a household name in the Texas Country genre. With 75
            Million streams and half a million albums sold he is just starting his
            career. His 9th album &ldquo;God Is a Gentleman&rdquo; will be released this Friday
            on PTO Records. Check out one of Rich&apos;s high energy full band shows or
            an intimate acoustic evening with Rich.
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4">
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
