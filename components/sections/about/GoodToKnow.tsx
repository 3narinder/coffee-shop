import SectionLayout from "@/components/layout/SectionLayout";
import FAQItem from "@/components/ui/FAQItem";
import { aboutPageContent } from "@/constants/data";

const GoodToKnow = () => {
  return (
    <SectionLayout
      title={aboutPageContent.faqHeading.title}
      description={aboutPageContent.faqHeading.description}
    >
      <div className="relative flex h-min w-full max-w-5xl flex-col items-center gap-3 pt-4 tablet:px-8 px-5">
        {aboutPageContent.faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default GoodToKnow;
