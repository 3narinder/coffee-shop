import GoodToKnow from "@/components/sections/about/GoodToKnow";
import OurStand from "@/components/sections/about/OurStand";
import Stats from "@/components/sections/about/Stats";
import CustomHero from "@/components/sections/CustomHero";
import CallOutBand from "@/components/ui/CallOutBand";
import StorySection from "@/components/ui/StorySection";
import { aboutPageContent } from "@/constants/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: aboutPageContent.metadata.title,
  description: aboutPageContent.hero.description,
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle={aboutPageContent.hero.subtitle}
        title={aboutPageContent.hero.title}
        description={aboutPageContent.hero.description}
        component={<Stats />}
      />

      {aboutPageContent.stories.map((story) => (
        <StorySection key={story.heading} {...story} />
      ))}

      <CallOutBand />
      <OurStand />
      <GoodToKnow />
    </div>
  );
}
