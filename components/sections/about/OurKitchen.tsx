import StorySection from "@/components/ui/StorySection";
import { aboutSections } from "@/constants/images";

const About = () => {
  return (
    <>
      {/* Section 2: Image left, text right on desktop */}
      <StorySection
        image={aboutSections.ourStory}
        imageAlt="Our coffee journey"
        subheading="Our Philosophy"
        heading="Good coffee brings people together"
        reverseOnDesktop
        paragraphs={[
          "Every cup begins with carefully selected beans and a commitment to quality.",
          "We focus on thoughtful preparation, consistency, and the details that make great coffee special.",
          "Our goal is simple: to make every visit feel welcoming and every cup worth coming back for.",
        ]}
      />
    </>
  );
};

export default About;
