import MenuItem from "./MenuItem";
import type { MenuItemData } from "@/constants/types";

type MenuItemsProps = {
  items: MenuItemData[];
  columns?: 1 | 2;
  itemHref?: string;
};

const MenuItems = ({ items, columns = 2, itemHref = "/" }: MenuItemsProps) => {
  const midpoint = Math.ceil(items.length / 2);

  const itemColumns =
    columns === 2 ? [items.slice(0, midpoint), items.slice(midpoint)] : [items];

  return (
    <div
      className={`relative grid gap-x-16 gap-y-10 ${
        columns === 2 ? "grid-cols-1 desktop:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {itemColumns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="relative flex h-auto w-full flex-col gap-10 self-start"
        >
          {column.map((item) => (
            <MenuItem key={item.id} item={item} href={itemHref} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
