"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90"
          alt="Luxury Interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Deep overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(58,10,15,0.85)] via-[rgba(90,18,25,0.78)] to-[rgba(26,26,26,0.9)]" />
      </motion.div>

      {/* Texture */}
      <div className="hero-texture" />

      {/* Arch */}
      <div className="hero-arch hidden md:block" />

      {/* Corner ornaments */}
      {[
        "top-24 left-8 border-l border-t",
        "top-24 right-8 border-r border-t",
        "bottom-16 left-8 border-l border-b",
        "bottom-16 right-8 border-r border-b",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-14 h-14 ${cls} border-[rgba(201,169,110,0.28)] hidden lg:block`} />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-jost text-[10px] tracking-[0.42em] uppercase mb-7"
          style={{ color: "#C9A96E" }}
        >
          Architecture &amp; Interior Design Studio — Kolkata
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-white leading-[1.04] mb-5"
          style={{ fontSize: "clamp(52px, 8vw, 108px)" }}
        >
          Where Spaces
          <br />
          <em className="italic" style={{ color: "#E8D5A3" }}>Tell Stories</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-cormorant font-light italic mb-14"
          style={{ fontSize: "clamp(17px, 2.4vw, 25px)", color: "rgba(255,255,255,0.58)" }}
        >
          Luxury Interiors &amp; Architecture, Crafted for the Discerning Few
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <button onClick={() => go("portfolio")} className="btn btn-gold">View Portfolio</button>
          <button onClick={() => go("contact")} className="btn btn-white-outline">Start a Project</button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="scroll-hint">Scroll</div>
    </section>
  );
}
