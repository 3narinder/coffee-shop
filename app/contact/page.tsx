import GoodToKnow from "@/components/sections/about/GoodToKnow";
import Address from "@/components/sections/Address";
import ContactForm from "@/components/sections/contact/ContactForm";
import CustomHero from "@/components/sections/CustomHero";
import React from "react";

const page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip">
      <CustomHero
        subTitle="contact"
        title="come say hello"
        description="Questions, bookings, private events or just a note about something you liked — we read all of it."
      />

      <ContactForm />

      <Address />

      <GoodToKnow />
    </div>
  );
};

export default page;
