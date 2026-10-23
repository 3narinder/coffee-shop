import {
  aboutSections,
  homeCallout,
  homeExplore,
  homeGallery,
  homeHero,
  homeSpecial,
  homeStory,
} from "@/constants/images";

import type {
  LegalPolicyPageData,
  NavigationLinkData,
  SocialLinkData,
  TestimonialData,
} from "@/constants/types";

// Replaceable asset references: referenced from the page copy and section data below.
export const pageImages = {
  homeHero,
  homeStory,
  homeSpecial,
  homeCallout,
  homeExplore,
  homeGallery,
  aboutSections,
};

// Shared business details: reused by the hero, address cards, contact page, and footer.
export const businessInfo = {
  name: "Common Grounds",
  brandDescriptor: "Coffee Co.",
  description:
    "Coffee, breakfast and a place to sit, seven days a week on West 44th.",
  address: "112 W 44th St, New York, NY 10036",
  mapUrl: "https://maps.google.com/?q=112+W+44th+St,+New+York,+NY+10036",
  phone: "(212) 555-0148",
  phoneLink: "tel:+12125550148",
  email: "hello@yourbusinessemail.com",
  openingHours: "Open daily, 7 AM – 8 PM",
  openingHoursShort: "7 AM – 8 PM",
  pageTitle: "Coffee, breakfast and sweets in Midtown Manhattan",
  pageDescription:
    "Coffee, breakfast and a place to sit, seven days a week on West 44th. Visit Common Grounds in Midtown Manhattan.",
};

// Reusable content: shared address labels, navigation, and footer links.
export const reusableContent = {
  visit: {
    title: "Find common grounds",
    description:
      "One room on West 44th, half a block from Bryant Park. Walk in, or find us from the address below.",
    addressLabel: "Address",
    phoneLabel: "Call us at",
    hoursLabel: "Open daily",
  },
  footerDescription: businessInfo.description,
  policyNavigationHeading: "On this page",
  policyUpdatedLabel: "Last updated:",
  siteNavigationLabel: "Site",
  socialNavigationLabel: "Social media",
  legalNavigationLabel: "Legal",
  menuButtonLabels: {
    open: "Open menu",
    close: "Close menu",
  },
  primaryNavigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavigationLinkData[],
  legalNavigation: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ] satisfies NavigationLinkData[],
  footerHeadings: {
    explore: "Explore",
    visit: "Visit",
  },
  copyrightNotice: "All rights reserved.",
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "TikTok", href: "https://www.tiktok.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
  ] satisfies SocialLinkData[],
};

// Reusable guest quotes: imported by the home and menu testimonial carousel.
export const testimonials: TestimonialData[] = [
  {
    quote:
      "I have come here every weekday since 2019 and they still start my cortado when I walk in. Best one in Midtown, and it is not close.",
    name: "Daniel Okafor",
  },
  {
    quote:
      "We run our Monday standups at the communal table. Fast Wi-Fi, nobody hovering, and the bagel order keeps the whole team on time.",
    name: "Priya Raman",
  },
  {
    quote:
      "The honey lavender latte sounds like it should be awful and it is genuinely excellent. I bring every out-of-town visitor here.",
    name: "Marisol Vega",
  },
  {
    quote:
      "Ordered catering for forty people with less than a day of notice. It arrived early, it was correct, and it was still warm.",
    name: "James Whitfield",
  },
  {
    quote:
      "The only place near Bryant Park where I can actually hear the person across the table from me. That is worth more than the coffee.",
    name: "Alice Chen",
  },
  {
    quote:
      "Their almond croissant has ruined every other almond croissant for me. I am not exaggerating and I am not sorry about it.",
    name: "Nia Robertson",
  },
];

// Policy pages: all three routes share the same template, sections, and generated sidebar.
const policyLastUpdated = "October 21, 2026";

