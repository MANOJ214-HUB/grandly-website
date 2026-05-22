"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    text: "Grandly transformed our house into a space that feels both timeless and deeply personal. Every detail exceeded our expectations — a truly world-class experience.",
    author: "Rohit & Priya Sharma",
    project: "Park Street Residence, Kolkata",
  },
  {
    text: "The team's attention to detail and commitment to our vision was extraordinary. Our commercial space has received endless compliments since the redesign.",
    author: "Suresh Bhatia",
    project: "8th Day Café, Salt Lake",
  },
  {
    text: "From consultation to handover, the process was seamless. The 3D visualisation meant zero surprises — exactly what we envisioned, delivered flawlessly.",
    author: "Aditya & Meena Kapoor",
    project: "Emerald Residence Project",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const change = (i: number) => setActive(i);

  return (
    <div className="relative py-28 px-6 overflow-hidden text-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=70"
          alt="bg"
          fill className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(58,10,15,0.93), rgba(90,18,25,0.9), rgba(26,26,26,0.95))" }} />
      </div>
      <div className="hero-texture" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Big quote */}
        <div className="font-cormorant leading-none mb-[-20px] opacity-15" style={{ fontSize: "140px", color: "#C9A96E" }}>&ldquo;</div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="testi-text"
          >
            {TESTIMONIALS[active].text}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            <div className="font-cinzel text-[13px] tracking-[0.18em]" style={{ color: "#C9A96E" }}>
              {TESTIMONIALS[active].author}
            </div>
            <div className="font-jost text-[10px] tracking-[0.22em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
              {TESTIMONIALS[active].project}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => change(i)}
              className="transition-all duration-400 border-none cursor-none"
              style={{
                width: active === i ? "36px" : "8px",
                height: "2px",
                background: active === i ? "#C9A96E" : "rgba(255,255,255,0.22)",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
