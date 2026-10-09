"use client";
import { useEffect, useState } from "react";

// Cycles through `words`, animating each one in. The first word is server-rendered.
const WordRotator = ({ words, interval = 2200, className = "" }) => {
  // `tick` counts swaps; the first word renders without the entrance animation.
  const [tick, setTick] = useState(0);
  const index = tick % words.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <span key={tick} className={tick ? "animate-word-in" : undefined}>
        {words[index]}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
};

export default WordRotator;
