"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
