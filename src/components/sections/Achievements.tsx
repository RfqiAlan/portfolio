"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { achievements } from "@/data/skills";

interface Achievement {
  title: string;
  description: string;
  fullDescription: string;
  issuer: string;
  date: string;
  image: string;
  color: string;
}

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title="Achievements & Badges" />

        {/* Achievement Grid - 2 columns, big cards for certificate images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedAchievement(achievement)}
              className="group cursor-pointer"
            >
              {/* Certificate Image Card */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all bg-gradient-to-br from-secondary/30 to-secondary/10">
                {/* Placeholder - tampil jika gambar belum ada */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl mb-3">📜</span>
                  <p className="text-sm text-muted-foreground text-center px-4">{achievement.title}</p>
                </div>

                {/* Certificate Image - taruh foto di public/certs/ */}
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover relative z-10"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                
                {/* Title overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 z-20">
                  <p className="font-medium text-sm">{achievement.title}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                  <span className="px-4 py-2 bg-background/90 rounded-lg text-sm font-medium">
                    Click to view
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup Modal - Full size certificate view */}
        <AnimatePresence>
          {selectedAchievement && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAchievement(null)}
                className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl z-50"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Large Certificate Image */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-secondary/30 to-secondary/10">
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-7xl mb-4">📜</span>
                      <p className="text-muted-foreground">Certificate Preview</p>
                    </div>
                    <Image
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      fill
                      className="object-contain relative z-10"
                      sizes="(max-width: 768px) 95vw, 768px"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{selectedAchievement.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {selectedAchievement.fullDescription}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <span>Issued by: {selectedAchievement.issuer}</span>
                      <span>{selectedAchievement.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
