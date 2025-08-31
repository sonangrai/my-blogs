"use client";
// ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

type TTheme = "light" | "dark";

type ContextReturn = {
  theme: TTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextReturn>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = (): ContextReturn => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("light");

  useEffect(() => {
    const localStorageTheme =
      (localStorage.getItem("theme") as TTheme) || "light";

    setTheme(localStorageTheme);
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
