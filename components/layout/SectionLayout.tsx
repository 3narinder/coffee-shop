import type { ReactNode } from "react";
import RevealSection from "@/components/animation/RevealSection";
import SectionHeading from "@/components/ui/SectionHeading";

type SectionLayoutProps = {
  title?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  contentClassName?: string;
  headingClassName?: string;
  showHeading?: boolean;
  description?: string;
  paddingClassName?: string;
};

const SectionLayout = ({
  title,
  children,
  id,
  className = "",
  contentClassName = "",
  headingClassName = "",
  showHeading = true,
  description,
  paddingClassName = "py-16 tablet:py-28 desktop:py-28",
}: SectionLayoutProps) => {
  return (
    <RevealSection
      id={id}
      className={`relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 ${paddingClassName} ${className}`}
    >
      <div
        className={`mx-auto flex w-full flex-col items-center gap-6 ${contentClassName}`}
      >
        {showHeading && title && (
          <div className={`w-full ${headingClassName}`}>
            <SectionHeading title={title} description={description} />
          </div>
        )}

        {children}
      </div>
    </RevealSection>
  );
};

export default SectionLayout;
