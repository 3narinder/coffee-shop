import SectionLayout from "@/components/layout/SectionLayout";
import StandCard from "@/components/ui/StandCard";
import { aboutPageContent } from "@/constants/data/about";

const OurStand = () => {
  return (
    <SectionLayout
      title={aboutPageContent.valuesHeading.title}
      description={aboutPageContent.valuesHeading.description}
    >
      <div className="relative grid h-min w-full max-w-5xl flex-none grid-cols-1 grid-rows-[minmax(0,1fr)] auto-rows-fr justify-center gap-5 pt-4 tablet:grid-cols-3">
        {aboutPageContent.values.map((value) => (
          <StandCard key={value.number} {...value} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default OurStand;
