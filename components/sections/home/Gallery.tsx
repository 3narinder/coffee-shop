import Image from "next/image";
import HoverScale from "@/components/animation/HoverScale";
import SectionLayout from "@/components/layout/SectionLayout";
import { homePageContent } from "@/constants/data/home";
import { pageImages } from "@/constants/data/reusable";

const { homeGallery } = pageImages;

const Gallery = () => {
  return (
    <SectionLayout id="home-gallery">
      <div className="relative z-10 mx-auto flex h-min w-full max-w-6xl flex-col items-center px-5 tablet:px-8">
        <div className="relative flex w-full flex-col items-center rounded-4xl bg-green p-6">
          <div className="relative grid h-min w-full flex-none grid-cols-2 grid-rows-[144px] auto-rows-36 justify-center gap-4 p-0 tablet:grid-rows-[208px] tablet:auto-rows-52 desktop:grid-cols-4 desktop:grid-rows-[336px] desktop:auto-rows-84">
            {/* image 1 */}
            <div className="home-gallery__frame group relative col-span-2 h-full w-full flex-none place-self-start overflow-clip rounded-xl desktop:col-span-2 desktop:row-start-1">
              <HoverScale className="absolute inset-0 h-full w-full">
                <Image
                  src={homeGallery.image1}
                  width={1400}
                  height={787}
                  alt={homePageContent.gallery.imageAlts[0]}
                  className="block h-full w-full rounded-[inherit] object-cover object-center"
                />
              </HoverScale>
            </div>

            {/* Image 2 */}
            <div className="home-gallery__frame group relative col-span-2 h-full w-full flex-none place-self-start overflow-clip rounded-xl desktop:col-span-2 desktop:row-start-1">
              <HoverScale className="absolute inset-0 h-full w-full">
                <Image
                  src={homeGallery.image2}
                  width={1400}
                  height={787}
                  alt={homePageContent.gallery.imageAlts[1]}
                  className="block h-full w-full rounded-[inherit] object-cover object-center"
                />
              </HoverScale>
            </div>

            {/* Image 3 */}
            <div className="home-gallery__frame group relative col-start-1 row-start-3 h-full w-full flex-none place-self-start overflow-clip rounded-xl desktop:col-start-1 desktop:row-start-2">
              <HoverScale className="absolute inset-0 h-full w-full">
                <Image
                  src={homeGallery.image3}
                  width={1400}
                  height={787}
                  alt={homePageContent.gallery.imageAlts[2]}
                  className="block h-full w-full rounded-[inherit] object-cover object-center"
                />
              </HoverScale>
            </div>

            {/* Image 4 */}
            <div className="home-gallery__frame group relative col-span-2 row-start-4 h-full w-full flex-none place-self-start overflow-clip rounded-xl desktop:col-span-2 desktop:row-start-2">
              <HoverScale className="absolute inset-0 h-full w-full">
                <Image
                  src={homeGallery.image4}
                  width={1400}
                  height={787}
                  alt={homePageContent.gallery.imageAlts[3]}
                  className="block h-full w-full rounded-[inherit] object-cover object-center"
                />
              </HoverScale>
            </div>

            {/* Image 5 */}
            <div className="home-gallery__frame group relative col-start-2 row-start-3 h-full w-full flex-none place-self-start overflow-clip rounded-xl desktop:col-start-4 desktop:row-start-2">
              <HoverScale className="absolute inset-0 h-full w-full">
                <Image
                  src={homeGallery.image5}
                  width={1400}
                  height={787}
                  alt={homePageContent.gallery.imageAlts[4]}
                  className="block h-full w-full rounded-[inherit] object-cover object-center"
                />
              </HoverScale>
            </div>
          </div>
        </div>
        {/* gallery center text */}

        {/* Gallery center text */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="tablet:w-[384px] w-68.75 max-w-[90%] bg-cream p-2 shadow-[0_20px_25px_-5px_#082f1b40] rounded-2xl">
            <div className="flex h-min flex-col items-center justify-center rounded-xl border border-green-text-muted px-8 py-7">
              <h2 className="text-center font-oswald text-3xl font-semibold uppercase text-green">
                {homePageContent.gallery.heading}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative image */}
      <div className="pointer-events-none absolute z-0 hidden h-65.75 w-104 -bottom-25 -left-39.5 translate-y-[-77.03px] rotate-[-20deg] tablet:flex">
        <Image
          src={homeGallery.beanGroup}
          alt={homePageContent.gallery.decorativeImageAlt}
          width={416}
          height={263}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </SectionLayout>
  );
};

export default Gallery;
