import Link from "next/link";
import type { ButtonProps } from "@/constants/types";

const Button = ({ label, href, onClick, className = "" }: ButtonProps) => {
  const styles = `inline-flex cursor-pointer items-center justify-center rounded-full border-[0.5px] border-green-text-muted px-5.5 desktop:py-3.5 py-4 desktop:text-[14px] text-[11px] font-medium capitalize leading-[1em] tracking-[-0.02em] transition-all duration-150 ease-in-out hover:bg-green hover:text-cream ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default Button;
