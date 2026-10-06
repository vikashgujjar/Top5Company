"use client";
import Image from "next/image";
import { FiAward, FiCpu, FiHeart, FiTrendingUp, FiLayers, FiShield, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

const features = [
  {
    title: "Expertise and Experience",
    description:
      "We have a proven track record of delivering successful IT projects for businesses of all sizes and industries.",
    icon: FiAward,
    span: "lg:col-span-2",
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
    span: "lg:col-span-2",
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
      className="gradient-border glass group relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-violet/20 text-2xl text-white ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon />
        </span>
        <span className="font-display text-sm font-semibold text-slate-600">0{index + 1}</span>
      </div>
      <h3 className="relative mt-8 font-display text-xl font-semibold text-white">{feature.title}</h3>
      <p className="relative mt-3 leading-7 text-slate-400">{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <section id="why-choose-us" className="cv-auto relative py-24 lg:py-32">
        <div className="glow -left-40 top-1/3 -z-10 h-[420px] w-[420px] bg-brand-cyan/10" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title mt-5">
              Built for businesses that <span className="text-gradient">refuse to stand still</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 4) * 80} className={`h-full ${feature.span || ""}`}>
                <FeatureCard feature={feature} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-auto relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 sm:p-12 lg:p-16">
            <div className="grid-bg absolute inset-0 opacity-60" />
            <div className="glow -right-20 -top-20 h-80 w-80 bg-brand-pink/25" />
            <div className="glow -bottom-20 left-10 h-72 w-72 bg-brand-violet/25" />

            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <span className="eyebrow">Our vision</span>
                <h2 className="section-title mt-5">
                  Empower your business with <span className="text-gradient">Future IT Touch</span>
                </h2>
                <p className="mt-6 leading-8 text-slate-400">
                  Future IT Touch shines as a rising star. Focused on cutting-edge technological
                  solutions, we aim to revolutionize the IT landscape through our emphasis on
                  artificial intelligence, machine learning, and data analytics.
                </p>
                <p className="mt-4 leading-8 text-slate-400">
                  While relatively newer, we are making significant strides in transforming the
                  Indian IT sector. Our commitment to innovation, client satisfaction, and
                  technological advancement cements our position as a leader in the industry.
                </p>
                <a href="#contact" className="btn-primary mt-8">
                  Start your project <FiArrowRight />
                </a>
              </Reveal>

              <Reveal delay={120} className="relative">
                <div className="relative mx-auto aspect-square max-w-md">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/15" />
                  <div className="absolute inset-10 animate-spin-slow rounded-full border border-white/10 [animation-direction:reverse]" />
                  <div className="absolute inset-20 rounded-full bg-gradient-to-br from-brand-pink/30 via-brand-violet/30 to-brand-cyan/30 blur-2xl" />
                  <Image
                    src="/images/opt/map.webp"
                    alt="Future IT Touch team connected across locations"
                    fill
                    sizes="(min-width: 1024px) 28rem, 90vw"
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
