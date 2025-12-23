"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(
        computedStyle.cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate(-100px, -100px)" }}
    >
      {/* Inner dot */}
      <div
        className={`absolute rounded-full bg-primary transition-all duration-200 ease-out ${
          isPointer ? "w-6 h-6 -ml-3 -mt-3" : "w-2 h-2 -ml-1 -mt-1"
        }`}
      />
      {/* Outer ring */}
      <div
        className={`absolute border-2 border-primary/50 rounded-full transition-all duration-300 ease-out ${
          isPointer
            ? "w-12 h-12 -ml-6 -mt-6 scale-100"
            : "w-8 h-8 -ml-4 -mt-4 scale-100"
        }`}
      />
    </div>
  );
}
