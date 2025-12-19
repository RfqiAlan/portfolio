"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnable?: boolean;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
}

export function TiltCard({
  children,
  className,
  glareEnable = true,
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
}: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={1000}
      glareEnable={glareEnable}
      glareMaxOpacity={0.3}
      glareColor="#8b5cf6"
      glarePosition="all"
      glareBorderRadius="1rem"
      scale={1.02}
      transitionSpeed={400}
    >
      <motion.div
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)" }}
        className={cn(
          "p-6 rounded-2xl bg-card border border-border transition-all duration-300",
          className
        )}
      >
        {children}
      </motion.div>
    </Tilt>
  );
}
