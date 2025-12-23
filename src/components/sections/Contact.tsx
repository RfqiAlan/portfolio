"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "@/data/skills";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to bring your ideas to life? I&apos;m always excited to collaborate on 
            innovative projects and help transform your vision into reality.
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            {personalInfo.email}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
