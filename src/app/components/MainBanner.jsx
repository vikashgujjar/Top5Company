import Image from "next/image";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { companies, services, contact } from "../data/site";

const avatars = ["/images/opt/avatar-1.webp", "/images/opt/avatar-2.webp", "/images/opt/avatar-3.webp"];

const Leaderboard = () => (
  <div className="relative mx-auto w-full max-w-md lg:max-w-none">
    {/* Rotating halo */}
    <div className="absolute -inset-10 -z-10 animate-spin-slow rounded-full opacity-60 [background:conic-gradient(from_0deg,transparent,rgba(242,7,145,0.35),transparent_30%,rgba(34,211,238,0.3),transparent_60%,rgba(124,92,255,0.35),transparent)] [mask-image:radial-gradient(closest-side,transparent_45%,#000_70%,transparent)] will-change-transform" />

    <div className="glass relative rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Leaderboard</p>
          <p className="font-display text-lg font-semibold text-white">India&apos;s IT Leaders</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-400" /> Updated
        </span>
      </div>

      <ol className="mt-4 space-y-2.5">
        {companies.map((c, i) => (
          <li
            key={c.name}
            className={`flex items-center gap-4 rounded-2xl p-3 transition-colors ${
              c.highlight
                ? "bg-gradient-to-r from-brand-pink/20 via-brand-violet/15 to-transparent ring-1 ring-brand-pink/40"
                : "bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            <span className="w-6 font-display text-sm font-bold text-slate-500">0{i + 1}</span>
            <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5">
              <Image src={c.logo} alt="" width={44} height={44} className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold text-white">{c.name}</span>
              <span className="block truncate text-xs text-slate-400">{c.tags.join(" · ")}</span>
            </span>
            {c.highlight && (
              <span className="hidden items-center gap-1 rounded-full bg-brand-pink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:inline-flex">
                <HiSparkles /> Featured
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>

    {/* Floating chips */}
    <div className="glass absolute -left-10 -top-7 hidden animate-float rounded-2xl px-4 py-3 text-sm font-medium text-white lg:block">
      <span className="text-gradient font-display text-xl font-bold">AI</span> &amp; Machine Learning
    </div>
    <div className="glass absolute -bottom-10 -right-8 hidden animate-float rounded-2xl px-4 py-3 text-sm text-white [animation-delay:-3s] lg:block">
      <span role="img" aria-label="5 out of 5 stars" className="stars block text-amber-400" />
      <span className="mt-1 block text-xs text-slate-300">5-star Google rating</span>
    </div>
  </div>
);

const MainBanner = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Background */}
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="glow -left-40 top-20 -z-10 h-[420px] w-[420px] bg-brand-pink/25" />
      <div className="glow -right-20 top-40 -z-10 h-[460px] w-[460px] bg-brand-violet/25" />
      <div className="glow bottom-0 left-1/3 -z-10 h-[300px] w-[300px] bg-brand-cyan/15" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="text-center lg:text-left">
          <span className="eyebrow">Curated ranking · India</span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            The <span className="text-gradient animate-shimmer">Top 5 IT</span> Companies in India
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            India has emerged as a global hub for IT innovation. As businesses embrace digital
            transformation, we&apos;ve compiled the five IT companies with a proven track record of
            excellence and a commitment to driving success in the digital age.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#companies" className="btn-primary w-full sm:w-auto">
              Explore the list <FiArrowRight />
            </a>
            <a href={contact.phoneHref} className="btn-ghost w-full sm:w-auto">
              <FiPhoneCall /> Talk to an expert
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex -space-x-3">
              {avatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-ink-950"
                />
              ))}
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white ring-2 ring-ink-950">
                +1k
              </span>
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-semibold text-white">1200+ clients</p>
              <p className="text-sm text-slate-400">trust Future IT Touch</p>
            </div>
          </div>
        </div>

        <Leaderboard />
      </div>

      {/* Services marquee */}
      <div className="mask-fade-x mt-20 overflow-hidden border-y border-white/5 py-6 lg:mt-28">
        <div className="marquee-track flex w-max animate-marquee gap-12">
          {[...services, ...services].map((s, i) => (
            <span
              key={i}
              aria-hidden={i >= services.length}
              className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold text-white/25 sm:text-3xl"
            >
              {s}
              <span aria-hidden className="text-xl text-brand-pink/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
