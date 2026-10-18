import Address from "@/components/sections/Address";
import ExploreMenu from "@/components/sections/home/ExploreMenu";
import Gallery from "@/components/sections/home/Gallery";
import Hero from "@/components/sections/home/Hero";
import Special from "@/components/sections/home/Special";
import Story from "@/components/sections/home/Story";
import Testimony from "@/components/sections/Testimony";

import CallOutBand from "@/components/ui/CallOutBand";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <Hero />
      <Story />
      <Special />
      <CallOutBand />
      <ExploreMenu />
      <Gallery />
      <Testimony />
      <Address />
    </div>
  );
}