export const termsPageContent: LegalPolicyPageData = {
  subtitle: "Legal",
  title: "Terms & Conditions",
  lastUpdated: policyLastUpdated,
  intro:
    "These terms govern your use of the Common Grounds website and the services we offer at our Midtown Manhattan location. By browsing this site or ordering from us, you agree to what follows.",
  sections: [
    {
      id: "Acceptance-of-these-terms",
      title: "Acceptance of these terms",
      paragraphs: [
        "By accessing this website you confirm that you accept these terms and agree to comply with them. If you do not agree, please do not use the site.",
        "We may revise these terms at any time. The version published here is the one that applies, and the “last updated” date above tells you when it last changed.",
      ],
    },
    {
      id: "menu-pricing-and-availability",
      title: "Menu, pricing and availability",
      paragraphs: [
        "Menu items, prices and photographs on this site are provided for information. Availability changes daily with what we are able to source, and prices shown in US dollars may be adjusted without notice.",
        "Where an item on the site differs from what is offered in the shop, the in-store menu takes precedence. Prices shown exclude applicable New York State and City sales tax unless stated otherwise.",
      ],
    },
    {
      id: "orders-and-payment",
      title: "Orders and payment",
      paragraphs: [
        "Orders placed in person, by phone or through our mobile ordering partner are confirmed when we accept them. We may decline an order where an item is unavailable, where we suspect fraud, or where we cannot fulfill it safely.",
        "Payment is due at the time of service unless we have agreed otherwise in writing, such as for a catering account.",
      ],
    },
    {
      id: "catering-orders",
      title: "Catering orders",
      paragraphs: [
        "Catering orders require at least 24 hours notice and are confirmed only once we have acknowledged them in writing. Cancellations made less than 12 hours before the delivery window may be charged in full",
      ],
    },
    {
      id: "allergens-and-dietary-information",
      title: "Allergens and dietary information",
      paragraphs: [
        "Our kitchen handles peanuts, tree nuts, dairy, wheat, eggs, soy, fish, shellfish and sesame. We take care to describe our food accurately, but we cannot guarantee that any item is free from traces of an allergen.",
        "If you have a food allergy or intolerance, tell a member of our team before ordering so we can advise you properly.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      paragraphs: [
        "All content on this site — including the Common Grounds name, logo, photography, illustrations and written copy — belongs to us or is used with permission. You may not reproduce it commercially without our written consent.",
      ],
    },
    {
      id: "conduct-in-our-shop",
      title: "Conduct in our shop",
      paragraphs: [
        "We ask every guest to treat our team and other guests with respect. We reserve the right to refuse service to anyone behaving abusively, unsafely, or in a way that disrupts other guests.",
      ],
    },
    {
      id: "disclaimer-and-limitation-of-liability",
      title: "Disclaimer and limitation of liability",
      paragraphs: [
        "We provide this website on an “as is” and “as available” basis, without warranties of any kind, express or implied, to the fullest extent permitted by law.",
        "To the fullest extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from your use of the site. Nothing in these terms limits liability that cannot lawfully be excluded, including for personal injury caused by our negligence.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the State of New York, without regard to its conflict of law rules. Any dispute will be brought exclusively in the state or federal courts located in New York County, New York.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "Questions about these terms can go to hello@commongroundsnyc.com or (212) 555-0148, or you can simply ask us at the counter.",
      ],
    },
  ],
};

export const privacyPageContent: LegalPolicyPageData = {
  subtitle: "Legal",
  title: "Privacy Policy",
  lastUpdated: policyLastUpdated,
  intro:
    "These terms govern your use of the Common Grounds website and the services we offer at our Midtown Manhattan location. By browsing this site or ordering from us, you agree to what follows.",
  sections: [
    {
      id: "information-you-provide",
      title: "Information you provide",
      paragraphs: [
        "If you contact us through a form or another channel, you may provide details such as your name, email address, enquiry topic, and message. Please only include information needed for us to respond.",
      ],
    },
    {
      id: "how-information-is-used",
      title: "How information is used",
      paragraphs: [
        "Information you provide is used to respond to your request, handle enquiries, and maintain the website and our communications.",
        "We do not sell personal information submitted through this website.",
      ],
    },
    {
      id: "sharing-and-service-providers",
      title: "Sharing and service providers",
      paragraphs: [
        "We may rely on service providers to host the website or deliver messages you send. They should only handle information as needed to provide those services.",
        "Links to third-party websites are provided for convenience. Their privacy practices are governed by their own policies.",
      ],
    },
    {
      id: "retention-and-security",
      title: "Retention and security",
      paragraphs: [
        "We keep enquiry information only for as long as reasonably needed to respond, maintain business records, and meet applicable obligations. No method of online transmission or storage can be guaranteed completely secure.",
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      paragraphs: [
        "You may choose not to submit information through a website form. If you have a question about information you have sent us, contact us using the details below.",
      ],
    },
    {
      id: "children-and-policy-changes",
      title: "Changes to this policy",
      paragraphs: [
        "This website is intended for a general audience and is not designed to collect information from children. We may update this policy from time to time; the date above shows when it was last revised.",
      ],
    },
    {
      id: "privacy-contact",
      title: "Contact",
      paragraphs: [
        "For privacy questions, contact Common Grounds at 112 W 44th St, New York, NY 10036, or call (212) 555-0148.",
      ],
    },
  ],
};

export const cookiePageContent: LegalPolicyPageData = {
  subtitle: "Legal",
  title: "Cookie Policy",
  lastUpdated: policyLastUpdated,
  intro:
    "These terms govern your use of the Common Grounds website and the services we offer at our Midtown Manhattan location. By browsing this site or ordering from us, you agree to what follows.",
  sections: [
    {
      id: "what-cookies-are",
      title: "What cookies are",
      paragraphs: [
        "Cookies are small text files that a website may store in your browser. Similar technologies can remember preferences or help a site function.",
      ],
    },
    {
      id: "how-this-site-uses-cookies",
      title: "How this site uses cookies",
      paragraphs: [
        "This website may use essential storage needed to deliver pages or support features you choose to use. We do not intentionally use advertising cookies on this site.",
        "If we add analytics or other optional technologies in the future, we will update this policy to explain them and any available choices.",
      ],
    },
    {
      id: "third-party-cookies",
      title: "Third-party services",
      paragraphs: [
        "Some links or embedded services may be provided by third parties. Those providers may use their own cookies when you visit or interact with their content; their policies explain how to manage them.",
      ],
    },
    {
      id: "manage-cookies",
      title: "Managing cookies",
      paragraphs: [
        "Most browsers let you review, block, or delete cookies through their privacy settings. Blocking essential storage may affect how some website features work.",
      ],
    },
    {
      id: "cookie-policy-contact",
      title: "Contact and updates",
      paragraphs: [
        "For questions about this policy, contact Common Grounds at 112 W 44th St, New York, NY 10036, or call (212) 555-0148. We may update this page if our use of cookies changes.",
      ],
    },
  ],
};
