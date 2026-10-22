import { aboutSections } from "../images";
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
