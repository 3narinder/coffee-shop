import type { StaticImageData } from "next/image";

type MenuItemBase = {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
};

export type MenuItemData = MenuItemBase &
  (
    | {
        type: "price";
        price: string;
        items?: never;
      }
    | {
        type: "items";
        items: string;
        price?: never;
      }
  );

export type MenuButtonConfig = {
  label: string;
  href: string;
};

export type DecorativeImage = {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className: string;
};

export type MenuSectionProps = {
  id: string;
  title: string;
  description?: string;
  items: MenuItemData[];
  button?: MenuButtonConfig;
  columns?: 1 | 2;
  contentClassName?: string;
  decorativeImages?: DecorativeImage[];
  paddingClassName?: string;
};
