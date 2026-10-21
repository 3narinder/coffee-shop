import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";
import { TbBrandTiktok } from "react-icons/tb";

import BrandMark from "@/components/layout/BrandMark";
import { businessInfo, reusableContent } from "@/constants/data";

const socialIcons = {
  Instagram: LuInstagram,
  TikTok: TbBrandTiktok,
  Facebook: PiFacebookLogo,
  LinkedIn: CiLinkedin,
};

export default function Footer() {
  return (
    <footer className="w-full bg-green text-cream">
      <div className="mx-auto w-full max-w-368 px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-[minmax(0,20rem)_auto] tablet:justify-between tablet:gap-8">
          {/* Brand */}
          <div className="flex w-full flex-col items-start gap-5 tablet:max-w-80">
            <BrandMark tone="light" />

            <p className="max-w-80 font-onest text-sm leading-relaxed text-cream-text-muted">
              {reusableContent.footerDescription}
            </p>

            {/* Social links: desktop and laptop only */}
            <ul
              aria-label={reusableContent.socialNavigationLabel}
              className="flex items-center gap-8 px-4"
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

          {/* Footer navigation */}
          <div className="flex flex-wrap items-start gap-16">
            <nav aria-label="Footer navigation">
              <h2 className="mb-4 font-oswald text-sm font-semibold uppercase leading-[1.4] tracking-[0.16em]">
                {reusableContent.footerHeadings.explore}
              </h2>

              <ul className="grid gap-2 font-onest text-sm leading-[1.4] text-cream-text-muted">
                {reusableContent.primaryNavigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-cream"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-44">
              <h2 className="mb-4 font-oswald text-sm font-semibold uppercase leading-[1.4] tracking-[0.16em]">
                {reusableContent.footerHeadings.visit}
              </h2>

              <address className="flex max-w-64 flex-col gap-2 font-onest text-sm not-italic leading-[1.4] text-cream-text-muted">
                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  {businessInfo.address}
                </a>

                <a
                  href={businessInfo.phoneLink}
                  className="transition-colors hover:text-cream"
                >
                  {businessInfo.phone}
                </a>

                <span>{businessInfo.openingHours}</span>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-cream/25 pt-6 text-center font-onest text-xs leading-[1.4] text-cream/55 tablet:flex-row tablet:justify-between tablet:text-left">
          <p>
            Copyright © {new Date().getFullYear()} {businessInfo.name}.{" "}
            {reusableContent.copyrightNotice}
          </p>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {reusableContent.legalNavigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-cream"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
