import { aboutSections, homeGallery, homeSpecial, homeStory } from "../images";
import { FAQData, StandValueData, StatData, StorySectionData } from "../types";

// About page: hero, story sections, values, statistics, and FAQs.
export const aboutPageContent = {
  metadata: {
    title: "About",
  },
  hero: {
    subtitle: "about us",
    title: "more than coffee",
    description:
      "A neighborhood coffee shop and kitchen on West 44th, open from 7 AM and built for staying a while.",
    decorativeImages: [
      {
        src: homeStory.BlackCoffeeCupPlate,
        alt: "Decorative black coffee cup ",
        className: "tablet:flex hidden w-64 h-64 top-27.5 -left-23.75 ",
      },
      {
        src: homeSpecial.cookie,
        alt: "Decorative cookie",
        className: "tablet:flex hidden w-52 h-52 -bottom-14.5 -right-21.75",
      },
    ],
  },

  stories: [
    {
      image: aboutSections.ourStory,
      imageAlt: "The Ember & Oak coffee shop",
      subheading: "Our Story",
      heading: "It started with one espresso machine",
      paragraphs: [
        "Ember & Oak opened in 2016 in a narrow storefront on West 44th with a short menu, a second-hand grinder and a stubborn belief that Midtown deserved better than a paper cup of scorched drip.",
        "The first week we sold three hundred cups, mostly to people on their way to Grand Central. What kept us open was the ones who came back on a Saturday, when they had nowhere to be.",
        "We added breakfast because guests were staying through the morning, and bowls because they were staying through lunch. The kitchen has been running open to close ever since.",
      ],
      decorativeImages: [
        {
          src: homeGallery.beanGroup,
          alt: "Decorative coffee group",
          className:
            "tablet:flex hidden w-80 h-50.75 -bottom-22.25 -left-46.75 rotate-[-12deg] ",
        },
      ],
    },
    {
      image: aboutSections.ourStory2,
      imageAlt: "Coffee prepared at Ember & Oak",
      subheading: "Our Philosophy",
      heading: "Good coffee brings people together",
      reverseOnDesktop: true,
      paragraphs: [
        "Pastries are laminated the night before and baked at five. Bowls are built to order. Our syrups are cooked in house — the lavender is steeped with real wildflower honey, and the brown sugar takes forty minutes on the stove.",
        "It is slower than the alternative, and it is the entire reason the menu tastes the way it does.",
      ],
      decorativeImages: [
        {
          src: homeSpecial.nitroColdBrew,
          alt: "Decorative black coffee cup",
          className: "tablet:flex hidden w-56 h-57.75 top-16.75 -right-25.25",
        },
      ],
    },
  ] satisfies StorySectionData[],
  callout: {
    headingLines: ["Come see the room,", "for yourself"],
    buttonLabel: "Find us",
    buttonHref: "/contact",
    images: [
      {
        src: aboutSections.banner1,
        alt: "Coffee and breakfast at Ember & Oak",
      },
      {
        src: aboutSections.banner2,
        alt: "A table at Ember & Oak",
      },
    ],
  },
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
