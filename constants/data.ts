import { homeSpecial } from "@/constants/images";
import type { MenuItemData } from "@/constants/types";

export const businessInfo = {
  name: "Common Grounds",
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

export const homePageContent = {
  hero: {
    headingLines: ["A Great morning", "starts with"],
    hoursLabel: "Opening Hours",
    addressLabel: "Find us at",
  },
  story: {
    title: "our story",
    description:
      "Common Grounds opened in 2016 in a narrow storefront on West 44th, with a short menu, a second-hand grinder and a stubborn belief that Midtown deserved better than a paper cup of scorched drip. The first week we sold three hundred cups, mostly to people on their way to Grand Central. What kept us open was the ones who came back on a Saturday, when they had nowhere in particular to be. We added breakfast because guests were staying through the morning, and bowls because they were staying through lunch. The kitchen has been running open to close ever since.",
  },
  specials: {
    title: "our specials",
    description:
      "Some things we are making especially well right now — pulled, whisked and built to order, from open until close.",
    buttonLabel: "see full menu",
  },
  callout: {
    headingLines: ["Coffee and breakfast,", "At your Local favorite"],
    buttonLabel: "View menu",
  },
  exploreMenu: {
    title: "explore our menu",
    description:
      "We've got something for everyone across the bar and the kitchen. Tap any one to see everything on it.",
    buttonLabel: "see full menu",
  },
  gallery: {
    heading: "A taste you'll want to share",
  },
  testimonials: {
    title: "our happy visitors",
    description:
      "A few of the regulars who let us start their morning, told in their own words.",
    kicker: "A little love from our guests",
    subheading: "Made part of their day.",
  },
  visit: {
    title: "Find common grounds",
    description:
      "One room on West 44th, half a block from Bryant Park. Walk in, or find us from the address below.",
    addressLabel: "Address",
    phoneLabel: "Call us at",
    hoursLabel: "Open daily",
  },
  footerDescription:
    "Coffee, breakfast and a place to sit, seven days a week on West 44th.",
};

export const specialItems: MenuItemData[] = [
  {
    id: 1,
    type: "price",
    name: "Nitro cold brew",
    price: "$6.00",
    description:
      "Pulled from the tap under nitrogen. Cascading, creamy, and served without ice.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 2,
    type: "price",
    name: "Honey lavender latte",
    price: "$6.95",
    description:
      "Wildflower honey steeped with culinary lavender. Floral, not perfumed.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 3,
    type: "price",
    name: "Coconut cloud matcha",
    price: "$7.50",
    description:
      "Crisp coconut water layered under high-grade matcha and a coconut cream cap.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 4,
    type: "price",
    name: "Avocado toast",
    price: "$12.00",
    description:
      "Crushed avocado on grilled sourdough with olive oil, chilli flakes, sea salt and microgreens.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 5,
    type: "price",
    name: "Lox bagel",
    price: "$16.50",
    description:
      "Everything bagel, cream cheese, cold-smoked salmon, tomato, onion and capers.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 6,
    type: "price",
    name: "Salmon poke bowl",
    price: "$19.00",
    description:
      "Marinated salmon over sushi rice with edamame, avocado, mango and sesame.",
    image: homeSpecial.nitroColdBrew,
  },
];

export const exploreMenuItems: MenuItemData[] = [
  {
    id: 1,
    type: "items",
    name: "Espresso",
    items: "9 items",
    description:
      "Our house blend, roasted in Red Hook and pulled to order. The whole bar is built around these nine drinks.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 2,
    type: "items",
    name: "Brewed coffee",
    items: "5 items",
    description:
      "Batch brew for the rush, pour over when you have four minutes to spare.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 3,
    type: "items",
    name: "Cold brew & iced",
    items: "8 items",
    description:
      "Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 4,
    type: "items",
    name: "Signature lattes",
    items: "7 items",
    description:
      "Syrups made in our own kitchen — no pumps of anything we did not cook ourselves.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 5,
    type: "items",
    name: "Matcha",
    items: "6 items",
    description:
      "Ceremonial-grade green tea whisked to order and served hot, iced or clouded with coconut.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 6,
    type: "items",
    name: "Tea",
    items: "6 items",
    description:
      "Loose-leaf, steeped by the pot, and a chai we spice and simmer in house.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 7,
    type: "items",
    name: "Smoothies",
    items: "5 items",
    description:
      "Blended thick with whole fruit and real nut butter. Nothing from a syrup bottle.",
    image: homeSpecial.nitroColdBrew,
  },
  {
    id: 8,
    type: "items",
    name: "Fresh juice",
    items: "5 items",
    description:
      "Cold-pressed each morning from produce bought at the Union Square greenmarket.",
    image: homeSpecial.nitroColdBrew,
  },
];

export const testimonials = [
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

// ******************************************************** //
//***** MENU PAGE CONTENT
// ******************************************************** //

export const menuNav = [
  { label: "Espresso", id: "espresso" },
  { label: "Americano", id: "americano" },
  { label: "Cappuccino", id: "cappuccino" },
  { label: "Latte", id: "latte" },
  { label: "Mocha", id: "mocha" },
  { label: "Flat White", id: "flat-white" },
  { label: "Macchiato", id: "macchiato" },
  { label: "Cold Coffee", id: "cold-coffee" },
  { label: "Iced Latte", id: "iced-latte" },
  { label: "Frappes", id: "frappes" },
  { label: "Tea", id: "tea" },
  { label: "Hot Chocolate", id: "hot-chocolate" },
];

export const menuPageContent = {
  hero: {
    headingLines: ["A Great morning", "starts with"],
    hoursLabel: "Opening Hours",
    addressLabel: "Find us at",
  },
};
