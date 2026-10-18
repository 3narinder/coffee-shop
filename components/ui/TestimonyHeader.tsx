import { homePageContent } from "@/constants/data";

type TestimonyHeaderProps = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

const arrowButtonClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cream-deep text-accent transition-colors duration-300 hover:bg-cream-muted disabled:cursor-not-allowed disabled:opacity-40";

const TestimonyHeader = ({
  canScrollLeft,
  canScrollRight,
  onPrevious,
  onNext,
}: TestimonyHeaderProps) => {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 tablet:mb-7">
      <div className="min-w-0">
        <p className="font-onest text-[10px] font-semibold uppercase tracking-[0.2em] text-green/60 tablet:text-xs">
          {homePageContent.testimonials.kicker}
        </p>

        <p className="mt-2 font-oswald text-xl font-medium uppercase tracking-wide text-green tablet:text-2xl desktop:text-3xl">
          {homePageContent.testimonials.subheading}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canScrollLeft}
          aria-label="Previous testimonials"
          className={arrowButtonClass}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &#8592;
          </span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!canScrollRight}
          aria-label="Next testimonials"
          className={arrowButtonClass}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &#8594;
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestimonyHeader;
