import Image from "next/image";
import ContactArea from "./Contacts";
import Reveal from "./Reveal";

const steps = [
  { title: "Tell us about your project", text: "Share your goals, timeline and anything you already have." },
  { title: "We reply within one business day", text: "A specialist reviews your brief and gets back to you." },
  { title: "Get a tailored plan", text: "A clear roadmap for design, development and launch." },
];

const avatars = ["/images/opt/avatar-1.webp", "/images/opt/avatar-2.webp", "/images/opt/avatar-3.webp"];

// Final call to action and contact form in one closing section.
const ContactSection = () => {
  return (
    <section id="contact" className="relative pb-24 pt-8 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-spin holo-foil relative overflow-hidden rounded-[2.75rem] p-6 shadow-glow sm:p-10 lg:p-16">
          <div className="grid-bg absolute inset-0" />
          <div className="sheen" />
          <div aria-hidden className="orb absolute -left-12 -top-12 h-44 w-44 animate-float opacity-90 sm:h-56 sm:w-56" />
          <div aria-hidden className="orb absolute -right-8 top-1/3 hidden h-20 w-20 animate-float [animation-delay:-4s] lg:block" />

          <Reveal className="relative mx-auto max-w-4xl text-center">
            <span className="eyebrow">Now taking new projects</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink-950 sm:text-6xl sm:leading-[1.05]">
              Ready to build what&apos;s next with India&apos;s <span className="text-holo">rising IT leader?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-600">
              Web, app, AI and cloud — let&apos;s turn your idea into a product your customers love.
            </p>
          </Reveal>

          <div className="relative mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <Reveal>
              <ContactArea />
            </Reveal>

            <Reveal delay={120}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">How it works</p>
              <ol className="relative mt-6 space-y-7 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-gradient-to-b before:from-brand-cyan before:via-brand-violet before:to-brand-pink">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative flex gap-5">
                    <span className="icon-3d h-10 w-10 shrink-0 !rounded-full font-mono text-sm font-bold">{i + 1}</span>
                    <div className="pt-1.5">
                      <p className="font-display font-semibold text-ink-950">{s.title}</p>
                      <p className="mt-1 text-sm leading-6 text-ink-500">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="glass mt-10 flex items-center gap-4 rounded-3xl p-5">
                <div className="flex -space-x-3">
                  {avatars.map((src) => (
                    <Image key={src} src={src} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-[3px] ring-white" />
                  ))}
                </div>
                <div>
                  <span role="img" aria-label="5 out of 5 stars" className="stars block text-sm text-amber-500" />
                  <p className="text-sm text-ink-600">
                    Trusted by <span className="font-semibold text-ink-950">1200+ clients</span> worldwide
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
