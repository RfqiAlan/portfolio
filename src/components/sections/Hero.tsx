"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/skills";
import { ScrollFadeItem } from "@/components/shared/ScrollFadeItem";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

function TypewriterText({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && started && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left - Photo & Info */}
          <ScrollFadeItem className="flex flex-col items-center md:items-start gap-5">
            {/* Photo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-pink-500 to-purple-500 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20">
                <Image
                  src="/images/profil.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
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
          </ScrollFadeItem>

          {/* Right - Content */}
          <ScrollFadeItem className="flex-1 text-center md:text-left">
            {/* Name - Animated floating */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Title - Typewriter effect */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 min-h-[1.75rem]">
              <TypewriterText text={personalInfo.title} delay={500} speed={80} />
            </p>

            {/* Bio - Typewriter effect */}
            <p className="text-muted-foreground leading-relaxed min-h-[4rem]">
              <TypewriterText text={personalInfo.bio} delay={1500} speed={30} />
            </p>
          </ScrollFadeItem>
        </div>
      </div>
    </section>
  );
}
