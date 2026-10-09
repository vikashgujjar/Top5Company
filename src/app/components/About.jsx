import Image from "next/image";
import { FiArrowRight, FiCompass, FiZap } from "react-icons/fi";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { value: <CountUp to={1200} suffix="+" />, label: "Satisfied clients" },
  { value: "2017", label: "Delivering since" },
  { value: "5★", label: "Google rating" },
  { value: "10+", label: "Service areas" },
];

const pillars = [
  {
    icon: FiCompass,
    title: "Your partner in digital transformation",
    text: "As you embark on your digital transformation journey, our experienced IT professionals bring in-depth expertise across a wide range of technologies — tailoring solutions that align with your specific business needs.",
  },
  {
    icon: FiZap,
    title: "Kickstart your success",
    text: "Harness the power of technology to achieve your business goals. Our experts collaborate with you to develop and implement innovative IT solutions that drive growth and success.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Collage */}
          <Reveal className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift">
              <Image
                src="/images/about-image.webp"
                alt="Future IT Touch workspace"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-pink/25 mix-blend-overlay" />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/30 bg-white/15 p-5 backdrop-blur-xl">
                <p className="font-display text-2xl font-semibold text-white">Built in Chandigarh.</p>
                <p className="font-display text-2xl font-semibold text-white/75">Trusted worldwide.</p>
              </div>
            </div>

            {/* Overlapping glass cards */}
            <div className="glass absolute -right-4 top-10 hidden w-56 animate-float rounded-3xl p-5 sm:block lg:-right-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Happy clients</p>
              <p className="text-holo mt-1 font-display text-4xl font-bold">1200+</p>
            </div>
            <div className="glass absolute -left-4 top-1/2 hidden animate-float items-center gap-3 rounded-3xl p-4 [animation-delay:-3s] sm:flex lg:-left-10">
              <span className="icon-3d h-11 w-11 text-lg"><FiZap /></span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Est.</span>
                <span className="block font-display text-xl font-bold text-ink-950">2017</span>
              </span>
            </div>
            <div aria-hidden className="orb absolute -bottom-8 -right-6 h-24 w-24 animate-float [animation-delay:-5s]" />
          </Reveal>

          {/* Copy */}
          <Reveal delay={100}>
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title mt-5">
              Introducing Future IT Touch — your gateway to <span className="text-holo">digital excellence</span>
            </h2>

            <ul className="mt-10 space-y-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="glass holo-edge flex gap-5 rounded-3xl p-6">
                  <span className="icon-3d h-12 w-12 shrink-0 text-xl">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-950">{title}</h3>
                    <p className="mt-2 leading-7 text-ink-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="https://www.futuretouch.in/" target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">
              Learn more about us <FiArrowRight />
            </a>
          </Reveal>
        </div>

        {/* Stats band */}
        <Reveal className="glass mt-20 grid grid-cols-2 overflow-hidden rounded-[2rem] lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-6 py-8 text-center sm:px-8 ${i > 0 ? "border-white/80 lg:border-l" : ""} ${
                i % 2 === 1 ? "border-l border-white/80" : ""
              } ${i > 1 ? "border-t border-white/80 lg:border-t-0" : ""}`}
            >
              <p className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${i === 0 ? "text-holo" : "text-ink-950"}`}>
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
