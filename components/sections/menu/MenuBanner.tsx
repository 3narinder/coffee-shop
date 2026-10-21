import RevealSection from "@/components/animation/RevealSection";
import type { MenuBannerProps } from "@/constants/types";

const MenuBanner = ({ title, description }: MenuBannerProps) => {
  return (
    <RevealSection
      className={`relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 `}
    >
      <div
        className="flex h-min w-full flex-col items-center place-content-center bg-green py-14"
      >
        <div className="flex flex-col px-8 w-full h-min gap-3 items-center">
          <h2 className="text-3xl font-semibold font-oswald text-center uppercase text-cream tracking-[0.2em]">
            {title}
          </h2>

          <div className="max-w-xl whitespace-nowrap w-full flex justify-start">
            <p className="font-onest text-sm text-center text-cream-text-muted leading-[1.625em] ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default MenuBanner;
