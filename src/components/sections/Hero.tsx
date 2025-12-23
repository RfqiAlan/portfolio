"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/skills";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left - Photo & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            {/* Photo */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-pink-500/20 border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link, index) => {
                const Icon = socialIcons[link.icon] || Github;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
                    title={link.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>

            {/* Email Button */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Schedule a call
            </motion.a>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {personalInfo.title}
            </p>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
