"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";

function Tools() {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <div className="flex gap-2">
      <div
        aria-label="theme switch"
        className={cn(
          "w-10 h-6 border-2 rounded-2xl relative cursor-pointer",
          dark && "bg-black border-white"
        )}
        onClick={() => setDark((prev) => !prev)}
      >
        <div
          className={cn(
            "rounded-full w-4 h-4 absolute bg-black top-[50%] translate-y-[-50%] left-1 duration-200 ease",
            dark && "bg-white left-[50%]"
          )}
        ></div>
      </div>
    </div>
  );
}

export default Tools;
