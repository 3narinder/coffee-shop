"use client";

import { motion } from "framer-motion";
import {
  sectionRevealDuration,
  sectionRevealTransition,
} from "@/animations/transitions";
import { sectionRevealVariants } from "@/animations/variants";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";
import { useRouteRevealDelay } from "@/components/animation/RouteRevealDelayProvider";
import type { RevealSectionProps } from "@/constants/types";

export default function RevealSection({
  children,
  ...props
}: RevealSectionProps) {
  const reduceMotion = usePrefersReducedMotion();
  const { shouldDelayReveal } = useRouteRevealDelay();

  return (
    <motion.section
      {...props}
      variants={sectionRevealVariants}
      initial="hidden"
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              ...sectionRevealTransition,
              delay: shouldDelayReveal ? sectionRevealDuration : 0,
            }
      }
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.section>
  );
}
