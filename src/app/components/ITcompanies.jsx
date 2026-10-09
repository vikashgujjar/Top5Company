import RankingExplorer from "./RankingExplorer";
import Reveal from "./Reveal";

const ServicesSection = () => {
  return (
    <section id="companies" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-3xl">
            <span className="eyebrow">The ranking</span>
            <h2 className="section-title mt-5">
              Overview of the <span className="text-holo">Top 5 IT Companies</span> in India
            </h2>
          </div>
          <p className="max-w-sm text-ink-600 lg:text-right">
            From global titans to rising innovators.{" "}
            <span className="hidden lg:inline">Hover a column</span>
            <span className="lg:hidden">Tap a company</span> to explore what shapes India&apos;s
            technology landscape.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <RankingExplorer />
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
