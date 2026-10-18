import MenuSection from "@/components/ui/MenuSection";
import { homePageContent, specialItems } from "@/constants/data";
import { homeSpecial } from "@/constants/images";

const Special = () => {
  return (
    <MenuSection
      id="our-specials"
      title={homePageContent.specials.title}
      description={homePageContent.specials.description}
      items={specialItems}
      columns={2}
      button={{
        label: homePageContent.specials.buttonLabel,
        href: "/menu",
      }}
      decorativeImages={[
        {
          src: homeSpecial.cookie,
          alt: "Decorative cookie",
          className:
            "hidden tablet:block desktop:-top-13 tablet:top-6 desktop:-left-30.25 tablet:left-2 desktop:w-72 tablet:w-50",
        },

        {
          src: homeSpecial.beansGroup,
          alt: "Decorative beans group",
          className:
            "hidden tablet:block desktop:bottom-8 tablet:-bottom-12 desktop:-right-18 tablet:-right-9.75 desktop:w-65.75 desktop:h-67.5 tablet:w-47.5",
        },
      ]}
    />
  );
};

export default Special;
