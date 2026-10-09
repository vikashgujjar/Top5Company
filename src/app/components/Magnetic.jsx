"use client";
import { useRef } from "react";

// Pulls its child slightly toward the mouse while hovered.
const Magnetic = ({ strength = 0.25, className = "", children }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-flex transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  );
};

export default Magnetic;
