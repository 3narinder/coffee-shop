import Image from "next/image";
import RevealSection from "@/components/animation/RevealSection";
import type { StorySectionProps } from "@/constants/types";

const StorySection = ({
  image,
  imageAlt,
  subheading,
  heading,
  paragraphs,
  decorativeImages = [],
  reverseOnDesktop = false,
}: StorySectionProps) => {
  return (
    <RevealSection className="relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 py-16 tablet:py-28 desktop:py-28">
      {/* Decorative images */}
      {decorativeImages.map((image, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute z-0 ${image.className} mix-blend-multiply`}
        >
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={image.width ?? 300}
            height={image.height ?? 300}
            className="h-auto w-full object-contain"
          />
        </div>
      ))}
      <div className="z-10 flex h-min w-full max-w-6xl flex-col items-center px-5 tablet:px-8">
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-10 desktop:grid desktop:grid-cols-[repeat(2,minmax(380px,1fr))] desktop:grid-rows-[min-content] desktop:auto-rows-min desktop:justify-center desktop:gap-14">
          {/* Image */}
          <div
            className={`relative h-96.75 w-full flex-none self-center overflow-clip rounded-4xl desktop:my-auto ${
              reverseOnDesktop ? "desktop:order-1" : "desktop:order-2"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1200px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Story content */}
          <div
            className={`relative order-2 flex h-min w-full flex-col items-start gap-5 ${
              reverseOnDesktop ? "desktop:order-2" : "desktop:order-1"
            }`}
          >
            <p className="text-xs font-semibold uppercase leading-[1.4em] tracking-[0.18em] text-[#0e4a2b8c]">
              {subheading}
            </p>

            <h2 className="font-oswald text-4xl font-semibold uppercase leading-[1.1em] tracking-[0.01em] text-green desktop:text-[44px]">
              {heading}
            </h2>

            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="w-full whitespace-normal wrap-break-word px-5 font-onest text-base leading-[2em] text-[#0e4a2bb3] tablet:px-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default StorySection;
