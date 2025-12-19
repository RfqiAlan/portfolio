"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { animate } from "animejs";
import { TypewriterText } from "@/components/shared/TypewriterText";
import { ParticlesBackground } from "@/components/shared/ParticlesBackground";
import { personalInfo } from "@/data/skills";

const Scene = dynamic(() => import("@/components/three/Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll(".letter");
      animate(letters, {
        opacity: [0, 1],
        translateY: [50, 0],
        rotateX: [90, 0],
        easing: "outExpo",
        duration: 1200,
        delay: (el, i) => 100 + i * 60,
      });
    }
  }, []);

  const roles = [
    personalInfo.title,
    "UI/UX Enthusiast",
    "Problem Solver",
    "Creative Developer",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />
      <Scene />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi there, I&apos;m
          </motion.p>

          {/* Name with anime.js animation */}
          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            {personalInfo.name.split("").map((char, i) => (
              <span
                key={i}
                className="letter inline-block opacity-0 gradient-text"
                style={{ transformStyle: "preserve-3d" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Typewriter role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <TypewriterText
              texts={roles}
              className="text-2xl md:text-4xl font-semibold text-primary"
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow"
            >
              <Send className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
