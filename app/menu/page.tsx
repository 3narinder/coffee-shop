"use client";

import { homeHero } from "@/constants/images";
import { specialItems } from "@/constants/data";

import CustomHero from "@/components/sections/CustomHero";
import MenuNav from "@/components/sections/menu/MenuNav";
import MenuSection from "@/components/ui/MenuSection";
import MenuBanner from "@/components/sections/menu/MenuBanner";
import Testimony from "@/components/sections/Testimoney";
import Address from "@/components/sections/Address";

const Page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      {/* custom hero */}
      <CustomHero
        subTitle=""
        title="go on then, have a look"
        description="Your usual is waiting. So is the thing you will wish you had tried sooner."
        decorativeImages={[
          {
            src: homeHero.bean_image_1,
            alt: "Coffee bean",
            className:
              "desktop:w-18 tablet:w-14.5 w-10.75 desktop:h-16.75 tablet:h-13.25 h-10 desktop:top-19 tablet:top-19.25 top-19.75 desktop:left-42 tablet:left-27.25 left-11.25 rotate-[-22deg]",
          },
          {
            src: homeHero.bean_image_2,
            alt: "Coffee bean",
            className:
              "desktop:w-12.75 tablet:w-10.25 w-10.75 desktop:h-17.25 tablet:h-14 h-10 desktop:bottom-35.5 tablet:bottom-35 bottom-19.75 desktop:left-23.75 tablet:left-15.25 left-11.25 blur-[2px] opacity-[0.8] rotate-[30deg]",
          },
        ]}
      />

      {/* Menu navigation */}
      <MenuNav />

      {/* bar sections */}
      <div className="flex flex-col w-full">
        <MenuBanner
          title="from the bar"
          description="Espresso, brewed, iced, whisked and pressed — everything the bar makes to order."
        />

        <MenuSection
          id="espresso"
          title="espresso"
          description="Sixteen sections across the bar and the kitchen. Tap any one to see everything on it."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="cold-brew-iced"
          title="Cold Brew & Iced"
          description="Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="latte"
          title="Signature Lattes"
          description="Syrups made in our own kitchen — no pumps of anything we did not cook ourselves."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="matcha"
          title="Matcha"
          description="Matcha"
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />
      </div>

      {/* kitchen section */}
      <div className="flex flex-col w-full">
        <MenuBanner
          title="from the kitchen"
          description="Breakfast from open, then sandwiches and bowls built when you ask for them."
        />

        <MenuSection
          id="espresso"
          title="espresso"
          description="Sixteen sections across the bar and the kitchen. Tap any one to see everything on it."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="cold-brew-iced"
          title="Cold Brew & Iced"
          description="Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="latte"
          title="Signature Lattes"
          description="Syrups made in our own kitchen — no pumps of anything we did not cook ourselves."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="matcha"
          title="Matcha"
          description="Matcha"
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />
      </div>

      {/* bakery section */}
      <div className="flex flex-col w-full">
        <MenuBanner
          title="Bakery & Take-Home"
          description="Baked at five each morning, plus the beans to make it all again at home."
        />

        <MenuSection
          id="espresso"
          title="espresso"
          description="Sixteen sections across the bar and the kitchen. Tap any one to see everything on it."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="cold-brew-iced"
          title="Cold Brew & Iced"
          description="Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />

        <MenuSection
          id="latte"
          title="Signature Lattes"
          description="Syrups made in our own kitchen — no pumps of anything we did not cook ourselves."
          items={specialItems}
          columns={2}
          paddingClassName="py-16 tablet:py-20 desktop:py-20"
        />
      </div>

      <Testimony />

      <Address />
    </div>
  );
};

export default Page;
