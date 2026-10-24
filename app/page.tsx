import Address from "@/components/sections/Address";
import ExploreMenu from "@/components/sections/home/ExploreMenu";
import Gallery from "@/components/sections/home/Gallery";
import Hero from "@/components/sections/home/Hero";
import Special from "@/components/sections/home/Special";
import Story from "@/components/sections/home/Story";
import Testimony from "@/components/sections/Testimoney";

import CallOutBand from "@/components/ui/CallOutBand";
import { homePageContent } from "@/constants/data/home";

export default function HomePage() {
  const { title, description } = homePageContent.address;
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <Hero />
      <Story />
      <Special />
      <CallOutBand content={homePageContent.callout} />
      <ExploreMenu />
      <Gallery />
      <Testimony />
      <Address title={title} description={description} />
    </div>
  );
}
