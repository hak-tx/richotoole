"use client";

import { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm text-center p-4 ${
          fill ? "absolute inset-0" : ""
        } ${className || ""}`}
        style={!fill ? { width, height } : undefined}
      >
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
