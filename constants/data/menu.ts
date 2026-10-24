import {
  brewedCoffee,
  espresso,
  homeHero,
  coldBrewedIce,
  homeSpecial,
} from "../images";

import type { MenuItemData, MenuNavItem, MenuPageContent } from "../types";

// Each category owns its own menu items.
export const espressoItems: MenuItemData[] = [
  {
    id: "espresso",
    type: "price",
    name: "espresso",
    price: "$3.70",
    description: "A single shot of our house blend, pulled short and sweet.",
    image: espresso.espresso,
    imageAlt: "Espresso coffee",
  },
  {
    id: "doppio",
    type: "price",
    name: "doppio",
    price: "$4.25",
    description: "Twice the shot, same balance. For the serious mornings.",
    image: espresso.doppio,
    imageAlt: "Doppio coffee",
  },
  {
    id: "macchiato",
    type: "price",
    name: "macchiato",
    price: "$4.25",
    description: "Espresso marked with a spoonful of steamed milk foam.",
    image: espresso.macchiato,
    imageAlt: "Macchiato coffee",
  },
  {
    id: "Cartado",
    type: "price",
    name: "Cartado",
    price: "$4.75",
    description: "Equal parts espresso and warm milk in a four-ounce glass.",
    image: espresso.cartado,
    imageAlt: "Cartado coffee",
  },
  {
    id: "cappuccino",
    type: "price",
    name: "cappuccino",
    price: "$5.25",
    description: "Espresso under a thick, velvety cap of milk and foam.",
    image: espresso.cappuccino,
    imageAlt: "cappuccino coffee",
  },
  {
    id: "Caffe Latte",
    type: "price",
    name: "Caffe Latte",
    price: "$5.75",
    description: "Espresso stretched with generously steamed milk.",
    image: espresso.caffeLatte,
    imageAlt: "Caffe Latte coffee",
  },

  {
    id: "flat white",
    type: "price",
    name: "flat white",
    price: "$5.50",
    description:
      "Double ristretto with silky microfoam. Strong, smooth, no foam hat.",
    image: espresso.flatWhite,
    imageAlt: "Flat White coffee",
  },
  {
    id: "mocha",
    type: "price",
    name: "mocha",
    price: "$4.25",
    description:
      "Double ristretto with silky microfoam. Strong, smooth, no foam hat.",
    image: espresso.mocha,
    imageAlt: "Mocha coffee",
  },
  {
    id: "affogato",
    type: "price",
    name: "Affogato",
    price: "$6.75",
    description: "Two scoops of vanilla gelato drowned in a fresh double shot.",
    image: espresso.affogato,
    imageAlt: "Affogato coffee",
  },
];

export const brewedCoffeeItems: MenuItemData[] = [
  {
    id: "house-drip",
    type: "price",
    name: "house drip",
    price: "$3.50",
    description: "Batch-brewed every twenty minutes. Free refills before 9 AM.",
    image: brewedCoffee.houseDrip,
    imageAlt: "House Drip coffee",
  },
  {
    id: "pour-over",
    type: "price",
    name: "Pour Over",
    price: "$6.00",
    description:
      "A single cup brewed to order from whichever single origin is on this week.",
    image: brewedCoffee.houseDrip,
    imageAlt: "Pour Over Coffee",
  },
  {
    id: "chemex",
    type: "price",
    name: "Chemex for two",
    price: "$12.00",
    description:
      "A full carafe, two cups, and a reason to sit down for a while.",
    image: brewedCoffee.chemex,
    imageAlt: "Chemex for two Coffee",
  },

  {
    id: "decaf-drip",
    type: "price",
    name: "Decaf Drip",
    price: "$3.50",
    description: "Water-process Colombian. Genuinely good, genuinely decaf.",
    image: brewedCoffee.chemex,
    imageAlt: "Decaf Drip Coffee",
  },
  {
    id: "americano",
    type: "price",
    name: "americano",
    price: "$4.20",
    description: "Espresso lengthened with hot water for a clean, long cup.",
    image: brewedCoffee.americano,
    imageAlt: "Americano Coffee",
  },
];

