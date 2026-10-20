import SectionLayout from "@/components/layout/SectionLayout";
import StandCard from "@/components/ui/StandCard";

const OurStand = () => {
  return (
    <SectionLayout
      title="what we stand for"
      description="Three things we will not compromise on, however long the line gets."
    >
      <div className="relative grid h-min w-full max-w-5xl flex-none grid-cols-1 grid-rows-[minmax(0,1fr)] auto-rows-fr justify-center gap-5 pt-4 tablet:grid-cols-3">
        <StandCard
          number="01"
          title="We buy from people we know"
          description=" Our beans come from a roaster in Red Hook, our bagels from a
              family bakery in Greenpoint, and our produce from the greenmarket
              four blocks south. Short supply chains make better food and keep
              the money in the city."
        />

        <StandCard
          number="03"
          title="We buy 2rom people we know"
          description=" Our beans come from a roaster in Red Hook, our bagels from a
              family bakery in Greenpoint, and our produce from the greenmarket
              four blocks south. Short supply chains make better food and keep
              the money in the city."
        />

        <StandCard
          number="03"
          title="We buy from people we know"
          description=" Our beans come from a roaster in Red Hook, our bagels from a
              family bakery in Greenpoint, and our produce from the greenmarket
              four blocks south. Short supply chains make better food and keep
              the money in the city."
        />
      </div>
    </SectionLayout>
  );
};

export default OurStand;
