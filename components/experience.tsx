"use client"
import { useState } from "react";
import { DATA } from "@/resume-data/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-[calc(100vh-6rem)] text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-start">
          <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
            Experience
            <div className="relative">
              <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
        </div>

        <div className="space-y-6 pb-20">
          {DATA.experiences.map((experience, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div 
                layout
                key={`${experience.company}-${index}`} 
                onClick={() => setExpandedIndex(isOpen ? null : index)}
                className={cn(
                  "group relative space-y-4 border border-border bg-card p-6 md:p-8 rounded-3xl transition-all cursor-pointer",
                  isOpen ? "border-emerald-400 shadow-lg" : "hover:border-emerald-400/50"
                )}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-4">
                    {/* LOGO LOGIC */}
                    <div className="relative size-12 md:size-14 shrink-0 overflow-hidden rounded-xl bg-white flex items-center justify-center border border-border">
                      {experience.logo ? (
                        <Image 
                          src={experience.logo} 
                          alt={experience.company}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <Briefcase className="size-6 text-emerald-500" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                          {experience.company}
                        </h3>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                          <ChevronDown className="size-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                      <h4 className="text-md md:text-lg font-semibold text-emerald-500 dark:text-emerald-400">
                        {experience.role}
                      </h4>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-medium text-sm md:text-base bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                    {experience.startDate} — {experience.endDate}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-2">
                        <div className="text-muted-foreground text-sm mb-4">
                          {experience.location}
                        </div>
                        <ul className="space-y-3">
                          {experience.description?.map((point, pIndex) => (
                            <li key={pIndex} className="text-sm md:text-base text-muted-foreground flex gap-2">
                              <span className="text-emerald-500">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-2 pt-4">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground border border-border rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience;