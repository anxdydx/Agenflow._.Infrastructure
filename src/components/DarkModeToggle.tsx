"use client";

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Use null to indicate loading state

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Determine the initial theme based on stored preference or system preference
    const initialTheme =
      storedTheme === "dark"
        ? true
        : storedTheme === "light"
        ? false
        : prefersDark;
    setIsDark(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);
  }, []);

  if (isDark === null) return null; // Prevent rendering until the theme is determined

  return (
    <Switch
      checked={isDark}
      onChange={() => {
        toggleTheme();
      }}
      size="sm"
      suppressHydrationWarning
      color="secondary"
    />
  );
};

export default ThemeToggle;
