"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type MerchProduct = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  price: string;
  available: boolean;
};

type MerchCarouselProps = {
  products: MerchProduct[];
  collectionUrl: string;
};

export default function MerchCarousel({
  products,
  collectionUrl,
}: MerchCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(products.length > 2);

  const updateScrollControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 4,
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollControls();
    track.addEventListener("scroll", updateScrollControls, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollControls);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollControls);
      resizeObserver.disconnect();
    };
  }, [updateScrollControls]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.9, 240),
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          className="merch-carousel-control"
          onClick={() => scroll(-1)}
          disabled={!canScrollBack}
          aria-label="Previous products"
          title="Previous products"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="merch-carousel-control"
          onClick={() => scroll(1)}
          disabled={!canScrollForward}
          aria-label="Next products"
          title="Next products"
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>

      <div ref={trackRef} className="merch-carousel-track">
        {products.map((product, index) => (
          <article key={product.id} className="merch-product-card">
            <a
              href={product.href}
              className="group block h-full"
            >
              <div className="merch-product-image">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 767px) 46vw, (max-width: 1279px) 23vw, 19vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="merch-product-title text-sm text-white sm:text-base">
                  {product.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-white">{product.price}</p>
                  {!product.available && (
                    <span className="text-xs uppercase text-gray-400">Sold out</span>
                  )}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={collectionUrl}
          className="btn-secondary uppercase tracking-widest text-sm"
        >
          View More
        </a>
      </div>
    </>
  );
}
