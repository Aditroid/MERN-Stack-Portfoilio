import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark" || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    return isDark;
  });

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  
  const menuOpen = document.querySelector('.menu-open');
  const shouldHide = menuOpen?.classList.contains('menu-open');

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden",
        "max-sm:bottom-5 max-sm:left-5 max-sm:top-auto",
        "min-sm:top-5 min-sm:right-5 min-sm:bottom-auto",
        shouldHide ? 'hidden' : 'visible'
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};