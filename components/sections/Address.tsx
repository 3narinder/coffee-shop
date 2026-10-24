import { MapPin, Clock, Phone } from "lucide-react";
import { businessInfo, reusableContent } from "@/constants/data/reusable";
import SectionLayout from "../layout/SectionLayout";
import ContactCard from "../ui/ContactCard";
import { DecorativeImage } from "@/constants/types";
import Image from "next/image";

interface AddressProps {
  title: string;
  description: string;
  decorativeImages?: DecorativeImage[];
}

const Address = ({
  title,
  description,
  decorativeImages = [],
}: AddressProps) => {
  const { visit } = reusableContent;

  return (
    <SectionLayout
      id="address"
      title={title}
      description={description}
      contentClassName="max-w-6xl"
      className="px-6 tablet:px-8"
    >
      {decorativeImages.map((image, index) => (
        <div
          key={`${image.className}-${index}`}
          className={`pointer-events-none absolute z-0 ${image.className} mix-blend-multiply`}
        >
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={image.width ?? 300}
            height={image.height ?? 300}
            className="h-auto w-full object-contain"
          />
        </div>
      ))}

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 pt-4 tablet:grid-cols-3">
        <ContactCard
          icon={<MapPin size={18} strokeWidth={1.8} />}
          heading={visit.addressLabel}
          content={
            <a
              href={businessInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {businessInfo.address}
            </a>
          }
        />

        <ContactCard
          icon={<Phone size={18} strokeWidth={1.8} />}
          heading={visit.phoneLabel}
          content={
            <a
              href={businessInfo.phoneLink}
              className="transition-colors hover:text-accent"
            >
              {businessInfo.phone}
            </a>
          }
        />

        <ContactCard
          icon={<Clock size={18} strokeWidth={1.8} />}
          heading={visit.hoursLabel}
          content={<>{businessInfo.openingHoursShort}</>}
        />
      </div>
    </SectionLayout>
  );
};

export default Address;
