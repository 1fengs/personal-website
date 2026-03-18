"use client";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

export function TypingRole({ onFinish }: { onFinish?: () => void }) {
  const text = "A growth-focused senior software engineer";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  const [finished, setFinished] = useState(false);

    useEffect(() => {
    if (index >= text.length) {
        setFinished(true);
    }
    }, [index]);

    useEffect(() => {
    if (index >= text.length) {
        onFinish?.();
    }
    }, [index]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, Math.random() * 40 + 40); // 👈 natural typing speed

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="w-full flex justify-center">
      
      {/* Search Bar */}
      <div className="
        w-full max-w-[600px]
        flex items-center
        px-4 py-3
        rounded-full
        bg-white/70 backdrop-blur-md
        border border-black/10
      ">
        
        {/* Fake search icon */}
        <span className="mr-3 text-gray-400">
            <CiSearch />
        </span>

        <div className="relative">
  <span className="left-0 top-0 invisible whitespace-nowrap overflow-hidden text-ellipsis text-black text-[clamp(0.8rem,2vw,1.2rem)] font-medium">
    A growth-focused senior software engineer
    <span className="ml-1 animate-[blink_1s_infinite]">|</span>
  </span>
        {/* Typed text */}
        <div className="absolute left-0 top-0 whitespace-nowrap overflow-hidden text-ellipsis text-black text-[clamp(0.8rem,2vw,1.2rem)] font-medium">
          {displayed}
          <span className="ml-1 animate-[blink_1s_infinite]">|</span>
        </div>
        </div>

      </div>
    </div>
  );
}