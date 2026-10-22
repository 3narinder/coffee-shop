"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

import {
  shutterBottomVariants,
  shutterTopVariants,
} from "@/animations/variants";
import { businessInfo } from "@/constants/data/reusable";

export default function IntroShutter() {
  const [isComplete, setIsComplete] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  if (isComplete || reduceMotion) return null;

  return (
    <div className="intro-shutter" aria-hidden="true">
      <motion.div
        className="intro-shutter__panel intro-shutter__panel--top"
        variants={shutterTopVariants}
        initial="closed"
        animate="open"
        onAnimationComplete={() => setIsComplete(true)}
      >
        <div className="intro-shutter__brand">
          <span className="intro-shutter__name">{businessInfo.name}</span>
          <span className="intro-shutter__tagline">
            <span />
            {businessInfo.brandDescriptor}
            <span />
          </span>
        </div>
      </motion.div>
      <motion.div
        className="intro-shutter__panel intro-shutter__panel--bottom"
        variants={shutterBottomVariants}
        initial="closed"
        animate="open"
      />
    </div>
  );
}
