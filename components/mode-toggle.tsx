"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme  } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="rotate-0 scale-100 transition-all hover:text-yellow-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all hover:text-yellow-500 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
