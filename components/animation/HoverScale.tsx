"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { galleryHoverTransition } from "@/animations/transitions";
import { galleryImageVariants } from "@/animations/variants";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

type HoverScaleProps = {
  children: ReactNode;
  className: string;
};

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
