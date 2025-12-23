"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/skills";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "revealing" | "exit">("counting");
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Smooth counter animation
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(Math.floor(newProgress));

      if (newProgress < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Start reveal phase
        setTimeout(() => setPhase("revealing"), 300);
        // Exit after reveal
        setTimeout(() => setPhase("exit"), 1800);
        setTimeout(() => setIsLoading(false), 2500);
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  const firstName = personalInfo.name.split(" ")[0];
  const lastName = personalInfo.name.split(" ")[1] || "";

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background overflow-hidden"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(129, 140, 248, 0.3) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(129, 140, 248, 0.3) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Animated corner lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-8 left-8 w-20 h-px bg-gradient-to-r from-primary to-transparent origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-8 left-8 w-px h-20 bg-gradient-to-b from-primary to-transparent origin-top"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-8 right-8 w-20 h-px bg-gradient-to-l from-primary to-transparent origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute bottom-8 right-8 w-px h-20 bg-gradient-to-t from-primary to-transparent origin-bottom"
          />

          {/* Main content */}
          <div className="relative h-full flex flex-col items-center justify-center">
            
            {/* Counter Phase */}
            <AnimatePresence mode="wait">
              {phase === "counting" && (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Large counter */}
                  <motion.span
                    ref={counterRef}
                    className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter"
                    style={{
                      background: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {progress.toString().padStart(3, "0")}
                  </motion.span>
                  
                  {/* Progress bar */}
                  <div className="mt-8 w-64 mx-auto">
                    <div className="h-[2px] bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Loading text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-sm text-muted-foreground tracking-[0.3em] uppercase"
                  >
                    Loading
                  </motion.p>
                </motion.div>
              )}

              {/* Reveal Phase - Name Animation */}
              {(phase === "revealing" || phase === "exit") && (
                <motion.div
                  key="reveal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center overflow-hidden"
                >
                  {/* First name */}
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="text-5xl md:text-8xl font-bold tracking-tight"
                    >
                      {firstName.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          className="inline-block"
                          style={{
                            background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h1>
                  </div>

                  {/* Last name */}
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                      className="text-5xl md:text-8xl font-bold tracking-tight text-foreground"
                    >
                      {lastName.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + i * 0.05,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h1>
                  </div>

                  {/* Role */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6"
                  >
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
                      {personalInfo.title}
                    </span>
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground tracking-wider"
            >
              PORTFOLIO 2024
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground tracking-wider"
            >
              SCROLL TO EXPLORE
            </motion.span>
          </div>

          {/* Exit curtain effect */}
          {phase === "exit" && (
            <>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-background origin-bottom z-10"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
