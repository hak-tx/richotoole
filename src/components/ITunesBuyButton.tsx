"use client";

interface ITunesBuyButtonProps {
  albumId: string;
  label?: string;
}

export default function ITunesBuyButton({
  albumId,
  label = "Buy Album",
}: ITunesBuyButtonProps) {
  return (
    <a
      href={`https://music.apple.com/us/album/${albumId}?app=itunes`}
      onClick={(e) => {
        e.preventDefault();
        // itms:// via music.apple.com deep-links to the album in iTunes Store
        window.location.href = `itms://music.apple.com/us/album/${albumId}`;
      }}
      className="btn-secondary uppercase tracking-widest text-sm"
    >
      {label}
    </a>
  );
}
