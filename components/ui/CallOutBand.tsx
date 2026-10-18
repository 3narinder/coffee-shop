import { homeCallout } from "@/constants/images";
import RevealSection from "@/components/animation/RevealSection";
import { homePageContent } from "@/constants/data";
import Button from "@/components/ui/Button";
import Image from "next/image";

const CallOutBand = () => {
  return (
    <RevealSection className="relative h-auto w-full scroll-mt-24">
      <div className="relative flex flex-col overflow-x-clip w-full items-center py-16">
        <div className="bg-green flex flex-col overflow-x-clip items-center w-full h-min">
          <div className="relative z-20 flex flex-col items-center gap-8 w-full h-min px-6 py-16">
            <h2 className="relative flex w-full flex-col items-center heading-2 text-cream">
              {homePageContent.callout.headingLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <Button
              label={homePageContent.callout.buttonLabel}
              href="/menu"
              className="border-0 bg-cream px-8 py-4.5 text-green hover:bg-cream-deep hover:text-green"
            />
          </div>
        </div>
      </div>

      <div className="desktop:flex hidden absolute top-9.5 -bottom-7 left-6 z-10 w-68 aspect-[.75] rotate-[-5deg]">
        <Image
          src={homeCallout.homeCallout1}
          width={680}
          height={1000}
          alt="Callout image 1"
          className="h-full w-full rounded-4xl object-cover object-center"
        />
      </div>

      <div className="desktop:flex hidden  absolute top-9.5 -bottom-7 right-6 z-10 w-68 aspect-[.75] rotate-[4deg]">
        <Image
          src={homeCallout.homeCallout2}
          width={680}
          height={1000}
          alt="Callout image 1"
          className="h-full w-full rounded-4xl object-cover object-center"
        />
      </div>
    </RevealSection>
  );
};

export default CallOutBand;
