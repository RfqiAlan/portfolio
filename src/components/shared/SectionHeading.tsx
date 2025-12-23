"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`mb-8 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
