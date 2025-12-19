"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

export function ProgressBar({ label, percentage, delay = 0 }: ProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(barRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && barRef.current && numberRef.current) {
      gsap.to(barRef.current, {
        width: `${percentage}%`,
        duration: 1.5,
        delay: delay,
        ease: "power3.out",
      });

      gsap.to(numberRef.current, {
        innerText: percentage,
        duration: 1.5,
        delay: delay,
        ease: "power3.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          if (numberRef.current) {
            numberRef.current.innerText = Math.round(
              parseFloat(numberRef.current.innerText || "0")
            ).toString();
          }
        },
      });
    }
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.5 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">
          <span ref={numberRef}>0</span>%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-full w-0"
        />
      </div>
    </motion.div>
  );
}
