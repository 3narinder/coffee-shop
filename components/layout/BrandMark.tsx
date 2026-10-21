import Link from "next/link";
import { businessInfo } from "@/constants/data";
import type { BrandMarkProps } from "@/constants/types";

export default function BrandMark({ tone = "dark" }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${businessInfo.name} ${businessInfo.brandDescriptor} home`}
      className={`flex w-max max-w-full flex-col items-center justify-center ${
        tone === "light" ? "text-cream" : "text-green"
      }`}
    >
      <span className="font-onest text-2xl font-extrabold uppercase leading-[1.05] tracking-[-0.02em] max-[360px]:text-base">
        {businessInfo.name}
      </span>

      <span className="mt-1.5 flex items-center gap-1.5 opacity-80">
        <span className="h-px w-8 flex-1 bg-current opacity-60" />

        <span className="whitespace-nowrap font-onest text-[9px] font-semibold uppercase leading-[1.2] tracking-[0.24em]">
          {businessInfo.brandDescriptor}
        </span>

        <span className="h-px flex-1 bg-current opacity-60" />
      </span>
    </Link>
  );
}
