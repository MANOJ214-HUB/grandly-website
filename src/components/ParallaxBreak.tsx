"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative h-[55vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1800&q=85"
          alt="Luxury Space"
          fill className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(90,18,25,0.65)" }} />
      </motion.div>

      {/* Quote overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="font-jost text-[9px] tracking-[0.42em] uppercase mb-5" style={{ color: "#C9A96E" }}>
          Our Philosophy
        </div>
        <p className="font-cormorant font-light italic text-white" style={{ fontSize: "clamp(24px, 4vw, 52px)", maxWidth: "760px", lineHeight: 1.4 }}>
          &ldquo;We don&apos;t just design rooms. We design the way light falls at dusk, the texture beneath your fingertips, the silence between moments.&rdquo;
        </p>
        <div className="font-jost text-[10px] tracking-[0.3em] uppercase mt-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          — Founders, Grandly Studio
        </div>
      </div>
    </div>
  );
}
