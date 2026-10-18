"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { floatingBeanVariants } from "@/animations/variants";
import { floatingBeanTransition } from "@/animations/transitions";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

type HeroBeanProps = {
  src: string;
  alt: string;
  className: string;
  delay?: number;
};

const HeroBean = ({ src, alt, className, delay = 0 }: HeroBeanProps) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      className={`home-hero__bean absolute pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full"
        variants={floatingBeanVariants}
        animate={reduceMotion ? { y: 0 } : "float"}
        transition={
          reduceMotion ? { duration: 0 } : floatingBeanTransition(delay)
        }
      >
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="block w-full h-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default HeroBean;
