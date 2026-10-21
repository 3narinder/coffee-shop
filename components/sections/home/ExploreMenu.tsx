import MenuSection from "@/components/ui/MenuSection";
import { exploreMenuItems, homePageContent, pageImages } from "@/constants/data";

const ExploreMenu = () => {
  return (
    <MenuSection
      id="explore-our-menu"
      title={homePageContent.exploreMenu.title}
      description={homePageContent.exploreMenu.description}
      items={exploreMenuItems}
      columns={2}
      button={{
        label: homePageContent.exploreMenu.buttonLabel,
        href: homePageContent.exploreMenu.buttonHref,
      }}
      decorativeImages={[
        {
          src: pageImages.homeExplore.napkin,
          alt: homePageContent.exploreMenu.decorativeImageAlt,
          className:
            "hidden tablet:block will-change-transform opacity-100 pointer-events-none z-0 absolute desktop:w-68 desktop:h-64.75 desktop:-bottom-6.5 desktop:-right-25.75 tablet:w-50 tablet:h-47.5 tablet:-bottom-7.25 tablet:-right-10 translate-y-[68.12px] rotate-45",
        },
      ]}
    />
  );
};

export default ExploreMenu;
