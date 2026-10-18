type TestimonialCardProps = {
  quote: string;
  name: string;
};

const TestimonialCard = ({ quote, name }: TestimonialCardProps) => {
  return (
    <article
      data-testimonial-card
      className="group flex min-h-65 w-[85%] shrink-0 snap-start flex-col items-start justify-between gap-8 overflow-hidden rounded-[20px] bg-cream-deep p-6 transition-colors duration-300 hover:bg-cream-muted tablet:min-h-72.5 tablet:w-[calc((100%-1.25rem)/2)] tablet:p-8 desktop:min-h-77.5 desktop:w-[calc((100%-3rem)/3)] desktop:p-10"
    >
      <p className="font-onest text-base font-normal leading-8 tracking-[-0.02em] text-[#0e4a2bbf]">
        {quote}
      </p>

      <div className="flex w-full items-end justify-between gap-3">
        <p className="font-oswald text-base font-semibold uppercase leading-[1.4] tracking-[0.02em] text-green">
          – {name}
        </p>

        <span
          aria-hidden="true"
          className="shrink-0 font-oswald text-6xl font-semibold leading-[0.65] text-accent tablet:text-7xl"
        >
          ”
        </span>
      </div>
    </article>
  );
};

export default TestimonialCard;
