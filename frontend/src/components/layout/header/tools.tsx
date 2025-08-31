"use client";
import { useTheme } from "@/app/theme-provider";

function Tools() {
  const { toggleTheme } = useTheme();

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
