"use client";

import { useState, useEffect } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/taco-setlist/id6760601913";

export default function AppBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frameId: number | undefined;

    // Only show on iOS devices in non-Safari browsers
    // Safari handles this natively via the apple-itunes-app meta tag
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari =
      /Safari/.test(ua) && !/CriOS|FxiOS|OPiOS|EdgiOS|Chrome/.test(ua);

    if (isIOS && !isSafari) {
      const dismissed = sessionStorage.getItem("app-banner-dismissed");
      if (!dismissed) {
        frameId = window.requestAnimationFrame(() => setShow(true));
      }
    }

    return () => {
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  if (!show) return null;

  return (
    <div className="bg-[#1a1a1a] border-b border-white/10 px-4 py-3">
      <div className="max-w-[1600px] mx-auto flex items-center gap-3">
        {/* App icon placeholder */}
        <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex-shrink-0 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/taco-setlist-icon.webp"
            alt="Taco Setlist"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              // Fallback if icon image not yet uploaded
              (e.target as HTMLImageElement).style.display = "none";
              (
                e.target as HTMLImageElement
              ).parentElement!.innerHTML = `<span style="font-size:24px">🌮</span>`;
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">
            Taco Setlist
          </p>
          <p className="text-gray-400 text-xs truncate">
            Tacos. Live Music. Anywhere.
          </p>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase px-4 py-2 rounded-full flex-shrink-0 transition-colors"
        >
          Get App
        </a>
        <button
          onClick={() => {
            setShow(false);
            sessionStorage.setItem("app-banner-dismissed", "1");
          }}
          className="text-gray-500 hover:text-white p-1 flex-shrink-0"
          aria-label="Dismiss"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
