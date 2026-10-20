import type { Transition } from "framer-motion";

export const sectionRevealTransition: Transition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1],
};

export const shutterTransition: Transition = {
  duration: 2,
  delay: 0.4,
  ease: [0.76, 0, 0.24, 1],
};

export const shutterFadeTransition: Transition = {
  duration: 2,
  delay: 0.6,
  times: [0, 0.8, 1],
  ease: "linear",
};

export const floatingBeanTransition = (delay = 0): Transition => ({
  duration: 6,
  delay,
  ease: "easeInOut",
  repeat: Infinity,
});

export const galleryHoverTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};
