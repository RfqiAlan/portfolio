"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { personalInfo } from "@/data/skills";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful and intuitive user experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Here's a little about my background and what I do"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Photo and bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Photo */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full rounded-2xl overflow-hidden gradient-border"
              >
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
            </div>

            {/* Bio */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  📍 {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  ✉️ {personalInfo.email}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="h-full text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
