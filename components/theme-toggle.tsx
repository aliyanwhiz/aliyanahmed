"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Adjust path if needed

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />; 

  const themes = [
    { name: "system", icon: <Monitor className="h-4 w-4" /> },
    { name: "light", icon: <Sun className="h-4 w-4" /> },
    { name: "dark", icon: <Moon className="h-4 w-4" /> },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  return (
    <Button variant="outline" size="icon" onClick={cycleTheme} className="rounded-full">
      {themes.find((t) => t.name === theme)?.icon || <Monitor className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}