"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import RevealSection from "@/components/animation/RevealSection";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { contactPageContent, contactTopics } from "@/constants/data/contact";
import type { ContactFormData, ContactInfoItem } from "@/constants/types";
import { businessInfo } from "@/constants/data/reusable";
import ContactInfo from "./ContactInfo";

const contactInfoItems: ContactInfoItem[] = [
  {
    label: contactPageContent.findUs.addressLabel,
    value: businessInfo.address,
    href: businessInfo.mapUrl,
    external: true,
    icon: <MapPin size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.phoneLabel,
    value: businessInfo.phone,
    href: `tel:${businessInfo.phone.replace(/[^\d+]/g, "")}`,
    icon: <Phone size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.hoursLabel,
    value: businessInfo.openingHoursShort,
    icon: <Clock3 size={18} aria-hidden="true" />,
  },
  {
    label: contactPageContent.findUs.email,
    value: businessInfo.email,
    href: `mailto:${businessInfo.email}`,
    icon: <Mail size={18} aria-hidden="true" />,
  },
];

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
    throw new Error(result?.error || formCopy.requestError);
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
      setStatus(error instanceof Error ? error.message : formCopy.unknownError);
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
        <ContactInfo title={formCopy.contactHeading} items={contactInfoItems} />
      </div>
    </RevealSection>
  );
};

export default ContactForm;
