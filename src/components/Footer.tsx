import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaApple, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.facebook.com/RichOTooleMusic/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/richotoole/", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/RichOToole", icon: FaXTwitter, label: "X" },
  { href: "https://www.tiktok.com/@therichotoole", icon: FaTiktok, label: "TikTok" },
  { href: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0", icon: FaSpotify, label: "Spotify" },
  { href: "https://www.youtube.com/richotoole", icon: FaYoutube, label: "YouTube" },
  { href: "https://music.apple.com/us/artist/rich-otoole/191054733", icon: FaApple, label: "Apple Music" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer Nav */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm uppercase tracking-widest text-gray-500">
          <Link href="/tour" className="hover:text-accent transition-colors">Tour</Link>
          <Link href="/music" className="hover:text-accent transition-colors">Music</Link>
          <Link href="/discography" className="hover:text-accent transition-colors">Discography</Link>
          <Link href="/videos" className="hover:text-accent transition-colors">Videos</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/epk" className="hover:text-accent transition-colors">EPK</Link>
        </div>

        {/* Booking */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">
            Booking:{" "}
            <a
              href="mailto:jimmy@countdowntalent.com"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              jimmy@countdowntalent.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Rich O&apos;Toole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
