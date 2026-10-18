import type { Variants } from "framer-motion";
import {
  sectionRevealTransition,
  shutterFadeTransition,
  shutterTransition,
} from "@/animations/transitions";

export const shutterTopVariants: Variants = {
  closed: { y: "0%", opacity: 1 },
  open: {
    y: "-100%",
    opacity: [1, 1, 0],
    transition: {
      ...shutterTransition,
      opacity: shutterFadeTransition,
    },
  },
};

export const shutterBottomVariants: Variants = {
  closed: { y: "0%", opacity: 1 },
  open: {
    y: "100%",
    opacity: [1, 1, 0],
    transition: {
      ...shutterTransition,
      opacity: shutterFadeTransition,
    },
  },
};

export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionRevealTransition,
  },
};

export const galleryImageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
};

export const floatingBeanVariants: Variants = {
  float: { y: [0, -8, 0] },
};
