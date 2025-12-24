"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostman,
  SiCloudflare,
  SiRedux,
} from "react-icons/si";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollFadeItem } from "@/components/shared/ScrollFadeItem";

const techStack = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SCSS", icon: SiSass },
  { name: "Framer", icon: SiFramer },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudflare", icon: SiCloudflare },
];

export function TechArsenal() {
  return (
    <section id="tech" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollFadeItem>
          <SectionHeading title="Tech Arsenal" />
        </ScrollFadeItem>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <ScrollFadeItem key={tech.name}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all text-sm"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{tech.name}</span>
                </motion.div>
              </ScrollFadeItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
