import Image from "next/image";
import Button from "@/components/ui/Button";
import MenuItems from "./MenuItems";
import SectionHeading from "./SectionHeading";
import SectionLayout from "../layout/SectionLayout";

import type { MenuSectionProps } from "@/constants/types";

const MenuSection = ({
  id,
  title,
  description,
  items,
  button,
  columns = 2,
  contentClassName = "max-w-5xl",
  decorativeImages = [],
  paddingClassName,
}: MenuSectionProps) => {
  return (
    <SectionLayout
      id={id}
      showHeading={false}
      contentClassName={contentClassName}
      paddingClassName={paddingClassName}
    >
      {/* Decorative images */}
      {decorativeImages.map((image, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute z-0 ${image.className} mix-blend-multiply`}
        >
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={image.width ?? 300}
            height={image.height ?? 300}
            className="h-auto w-full object-contain "
          />
        </div>
      ))}

      {/* Menu content */}
      <div className="relative z-10 w-full">
        <SectionHeading title={title} description={description} />

        <div className="w-full px-5 pt-8 tablet:px-0">
          <MenuItems items={items} columns={columns} />
        </div>

        {button && (
          <div className="relative flex h-min w-full items-center justify-center pt-12">
            <Button
              className="hover:bg-green hover:text-cream"
              label={button.label}
              href={button.href}
            />
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default MenuSection;
