"use client";
import { useEffect } from "react";
import { FiX, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { navLinks, socials } from "../data/site";

// Slide-out drawer: navigation (all screens) + company info.
const SidebarModal = ({ showSidebar, closeSidebar, contact }) => {
  useEffect(() => {
    if (!showSidebar) return;
    const onKey = (e) => e.key === "Escape" && closeSidebar();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showSidebar, closeSidebar]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${showSidebar ? "visible" : "invisible"}`}
      aria-hidden={!showSidebar}
    >
      <div
        onClick={closeSidebar}
        className={`absolute inset-0 bg-ink-950/30 backdrop-blur-sm transition-opacity duration-500 ${
          showSidebar ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute right-0 top-0 flex h-full w-full flex-col overflow-y-auto overflow-x-hidden glass-strong !rounded-none p-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] sm:w-[440px] ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="glow -right-24 -top-10 h-72 w-72 bg-brand-violet/25" />
        <div className="glow -left-24 bottom-0 h-64 w-64 bg-brand-pink/15" />

        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close menu"
          className="relative ml-auto grid h-11 w-11 place-items-center rounded-full border border-ink-200 bg-white text-xl text-ink-950 transition hover:rotate-90 hover:border-ink-300"
        >
          <FiX />
        </button>

        <nav aria-label="Drawer" className="relative mt-8">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeSidebar}
                  className="group flex items-baseline gap-4 py-2 font-display text-3xl font-semibold text-ink-800 transition hover:text-ink-950"
                >
                  <span className="text-xs font-medium text-ink-400">0{i + 1}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {link.label}
                  </span>
                  <span className="text-holo text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative mt-10 border-t border-ink-200 pt-8">
          <h2 className="font-display text-lg font-semibold text-ink-950">About us</h2>
          <p className="mt-3 text-sm leading-7 text-ink-600">
            Future IT Touch is a leading web design and development firm in Chandigarh, known
            for creating visually appealing and functioning websites. We provide responsive web
            design, e-commerce development, and custom online solutions with a customer-centric
            approach and cutting-edge technology.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 text-ink-950 hover:text-brand-pink">
                <FiPhone className="text-brand-pink" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-ink-950 hover:text-brand-pink">
                <FiMail className="text-brand-pink" /> {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-600">
              <FiMapPin className="text-brand-pink" /> {contact.city}
            </li>
          </ul>

          <ul className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-ink-950 hover:text-white"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarModal;
