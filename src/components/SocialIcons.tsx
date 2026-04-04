import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaApple,
} from "react-icons/fa6";

const socialLinks = [
  { href: "https://music.apple.com/us/artist/rich-otoole/191054733", icon: FaApple, label: "Apple Music" },
  { href: "https://www.facebook.com/RichOTooleMusic", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/richotoole", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@RichOTooleMusic", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.tiktok.com/@therichotoole", icon: FaTiktok, label: "TikTok" },
  { href: "https://x.com/RichOToole", icon: FaXTwitter, label: "X" },
  { href: "https://open.spotify.com/artist/2t6FHAUXxi9eiatP2Mavh0", icon: FaSpotify, label: "Spotify" },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
}
