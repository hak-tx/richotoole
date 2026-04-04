"use client";

import { useEffect } from "react";

export default function BandsintownWidget() {
  useEffect(() => {
    // Load the Bandsintown widget script
    const existing = document.querySelector(
      'script[src*="widgetv3.bandsintown.com"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://widgetv3.bandsintown.com/main.min.js";
      script.charset = "utf-8";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <a
      className="bit-widget-initializer"
      data-artist-name="id_39860"
      data-display-local-dates="false"
      data-display-past-dates="false"
      data-auto-style="false"
      data-text-color="#FFFFFF"
      data-link-color="#FFFFFF"
      data-background-color="rgba(0,0,0,0)"
      data-display-limit="15"
      data-display-start-date="false"
      data-link-text-color="#FFFFFF"
      data-display-lineup="false"
      data-display-play-my-city="true"
      data-separator-color="rgba(255,255,255,0.15)"
      data-popup-background-color="#0a0a0a"
      data-bit-logo-position="bottomRight"
      data-bit-logo-color="white"
    />
  );
}
