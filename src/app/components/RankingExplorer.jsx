"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { companies } from "../data/site";

const CYCLE_MS = 6000;
const HOVER_DELAY_MS = 140;

// Expanding-panel ranking: five tall columns, the active one grows to show details.
// Desktop: hover (with a short delay), click or keyboard. Mobile: stacked accordion.
// Auto-advances until the visitor interacts. All details stay in the HTML.
const RankingExplorer = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const hoverTimer = useRef(0);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % companies.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, auto]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const select = (i) => {
    setAuto(false);
    setActive(i);
  };

  const onEnter = (i) => {
    if (!window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => select(i), HOVER_DELAY_MS);
  };

  const onLeave = () => clearTimeout(hoverTimer.current);

  return (
    <div className="flex flex-col gap-3 lg:h-[620px] lg:flex-row">
      {companies.map((c, i) => {
        const on = i === active;
        const featured = c.highlight;
        const rank = String(i + 1).padStart(2, "0");

        return (
          <div
            key={c.name}
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
            className={`group relative min-w-0 overflow-hidden rounded-[2rem] transition-[flex-grow,box-shadow,transform] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
              on ? "shadow-glow lg:flex-[6]" : "lg:flex-[1] lg:hover:-translate-y-1"
            } ${featured ? "border-spin holo-foil" : "glass-strong"}`}
          >
            {featured && <div className="sheen" />}

            {/* Header: a row on mobile, a vertical spine on desktop when collapsed */}
            <button
              type="button"
              id={`rank-tab-${i}`}
              aria-expanded={on}
              aria-controls={`rank-panel-${i}`}
              onClick={() => select(i)}
              className={`relative z-10 flex w-full items-center gap-4 p-4 text-left transition-opacity duration-300 lg:absolute lg:inset-0 lg:flex-col lg:justify-between lg:px-2 lg:py-7 lg:text-center ${
                on ? "lg:pointer-events-none lg:opacity-0" : "lg:opacity-100"
              }`}
            >
              <span className={`font-mono text-xs ${on ? "text-brand-violet" : "text-ink-400"} lg:text-sm`}>{rank}</span>
              <span className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
                <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-ink-100 lg:hidden">
                  <Image src={c.logo} alt="" width={40} height={40} className="h-full w-full object-contain" />
                </span>
                <span className="truncate font-display text-lg font-semibold text-ink-950 lg:rotate-180 lg:whitespace-nowrap lg:text-2xl lg:[writing-mode:vertical-rl]">
                  {c.name}
                </span>
              </span>
              {featured && <HiSparkles className="shrink-0 text-brand-pink lg:hidden" aria-label="Featured" />}
              <FiChevronDown className={`shrink-0 text-ink-500 transition-transform duration-300 lg:hidden ${on ? "rotate-180" : ""}`} />
              <span className="hidden h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-white lg:grid">
                <Image src={c.logo} alt="" width={48} height={48} className="h-full w-full object-contain" />
              </span>
            </button>

            {/* Details: accordion on mobile, fixed-width layer on desktop so text never reflows mid-animation */}
            <div
              id={`rank-panel-${i}`}
              role="region"
              aria-labelledby={`rank-tab-${i}`}
              className={`grid transition-[grid-template-rows,opacity] duration-500 lg:absolute lg:inset-0 lg:block ${
                on ? "grid-rows-[1fr] opacity-100 lg:delay-200" : "invisible grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="relative px-5 pb-6 sm:px-8 lg:h-[620px] lg:w-[min(760px,60vw)] lg:p-12">
                  {/* Oversized rank numeral */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-10 right-0 hidden select-none font-display text-[16rem] font-extrabold leading-none tracking-[-0.06em] lg:block ${
                      featured ? "text-holo opacity-30" : "num-outline"
                    }`}
                  >
                    {rank}
                  </span>

                  <div className="relative flex h-full flex-col">
                    <div className="hidden items-center gap-3 lg:flex">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-violet">rank_{rank}</span>
                      {featured && (
                        <span className="bg-holo inline-flex animate-shimmer items-center gap-1 rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                          <HiSparkles /> Featured
                        </span>
                      )}
                    </div>

                    <div className="hidden items-center gap-5 lg:mt-8 lg:flex">
                      <span className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-3xl bg-white p-3 shadow-lift ring-1 ring-white">
                        <Image src={c.logo} alt={`${c.fullName} logo`} width={80} height={80} className="h-full w-full object-contain" />
                      </span>
                      <h3 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-950">{c.fullName}</h3>
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-950 lg:hidden">{c.fullName}</h3>

                    <ul className="mt-4 flex flex-wrap gap-2 lg:mt-8">
                      {c.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-white bg-white/70 px-3 py-1 font-mono text-[11px] text-ink-700 shadow-sm">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 max-w-xl leading-7 text-ink-600 lg:text-lg lg:leading-8">{c.description}</p>

                    <a
                      href={c.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={on ? 0 : -1}
                      className="btn-primary mt-6 w-max lg:mt-auto"
                    >
                      Visit {c.name} <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-advance progress */}
            {on && auto && (
              <span
                key={active}
                aria-hidden
                className="bg-holo absolute inset-x-0 bottom-0 z-20 h-1 origin-left"
                style={{ animation: `progress ${CYCLE_MS}ms linear forwards` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RankingExplorer;
