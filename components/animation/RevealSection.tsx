"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { sectionRevealVariants } from "@/animations/variants";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

type RevealSectionProps = HTMLMotionProps<"section">;

export default function RevealSection({
  children,
  ...props
}: RevealSectionProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.section
      {...props}
      variants={sectionRevealVariants}
      initial="hidden"
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      transition={reduceMotion ? { duration: 0 } : undefined}
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.section>
  );
}
