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
  description:
    "Please read these terms before using the Common Grounds website or placing an order.",
  lastUpdated: policyLastUpdated,
  sections: [
    {
      id: "using-this-site",
      title: "Using this site",
      paragraphs: [
        "This website shares information about Common Grounds, our menu, location, and ways to get in touch. By using it, you agree to use the site lawfully and respectfully.",
        "We may update, change, or remove website content at any time. Menu items, ingredients, prices, and availability can change; please confirm current details with our team before ordering.",
      ],
    },
    {
      id: "orders-and-availability",
      title: "Orders and availability",
      paragraphs: [
        "Any menu information shown here is for general guidance. An item being listed online does not guarantee it is available at a particular time or location.",
        "If online ordering is offered through a separate service, that service may have its own terms and checkout conditions. Please review those terms before completing an order.",
      ],
    },
    {
      id: "allergens-and-dietary-needs",
      title: "Allergens and dietary needs",
      paragraphs: [
        "Ingredients and preparation methods may change, and our kitchen handles a range of ingredients. We cannot guarantee that any item is free from allergens or cross-contact.",
        "Please speak with a team member about ingredients and dietary needs before placing your order. Do not rely solely on information displayed on this website.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Website content",
      paragraphs: [
        "The text, design, and other materials on this website are provided for personal, informational use. Do not reproduce or reuse site materials in a way that misrepresents Common Grounds or violates another person's rights.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-party services",
      paragraphs: [
        "This website may link to third-party services, such as map providers or social networks. Those services operate independently and their own terms and privacy practices apply.",
      ],
    },
    {
      id: "limitation-and-contact",
      title: "Updates and contact",
      paragraphs: [
        "We aim to keep website information current but do not promise that every page is complete, accurate, or available at all times. Nothing in these terms limits rights that cannot lawfully be limited.",
        "Questions about these terms? Contact Common Grounds at 112 W 44th St, New York, NY 10036, or call (212) 555-0148.",
      ],
    },
  ],
};

export const privacyPageContent: LegalPolicyPageData = {
  subtitle: "Legal",
  title: "Privacy Policy",
  description:
    "This policy explains what information may be collected when you visit or contact Common Grounds through this website.",
  lastUpdated: policyLastUpdated,
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
  description:
    "Learn what cookies are and how browser settings can help you manage them when visiting this website.",
  lastUpdated: policyLastUpdated,
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
