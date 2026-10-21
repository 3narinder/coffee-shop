"use client";

import { motion } from "framer-motion";
import { galleryHoverTransition } from "@/animations/transitions";
import { galleryImageVariants } from "@/animations/variants";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

import type { HoverScaleProps } from "@/constants/types";

export default function HoverScale({ children, className }: HoverScaleProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={galleryImageVariants}
      initial="rest"
      whileHover={reduceMotion ? undefined : "hover"}
      transition={galleryHoverTransition}
    >
      {children}
    </motion.div>
  );
}
