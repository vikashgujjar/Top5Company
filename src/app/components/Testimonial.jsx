"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Richa Wadhawan",
    content:
      "Future IT Touch has been an invaluable partner for our company. They have helped us to streamline our IT operations, improve our cybersecurity, and save money. Their team of experts is always available to solve our queries and provide support.",
    img: "/images/opt/avatar-1.webp",
  },
  {
    name: "Nitin Rajput",
    content:
      "Future IT Touch is the best IT company that we have ever worked with. They are always on time, on budget, and on target. They have helped us to achieve our IT goals and objectives.",
    img: "/images/opt/avatar-2.webp",
  },
  {
    name: "Gourav Rajput",
    content:
      "Future IT Touch is a true innovator in the IT industry. They are always at the forefront of new technology and have helped us stay ahead of the competition. We are so impressed!",
    img: "/images/opt/avatar-3.webp",
  },
  {
    name: "Vishali",
    content:
      "It's a pleasure to work with Future IT Touch. They are always professional, courteous, and respectful. They take the time to understand our needs and always deliver on their promises.",
  },
  {
    name: "Himanshi Mehra",
    content:
      "Future IT Touch has helped me to grow my business. They implemented new systems and processes that improved our efficiency, productivity, and profitability.",
  },
  {
    name: "Shivam Thakur",
    content:
      "A breath of fresh air in the IT industry. They are honest, transparent, and ethical — always putting our needs first and willing to go the extra mile.",
  },
];

const reviewBadges = [
  { src: "/images/reviews-icon-1..webp", href: "https://g.co/kgs/Xpqu7J", alt: "Google 5 star customer rating" },
  { src: "/images/reviews-icon-2..webp", alt: "Clutch top web developer" },
  { src: "/images/reviews-icon-3..webp", alt: "GoodFirms top company" },
];

const CYCLE_MS = 7000;

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

const Avatar = ({ review, size }) =>
  review.img ? (
    <Image src={review.img} alt="" width={size} height={size} className="h-full w-full rounded-full object-cover" />
  ) : (
    <span className="bg-holo grid h-full w-full place-items-center rounded-full text-sm font-bold text-white">
      {initials(review.name)}
    </span>
  );

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % testimonials.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, auto]);

  const go = (i) => {
    setAuto(false);
    setActive((i + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="eyebrow">What our clients say</span>
          <h2 className="section-title mx-auto mt-5 max-w-3xl">
            Over <span className="text-holo">1200+ satisfied clients</span> and growing
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {reviewBadges.map((b) => {
              const img = <Image src={b.src} alt={b.alt} width={130} height={60} className="h-10 w-auto" />;
              return (
                <div key={b.src} className="glass rounded-2xl px-4 py-2 transition-all hover:-translate-y-0.5">
                  {b.href ? (
                    <a href={b.href} target="_blank" rel="noopener noreferrer">
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative mt-14">
          <div className="border-spin holo-foil relative overflow-hidden rounded-[2.5rem] px-6 pb-10 pt-14 shadow-glow sm:px-16 sm:pb-14 sm:pt-20">
            <div className="sheen" />
            <span aria-hidden className="text-holo pointer-events-none absolute left-6 top-0 select-none font-display text-[10rem] font-bold leading-none opacity-30 sm:left-12">
              “
            </span>

            {/* All quotes share one grid cell; only the active one is visible */}
            <div className="relative grid" aria-live="polite">
              {testimonials.map((t, i) => {
                const on = i === active;
                return (
                  <figure
                    key={t.name}
                    aria-hidden={!on}
                    className={`transition-all duration-700 [grid-area:1/1] ${
                      on ? "visible translate-y-0 opacity-100 blur-0" : "invisible translate-y-3 opacity-0 blur-sm"
                    }`}
                  >
                    <span role="img" aria-label="5 out of 5 stars" className="stars text-amber-500" />
                    <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed tracking-tight text-ink-950 sm:text-3xl sm:leading-snug">
                      “{t.content}”
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <span className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                        <Avatar review={t} size={48} />
                      </span>
                      <span>
                        <span className="block font-semibold text-ink-950">{t.name}</span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Verified client</span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3" role="group" aria-label="Choose a review">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show review from ${t.name}`}
                  aria-pressed={i === active}
                  className={`relative h-11 w-11 overflow-hidden rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                    i === active
                      ? "scale-110 ring-[3px] ring-brand-violet ring-offset-2 ring-offset-ink-50"
                      : "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                  }`}
                >
                  <Avatar review={t} size={48} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-500">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous review"
                className="glass grid h-12 w-12 place-items-center rounded-full text-ink-950 transition hover:-translate-y-0.5"
              >
                <FiArrowLeft />
              </button>
              <button type="button" onClick={() => go(active + 1)} aria-label="Next review" className="btn-primary !h-12 !w-12 !p-0">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
