import { reusableContent } from "@/constants/data/reusable";
import { ContactInfoItem } from "@/constants/types";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";
import { TbBrandTiktok } from "react-icons/tb";
import Link from "next/link";

type ContactInfoProps = {
  title?: string;
  items: ContactInfoItem[];
  className?: string;
};

const socialIcons = {
  Instagram: LuInstagram,
  TikTok: TbBrandTiktok,
  Facebook: PiFacebookLogo,
  LinkedIn: CiLinkedin,
};

const ContactInfo = ({ title, items, className = "" }: ContactInfoProps) => {
  return (
    <div
      className={`relative flex h-min flex-none flex-col items-start justify-start gap-7 rounded-4xl bg-green p-6 desktop:w-104 w-full tablet:p-8 ${className}`}
    >
      {title && (
        <h2 className="font-onest text-xl font-extrabold uppercase leading-[1.05em] tracking-[-0.02em] text-cream">
          {title}
        </h2>
      )}

      <address className="flex w-full flex-col gap-8 not-italic">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-start gap-4 text-cream"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-muted">
              {item.icon}
            </div>

            <div className="flex h-min min-w-0 grow flex-col items-start gap-1">
              <span className="font-onest text-[11px] font-semibold uppercase leading-[1.4em] tracking-[0.14em] text-[#f9efe599]">
                {item.label}
              </span>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="uppercase wrap-break-words font-onest text-sm font-bold leading-[1.3em] tracking-[-0.02em] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-onest text-sm font-bold leading-[1.3em] tracking-[-0.02em]">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </address>

      <div className="flex flex-col gap-6 pt-6  border-t border-green-muted w-full">
        <span className="font-onest text-[11px] font-semibold uppercase leading-[1.4em] tracking-[0.14em] text-[#f9efe599]">
          Follow along
        </span>
        <ul
          aria-label={reusableContent.socialNavigationLabel}
          className="flex items-center gap-6 px-2"
        >
          {reusableContent.socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label as keyof typeof socialIcons];

            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cream transition-opacity hover:opacity-70"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
