import Image from "next/image";
import Link from "next/link";
import type { MenuItemProps } from "@/constants/types";

const MenuItem = ({ item, href = "/" }: MenuItemProps) => {
  // Choose the value based on the item type
  const meta = item.type === "price" ? item.price : item.items;

  return (
    <Link
      href={href}
      className="relative flex flex-row items-center justify-center h-min cursor-pointer gap-5"
    >
      <div className="relative flex aspect-square h-auto w-15 shrink-0 flex-col items-center justify-center overflow-visible">
        <div className="h-auto w-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={80}
            height={80}
            className="block h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="relative flex h-min min-w-0 flex-1 flex-col items-start gap-1.5">
        <div className="relative flex h-min w-full items-end gap-2">
          <h4 className="heading-4">{item.name}</h4>

          <div className="relative flex h-min min-w-6 flex-1 flex-col items-center justify-end pb-1.5">
            <div className="w-full border-b border-dotted border-green-text-muted" />
          </div>

          <p className="shrink-0 font-oswald text-base font-semibold leading-[1.2em] tracking-[-0.02em] text-accent desktop:text-[20px]">
            {meta}
          </p>
        </div>

        <p className="body-small">{item.description}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
