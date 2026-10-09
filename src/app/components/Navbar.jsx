"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import SidebarModal from "./Slider";
import { navLinks, contact } from "../data/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const closeSidebar = useCallback(() => setShowSidebar(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "glass"
              : "border border-transparent"
          }`}
        >
          <Link href="/" aria-label="Future IT Touch home" className="shrink-0">
            <Image
              src="/images/opt/logo.webp"
              alt="Future IT Touch logo"
              width={378}
              height={96}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 glass rounded-full p-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-white hover:text-ink-950 hover:shadow-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Get in touch <FiArrowUpRight />
            </a>
            <button
              type="button"
              onClick={() => setShowSidebar(true)}
              aria-label="Open menu"
              aria-expanded={showSidebar}
              className="grid h-11 w-11 place-items-center glass rounded-full text-xl text-ink-950 transition hover:-translate-y-0.5"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      <SidebarModal
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
        contact={contact}
      />
    </>
  );
};

export default Navbar;
