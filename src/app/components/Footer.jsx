import Image from "next/image";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { navLinks, socials, contact, companies } from "../data/site";

const badges = [
  { src: "/images/badges-a.webp", alt: "ISO Certified World Wide 2018" },
  { src: "/images/badges-b.webp", alt: "Best Ecommerce Development Company 2019-20" },
  { src: "/images/badges-c.webp", alt: "High Performer Winner 2020" },
  { src: "/images/badges-d.webp", alt: "Top App Developers 2019-20" },
];

const bigLinks = [
  { label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Call us", value: contact.phone, href: contact.phoneHref },
];

const ColumnTitle = ({ children }) => (
  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-500">{children}</h3>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="glass-strong relative overflow-hidden !border-x-0 !border-b-0">
      <div className="glow -top-40 left-1/4 h-80 w-[600px] bg-brand-cyan/15" />
      <div className="glow -bottom-40 right-0 h-80 w-[600px] bg-brand-pink/15" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:pt-20">
        {/* Let's talk */}
        <div className="grid grid-cols-1 items-end gap-10 border-b border-ink-200/70 pb-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-violet">Let&apos;s talk</p>
            <p className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink-950 sm:text-5xl lg:text-6xl">
              Have a project in mind? <span className="text-holo">Let&apos;s build it.</span>
            </p>
          </div>
          <ul className="space-y-3">
            {bigLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="glass holo-edge group flex items-center justify-between gap-4 rounded-3xl px-6 py-5 transition hover:-translate-y-0.5"
                >
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">{l.label}</span>
                    <span className="block truncate font-display text-xl font-semibold text-ink-950 sm:text-2xl">{l.value}</span>
                  </span>
                  <span className="icon-3d h-12 w-12 shrink-0 !rounded-full text-xl transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/images/opt/logo.webp" alt="Future IT Touch logo" width={378} height={96} className="h-11 w-auto" />
            <p className="mt-5 max-w-sm leading-7 text-ink-600">
              Top 5 IT Companies in India — India excels globally in IT with innovation, digital
              solutions, and cutting-edge technology leadership.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-600">
              <FiMapPin className="text-brand-violet" /> {contact.city}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="glass grid h-10 w-10 place-items-center rounded-full text-ink-700 transition hover:-translate-y-0.5 hover:bg-ink-950 hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-700 transition hover:text-brand-violet">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>The Top 5</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {companies.map((c, i) => (
                <li key={c.name}>
                  <a
                    href={c.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline gap-2 text-ink-700 transition hover:text-brand-violet"
                  >
                    <span className="font-mono text-[10px] text-ink-400">0{i + 1}</span>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <ColumnTitle>Awards &amp; recognition</ColumnTitle>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {badges.map((b) => (
                <li key={b.src} className="glass grid place-items-center rounded-2xl p-3">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={229}
                    height={167}
                    className="h-16 w-auto transition-transform duration-300 hover:-translate-y-1 hover:scale-105 lg:h-20"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-200/70 py-6 text-sm text-ink-500 lg:flex-row">
          <p>
            © 2017–{year}{" "}
            <a href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer" className="text-ink-800 hover:text-ink-950">
              Future IT Touch Pvt. Ltd.
            </a>
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-brand-pink" /> in Chandigarh
          </p>
          <a href="#top" className="font-mono text-xs uppercase tracking-[0.18em] hover:text-ink-950">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
