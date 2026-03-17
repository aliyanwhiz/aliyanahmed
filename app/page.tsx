"use client"
import { X, AlignJustify } from "lucide-react";
import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import Experience from "@/components/experience";
import Project from "@/components/project";
import Home from "@/components/home";
import AboutUS from "@/components/about";
import Academics from "@/components/academics"
import { ThemeToggle } from "@/components/theme-toggle";

const StackedMenu: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(4); 

  const pages = useMemo(() => [
    { id: 'page1', title: 'ABOUT', component: AboutUS },
    { id: 'page2', title: 'ACADEMICS', component: Academics },
    { id: 'page3', title: 'EXPERIENCE', component: Experience },
    { id: 'page4', title: 'PROJECTS', component: Project },
    { id: 'page5', title: 'HOME', component: Home },
  ], []); // Empty array means this only initializes once

  const handlePageSelect = (index: number) => {
    if (isChecked) {
      setActiveIndex(index);
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (isChecked) {
      document.title = "Menu | Aliyan A.";
    } else {
      const currentPageTitle = pages[activeIndex].title;
      
      const formattedTitle = currentPageTitle === 'HOME' 
        ? "Aliyan A. | Software Developer" 
        : `${currentPageTitle.charAt(0).toUpperCase() + currentPageTitle.slice(1).toLowerCase()} | Aliyan A.`;
      
      document.title = formattedTitle;
    }
  }, [activeIndex, isChecked, pages]);

  return (
    <div className="relative h-screen w-full bg-background overflow-hidden font-sans antialiased">
      
      {/* 1. LAYER: CONTROLS */}
      <div className="fixed top-8 left-8 z-[110] flex items-center gap-4">
        <button 
          onClick={() => setIsChecked(!isChecked)}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-2xl transition-transform active:scale-95"
        >
          {isChecked ? <X className="size-6" /> : <AlignJustify className="size-6" />}
        </button>
        <ThemeToggle />
      </div>

      <div className="relative h-full w-full">
        {pages.map((page, index) => {
          const isSelected = index === activeIndex;
          const isPastSelected = index > activeIndex;
          const isHomePage = page.title === 'HOME';

          const shouldRenderContent = (!isChecked && isSelected) || (isChecked && isHomePage);

          return (
            <div 
              key={page.id}
              onClick={() => handlePageSelect(index)}
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: index,
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isChecked 
                  ? `translateX(${index * 80}px) scale(0.95)` 
                  : isPastSelected ? 'translateX(100%)' : 'translateX(0%) scale(1)',
                willChange: 'transform',
              }}
            >
              <div className={cn(
                "h-full w-full bg-background relative transition-all duration-300 shadow-2xl",
                isChecked ? "rounded-[40px] border border-border" : "rounded-none border-none"
              )}>
                
                {/* VERTICAL TAB TITLE */}
                <div className={cn(
                    "absolute left-8 top-32 transition-opacity duration-300",
                    isChecked ? "opacity-100" : "opacity-0"
                )}>
                    <span 
                      style={{ writingMode: 'vertical-rl' }} 
                      className="text-xl font-black tracking-[0.4em] text-foreground uppercase rotate-180 select-none"
                    >
                      {page.title}
                    </span>
                </div>

                {/* CONTENT AREA */}
                <div className={cn(
                    "h-full w-full transition-all duration-500",
                    isChecked ? "opacity-30 blur-md pointer-events-none" : "opacity-100 blur-0"
                )}>
                  <div className="h-full overflow-y-auto p-6 md:p-10 pt-28">
                    <div className="max-w-4xl mx-auto">
                        {shouldRenderContent ? (
                          <page.component />
                        ) : (
                          <div className="w-full h-screen" />
                        )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedMenu;