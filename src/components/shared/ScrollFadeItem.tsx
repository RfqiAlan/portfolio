"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollFadeItemProps {
  children: ReactNode;
  className?: string;
}

export function ScrollFadeItem({ children, className = "" }: ScrollFadeItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-2, 0, 0, 3]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );

  return (
    <motion.div
      ref={itemRef}
      style={{ scale, opacity, y, rotate, filter }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
