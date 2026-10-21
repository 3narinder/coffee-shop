import type { StandCardProps } from "@/constants/types";

const StandCard = ({ number, title, description }: StandCardProps) => {
  return (
    <div className="relative h-full w-full place-self-start">
      <div className="flex h-full min-h-70 w-full flex-col gap-3 rounded-[20px] border border-[#0e4a2b14] bg-cream-deep p-8">
        <p className="font-oswald text-4xl font-semibold leading-[1.1em] text-[#a9762f73]">
          {number}
        </p>

        <h3 className="heading-3 uppercase">{title}</h3>

        <p className="font-onest text-sm leading-[2em] text-[#0e4a2bb3]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StandCard;
