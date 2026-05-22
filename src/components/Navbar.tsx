"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "about", label: "About" },
  { href: "services", label: "Services" },
  { href: "portfolio", label: "Portfolio" },
  { href: "process", label: "Process" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 350);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-500 ${
          scrolled ? "bg-[rgba(8,3,4,0.94)] backdrop-blur-xl shadow-2xl" : "bg-transparent"
        }`}
      >
        <a href="#" className="nav-logo">
          GRANDLY
          <span>Designers &amp; Contractors</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-9 list-none">
          {NAV.map((n) => (
            <li key={n.href}>
              <button
                onClick={() => go(n.href)}
                className="relative font-jost text-[11px] tracking-[0.22em] uppercase text-white/75 hover:text-[#C9A96E] transition-colors duration-300 bg-transparent border-none cursor-none group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-400" />
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => go("contact")} className="hidden md:inline-block btn btn-gold">
          Get Estimate
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-none p-2 z-[999]"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${open ? "open" : ""}`}>
        {NAV.map((n) => (
          <button key={n.href} onClick={() => go(n.href)}>{n.label}</button>
        ))}
        <button onClick={() => go("contact")} className="btn btn-gold mt-4 font-jost text-[10px] tracking-[0.28em] cursor-none">
          Get Estimate
        </button>
      </div>
    </>
  );
}
