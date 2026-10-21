import { menuPageContent } from "@/constants/data";

import CustomHero from "@/components/sections/CustomHero";
import MenuNav from "@/components/sections/menu/MenuNav";
import MenuSection from "@/components/ui/MenuSection";
import MenuBanner from "@/components/sections/menu/MenuBanner";
import Testimony from "@/components/sections/Testimoney";
import Address from "@/components/sections/Address";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: menuPageContent.metadata.title,
  description: menuPageContent.metadata.description,
};

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle={menuPageContent.hero.subtitle}
        title={menuPageContent.hero.title}
        description={menuPageContent.hero.description}
        decorativeImages={menuPageContent.hero.decorativeImages}
      />

      <MenuNav />

      {menuPageContent.sections.map((section) => (
        <div key={section.id} className="flex w-full flex-col">
          <MenuBanner
            title={section.title}
            description={section.description}
          />
          <MenuSection
            id={section.id}
            title={section.title}
            description={section.description}
            items={section.items}
            columns={2}
            paddingClassName="py-16 tablet:py-20 desktop:py-20"
          />
        </div>
      ))}

      <Testimony />

      <Address />
    </div>
  );
}
