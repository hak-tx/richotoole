"use client";

import { useEffect } from "react";

export default function BandsintownWidget() {
  useEffect(() => {
    // Load the Bandsintown widget script
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      try {
        document.body.removeChild(script);
      } catch {
        // Script may have already been removed
      }
    };
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
      data-separator-color="rgba(255,255,255,0.1)"
    />
  );
}
