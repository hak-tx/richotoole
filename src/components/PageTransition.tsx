"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [stage, setStage] = useState<"visible" | "fading-out" | "fading-in">("visible");
  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = pathname;
      return;
    }

    // Only animate when pathname actually changes
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;

      // Fade in the new page
      setStage("fading-in");
      const timer = setTimeout(() => setStage("visible"), 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Intercept link clicks to add fade-out before navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("itms:")) return;
      if (href === pathname) return;
      if (link.target === "_blank") return;

      e.preventDefault();
      setStage("fading-out");

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <div
      className={
        stage === "fading-out"
          ? "page-fade-out"
          : stage === "fading-in"
            ? "page-fade-in"
            : "page-visible"
      }
    >
      {children}
    </div>
  );
}
