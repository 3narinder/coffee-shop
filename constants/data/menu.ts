import { brewedCoffee, espresso, homeHero } from "../images";
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
    ariaLabel: "Jump to menu category",
    selectLabel: "Jump to a menu",
    placeholder: "Jump to a category",
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
          id: "tea",
          title: "tea",
          description: "Comforting brews and refreshing blends.",
          items: teaItems,
        },
        {
          id: "juices",
          title: "juices",
          description: "Fresh and refreshing favourites.",
          items: juiceItems,
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
          items: breakfastItems,
        },
        {
          id: "sandwiches",
          title: "sandwiches",
          items: sandwichItems,
        },
        {
          id: "bowls",
          title: "bowls",
          items: bowlItems,
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
          items: pastryItems,
        },
        {
          id: "cakes",
          title: "cakes",
          items: cakeItems,
        },
        {
          id: "coffee-beans",
          title: "coffee beans",
          items: coffeeBeanItems,
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
