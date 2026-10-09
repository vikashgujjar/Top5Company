"use client";
import { useEffect, useRef } from "react";

// Sets --mx / --my (-1..1, pointer position relative to the viewport centre) on its element,
// so descendants can use .parallax-scene / .depth-* for mouse-driven depth.
const Parallax = ({ className = "", children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let last = null;
    const update = () => {
      frame = 0;
      el.style.setProperty("--mx", ((last.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      el.style.setProperty("--my", ((last.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };
    const onMove = (e) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Parallax;
