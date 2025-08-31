"use client";
import { useState, useEffect, useCallback } from "react";

function Tools() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
    const currentTheme = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", currentTheme == "dark" ? "light" : "dark");
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  return (
    <div className="flex gap-2">
      <div
        aria-label="theme switch"
        className="w-10 h-6 border-2 rounded-2xl relative cursor-pointer dark:border-white"
        onClick={toggleTheme}
      >
        <div className="rounded-full w-4 h-4 absolute bg-black top-[50%] translate-y-[-50%] left-1 duration-200 ease dark:bg-white dark:left-[50%]"></div>
      </div>
    </div>
  );
}

export default Tools;
