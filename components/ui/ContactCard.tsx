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
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent">
        {icon}
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="font-onest text-[11px] leading-7 text-green-text-muted uppercase">
          {heading}
        </h3>

        <div className="w-full break-words font-oswald text-base font-semibold uppercase tracking-wide text-green tablet:text-xl">
          {content}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
