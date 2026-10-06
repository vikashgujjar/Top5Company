import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import ContactArea from "./Contacts";
import Reveal from "./Reveal";
import { companies } from "../data/site";

const CompanyCard = ({ company, rank }) => (
  <article
    className={`gradient-border group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
      company.highlight
        ? "bg-gradient-to-br from-brand-pink/15 via-brand-violet/10 to-ink-900 ring-1 ring-brand-pink/40"
        : "glass"
    }`}
  >
    {/* Oversized rank number */}
    <span
      aria-hidden
      className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[9rem] font-extrabold leading-none text-transparent opacity-40 transition-opacity duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:opacity-80"
    >
      0{rank}
    </span>

    <div className="relative flex items-center gap-5">
      <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
        <Image
          src={company.logo}
          alt={`${company.fullName} logo`}
          width={64}
          height={64}
          className="h-full w-full object-contain"
        />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">
          Rank #{rank}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
          {company.fullName}
        </h3>
      </div>
      {company.highlight && (
        <span className="ml-auto hidden items-center gap-1 self-start rounded-full bg-brand-pink px-3 py-1 text-xs font-bold uppercase tracking-wider text-white sm:inline-flex">
          <HiSparkles /> Featured
        </span>
      )}
    </div>

    <ul className="relative mt-6 flex flex-wrap gap-2">
      {company.tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
        >
          {tag}
        </li>
      ))}
    </ul>

    <p className="relative mt-5 leading-7 text-slate-400">{company.description}</p>

    <a
      href={company.profileLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-pink"
    >
      Visit website
      <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  </article>
);

const ServicesSection = () => {
  return (
    <section id="companies" className="relative py-24 lg:py-32">
      <div className="glow left-1/2 top-40 -z-10 h-[500px] w-[500px] -translate-x-1/2 bg-brand-violet/10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The ranking</span>
          <h2 className="section-title mt-5">
            Overview of the <span className="text-gradient">Top 5 IT Companies</span> in India
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            From global titans to rising innovators, these are the companies shaping India&apos;s
            technology landscape.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            {companies.map((company, i) => (
              <Reveal key={company.name} delay={i * 60}>
                <CompanyCard company={company} rank={i + 1} />
              </Reveal>
            ))}
          </div>

          <div id="contact" className="lg:sticky lg:top-28 lg:h-max">
            <Reveal>
              <ContactArea />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
