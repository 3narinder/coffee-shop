"use client";

import React, { useId } from "react";
import { menuNav, menuPageContent } from "@/constants/data";

import Button from "@/components/ui/Button";

const MenuNav = () => {
  const selectId = useId();

  const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sectionId = event.target.value;

    if (!sectionId) return;

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Reset the select so the placeholder remains available.
    event.target.value = "";
  };
  return (
    <nav
      aria-label={menuPageContent.navigation.ariaLabel}
      className="w-full scroll-m-24 px-5 py-3 tablet:px-8 desktop:py-2"
    >
      {/* Desktop buttons */}
      <div className="mx-auto hidden h-min max-w-352 flex-wrap items-center justify-center gap-2 py-1 px-8 desktop:flex">
        {menuNav.map((section) => (
          <Button
            key={section.id}
            label={section.label}
            href={`#${section.id}`}
          />
        ))}
      </div>

      {/* Mobile and tablet select */}
      <div className="flex w-full tablet:justify-end justify-center desktop:hidden">
        <div className="relative h-12.5 w-full tablet:max-w-75 max-w-70">
          <label htmlFor={selectId} className="sr-only">
            {menuPageContent.navigation.selectLabel}
          </label>

          <select
            id={selectId}
            defaultValue=""
            onChange={handleSectionChange}
            className="h-full w-full cursor-pointer appearance-none rounded-full border border-green bg-cream pl-5 pr-12 text-[15px] font-semibold leading-[1em] outline-none capitalize"
          >
            <option value="" disabled>
              {menuPageContent.navigation.placeholder}
            </option>

            {menuNav.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label}
              </option>
            ))}
          </select>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
          >
            ▾
          </span>
        </div>
      </div>
    </nav>
  );
};

export default MenuNav;
