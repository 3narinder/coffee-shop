import type { PolicyPageProps } from "@/constants/types";
import { reusableContent } from "@/constants/data/reusable";
import CustomHero from "@/components/sections/CustomHero";

export default function PolicyPage({ page }: PolicyPageProps) {
  return (
    <>
      <CustomHero
        subTitle={page.subtitle}
        title={page.title}
        description={page.description}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-14 tablet:px-8 tablet:pb-20">
        <p className="mt-4 font-onest text-sm text-green-text-muted">
          {reusableContent.policyUpdatedLabel} <time>{page.lastUpdated}</time>
        </p>

        <div className="grid w-full gap-10 desktop:grid-cols-[16rem_minmax(0,1fr)]">
          <nav
            aria-label={`On this page: ${page.title}`}
            className="h-fit rounded-2xl border border-green-wash bg-cream-deep p-6 desktop:sticky desktop:top-28"
          >
            <h2 className="mb-4 font-oswald text-lg font-semibold uppercase tracking-wide text-green">
              {reusableContent.policyNavigationHeading}
            </h2>
            <ol className="flex flex-col gap-3">
              {page.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-onest text-sm leading-relaxed text-green-text-muted underline-offset-4 hover:text-green hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="flex min-w-0 flex-col gap-10">
            {page.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-oswald text-2xl font-semibold uppercase leading-tight text-green tablet:text-3xl"
                >
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="paragraph text-left">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 font-onest text-base leading-8 text-green-text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
