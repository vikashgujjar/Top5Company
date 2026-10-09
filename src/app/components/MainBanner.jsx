import Image from "next/image";
import { FiArrowRight, FiPhoneCall, FiCpu } from "react-icons/fi";
import HeroTerminal from "./HeroTerminal";
import Magnetic from "./Magnetic";
import Parallax from "./Parallax";
import WordRotator from "./WordRotator";
import { services, contact } from "../data/site";

const avatars = ["/images/opt/avatar-1.webp", "/images/opt/avatar-2.webp", "/images/opt/avatar-3.webp"];
const rotatingWords = ["Artificial Intelligence", "Cloud", "Web & Apps", "Cybersecurity", "Data"];

const MainBanner = () => {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 lg:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="eyebrow">Curated ranking · India</span>

          <h1 className="mt-7 font-display text-[2.8rem] font-bold leading-[0.98] tracking-[-0.05em] text-ink-950 sm:text-7xl lg:text-[4.1rem] xl:text-[4.9rem]">
            The <span className="text-holo">Top 5</span>
            <br /> IT Companies
            <br /> in India
          </h1>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 font-display text-lg font-medium text-ink-700 lg:justify-start">
            Engineering the future of
            <WordRotator words={rotatingWords} className="glass rounded-xl px-3 py-0.5 font-semibold text-brand-violet" />
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink-600 lg:mx-0">
            India has emerged as a global hub for IT innovation. As businesses embrace digital
            transformation, we&apos;ve compiled the five IT companies with a proven track record of
            excellence and a commitment to driving success in the digital age.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Magnetic className="w-full sm:w-auto">
              <a href="#companies" className="btn-primary w-full sm:w-auto">
                Explore the ranking <FiArrowRight />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a href={contact.phoneHref} className="btn-ghost w-full sm:w-auto">
                <FiPhoneCall /> Talk to an expert
              </a>
            </Magnetic>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatars.map((src) => (
                  <Image key={src} src={src} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover ring-[3px] ring-white" />
                ))}
              </div>
              <p className="text-left text-sm leading-tight text-ink-600">
                <span className="block font-display text-base font-semibold text-ink-950">1200+ clients</span>
                trust Future IT Touch
              </p>
            </div>
            <span className="hidden h-8 w-px bg-ink-200 sm:block" />
            <div className="text-left">
              <span role="img" aria-label="5 out of 5 stars" className="stars block text-sm text-amber-500" />
              <p className="text-sm text-ink-600">
                <span className="font-semibold text-ink-950">5.0</span> on Google
              </p>
            </div>
          </div>
        </div>

        {/* Terminal with floating chips; the whole group drifts with the mouse */}
        <Parallax className="relative [perspective:1600px]">
          <div className="glow -inset-10 bg-brand-violet/20" />
          <div className="parallax-scene relative [perspective:1600px]">
            <div className="lg:[transform:rotateY(-7deg)_rotateX(3deg)]">
              <HeroTerminal />
            </div>
          </div>

          {/* Chips sit on the bottom edge, over the status bar, so they never hide output */}
          <div className="depth-2 glass absolute -bottom-9 left-8 hidden items-center gap-3 rounded-2xl px-4 py-3 xl:flex">
            <span className="icon-3d h-9 w-9 text-base"><FiCpu /></span>
            <span className="text-left">
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Powered by</span>
              <span className="block text-sm font-semibold text-ink-950">AI · Cloud · Security</span>
            </span>
          </div>
          <div className="depth-1 glass absolute -bottom-9 right-8 hidden rounded-2xl px-4 py-3 xl:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Delivering since</p>
            <p className="text-holo font-display text-2xl font-bold">2017</p>
          </div>
        </Parallax>
      </div>

      {/* Services marquee */}
      <div className="mask-fade-x mt-24 overflow-hidden py-3">
        <div className="marquee-track flex w-max animate-marquee gap-4">
          {[...services, ...services].map((s, i) => (
            <span
              key={i}
              aria-hidden={i >= services.length}
              className="glass-lite flex items-center gap-3 whitespace-nowrap rounded-full px-6 py-3 font-display text-lg font-semibold text-ink-800 sm:text-xl"
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-holo" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
