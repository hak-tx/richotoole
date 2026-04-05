"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"visible" | "fading-out" | "fading-in">(
    "visible"
  );

  useEffect(() => {
    // When pathname changes, start fade out
    if (children !== displayChildren) {
      setStage("fading-out");

      const fadeOutTimer = setTimeout(() => {
        // Swap content and start fade in
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        setStage("fading-in");

        const fadeInTimer = setTimeout(() => {
          setStage("visible");
        }, 400);

        return () => clearTimeout(fadeInTimer);
      }, 300);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [children, displayChildren]);

  return (
    <div
      className={`page-transition ${
        stage === "fading-out"
          ? "page-fade-out"
          : stage === "fading-in"
            ? "page-fade-in"
            : ""
      }`}
    >
      {displayChildren}
    </div>
  );
}
