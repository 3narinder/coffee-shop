import SectionLayout from "@/components/layout/SectionLayout";
import FAQItem from "@/components/ui/FAQItem";

const GoodToKnow = () => {
  return (
    <SectionLayout
      title="good to know"
      description="The things people ask us most, answered before you have to."
    >
      <div className="relative flex h-min w-full max-w-5xl flex-col items-center gap-3 pt-4 tablet:px-8 px-5">
        <FAQItem
          question="Can I order ahead?"
          answer="Yes — mobile orders go straight to the second bar station and are usually ready in four or five minutes. During the 8 to 9:30 rush, give it a little longer."
        />

        <FAQItem
          question="Do you have dairy-free options?"
          answer="Yes! We offer oat milk and other alternatives so you can customize your favorite coffee."
        />

        <FAQItem
          question="Where do you source your coffee?"
          answer="We work with trusted roasters who share our commitment to quality and thoughtfully sourced beans."
        />

        <FAQItem
          question="Can I order ahead?"
          answer="Yes — mobile orders go straight to the second bar station and are usually ready in four or five minutes. During the 8 to 9:30 rush, give it a little longer."
        />

        <FAQItem
          question="Can I order ahead?"
          answer="Yes — mobile orders go straight to the second bar station and are usually ready in four or five minutes. During the 8 to 9:30 rush, give it a little longer."
        />
      </div>
    </SectionLayout>
  );
};

export default GoodToKnow;
