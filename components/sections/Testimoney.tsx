"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import { testimonials } from "@/constants/data/reusable";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { homePageContent } from "@/constants/data/home";

const Testimony = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 1);
    setCanScrollRight(carousel.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const observer = new ResizeObserver(updateScrollButtons);

    observer.observe(carousel);

    carousel
      .querySelectorAll("[data-testimonial-card]")
      .forEach((card) => observer.observe(card));

    carousel.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    updateScrollButtons();

    return () => {
      observer.disconnect();
      carousel.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-testimonial-card]");

    if (!card) return;

    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const arrowButtonClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cream-deep text-accent transition-colors duration-300 hover:bg-cream-muted disabled:cursor-not-allowed disabled:opacity-40 tablet:h-11 tablet:w-11";

  return (
    <SectionLayout
      id="happy-visitors"
      title={homePageContent.testimonials.title}
      description={homePageContent.testimonials.description}
      contentClassName="max-w-5xl"
      paddingClassName="px-6 py-16 tablet:px-8 tablet:py-28 desktop:py-28"
    >
      <section
        aria-label={homePageContent.testimonials.carouselLabel}
        className="flex w-full items-center gap-3 pt-4 tablet:gap-5"
      >
        <button
          type="button"
          onClick={() => scrollCarousel(-1)}
          disabled={!canScrollLeft}
          aria-label={homePageContent.testimonials.previousLabel}
          className={arrowButtonClass}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &#8592;
          </span>
        </button>

        <div
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label={homePageContent.testimonials.regionLabel}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden tablet:gap-5 desktop:gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCarousel(1)}
          disabled={!canScrollRight}
          aria-label={homePageContent.testimonials.nextLabel}
          className={arrowButtonClass}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &#8594;
          </span>
        </button>
      </section>
    </SectionLayout>
  );
};

export default Testimony;
