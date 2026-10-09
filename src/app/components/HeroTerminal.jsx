"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiRotateCw } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { companies, contact } from "../data/site";

const featured = companies.find((c) => c.highlight);

// What the terminal "runs". cmd lines are typed out; everything else prints instantly.
const script = [
  { kind: "cmd", text: "npx future-it rank --country india --top 5" },
  { kind: "out", tone: "muted", text: "→ Evaluating innovation, delivery & client trust…" },
  { kind: "out", tone: "ok", text: "✓ Ranking compiled · 5 results" },
  ...companies.map((company, i) => ({ kind: "row", company, rank: i + 1 })),
  { kind: "cmd", text: `contact "${featured.name}" --start-project` },
  { kind: "out", tone: "ok", text: `✓ Channel open · ${contact.email}` },
];

const Prompt = () => (
  <span className="select-none">
    <span className="text-brand-cyan">➜</span> <span className="text-brand-violet">~/india</span>{" "}
  </span>
);

const Cursor = () => <span aria-hidden className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-white/80" />;

const Row = ({ company, rank }) => {
  const isFeatured = company.highlight;
  return (
    <div
      className={`flex animate-[row-in_0.45s_cubic-bezier(0.2,0.7,0.2,1)_both] items-center gap-3 rounded-xl px-3 py-2 ${
        isFeatured ? "bg-white/[0.08] ring-1 ring-brand-pink/40" : "hover:bg-white/[0.04]"
      }`}
    >
      <span className="w-5 text-[11px] text-white/35">{String(rank).padStart(2, "0")}</span>
      <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1">
        <Image src={company.logo} alt="" width={32} height={32} className="h-full w-full object-contain" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-sans text-sm font-semibold text-white">{company.fullName}</span>
        <span className="block truncate text-[10px] text-white/40">{company.tags.join(" · ")}</span>
      </span>
      {isFeatured ? (
        <span className="bg-holo inline-flex shrink-0 animate-shimmer items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white">
          <HiSparkles /> featured
        </span>
      ) : (
        <span className="shrink-0 text-[11px] text-emerald-400">✓</span>
      )}
    </div>
  );
};

const HeroTerminal = () => {
  const [step, setStep] = useState(0); // index of the script line being processed
  const [chars, setChars] = useState(0); // characters typed of the current cmd

  // Respect reduced motion: show the finished output straight away.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setStep(script.length);
  }, []);

  useEffect(() => {
    if (step >= script.length) return;
    const line = script[step];
    let delay;
    let next;
    if (line.kind === "cmd") {
      if (chars < line.text.length) {
        delay = step === 0 && chars === 0 ? 700 : 25 + Math.random() * 45;
        next = () => setChars((c) => c + 1);
      } else {
        delay = 420;
        next = () => {
          setStep((s) => s + 1);
          setChars(0);
        };
      }
    } else {
      delay = line.kind === "row" ? 240 : 480;
      next = () => setStep((s) => s + 1);
    }
    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [step, chars]);

  const done = step >= script.length;
  const replay = () => {
    setStep(0);
    setChars(0);
  };

  return (
    <div className="border-spin relative overflow-hidden rounded-[1.75rem] bg-ink-950/90 text-left shadow-[0_40px_100px_-30px_rgba(60,20,140,0.6)] backdrop-blur-xl">
      <div className="glow -right-24 -top-24 h-72 w-72 bg-brand-violet/40" />
      <div className="glow -bottom-28 -left-16 h-72 w-72 bg-brand-pink/25" />

      {/* Title bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="font-mono text-[11px] text-white/45">future-it — zsh</span>
        <button
          type="button"
          onClick={replay}
          disabled={!done}
          aria-label="Replay terminal animation"
          className="grid h-7 w-7 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white disabled:opacity-0"
        >
          <FiRotateCw />
        </button>
      </div>

      {/* Output */}
      <div
        className="relative min-h-[520px] space-y-2 p-5 font-mono text-[12.5px] leading-relaxed text-white/80 sm:h-[530px] sm:p-6"
        aria-label="Animated terminal listing the top 5 IT companies in India"
      >
        {script.slice(0, Math.min(step + 1, script.length)).map((line, i) => {
          const current = i === step;
          if (line.kind === "cmd") {
            return (
              <p key={i} className="break-words">
                <Prompt />
                <span className="text-white">{current ? line.text.slice(0, chars) : line.text}</span>
                {current && <Cursor />}
              </p>
            );
          }
          if (current) return null; // non-typed lines appear once processed
          if (line.kind === "row") return <Row key={i} company={line.company} rank={line.rank} />;
          return (
            <p
              key={i}
              className={`animate-[row-in_0.4s_ease-out_both] ${line.tone === "ok" ? "text-emerald-400" : "text-white/45"} ${
                i === 2 ? "pb-1" : ""
              }`}
            >
              {line.text}
            </p>
          );
        })}
        {done && (
          <p>
            <Prompt />
            <Cursor />
          </p>
        )}
      </div>

      {/* Status bar */}
      <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
        <span className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? "bg-emerald-400" : "animate-pulse bg-amber-400"}`} />
          {done ? "ready" : "running"}
        </span>
        <span>india · top 5</span>
        <span>utf-8</span>
      </div>
    </div>
  );
};

export default HeroTerminal;
