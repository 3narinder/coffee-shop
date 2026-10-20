import GoodToKnow from "@/components/sections/about/GoodToKnow";
import OurKitchen from "@/components/sections/about/OurKitchen";
import OurStand from "@/components/sections/about/OurStand";
import OurStroy from "@/components/sections/about/OurStroy";
import Stats from "@/components/sections/about/Stats";
import CustomHero from "@/components/sections/CustomHero";
import CallOutBand from "@/components/ui/CallOutBand";

const page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle="about us"
        title="more than coffee"
        description="A neighborhood coffee shop and kitchen on West 44th, open from 7 AM and built for staying a while."
        component={<Stats />}
      />

      <OurStroy />

      <OurKitchen />

      <CallOutBand />

      <OurStand />

      <GoodToKnow />
    </div>
  );
};

export default page;
