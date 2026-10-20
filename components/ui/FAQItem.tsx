"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex h-min w-full flex-col items-start overflow-clip rounded-[20px] border border-green-wash bg-cream-deep">
      {/* Visible content */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex h-min w-full flex-1 cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-onest text-lg font-semibold leading-[1.4em] text-green">
          {question}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green">
          <span
            className={`text-3xl font-thin leading-none text-cream transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </span>
      </button>

      {/* Expandable answer */}
      <div
        className={`grid w-full transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex h-min w-full flex-none flex-col items-start justify-start px-6 pb-6 pt-0">
            <p className="w-full max-w-2xl whitespace-pre-wrap wrap-break-words font-onest text-sm leading-[1.625em] text-[#0e4a2bbf]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
