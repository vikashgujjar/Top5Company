"use client";
import { useEffect, useState } from "react";

// Sticky table of contents; highlights the section currently being read.
const Toc = ({ items }) => {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!headings.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="glass rounded-3xl p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">On this page</p>
      <ol className="mt-4 space-y-1 border-l border-ink-200/80">
        {items.map((item, i) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "location" : undefined}
                className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                  on ? "border-brand-violet font-semibold text-ink-950" : "border-transparent text-ink-500 hover:text-ink-950"
                }`}
              >
                <span className={`font-mono text-[10px] leading-5 ${on ? "text-brand-violet" : "text-ink-400"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Toc;
