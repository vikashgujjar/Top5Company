import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { navLinks, socials, contact, companies } from "../data/site";

const badges = [
  { src: "/images/badges-a.webp", alt: "ISO Certified World Wide 2018" },
  { src: "/images/badges-b.webp", alt: "Best Ecommerce Development Company 2019-20" },
  { src: "/images/badges-c.webp", alt: "High Performer Winner 2020" },
  { src: "/images/badges-d.webp", alt: "Top App Developers 2019-20" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="glow -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 bg-brand-violet/20" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/images/opt/logo.webp" alt="Future IT Touch logo" width={378} height={96} className="h-11 w-auto" />
            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Top 5 IT Companies in India — India excels globally in IT with innovation, digital
              solutions, and cutting-edge technology leadership.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-brand-pink hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">The Top 5</h3>
            <ul className="mt-5 space-y-3">
              {companies.map((c) => (
                <li key={c.name}>
                  <a href={c.profileLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-white">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                  <FiPhone className="text-brand-pink" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition hover:text-white">
                  <FiMail className="text-brand-pink" /> {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-brand-pink" /> {contact.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="glass mt-12 flex flex-col items-center gap-6 rounded-3xl px-6 py-6 lg:flex-row lg:justify-between lg:px-10">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Awards &amp; recognition</p>
            <p className="mt-2 font-display text-xl font-semibold text-white">Certified. Awarded. Trusted.</p>
          </div>
          <ul className="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-4 lg:w-auto lg:gap-10">
            {badges.map((b) => (
              <li key={b.src}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={229}
                  height={167}
                  className="h-20 w-auto transition-transform duration-300 hover:-translate-y-1 hover:scale-105 lg:h-24"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-slate-500 lg:flex-row">
          <p>
            © 2017–{year}{" "}
            <a href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
              Future IT Touch Pvt. Ltd.
            </a>
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-brand-pink" /> in Chandigarh
          </p>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mt-2 h-[clamp(2.5rem,6vw,6rem)] select-none overflow-hidden bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-center font-display text-[clamp(3.5rem,10vw,9rem)] font-extrabold leading-[0.8] tracking-tighter text-transparent"
      >
        FUTURE IT
      </p>
    </footer>
  );
};

export default Footer;
