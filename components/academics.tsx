"use client"
import { useState, useMemo } from "react";
import { DATA } from "@/resume-data/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Award, BadgeCheck, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Academics() {
  const availableTabs = useMemo(() => {
    const tabs = [];
    if (DATA.educations?.length) tabs.push({ id: "Education", icon: GraduationCap });
    if (DATA.certificates?.length) tabs.push({ id: "Certificates", icon: BadgeCheck });
    if (DATA.achievements?.length) tabs.push({ id: "Awards", icon: Award });
    return tabs;
  }, []);

  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || "Education");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Helper to handle navigation
  const handleLink = (url: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Education":
        return DATA.educations.map((edu, idx) => (
          <AcademicCard 
            key={idx} 
            item={edu} 
            isOpen={expandedIndex === idx} 
            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)} 
          />
        ));

      case "Certificates":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.certificates.map((cert, idx) => {
              const hasLink = cert.link !== "";
              return (
                <div 
                  key={idx} 
                  onClick={() => hasLink && handleLink(cert.link)}
                  className={cn(
                    "p-6 border border-border bg-card rounded-2xl flex items-center gap-4 transition-all",
                    hasLink ? "cursor-pointer hover:border-emerald-500/50 hover:shadow-md" : "cursor-default"
                  )}
                >
                  <div className="bg-emerald-500/10 p-3 rounded-xl">
                    <BadgeCheck className="text-emerald-500 size-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{cert.title}</h3>
                        {hasLink && <ExternalLink className="size-3 text-muted-foreground" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );

      case "Awards":
        return DATA.achievements.map((award, idx) => {
          const hasLink = award.link !== "";
          return (
            <div 
              key={idx} 
              onClick={() => hasLink && handleLink(award.link)}
              className={cn(
                "p-6 border border-border bg-card rounded-3xl mb-4 transition-all",
                hasLink ? "cursor-pointer hover:border-emerald-500/50 hover:shadow-md" : "cursor-default"
              )}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-500/10 p-2 rounded-xl">
                    <Award className="text-emerald-500 size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{award.title}</h3>
                    <p className="text-emerald-500 text-sm font-semibold">{award.issuer}</p>
                  </div>
                </div>
                {hasLink && <ExternalLink className="size-4 text-muted-foreground" />}
              </div>
              <p className="text-muted-foreground mt-3 text-sm md:text-base">{award.description}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                {award.date}
              </div>
            </div>
          );
        });
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] text-foreground px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        {/* DYNAMIC HEADING - SNAPPY JENGA ROLL */}
        <div className="h-12 md:h-20 flex items-center overflow-visible [perspective:1000px]">
          <AnimatePresence mode="popLayout"> 
            <motion.h2
              key={activeTab}
              initial={{ rotateX: -90, opacity: 0, y: 15 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              exit={{ rotateX: 90, opacity: 0, y: -15 }}
              transition={{ 
                type: "spring", 
                stiffness: 250, // Higher stiffness for faster snap
                damping: 20,    // Controlled bounce
                duration: 0.3   // Hard limit on time
              }}
              className="text-3xl md:text-6xl font-bold inline-flex items-center origin-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {activeTab}
              <div className="relative">
                <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full ml-2" />
              </div>
            </motion.h2>
          </AnimatePresence>
        </div>

          {/* TAB SWITCHER */}
          <div className="flex bg-secondary/50 p-1 rounded-2xl border border-border backdrop-blur-sm">
            {availableTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                    setActiveTab(tab.id);
                    setExpandedIndex(null);
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  activeTab === tab.id ? "bg-card text-emerald-500 shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon className="size-4" />
                <span className="hidden sm:inline">{tab.id}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6 pb-20"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}

// Standard AcademicCard helper (remains the same)
function AcademicCard({ item, isOpen, onClick }: any) {
    return (
      <motion.div 
        layout
        onClick={onClick}
        className={cn(
          "group relative space-y-4 border border-border bg-card p-6 md:p-8 rounded-3xl transition-all cursor-pointer",
          isOpen ? "border-emerald-400 shadow-lg" : "hover:border-emerald-400/50"
        )}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="relative size-12 md:size-14 shrink-0 overflow-hidden rounded-xl bg-white flex items-center justify-center border border-border">
              {item.logo ? (
                <Image src={item.logo} alt={item.school} fill className="object-contain p-2" />
              ) : (
                <GraduationCap className="size-6 text-emerald-500" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{item.school}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                  <ChevronDown className="size-5 text-muted-foreground" />
                </motion.div>
              </div>
              <h4 className="text-md md:text-lg font-semibold text-emerald-500 dark:text-emerald-400">{item.degree}</h4>
            </div>
          </div>
          <div className="text-muted-foreground font-medium text-sm md:text-base bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
            {item.startDate} — {item.endDate}
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
                <div className="text-muted-foreground text-sm mb-4">{item.location}</div>
                <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Key Highlights</h5>
                <ul className="space-y-3 mb-6">
                  {item.description?.map((point: string, pIndex: number) => (
                    <li key={pIndex} className="text-sm md:text-base text-muted-foreground flex gap-2">
                      <span className="text-emerald-500">▹</span> {point}
                    </li>
                  ))}
                </ul>
                <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {item.subjects.map((s: string) => (
                    <span key={s} className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
}

export default Academics;