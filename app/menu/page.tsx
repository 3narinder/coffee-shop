import CustomHero from "@/components/sections/CustomHero";
import MenuNav from "@/components/sections/menu/MenuNav";
import MenuBanner from "@/components/sections/menu/MenuBanner";
import MenuSection from "@/components/ui/MenuSection";
import Testimony from "@/components/sections/Testimoney";
import Address from "@/components/sections/Address";
import type { Metadata } from "next";
import { menuPageContent } from "@/constants/data/menu";

export const metadata: Metadata = {
  title: menuPageContent.metadata.title,
  description: menuPageContent.metadata.description,
};

export default function MenuPage() {
  const { title: addressTitle, description: addressDescription } =
    menuPageContent.address;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle={menuPageContent.hero.subtitle}
        title={menuPageContent.hero.title}
        description={menuPageContent.hero.description}
        decorativeImages={menuPageContent.hero.decorativeImages}
      />

      <MenuNav />

      {menuPageContent.groups.map((group) => (
        <div key={group.id} className="flex w-full flex-col">
          {/* Group banner: Bar, Kitchen, Bakery */}
          <MenuBanner title={group.title} description={group.description} />

          {/* Render each category within the group */}
          {group.categories.map((category) => (
            <MenuSection
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              items={category.items}
              columns={2}
              paddingClassName="py-16 tablet:py-20 desktop:py-20"
            />
          ))}
        </div>
      ))}

      <Testimony />

      <Address title={addressTitle} description={addressDescription} />
    </div>
  );
}
