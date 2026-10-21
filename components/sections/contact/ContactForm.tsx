"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Clock3, MapPin, Phone } from "lucide-react";

import RevealSection from "@/components/animation/RevealSection";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import {
  businessInfo,
  contactPageContent,
  contactTopics,
} from "@/constants/data";
import type { ContactFormData } from "@/constants/types";

const formCopy = contactPageContent.form;

const initialValues: ContactFormData = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

// Sends form data to your Next.js API route.
export async function submitContactForm(data: ContactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      result?.error || formCopy.requestError,
    );
  }

  return result;
}

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const isFormComplete =
    values.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.topic !== "" &&
    values.message.trim().length > 0;

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const target = event.target;

    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      setValues((previous) => ({
        ...previous,
        [target.name]: target.value,
      }));

      setStatus("");
      setIsSent(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;

    if (!form || isSubmitting || !form.reportValidity()) {
      setStatus(formCopy.validationError);
      return;
    }

    if (!isFormComplete) {
      setStatus(formCopy.validationError);
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      await submitContactForm({
        name: values.name.trim(),
        email: values.email.trim(),
        topic: values.topic,
        message: values.message.trim(),
      });

      setIsSent(true);
      setStatus(formCopy.success);
      setValues(initialValues);
      form.reset();
    } catch (error) {
      setIsSent(false);
      setStatus(
        error instanceof Error
          ? error.message
          : formCopy.unknownError,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RevealSection className="relative z-10 flex w-full flex-col items-center overflow-x-clip scroll-mt-24 py-14 tablet:py-20">
      <div className="z-10 flex h-min w-full max-w-6xl flex-wrap items-start justify-start gap-10 px-5 tablet:gap-14 tablet:px-8">
        {/* Contact form */}
        <form
          ref={formRef}
          noValidate
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="grid h-min min-w-0 flex-1 grid-cols-1 items-start gap-5 tablet:grid-cols-2"
        >
          {/* Name */}
          <FormField
            label={formCopy.labels.name}
            name="name"
            type="text"
            placeholder={formCopy.placeholders.name}
            autoComplete="name"
            value={values.name}
            required
          />

          {/* Email */}
          <FormField
            label={formCopy.labels.email}
            name="email"
            type="email"
            placeholder={formCopy.placeholders.email}
            autoComplete="email"
            value={values.email}
            required
          />

          {/* Topic */}
          <FormSelect
            label={formCopy.labels.topic}
            name="topic"
            options={contactTopics}
            value={values.topic}
            required
            className="tablet:col-span-2"
          />

          {/* Message */}
          <FormField
            label={formCopy.labels.message}
            name="message"
            type="textarea"
            placeholder={formCopy.placeholders.message}
            rows={5}
            value={values.message}
            required
            className="tablet:col-span-2"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || isSent}
            className={`flex w-fit items-center justify-center gap-2 rounded-full px-6 py-4 font-onest text-sm font-semibold text-cream transition-colors duration-300 disabled:cursor-default capitalize tracking-[-0.02em] leading-[1em] ${
              isSubmitting || isSent
                ? "bg-green"
                : isFormComplete
                  ? "bg-green hover:opacity-85"
                  : "bg-accent hover:opacity-90"
            }`}
          >
            {isSubmitting ? (
              formCopy.submitting
            ) : isSent ? (
              <>
                {formCopy.sent}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="m5 12 4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : isFormComplete ? (
              formCopy.submit
            ) : (
              formCopy.incomplete
            )}
          </button>

          {/* Success or error message */}
          {status && (
            <p
              role="status"
              aria-live="polite"
              className="font-onest text-sm text-green tablet:col-span-2"
            >
              {status}
            </p>
          )}
        </form>

        {/* Contact details */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-7 rounded-4xl bg-green p-8 tablet:w-104">
          <h2
            className="uppercase font-onest text-xl font-extrabold text-cream leading-[1.05em] tracking-[-0.02em]
          "
          >
            {formCopy.contactHeading}
          </h2>
          <address className="flex w-full flex-col gap-6 not-italic">
            <div className="flex items-start gap-4 text-cream">
              <MapPin
                size={20}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <div className="flex flex-col gap-1">
                <span className="font-onest text-xs font-semibold uppercase tracking-[0.12em] text-cream/70">
                  {contactPageContent.findUs.addressLabel}
                </span>
                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-onest text-sm leading-relaxed underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {businessInfo.address}
                </a>
                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit font-onest text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {contactPageContent.findUs.directionsLabel}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-cream">
              <Phone
                size={20}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <div className="flex flex-col gap-1">
                <span className="font-onest text-xs font-semibold uppercase tracking-[0.12em] text-cream/70">
                  {contactPageContent.findUs.phoneLabel}
                </span>
                <a
                  href={businessInfo.phoneLink}
                  className="font-onest text-sm leading-relaxed underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-cream">
              <Clock3
                size={20}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <div className="flex flex-col gap-1">
                <span className="font-onest text-xs font-semibold uppercase tracking-[0.12em] text-cream/70">
                  {contactPageContent.findUs.hoursLabel}
                </span>
                <span className="font-onest text-sm leading-relaxed">
                  {businessInfo.openingHours}
                </span>
              </div>
            </div>
          </address>
        </div>
      </div>
    </RevealSection>
  );
};

export default ContactForm;
