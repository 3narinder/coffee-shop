import StorySection from "@/components/ui/StorySection";
import { aboutSections } from "@/constants/images";

const About = () => {
  return (
    <>
      {/* Section 1: Text left, image right */}
      <StorySection
        image={aboutSections.ourStory}
        imageAlt="Our story"
        subheading="Our Story"
        heading="It started with one espresso machine"
        paragraphs={[
          "Common Grounds opened in 2016 in a narrow storefront on West 44th with a short menu and a second-hand grinder.",
          "We believed Midtown deserved better coffee, thoughtfully sourced beans, and carefully crafted drinks.",
          "That small beginning became a neighborhood gathering place built around quality and connection.",
        ]}
      />
    </>
  );
};

export default About;
