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
  FAQData,
  FormSelectOption,
  LegalPolicyPageData,
  MenuCategoryData,
  MenuItemData,
  MenuNavItem,
  NavigationLinkData,
  SocialLinkData,
  StandValueData,
  StatData,
  StorySectionData,
  TestimonialData,
  ContactFormCopy,
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

// Home page: page headings, section copy, and calls to action.
export const homePageContent = {
  hero: {
    headingLines: ["A Great morning", "starts with"],
    hoursLabel: "Opening Hours",
    addressLabel: "Find us at",
    imageAlt: "A freshly prepared coffee at Common Grounds",
    beanAlt: "Decorative coffee bean",
  },
  story: {
    title: "our story",
    imageAlt: "Black coffee cup and plate",
    description:
      "Common Grounds opened in 2016 in a narrow storefront on West 44th, with a short menu, a second-hand grinder and a stubborn belief that Midtown deserved better than a paper cup of scorched drip. The first week we sold three hundred cups, mostly to people on their way to Grand Central. What kept us open was the ones who came back on a Saturday, when they had nowhere in particular to be. We added breakfast because guests were staying through the morning, and bowls because they were staying through lunch. The kitchen has been running open to close ever since.",
  },
  specials: {
    title: "our specials",
    description:
      "Some things we are making especially well right now — pulled, whisked and built to order, from open until close.",
    buttonLabel: "see full menu",
    buttonHref: "/menu",
    decorativeImageAlts: ["Decorative cookie", "Decorative coffee beans"],
  },
  callout: {
    headingLines: ["Coffee and breakfast,", "At your Local favorite"],
    buttonLabel: "View menu",
    buttonHref: "/menu",
    imageAlts: [
      "Coffee and breakfast at Common Grounds",
      "A table at Common Grounds",
    ],
  },
  exploreMenu: {
    title: "explore our menu",
    description:
      "We've got something for everyone across the bar and the kitchen. Tap any one to see everything on it.",
    buttonLabel: "see full menu",
    buttonHref: "/menu",
    decorativeImageAlt: "Decorative napkin",
  },
  gallery: {
    heading: "A taste you'll want to share",
    imageAlts: [
      "A coffee and pastry at Common Grounds",
      "Coffee being prepared at the bar",
      "A table set for breakfast",
      "Freshly made food from the kitchen",
      "A guest enjoying a drink",
    ],
    decorativeImageAlt: "Decorative group of coffee beans",
  },
  testimonials: {
    title: "our happy visitors",
    description:
      "A few of the regulars who let us start their morning, told in their own words.",
    kicker: "A little love from our guests",
    subheading: "Made part of their day.",
    carouselLabel: "Customer testimonials",
    previousLabel: "Previous testimonials",
    nextLabel: "Next testimonials",
    regionLabel: "Guest reviews carousel",
  },
  footerDescription: businessInfo.description,
};

// Home page menu cards: each entry owns its copy and replaceable image reference.
export const specialItems: MenuItemData[] = [
  {
    id: "nitro-cold-brew",
    type: "price",
    name: "Nitro cold brew",
    price: "$6.00",
    description:
      "Pulled from the tap under nitrogen. Cascading, creamy, and served without ice.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Nitro cold brew",
  },
  {
    id: "honey-lavender-latte",
    type: "price",
    name: "Honey lavender latte",
    price: "$6.95",
    description:
      "Wildflower honey steeped with culinary lavender. Floral, not perfumed.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Honey lavender latte",
  },
  {
    id: "coconut-cloud-matcha",
    type: "price",
    name: "Coconut cloud matcha",
    price: "$7.50",
    description:
      "Crisp coconut water layered under high-grade matcha and a coconut cream cap.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Coconut cloud matcha",
  },
  {
    id: "avocado-toast",
    type: "price",
    name: "Avocado toast",
    price: "$12.00",
    description:
      "Crushed avocado on grilled sourdough with olive oil, chilli flakes, sea salt and microgreens.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Avocado toast",
  },
  {
    id: "lox-bagel",
    type: "price",
    name: "Lox bagel",
    price: "$16.50",
    description:
      "Everything bagel, cream cheese, cold-smoked salmon, tomato, onion and capers.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Lox bagel",
  },
  {
    id: "salmon-poke-bowl",
    type: "price",
    name: "Salmon poke bowl",
    price: "$19.00",
    description:
      "Marinated salmon over sushi rice with edamame, avocado, mango and sesame.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Salmon poke bowl",
  },
];

