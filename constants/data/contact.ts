import { ContactFormCopy, FormSelectOption } from "../types";

// Contact page: heading, form fields, topic options, and status messages.
export const contactPageContent = {
  metadata: {
    title: "Contact",
  },
  hero: {
    subtitle: "contact",
    title: "come say hello",
    description:
      "Questions, bookings, private events or just a note about something you liked — we read all of it.",
  },
  form: {
    labels: {
      name: "Your name",
      email: "Your email",
      topic: "Topic",
      message: "Your message",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      message: "How can we help?",
    },
    submit: "Send message",
    submitting: "Sending...",
    sent: "Message sent",
    incomplete: "Check required fields",
    success: "Your message has been sent successfully.",
    validationError: "Please complete all required fields.",
    unknownError: "Something went wrong. Please try again.",
    requestError: "Unable to send your message. Please try again.",
    contactHeading: "Find us",
  } satisfies ContactFormCopy,
  findUs: {
    addressLabel: "address",
    phoneLabel: "Call us at",
    hoursLabel: "Open daily",
    directionsLabel: "Get directions",
    email: "Email Us at",
  },
};

export const contactTopics: FormSelectOption[] = [
  { value: "", label: "Choose a topic" },
  { value: "general", label: "General enquiry" },
  { value: "reservation", label: "Table reservation" },
  { value: "event", label: "Private event" },
  { value: "feedback", label: "Feedback" },
  { value: "careers", label: "Careers" },
];
