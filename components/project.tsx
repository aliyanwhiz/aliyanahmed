"use client"
import { useState, useMemo } from "react";
import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { CircleCheckBig, MoveRight, ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Project = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isNewestFirst, setIsNewestFirst] = useState(true);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    DATA.projectData.forEach(project => {
      project.tools.forEach(tool => skills.add(tool));
    });
    return Array.from(skills).sort();
  }, []);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  const filteredProjects = useMemo(() => {
    let projects = [...DATA.projectData];
    if (selectedSkills.length > 0) {
      projects = projects.filter(project =>
        selectedSkills.every(skill => project.tools.includes(skill))
      );
    }
    return projects.sort((a, b) => 
      isNewestFirst ? b.id - a.id : a.id - b.id
    );
  }, [selectedSkills, isNewestFirst]);

  return (
    <section className="pb-36 md:pb-0 text-foreground">
      <BlurFade delay={BLUR_DELAY * 2} className="mt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-5xl md:text-6xl font-bold md:mb-6 inline-flex items-center">
            Projects
            <div className="relative">
              <span className="absolute top-2 size-2 md:size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsNewestFirst(!isNewestFirst)}
            className="text-muted-foreground hover:text-emerald-500 gap-2 mb-6 w-fit"
          >
            <ArrowUpDown className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {isNewestFirst ? "Newest First" : "Oldest First"}
            </span>
          </Button>
        </div>
      </BlurFade>

      {/* FIXED FILTER UI: Swiper/Scroll behavior for mobile */}
      <BlurFade delay={BLUR_DELAY * 3}>
        <div className="relative mb-12 mt-4 group">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar mask-fade-right">
            {selectedSkills.length > 0 && (
              <button 
                onClick={() => setSelectedSkills([])}
                className="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all shrink-0"
              >
                Reset
              </button>
            )}
            
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={cn(
                  "whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium border transition-all shrink-0",
                  selectedSkills.includes(skill)
                    ? "bg-foreground text-background border-foreground shadow-md"
                    : "bg-secondary/50 text-muted-foreground border-border hover:border-foreground/50"
                )}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Rest of the Projects List remains the same */}
      <div className="flex flex-col gap-4 pb-20 md:pb-0 font-sans min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            style={{ top: `calc(40px + ${index * 35}px)` }}
            className={cn(
              "relative md:sticky overflow-hidden rounded-2xl border border-border shadow-2xl transition-all",
              "bg-card opacity-100 py-6 md:py-10"
            )}
          >
            {/* Card Content Logic as previously defined */}
            <div className="px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="font-bold uppercase text-[10px] tracking-[0.2em] text-muted-foreground/60">
                      {project.name}
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-4 items-center">
                    {(project.link || project.code) ? (
                      <div className="flex gap-2">
                        {project.link && (
                          <Button size="sm" className="group h-9 bg-foreground text-background hover:bg-foreground/90 rounded-full px-5" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <span className="flex gap-2 items-center text-xs font-bold">Demo <MoveRight className="h-3 w-3 -rotate-45 group-hover:rotate-0 transition-transform"/></span>
                            </a>
                          </Button>
                        )}
                        {project.code && (
                          <Button size="sm" variant="outline" className="h-9 rounded-full px-5 border-border hover:bg-secondary" asChild>
                            <a href={project.code} target="_blank" rel="noopener noreferrer">
                              <span className="text-xs font-bold">Source</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    ) : (
                      <span className="text-[10px] md:text-[11px] text-muted-foreground/40 italic font-medium tracking-tight bg-secondary/20 px-3 py-1.5 rounded-lg border border-border/20">
                        Admin Access Only
                      </span>
                    )}
                  </div>
                </div>

                <hr className="border-t border-border/50 mt-4 mb-6"/>

                <div className={cn(
                  "grid gap-8",
                  project.image ? "lg:grid-cols-2" : "grid-cols-1"
                )}>
                  <div className="flex flex-col justify-between h-full gap-6">
                    <ul className="flex flex-col gap-3">
                      {project.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex gap-3 items-start text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
                          <CircleCheckBig className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, tIndex) => (
                        <span key={tIndex} className="bg-emerald-500/5 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/10 uppercase">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.image && (
                    <div className="relative h-48 md:h-64 lg:min-h-[250px] w-full overflow-hidden rounded-xl border border-border">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;