import Image from "next/image";
import SectionLayout from "@/components/layout/SectionLayout";
import { homePageContent } from "@/constants/data";
import { homeStory } from "@/constants/images";

const Story = () => {
  const { story } = homePageContent;

  return (
    <SectionLayout
      id="our-story"
      title={story.title}
      contentClassName="max-w-3xl"
      paddingClassName="py-16 tablet:py-28 desktop:py-28"
    >
      <p className="paragraph w-full px-5 text-center tablet:px-0">
        {story.description}
      </p>

      {/* Decorative image */}
      <div className="hidden tablet:flex z-0 pointer-events-none absolute desktop:-bottom-22.5 tablet:bottom-2 desktop:-right-22.5 tablet:right-2 desktop:h-80 tablet:h-52.5 desktop:w-80 tablet:w-52.5 ">
        <Image
          src={homeStory.BlackCoffeeCupPlate}
          alt="Black coffee cup and plate"
          width={100}
          height={100}
          className="h-auto w-full object-cover object-center"
        />
      </div>
    </SectionLayout>
  );
};

export default Story;
