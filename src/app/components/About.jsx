import Image from "next/image";
import { FiArrowRight, FiCompass, FiZap } from "react-icons/fi";
import Reveal from "./Reveal";

const stats = [
  { value: "1200+", label: "Satisfied clients" },
  { value: "2017", label: "Delivering since" },
  { value: "5★", label: "Google rating" },
];

const About = () => {
  return (
    <section id="about" className="cv-auto relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title mt-5">
              Introducing Future IT Touch — your gateway to{" "}
              <span className="text-gradient">digital excellence</span>
            </h2>
          </div>
          <a href="https://www.futuretouch.in/" target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0">
            Learn more about us <FiArrowRight />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-6">
          <Reveal className="group relative min-h-[320px] overflow-hidden rounded-3xl md:col-span-3 md:row-span-2">
            <Image
              src="/images/about-image.webp"
              alt="Future IT Touch workspace"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="font-display text-2xl font-semibold text-white">Built in Chandigarh.</p>
              <p className="font-display text-2xl font-semibold text-gradient">Trusted worldwide.</p>
            </div>
          </Reveal>

          <Reveal delay={80} className="glass rounded-3xl p-7 md:col-span-3">
            <FiCompass className="text-3xl text-brand-cyan" />
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              Your partner in digital transformation
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              As you embark on your digital transformation journey, our experienced IT
              professionals bring in-depth expertise across a wide range of technologies — tailoring
              solutions that align with your specific business needs.
            </p>
          </Reveal>

          <Reveal delay={160} className="glass rounded-3xl p-7 md:col-span-3">
            <FiZap className="text-3xl text-brand-pink" />
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              Kickstart your success
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              Harness the power of technology to achieve your business goals. Our experts
              collaborate with you to develop and implement innovative IT solutions that drive
              growth and success.
            </p>
          </Reveal>

          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="gradient-border glass flex flex-col justify-center rounded-3xl p-7 md:col-span-2"
            >
              <p className="text-gradient font-display text-5xl font-bold">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
