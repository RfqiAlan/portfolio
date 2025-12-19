"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="inline-block opacity-0">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      animate(textRef.current.querySelectorAll("span"), {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "outExpo",
        duration: 800,
        delay: (el, i) => delay + i * 50,
      });
    }
  }, [text, delay]);

  return <span ref={textRef} className={className} />;
}
