import type { PolicyPageProps } from "@/constants/types";
import { reusableContent } from "@/constants/data/reusable";
import CustomHero from "@/components/sections/CustomHero";
import SectionLayout from "@/components/layout/SectionLayout";

export default function PolicyPage({ page }: PolicyPageProps) {
  return (
    <>
      <CustomHero subTitle={page.subtitle} title={page.title} />

      <SectionLayout paddingClassName="py-14 tablet:py-20">
        <div className="relative mx-auto flex w-full flex-col items-start justify-start gap-10 px-5 tablet:px-8 desktop:flex-row desktop:gap-16">
          {/* Aside navigation */}
          <aside className="desktop:flex h-min w-full flex-none flex-col items-start gap-8 hidden desktop:sticky desktop:top-28 desktop:w-64">
            <div className="flex flex-col gap-1 items-start justify-start w-full h-min">
              <p className="font-onest text-xs text-[#0e4a2b80] uppercase font-semibold leading-[1.4em] tracking-[0.16em]">
                {reusableContent.policyUpdatedLabel}{" "}
              </p>

              <div className="font-onest text-sm text-[#0e4a2bbf] font-medium leading-[1.625em] tracking-[-0.02em]">
                <time>{page.lastUpdated}</time>
              </div>
            </div>

            <nav aria-label={`On this page: ${page.title}`}>
              <h3 className="mb-4 font-onest text-xs font-semibold uppercase tracking-[0.16em] leading-[1.4em] text-[#0e4a2b80] ">
                {reusableContent.policyNavigationHeading}
              </h3>
              <ol className="flex flex-col gap-2">
                {page.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="font-onest text-sm leading-relaxed text-green-text-muted underline-offset-4 hover:text-green hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
                    >
                      <span className="">{String(index + 1)}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* policies */}
          <div className="flex min-w-[320px] max-w-3xl grow flex-col items-start justify-start gap-10">
            {/* Intro */}
            {page.intro && <p className="paragraph text-left">{page.intro}</p>}

            {/* Policy sections */}
            {page.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-onest text-green text-2xl leading-[1.2] font-extrabold uppercase"
                >
                  <span className="">{String(index + 1)}</span>.{section.title}
                </h2>

                <div className="mt-4 flex flex-col gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="body-small text-left">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