export const coldBrewAndIced: MenuItemData[] = [
  {
    id: "cold-brew",
    type: "price",
    name: "Cold Brew",
    price: "$5.20",
    description:
      "Steeped for eighteen hours — low acidity, deep chocolate finish.",
    image: coldBrewedIce.coldBrew,
    imageAlt: "Cold Brew coffee",
  },
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
    id: "iced-americano",
    type: "price",
    name: "Iced Americano",
    price: "$4.75",
    description: "Espresso, cold water, a full glass of ice. Nothing else.",
    image: coldBrewedIce.icedAmericano,
    imageAlt: "Iced Americano coffee",
  },
  {
    id: "iced-latte",
    type: "price",
    name: "Iced Latte",
    price: "$6.25",
    description: "Espresso over ice with cold milk poured through it.",
    image: coldBrewedIce.iceLatte,
    imageAlt: "Iced Latte coffee",
  },
  {
    id: "iced-mocha",
    type: "price",
    name: "Iced Mocha",
    price: "$6.75",
    description: "Cold chocolate milk, a double shot and whipped cream on top.",
    image: coldBrewedIce.icedMocha,
    imageAlt: "Iced Mocha coffee",
  },
  {
    id: "espresso-tonic",
    type: "price",
    name: "Espresso Tonic",
    price: "$4.75",
    description:
      "Tonic water, ice and a bright espresso shot with an orange twist.",
    image: coldBrewedIce.espressoTonic,
    imageAlt: "Espresso Tonic coffee",
  },

  {
    id: "vietnamese-iced-coffee",
    type: "price",
    name: "Vietnamese Iced Coffee",
    price: "$6.50",
    description: "Dark roast over sweetened condensed milk and a lot of ice.",
    image: coldBrewedIce.vietnameseIcedCoffee,
    imageAlt: "Vietnamese Iced Coffee coffee",
  },
];

export const signatureLattes: MenuItemData[] = [
  {
    id: "cold-brew",
    type: "price",
    name: "Cold Brew",
    price: "$5.20",
    description:
      "Steeped for eighteen hours — low acidity, deep chocolate finish.",
    image: coldBrewedIce.coldBrew,
    imageAlt: "Cold Brew coffee",
  },
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
    id: "iced-americano",
    type: "price",
    name: "Iced Americano",
    price: "$4.75",
    description: "Espresso, cold water, a full glass of ice. Nothing else.",
    image: coldBrewedIce.icedAmericano,
    imageAlt: "Iced Americano coffee",
  },
  {
    id: "iced-latte",
    type: "price",
    name: "Iced Latte",
    price: "$6.25",
    description: "Espresso over ice with cold milk poured through it.",
    image: coldBrewedIce.iceLatte,
    imageAlt: "Iced Latte coffee",
  },
  {
    id: "iced-mocha",
    type: "price",
    name: "Iced Mocha",
    price: "$6.75",
    description: "Cold chocolate milk, a double shot and whipped cream on top.",
    image: coldBrewedIce.icedMocha,
    imageAlt: "Iced Mocha coffee",
  },
  {
    id: "espresso-tonic",
    type: "price",
    name: "Espresso Tonic",
    price: "$4.75",
    description:
      "Tonic water, ice and a bright espresso shot with an orange twist.",
    image: coldBrewedIce.espressoTonic,
    imageAlt: "Espresso Tonic coffee",
  },

  {
    id: "vietnamese-iced-coffee",
    type: "price",
    name: "Vietnamese Iced Coffee",
    price: "$6.50",
    description: "Dark roast over sweetened condensed milk and a lot of ice.",
    image: coldBrewedIce.vietnameseIcedCoffee,
    imageAlt: "Vietnamese Iced Coffee coffee",
  },
];

export const teaItems: MenuItemData[] = [];
export const juiceItems: MenuItemData[] = [];

export const breakfastItems: MenuItemData[] = [];
export const sandwichItems: MenuItemData[] = [];
export const bowlItems: MenuItemData[] = [];

export const pastryItems: MenuItemData[] = [];
export const cakeItems: MenuItemData[] = [];
export const coffeeBeanItems: MenuItemData[] = [];