// Home page explore cards: item counts and descriptions can be updated independently.
export const exploreMenuItems: MenuItemData[] = [
  {
    id: "espresso",
    type: "items",
    name: "Espresso",
    items: "9 items",
    description:
      "Our house blend, roasted in Red Hook and pulled to order. The whole bar is built around these nine drinks.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Espresso drinks",
  },
  {
    id: "brewed-coffee",
    type: "items",
    name: "Brewed coffee",
    items: "5 items",
    description:
      "Batch brew for the rush, pour over when you have four minutes to spare.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Brewed coffee",
  },
  {
    id: "cold-brew-iced",
    type: "items",
    name: "Cold brew & iced",
    items: "8 items",
    description:
      "Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Cold brew coffee",
  },
  {
    id: "signature-lattes",
    type: "items",
    name: "Signature lattes",
    items: "7 items",
    description:
      "Syrups made in our own kitchen — no pumps of anything we did not cook ourselves.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Signature latte",
  },
  {
    id: "matcha",
    type: "items",
    name: "Matcha",
    items: "6 items",
    description:
      "Ceremonial-grade green tea whisked to order and served hot, iced or clouded with coconut.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Matcha",
  },
  {
    id: "tea",
    type: "items",
    name: "Tea",
    items: "6 items",
    description:
      "Loose-leaf, steeped by the pot, and a chai we spice and simmer in house.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "A pot of tea",
  },
  {
    id: "smoothies",
    type: "items",
    name: "Smoothies",
    items: "5 items",
    description:
      "Blended thick with whole fruit and real nut butter. Nothing from a syrup bottle.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Fruit smoothie",
  },
  {
    id: "fresh-juice",
    type: "items",
    name: "Fresh juice",
    items: "5 items",
    description:
      "Cold-pressed each morning from produce bought at the Union Square greenmarket.",
    image: homeSpecial.nitroColdBrew,
    imageAlt: "Fresh juice",
  },
];

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

// Menu page: sections are the source of truth for both the jump links and section content.
export const barMenuItems: MenuItemData[] = [
  specialItems[0],
  specialItems[1],
  specialItems[2],
];

export const kitchenMenuItems: MenuItemData[] = [
  specialItems[3],
  specialItems[4],
  specialItems[5],
];

export const menuPageContent = {
  metadata: {
    title: "Menu",
    description:
      "Explore coffee, breakfast, and kitchen favorites at Common Grounds in Midtown Manhattan.",
  },
  hero: {
    subtitle: "",
    title: "go on then, have a look",
    description:
      "Your usual is waiting. So is the thing you will wish you had tried sooner.",
    decorativeImages: [
      {
        src: homeHero.bean_image_1,
        alt: "Decorative coffee bean",
        className:
          "desktop:w-18 tablet:w-14.5 w-10.75 desktop:h-16.75 tablet:h-13.25 h-10 desktop:top-19 tablet:top-19.25 top-19.75 desktop:left-42 tablet:left-27.25 left-11.25 rotate-[-22deg]",
      },
      {
        src: homeHero.bean_image_2,
        alt: "Decorative coffee bean",
        className:
          "desktop:w-12.75 tablet:w-10.25 w-10.75 desktop:h-17.25 tablet:h-14 h-10 desktop:bottom-35.5 tablet:bottom-35 bottom-19.75 desktop:left-23.75 tablet:left-15.25 left-11.25 blur-[2px] opacity-[0.8] rotate-[30deg]",
      },
    ],
  },
  navigation: {
    ariaLabel: "Jump to menu section",
    selectLabel: "Jump to a menu",
    placeholder: "Jump to a section",
  },
  sections: [
    {
      id: "from-the-bar",
      title: "from the bar",
      description:
        "Espresso, brewed, iced, whisked and pressed — everything the bar makes to order.",
      items: barMenuItems,
    },
    {
      id: "from-the-kitchen",
      title: "from the kitchen",
      description:
        "Breakfast from open, then sandwiches and bowls built when you ask for them.",
      items: kitchenMenuItems,
    },
  ] satisfies MenuCategoryData[],
};

