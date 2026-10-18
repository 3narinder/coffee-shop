"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import { homePageContent, testimonials } from "@/constants/data";
import TestimonyHeader from "../ui/TestimonyHeader";
import TestimonialCard from "../ui/TestimonialCard";

const SCROLL_COUNT = 1;

const Testimony = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);

    setCanScrollLeft(carousel.scrollLeft > 1);
    setCanScrollRight(carousel.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const resizeObserver = new ResizeObserver(updateScrollButtons);

    resizeObserver.observe(carousel);

    carousel
      .querySelectorAll("[data-testimonial-card]")
      .forEach((card) => resizeObserver.observe(card));

    carousel.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    updateScrollButtons();

    return () => {
      resizeObserver.disconnect();
      carousel.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.querySelectorAll<HTMLElement>(
      "[data-testimonial-card]",
    );

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap) || 0;

    carousel.scrollBy({
      left: direction * (cardWidth + gap) * SCROLL_COUNT,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <SectionLayout
      id="happy-visitors"
      title={homePageContent.testimonials.title}
      description={homePageContent.testimonials.description}
      contentClassName="max-w-5xl"
      paddingClassName="px-6 py-16 tablet:px-8 tablet:py-28 desktop:py-28"
    >
      <section aria-label="Customer testimonials" className="w-full pt-4">
        <TestimonyHeader
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onPrevious={() => scrollCarousel(-1)}
          onNext={() => scrollCarousel(1)}
        />

        <div
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label="Guest reviews carousel"
          className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-none] [&::-webkit-scrollbar]:hidden tablet:gap-5 desktop:gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </section>
    </SectionLayout>
  );
};

export default Testimony;
