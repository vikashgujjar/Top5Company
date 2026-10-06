import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import Reveal from "./Reveal";
import { contact } from "../data/site";

const CtaBand = () => {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand-gradient p-10 text-center sm:p-16">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="glow -left-20 -top-20 h-72 w-72 bg-white/30" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Ready to build what&apos;s next with India&apos;s rising IT leader?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Web, app, AI and cloud — let&apos;s turn your idea into a product your customers love.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Start a project <FiArrowRight />
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <FiPhoneCall /> {contact.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaBand;
