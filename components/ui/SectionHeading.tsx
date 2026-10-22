import Image from "next/image";

import type { SectionHeadingProps } from "@/constants/types";
import { pageImages } from "@/constants/data/reusable";

const SectionHeading = ({
  title,
  description,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`flex w-full flex-col items-center gap-6 ${className}`}>
      <h2 className="heading-2 w-full text-center">{title}</h2>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-20 shrink-0 bg-green-rule" />

        <div className="h-6 w-6 shrink-0 rotate-[-18deg]">
          <Image
            src={pageImages.homeStory.SectionHeadingBean}
            width={24}
            height={24}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="h-px w-20 shrink-0 bg-green-rule" />
      </div>

      {description && (
        <p className="w-full max-w-xl text-center font-onest text-sm font-normal leading-[1.625em] tracking-[-0.02em] text-green-text-muted tablet:text-[13px] desktop:text-[16px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
