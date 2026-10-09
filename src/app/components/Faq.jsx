"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch, FiSend, FiMessageCircle, FiX } from "react-icons/fi";
import Reveal from "./Reveal";
import { contact } from "../data/site";

const faqs = [
  {
    question: "What are the upcoming trends in IT?",
    answer:
      "The future of IT promises remarkable advancements such as quantum computing, augmented reality, the Internet of Things (IoT), and immersive technologies. These will revolutionize how we interact with the digital world, paving the way for a more connected and efficient future.",
  },
  {
    question: "How do IT companies influence technological advancements?",
    answer:
      "IT companies serve as the pioneers of innovation. They invest in research, development, and cutting-edge technologies, steering the trajectory of technological evolution. These companies drive progress by pushing boundaries, developing groundbreaking solutions, and creating a roadmap for the future.",
  },
  {
    question: "What sets the top Indian IT companies apart from others globally?",
    answer:
      "Indian IT companies stand out for their cost-effective yet high-quality services. They possess a pool of skilled professionals, offer diverse services, and often pioneer in adopting new technologies and delivering cutting-edge solutions across various industry verticals.",
  },
  {
    question: "What are the primary services offered by top IT companies in India?",
    answer:
      "Top IT companies in India provide a broad spectrum of services, including software development, application maintenance, system integration, cloud computing, cybersecurity, data analytics, IoT solutions, and digital transformation services.",
  },
  {
    question: "What services does Future IT Touch offer?",
    answer:
      "Future IT Touch offers a range of services, including but not limited to IT consulting, infrastructure management, cloud solutions, cybersecurity, data analytics, software development, web development, and app development.",
  },
  {
    question: "What makes Future IT Touch different from other IT service providers?",
    answer:
      "Future IT Touch distinguishes itself through its personalized approach, tailoring solutions to specific client needs. Its dedication to innovation and adaptability sets it apart, and its emphasis on cutting-edge solutions differentiates it within the industry.",
  },
  {
    question: "What role do IT companies play in enhancing search results?",
    answer:
      "IT companies are pivotal in enhancing search results by creating relevant, high-quality content, optimizing websites for better performance, and implementing user-centric strategies. Their influence extends to shaping algorithms and search engine preferences.",
  },
];

const TYPING_MS = 750;

const BotAvatar = () => (
  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white shadow-soft ring-1 ring-white">
    <Image src="/images/opt/logo-future.webp" alt="" width={28} height={28} className="h-6 w-6 object-contain mix-blend-multiply" />
  </span>
);

