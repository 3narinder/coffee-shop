import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  heading: string;
  content: ReactNode;
  className?: string;
};

const ContactCard = ({
  icon,
  heading,
  content,
  className = "",
}: ContactCardProps) => {
  return (
    <article
      className={`flex flex-col items-center gap-4 rounded-2xl bg-cream-deep p-6 text-center tablet:p-8 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full text-green border border-[#0e4a2b33]">
        {icon}
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="font-onest text-[11px] leading-[1.4em] tracking-[0.14em] text-green-text-muted uppercase">
          {heading}
        </h3>

        <div className="w-full wrap-words font-onest text-[18px] font-bold uppercase tracking-[-0.02em] leading-[1.3em] text-green">
          {content}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