export const menuPageContent: MenuPageContent = {
  metadata: {
    title: "Menu",
    description:
      "Explore coffee, breakfast, and kitchen favorites at Ember & Oak in Midtown Manhattan.",
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
          "hidden tablet:flex desktop:w-12.75 tablet:w-10.25 w-10.75 desktop:h-17.25 tablet:h-14 h-10 desktop:bottom-35.5 tablet:bottom-35 bottom-19.75 desktop:left-23.75 tablet:left-15.25 left-11.25 blur-[2px] opacity-[0.8] rotate-[30deg]",
      },
      {
        src: homeHero.bean_image_3,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-9.5 tablet:w-10.25 desktop:h-8.75 tablet:h-7 desktop:bottom-17.75 tablet:bottom-16.5 desktop:left-58.25 tablet:left-38.75 blur-[2px] opacity-[0.6] rotate-[30deg]",
      },
      {
        src: homeHero.bean_image_6,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-20 tablet:w-16 w-12 desktop:h-19.5 tablet:h-15.5 h-11.75 desktop:top-13.25 tablet:top-14.25 top-15 desktop:right-41 tablet:right-26.5 right-13 rotate-[16deg]",
      },
      {
        src: homeHero.bean_image_2,
        alt: "Decorative coffee bean",
        className:
          "desktop:w-12 tablet:w-9.5 w-7.25 desktop:h-16.25 tablet:h-12.75 h-9.75 desktop:bottom-39 tablet:bottom-38.5 bottom-37.75 desktop:right-24 tablet:right-15.5 right-6 blur-[1px] opacity-[0.85] rotate-[-36deg]",
      },
      {
        src: homeHero.bean_image_4,
        alt: "Decorative coffee bean",
        className:
          "hidden tablet:flex desktop:w-8.75 tablet:w-7 desktop:h-8.25 tablet:h-6.5 desktop:bottom-19 tablet:bottom-18.75 desktop:right-61.25 tablet:right-41 blur-[3px] opacity-[0.55] rotate-[62deg]",
      },
    ],
  },

  navigation: {
    ariaLabel: "Jump to menu category",
    selectLabel: "Jump to a menu",
    placeholder: "Jump to a category",
  },

  address: {
    title: "Come find us",
    description:
      "Drop by Ember & Oak for your next coffee and something good from the kitchen.",
  },

  groups: [
    {
      id: "from-the-bar",
      title: "from the bar",
      description:
        "Espresso, brewed, iced, whisked and pressed — everything the bar makes to order.",
      categories: [
        {
          id: "espresso",
          title: "espresso",
          description:
            "Our house blend, roasted in Red Hook and pulled to order. The whole bar is built around these nine drinks.",
          items: espressoItems,
        },
        {
          id: "brewed-coffee",
          title: "Brewed coffee",
          description:
            "Batch brew for the rush, pour over when you have four minutes to spare.",
          items: brewedCoffeeItems,
        },
        {
          id: "cold-brew-iced",
          title: "Cold Brew & Iced",
          description:
            "Steeped eighteen hours, poured over a full glass of ice. Low acidity, deep chocolate finish.",
          items: coldBrewAndIced,
        },
        {
          id: "signature-lattes",
          title: "Signature Lattes",
          description:
            "Syrups made in our own kitchen — no pumps of anything we did not cook ourselves.",
          items: signatureLattes,
        },
        {
          id: "matcha",
          title: "Matcha",
          description:
            "Ceremonial-grade green tea whisked to order and served hot, iced or clouded with coconut.",
          items: signatureLattes,
        },
        {
          id: "tea",
          title: "tea",
          description:
            "Loose-leaf, steeped by the pot, and a chai we spice and simmer in house.",
          items: signatureLattes,
        },
        {
          id: "smoothies",
          title: "Smoothies",
          description:
            "Blended thick with whole fruit and real nut butter. Nothing from a syrup bottle.",
          items: signatureLattes,
        },
        {
          id: "Fresh Juice",
          title: "juices",
          description:
            "Cold-pressed each morning from produce bought at the Union Square greenmarket.",
          items: signatureLattes,
        },
      ],
    },

    {
      id: "from-the-kitchen",
      title: "from the kitchen",
      description:
        "Breakfast from open, then sandwiches and bowls built when you ask for them.",
      categories: [
        {
          id: "breakfast",
          title: "breakfast",
          description:
            "Served all day, because not everybody starts their morning at seven.",
          items: signatureLattes,
        },
        {
          id: "toasts",
          title: "Toasts",
          description:
            "Thick-cut sourdough from our bakery, griddled in butter and piled high.",
          items: signatureLattes,
        },
        {
          id: "bagels",
          title: "Bagels",
          description:
            "Boiled and baked in Greenpoint, delivered every morning at five. Still warm most days.",
          items: signatureLattes,
        },
        {
          id: "sandwiches",
          title: "Sandwiches",
          description:
            "Built to order and wrapped to travel — lunch that survives the walk back to the office.",
          items: signatureLattes,
        },
        {
          id: "bowls-&-Salads",
          title: "Bowls & Salads",
          description:
            "Grains, greens and good fats, assembled when you order rather than sitting in a case.",
          items: signatureLattes,
        },
      ],
    },

    {
      id: "bakery-and-take-home",
      title: "bakery & take-home",
      description:
        "Baked at five each morning, plus the beans to make it all again at home.",
      categories: [
        {
          id: "pastries",
          title: "pastries",
          description:
            "Laminated the night before, baked at five in the morning, gone by two most days.",
          items: coldBrewAndIced,
        },
        {
          id: "cookies-&-bars",
          title: "Cookies & Bars",
          description:
            "The three-o’clock category. Baked in house and best while still a little warm",
          items: espressoItems,
        },
        {
          id: "whole-bean",
          title: "Whole coffee Bean",
          description:
            "Twelve-ounce bags of the coffee we serve, roasted within the week. Ask us to grind it.",
          items: signatureLattes,
        },
      ],
    },
  ],
} satisfies MenuPageContent;

// Navigation includes categories from every group.
export const menuNav: MenuNavItem[] = menuPageContent.groups.flatMap(
  ({ categories }) =>
    categories.map(({ id, title }) => ({
      id,
      label: title,
    })),
);
