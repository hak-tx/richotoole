"use client";

import Script from "next/script";

export default function BandsintownWidget() {
  return (
    <>
      <Script
        src="https://widget.bandsintown.com/main.min.js"
        strategy="lazyOnload"
      />
      <a
        className="bit-widget-initializer"
        data-artist-name="Rich O'Toole"
        data-background-color="black"
        data-text-color="#ffffff"
        data-font="Helvetica"
        data-link-color="#9E9E9E"
        data-link-text-color="#ffffff"
        data-button-bg-color="#503C3C"
        data-button-text-color="#ffffff"
        data-hover-bg-color="#503C3C"
        data-hover-text-color="#ffffff"
        data-separator-color="#ffffff"
        data-display-limit="6"
        data-display-past-dates="true"
        data-auto-style="true"
      />
    </>
  );
}
