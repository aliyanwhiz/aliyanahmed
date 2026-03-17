"use client"
import { useState } from "react";
import { DATA } from "@/resume-data/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Academics() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-[calc(100vh-6rem)] text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center md:text-start">
          <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
            Academics
            <div className="relative">
              <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
        </div>

        <div className="space-y-6 pb-20">
          {DATA.academics.map((education, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div 
                layout
                key={`${education.school}-${index}`} 
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
                      {education.logo ? (
                        <Image 
                          src={education.logo} 
                          alt={education.school}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <GraduationCap className="size-6 text-emerald-500" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                          {education.school}
                        </h3>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                          <ChevronDown className="size-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                      <h4 className="text-md md:text-lg font-semibold text-emerald-500 dark:text-emerald-400">
                        {education.degree}
                      </h4>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-medium text-sm md:text-base bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                    {education.startDate} — {education.endDate}
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
                        <div className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                          {education.location}
                        </div>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Key Highlights</h5>
                        <ul className="space-y-3 mb-6">
                          {education.description?.map((point, pIndex) => (
                            <li key={pIndex} className="text-sm md:text-base text-muted-foreground flex gap-2">
                              <span className="text-emerald-500">▹</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {education.subjects.map((s) => (
                            <span key={s} className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase">{s}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Academics; // Added the missing export