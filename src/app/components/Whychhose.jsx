"use client";
import { FiAward, FiCpu, FiHeart, FiTrendingUp, FiLayers, FiShield, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

const features = [
  {
    title: "Expertise and Experience",
    description:
      "We have a proven track record of delivering successful IT projects for businesses of all sizes and industries.",
    icon: FiAward,
  },
  {
    title: "Technological Advancements",
    description:
      "Embracing AI, machine learning, and data analytics, Future IT Touch is at the forefront of technological advancements.",
    icon: FiCpu,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize understanding your unique business goals and challenges, ensuring that our solutions align seamlessly with your objectives.",
    icon: FiHeart,
  },
  {
    title: "Innovation-Driven Solutions",
    description:
      "We continuously explore and adopt emerging technologies to deliver cutting-edge solutions that drive business value.",
    icon: FiLayers,
  },
  {
    title: "Scalable and Cost-Effective",
    description:
      "We design solutions that adapt to your changing business needs and optimize your IT costs.",
    icon: FiTrendingUp,
  },
  {
    title: "Comprehensive Support",
    description:
      "We provide ongoing support and maintenance to ensure the long-term success of your IT investments.",
    icon: FiShield,
  },
];

// Updates the CSS vars that position the hover spotlight.
const trackPointer = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  return (
    <div
      onMouseMove={trackPointer}
      className="glass holo-edge group relative h-full overflow-hidden rounded-[2rem] p-7 transition-all duration-500 [perspective:600px] hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="icon-3d h-14 w-14 text-2xl transition-transform duration-500 group-hover:[transform:rotateX(14deg)_rotateY(-18deg)_scale(1.08)]">
          <Icon />
        </span>
        <span className="font-mono text-xs text-ink-400 transition-colors duration-500 group-hover:text-brand-violet">
          /0{index + 1}
        </span>
      </div>
      <h3 className="relative mt-8 font-display text-xl font-semibold text-ink-950">{feature.title}</h3>
      <p className="relative mt-3 leading-7 text-ink-600">{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const left = features.filter((_, i) => i % 2 === 0);
  const right = features.filter((_, i) => i % 2 === 1);

  return (
    <>
      <section id="why-choose-us" className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          {/* Pinned intro */}
          <Reveal className="lg:sticky lg:top-32 lg:h-max">
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title mt-5">
              Built for businesses that <span className="text-holo">refuse to stand still</span>
            </h2>
            <p className="mt-6 max-w-md leading-8 text-ink-600">
              Six reasons teams across India and beyond trust Future IT Touch with the technology
              that runs their business.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Start your project <FiArrowRight />
            </a>
          </Reveal>

          {/* Staggered two-column cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {[left, right].map((column, c) => (
              <div key={c} className={`space-y-5 ${c === 1 ? "sm:mt-16" : ""}`}>
                {column.map((feature) => {
                  const i = features.indexOf(feature);
                  return (
                    <Reveal key={feature.title} delay={(i % 3) * 80}>
                      <FeatureCard feature={feature} index={i} />
                    </Reveal>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
