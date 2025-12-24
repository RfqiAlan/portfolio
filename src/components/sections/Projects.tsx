"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollFadeItem } from "@/components/shared/ScrollFadeItem";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollFadeItem>
          <SectionHeading title="Featured Projects" />
        </ScrollFadeItem>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ScrollFadeItem
              key={project.id}
              className="group grid md:grid-cols-2 gap-6 p-4 -mx-4 rounded-2xl hover:bg-secondary/30 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-pink-500/10 border border-border group-hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-50">🖼️</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-primary text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-secondary border border-border"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </ScrollFadeItem>
          ))}
        </div>
      </div>
    </section>
  );
}