const FAQSection = () => {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .map((faq, index) => ({ ...faq, index }))
      .filter((f) => !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [query]);

  // Brief "typing…" before each new answer.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyping(true);
    const id = setTimeout(() => setTyping(false), TYPING_MS);
    return () => clearTimeout(id);
  }, [active]);

  const ask = (index) => {
    setActive(index);
    // On small screens the chat sits below the list, so bring it into view.
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-5">
            Frequently asked <span className="text-holo">questions</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-600">
            Everything you need to know about India&apos;s IT landscape and how Future IT Touch can
            help your business.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-8">
          {/* Help centre */}
          <Reveal className="glass rounded-[2rem] p-4 sm:p-5">
            <label className="relative block">
              <span className="sr-only">Search questions</span>
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="w-full rounded-2xl border border-white bg-white/70 py-3.5 pl-11 pr-10 text-sm text-ink-950 shadow-[inset_0_1px_2px_rgba(40,30,90,0.06)] outline-none transition placeholder:text-ink-400 focus:border-brand-violet/50 focus:bg-white focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-950"
                >
                  <FiX />
                </button>
              )}
            </label>

            <p className="mt-4 px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              {results.length} {results.length === 1 ? "question" : "questions"}
            </p>

            <ul className="mt-2 space-y-1.5">
              {results.map((f) => {
                const on = f.index === active;
                return (
                  <li key={f.question}>
                    <button
                      type="button"
                      onClick={() => ask(f.index)}
                      aria-pressed={on}
                      aria-controls="faq-chat"
                      className={`group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-300 ${
                        on ? "glass-strong holo-edge shadow-glow" : "hover:bg-white/60"
                      }`}
                    >
                      <span className={`mt-0.5 font-mono text-[11px] ${on ? "text-brand-violet" : "text-ink-400"}`}>
                        {String(f.index + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 text-sm font-medium leading-snug ${on ? "text-ink-950" : "text-ink-700 group-hover:text-ink-950"}`}>
                        {f.question}
                      </span>
                    </button>
                  </li>
                );
              })}
              {results.length === 0 && (
                <li className="rounded-2xl px-3 py-6 text-center text-sm text-ink-500">
                  No matches — ask us directly at{" "}
                  <a href={`mailto:${contact.email}`} className="font-semibold text-brand-violet">
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
          </Reveal>

          {/* Chat window */}
          <Reveal delay={100} className="h-full">
            <div
              ref={chatRef}
              id="faq-chat"
              className="glass-strong relative flex h-full min-h-[520px] scroll-mt-28 flex-col overflow-hidden rounded-[2rem]"
            >
              <div className="glow -right-20 -top-20 h-64 w-64 bg-brand-violet/20" />

              {/* Chat header */}
              <div className="relative flex items-center gap-3 border-b border-white px-5 py-4">
                <BotAvatar />
                <div className="flex-1">
                  <p className="font-display text-sm font-semibold text-ink-950">Future IT Touch · Support</p>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-500" /> Online
                  </p>
                </div>
                <FiMessageCircle className="text-xl text-ink-300" />
              </div>

              {/* Messages: every Q&A is in the HTML, only the active pair is shown */}
              <div className="relative flex-1 space-y-5 p-5 sm:p-7" aria-live="polite">
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Today</p>
                {faqs.map((f, i) => (
                  <div key={f.question} hidden={i !== active} className="space-y-5">
                    {/* Visitor question */}
                    <div className="flex justify-end">
                      <p className="max-w-[85%] animate-[row-in_0.4s_ease-out_both] rounded-3xl rounded-br-md bg-ink-950 px-5 py-3.5 text-sm font-medium leading-relaxed text-white shadow-lift">
                        {f.question}
                      </p>
                    </div>

                    {/* Assistant answer */}
                    <div className="flex items-end gap-3">
                      <BotAvatar />
                      {typing && i === active ? (
                        <span className="glass inline-flex items-center gap-1.5 rounded-3xl rounded-bl-md px-5 py-4" aria-label="Typing">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="h-2 w-2 animate-bounce rounded-full bg-brand-violet/70"
                              style={{ animationDelay: `${d * 120}ms` }}
                            />
                          ))}
                        </span>
                      ) : (
                        <div className="max-w-[85%] animate-[row-in_0.45s_ease-out_both]">
                          <p className="border-spin holo-foil relative rounded-3xl rounded-bl-md px-5 py-4 text-sm leading-7 text-ink-700 sm:text-[15px]">
                            {f.answer}
                          </p>
                          <p className="mt-1.5 pl-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                            Future IT Touch · answer {String(i + 1).padStart(2, "0")}/{String(faqs.length).padStart(2, "0")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar → real email link */}
              <div className="relative border-t border-white p-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white bg-white/70 py-2 pl-5 pr-2 shadow-[inset_0_1px_2px_rgba(40,30,90,0.06)] transition hover:bg-white"
                >
                  <span className="flex-1 text-sm text-ink-500">
                    Still have questions? <span className="font-semibold text-ink-950">Email {contact.email}</span>
                  </span>
                  <span className="icon-3d h-10 w-10 shrink-0 !rounded-xl transition-transform duration-300 group-hover:-rotate-12">
                    <FiSend />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
