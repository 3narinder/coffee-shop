import GoodToKnow from "@/components/sections/about/GoodToKnow";
import Address from "@/components/sections/Address";
import ContactForm from "@/components/sections/contact/ContactForm";
import CustomHero from "@/components/sections/CustomHero";
import { contactPageContent } from "@/constants/data/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.hero.description,
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle={contactPageContent.hero.subtitle}
        title={contactPageContent.hero.title}
        description={contactPageContent.hero.description}
        decorativeImages={contactPageContent.hero.decorativeImages}
      />

      <ContactForm />

      <Address />

      <GoodToKnow />
    </div>
  );
}
