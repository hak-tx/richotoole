import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Rich O'Toole",
  description: "Learn about Rich O'Toole - Texas Country Music Artist from Houston, TX.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-wider mb-4">
          About Rich
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative aspect-[3/4] max-w-md mx-auto w-full sticky top-28">
            <Image
              src="/images/rich-portrait.svg"
              alt="Rich O'Toole"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Rich O&apos;Toole is a household name in the Texas Country genre. With
              75 Million streams and half a million albums sold, he is just getting
              started.
            </p>
            <p>
              Born on August 6, 1983, in Houston, Texas, Rich began playing music in
              high school but started taking it seriously while attending Texas A&amp;M
              University. A Red Dirt country singer with a flair for gleaming arena
              rock, Rich built a regional following in his native Texas during the
              late 2000s and early 2010s.
            </p>
            <p>
              In early 2006, O&apos;Toole released his debut album, <em>Seventeen</em>,
              which was named the &ldquo;Best Album of 2006 That No One Told You About&rdquo;
              by Americana Music Times. His career continued to grow with subsequent
              releases including <em>Kiss of a Liar</em>, which featured cameos from
              fellow Texas stars Josh Abbott and Pat Green, peaking at #73 on
              Billboard&apos;s country chart.
            </p>
            <p>
              In 2013, Rich launched his own label, PTO Records, which debuted with
              his fourth album, <em>Brightwork</em>. His 2014 album <em>Jaded</em>{" "}
              came out at #10 on the Country Music iTunes Chart, and{" "}
              <em>American Kid</em> appeared in March 2017, debuting at #5 on the
              Country Music iTunes Chart and #43 on the National Billboard Chart.
            </p>
            <p>
              In 2020, O&apos;Toole signed a record deal with Average Joe&apos;s
              Entertainment and launched his own record imprint, Buffalo Roam
              Records, releasing his album <em>New York</em>.
            </p>
            <p>
              His 8th studio album <em>Ghost</em> reached #5 on the iTunes charts
              nationwide, and Country Music France called it one of the best written
              records of 2024. His 9th album <em>God Is a Gentleman</em> continues
              to showcase the depth and versatility that fans have come to expect.
            </p>
            <p>
              Beyond music, O&apos;Toole is also a member of Mensa and has launched
              several successful iPhone apps, including &ldquo;TexMoji&rdquo; which sold over
              65,000 units its first week and was featured in Time &amp; People Magazine.
            </p>
            <p>
              Check out one of Rich&apos;s high energy full band shows or an intimate
              acoustic evening with Rich.
            </p>

            {/* Booking Info */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                Booking
              </h3>
              <p>
                For booking inquiries, contact:{" "}
                <a
                  href="mailto:jimmy@countdowntalent.com"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  jimmy@countdowntalent.com
                </a>
              </p>
            </div>

            {/* Management */}
            <div className="pt-4">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                Label
              </h3>
              <p>PTO Records / Buffalo Roam Records</p>
              <p>
                <a
                  href="https://averagejoesent.com/artist/rich-otoole/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  Average Joes Entertainment
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
