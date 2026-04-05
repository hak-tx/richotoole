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
      href={`https://itunes.apple.com/us/album/${albumId}?app=itunes&ls=1`}
      onClick={(e) => {
        // Try itms:// protocol first to open iTunes Store app directly
        window.location.href = `itms://itunes.apple.com/us/album/${albumId}`;
        e.preventDefault();
        // Fallback: if itms:// doesn't work (non-Apple device),
        // the href will handle it after a short delay
        setTimeout(() => {
          window.location.href = `https://itunes.apple.com/us/album/${albumId}?app=itunes&ls=1`;
        }, 500);
      }}
      className="btn-secondary uppercase tracking-widest text-sm"
    >
      {label}
    </a>
  );
}