export const menuNav: MenuNavItem[] = menuPageContent.sections.map(
  ({ id, title }) => ({ id, label: title }),
);

// About page: hero, story sections, values, statistics, and FAQs.
export const aboutPageContent = {
  metadata: {
    title: "About Common Grounds",
  },
  hero: {
    subtitle: "about us",
    title: "more than coffee",
    description:
      "A neighborhood coffee shop and kitchen on West 44th, open from 7 AM and built for staying a while.",
  },
  stories: [
    {
      image: aboutSections.ourStory,
      imageAlt: "The Common Grounds coffee shop",
      subheading: "Our Story",
      heading: "It started with one espresso machine",
      paragraphs: [
        "Common Grounds opened in 2016 in a narrow storefront on West 44th with a short menu and a second-hand grinder.",
        "We believed Midtown deserved better coffee, thoughtfully sourced beans, and carefully crafted drinks.",
        "That small beginning became a neighborhood gathering place built around quality and connection.",
      ],
    },
    {
      image: aboutSections.ourStory,
      imageAlt: "Coffee prepared at Common Grounds",
      subheading: "Our Philosophy",
      heading: "Good coffee brings people together",
      reverseOnDesktop: true,
      paragraphs: [
        "Every cup begins with carefully selected beans and a commitment to quality.",
        "We focus on thoughtful preparation, consistency, and the details that make great coffee special.",
        "Our goal is simple: to make every visit feel welcoming and every cup worth coming back for.",
      ],
    },
    {
      image: aboutSections.ourStory,
      imageAlt: "The Common Grounds kitchen",
      subheading: "Our Kitchen",
      heading: "Made with care, served with care",
      paragraphs: [
        "The kitchen opens with the coffee bar and stays busy through breakfast and lunch.",
        "We prepare each order with fresh ingredients and keep the menu welcoming, familiar, and satisfying.",
        "Whether you are taking breakfast to go or settling in for a while, there is a place for you here.",
      ],
    },
  ] satisfies StorySectionData[],
  stats: [
    { stat: "100+", content: "Menu items" },
    { stat: "13H", content: "Open every day" },
    { stat: "2016", content: "Serving Midtown since" },
    { stat: "4.8", content: "Average guest rating" },
  ] satisfies StatData[],
  values: [
    {
      number: "01",
      title: "We buy from people we know",
      description:
        "Our beans come from a roaster in Red Hook, our bagels from a family bakery in Greenpoint, and our produce from the greenmarket four blocks south. Short supply chains make better food and keep the money in the city.",
    },
    {
      number: "02",
      title: "We make it with care",
      description:
        "From a carefully pulled espresso to a made-to-order lunch, we take the time to get the small details right.",
    },
    {
      number: "03",
      title: "There is room for everyone",
      description:
        "Come by for a quick coffee, meet a friend, or make yourself comfortable at the communal table.",
    },
  ] satisfies StandValueData[],
  faqs: [
    {
      question: "Can I order ahead?",
      answer:
        "Yes — mobile orders go straight to the second bar station and are usually ready in four or five minutes. During the 8 to 9:30 rush, give it a little longer.",
    },
    {
      question: "Do you have dairy-free options?",
      answer:
        "Yes! We offer oat milk and other alternatives so you can customize your favorite coffee.",
    },
    {
      question: "Where do you source your coffee?",
      answer:
        "We work with trusted roasters who share our commitment to quality and thoughtfully sourced beans.",
    },
    {
      question: "Can I find vegetarian options?",
      answer:
        "Our menu includes options to suit different preferences. Please ask the team about ingredients and current availability.",
    },
  ] satisfies FAQData[],
  valuesHeading: {
    title: "what we stand for",
    description:
      "Three things we will not compromise on, however long the line gets.",
  },
  faqHeading: {
    title: "good to know",
    description: "The things people ask us most, answered before you have to.",
  },
};

// Contact page: heading, form fields, topic options, and status messages.
export const contactPageContent = {
  metadata: {
    title: "Contact Common Grounds",
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
    addressLabel: "Visit us",
    phoneLabel: "Call us",
    hoursLabel: "Opening hours",
    directionsLabel: "Get directions",
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
