import Image from "next/image";
import { FiArrowRight, FiCpu, FiGitBranch, FiBarChart2 } from "react-icons/fi";
import Reveal from "./Reveal";

// The three focus areas named in the vision copy, shown as a data pipeline.
const stages = [
  { icon: FiCpu, title: "Artificial Intelligence", text: "Intelligent automation and smarter decisions." },
  { icon: FiGitBranch, title: "Machine Learning", text: "Models that learn and improve from your data." },
  { icon: FiBarChart2, title: "Data Analytics", text: "Insights that turn information into strategy." },
];

const Vision = () => {
  return (
    <section id="vision" className="relative pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass relative overflow-hidden rounded-[2.75rem] p-7 sm:p-12 lg:p-16">
          <div className="grid-bg absolute inset-0" />
          <div className="glow -left-24 -top-24 h-96 w-96 animate-blob bg-brand-cyan/20" />
          <div className="glow -bottom-32 right-0 h-[28rem] w-[28rem] animate-blob bg-brand-pink/15 [animation-delay:-9s]" />

          {/* Header */}
          <Reveal className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <span className="eyebrow">Our vision</span>
              <h2 className="section-title mt-5">
                Empower your business with <span className="text-holo">Future IT Touch</span>
              </h2>
            </div>
            <div>
              <p className="leading-8 text-ink-700">
                Future IT Touch shines as a rising star. Focused on cutting-edge technological
                solutions, we aim to revolutionize the IT landscape through our emphasis on
                artificial intelligence, machine learning, and data analytics.
              </p>
              <a href="#contact" className="btn-primary mt-6">
                Start your project <FiArrowRight />
              </a>
            </div>
          </Reveal>

          {/* Pipeline */}
          <Reveal delay={100} className="relative mt-16">
            {/* Data-flow connector: vertical on mobile, horizontal on desktop */}
            <div aria-hidden className="flow-line absolute bottom-24 left-[1.9rem] top-10 w-[3px] lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-[3.1rem] lg:h-[3px] lg:w-auto">
              <span className="flow-pulse" />
            </div>

            <ol className="relative grid grid-cols-1 gap-5 lg:grid-cols-4">
              {stages.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="flex gap-5 lg:flex-col lg:gap-0">
                  <span className="icon-3d relative z-10 h-[3.9rem] w-[3.9rem] shrink-0 text-2xl lg:mx-auto lg:h-[6.2rem] lg:w-[6.2rem] lg:text-4xl">
                    <Icon />
                  </span>
                  <div className="glass holo-edge flex-1 rounded-3xl p-5 lg:mt-6 lg:text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-violet">stage_0{i + 1}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink-950">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-ink-600">{text}</p>
                  </div>
                </li>
              ))}

              {/* Destination */}
              <li className="flex gap-5 lg:flex-col lg:gap-0">
                <span className="border-spin relative z-10 grid h-[3.9rem] w-[3.9rem] shrink-0 place-items-center rounded-full bg-white shadow-glow lg:mx-auto lg:h-[6.2rem] lg:w-[6.2rem]">
                  <Image
                    src="/images/opt/logo-future.webp"
                    alt="Future IT Touch logo"
                    width={72}
                    height={72}
                    className="h-[62%] w-[62%] object-contain mix-blend-multiply"
                  />
                </span>
                <div className="border-spin holo-foil relative flex-1 overflow-hidden rounded-3xl p-5 shadow-glow lg:mt-6 lg:text-center">
                  <div className="sheen" />
                  <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-brand-pink">output</p>
                  <h3 className="relative mt-2 font-display text-lg font-semibold text-ink-950">Your business growth</h3>
                  <p className="relative mt-1.5 text-sm leading-6 text-ink-600">Measurable impact, delivered.</p>
                </div>
              </li>
            </ol>
          </Reveal>

          {/* Footer row */}
          <Reveal delay={150} className="relative mt-14 grid grid-cols-1 items-center gap-8 border-t border-white/80 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
            <p className="leading-8 text-ink-700">
              While relatively newer, we are making significant strides in transforming the Indian IT
              sector. Our commitment to innovation, client satisfaction, and technological advancement
              cements our position as a leader in the industry.
            </p>
            <div className="glass flex items-center gap-5 rounded-3xl p-4">
              <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl bg-white/70">
                <Image
                  src="/images/opt/map.webp"
                  alt="Future IT Touch team connected across locations"
                  fill
                  sizes="128px"
                  className="scale-125 object-contain"
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">One team</p>
                <p className="mt-1 font-display text-lg font-semibold leading-snug text-ink-950">
                  Connected across locations
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Vision;
