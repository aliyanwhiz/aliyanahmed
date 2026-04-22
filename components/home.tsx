"use client";

import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

function Home() {
  const { heroMedia, name, description, skill, resume, email } = DATA.personalData;

  return (
    // Changed gap-10 to gap-6 and py-10 to py-0 for desktop
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-0 max-w-7xl mx-auto">
      
      {/* MEDIA AREA */}
      <div className="flex-1 lg:flex-shrink-0 order-1 lg:order-2 flex items-center justify-center w-full mt-[-40px] md:mt-[-20px] lg:mt-0">
        <BlurFade delay={BLUR_DELAY * 2} className="w-full h-full">
          <div className="relative w-full h-full flex items-center justify-center drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]">
            {/* ENLARGED DIMENSIONS:
                Mobile: 240x350 -> 320x450
                Tablet: 450x600 -> 550x750
                Desktop: 550x750 -> 650x850
            */}
            <div className="relative w-[320px] h-[450px] md:w-[550px] md:h-[750px] lg:w-[650px] lg:h-[850px]">
              <Image
                src={heroMedia}
                alt={name}
                fill
                priority
                className="object-contain select-none pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </BlurFade>
      </div>

      {/* TEXT CONTENT AREA */}
      <div className="flex-1 order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center px-4">
        <BlurFade delay={BLUR_DELAY}>
          {/* CHANGE: text-white -> text-foreground */}
          <h1 className="text-3xl md:text-7xl font-bold mb-2 lg:mb-4 text-foreground tracking-tighter leading-tight">
            Hi, I&apos;m <span className="text-emerald-500">{name}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_DELAY * 2}>
          {/* The text-muted-foreground will now correctly use the CSS variable */}
          <p className="text-sm md:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
            {description}
          </p>
        </BlurFade>

        <div className="mb-8 lg:mb-10">
          <BlurFade delay={BLUR_DELAY * 3}>
            {/* CHANGE: text-white -> text-foreground */}
            <h2 className="font-semibold mb-3 lg:mb-4 text-foreground uppercase tracking-[0.3em] text-[10px] lg:text-xs opacity-50">
              Skills
            </h2>
          </BlurFade>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-lg mx-auto lg:mx-0">
            {skill.map((s, id) => (
              <BlurFade key={s} delay={BLUR_DELAY * 4 + id * 0.05}>
                {/* CHANGE: Removed bg-white/10 and text-white. 
                    Used border-border, bg-secondary, and text-secondary-foreground */}
                <Badge className="px-3 lg:px-4 py-1 lg:py-1.5 text-[10px] lg:text-xs rounded-full border border-border bg-secondary text-secondary-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                  {s}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={BLUR_DELAY * 8}>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button className="group rounded-full px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg font-semibold" asChild>
              <a href={resume} download>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              className="group text-foreground rounded-full px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg font-semibold border border-border hover:bg-secondary"
              asChild
            >
              <a href={`mailto:${email}`}>
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Contact Me
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default Home;