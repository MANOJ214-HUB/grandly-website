"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16" style={{ background: "#FAF8F4" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Images collage */}
        <div className="relative h-[540px]">
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="img-reveal-wrap absolute top-0 left-0 w-[75%] h-[80%]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85"
              alt="Luxury Living Room"
              fill className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>

          {/* Second image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="img-reveal-wrap absolute bottom-0 right-0 w-[52%] h-[48%]"
          >
            <Image
              src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=85"
              alt="Luxury Bedroom"
              fill className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Gold frame accent */}
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[rgba(201,169,110,0.3)] hidden lg:block" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-4 -right-4 bg-[#1A1A1A] px-5 py-4 text-center border border-[rgba(201,169,110,0.28)] hidden lg:block"
          >
            <div className="font-cormorant text-4xl font-light" style={{ color: "#C9A96E" }}>#1</div>
            <div className="font-jost text-[8px] tracking-[0.22em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Rated Studio
            </div>
            <div className="font-jost text-[8px] tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
              In Kolkata
            </div>
          </motion.div>
        </div>

        {/* Text */}
        <div>
          <motion.div {...fade(0)} className="s-label">Our Story</motion.div>
          <motion.h2 {...fade(0.1)} className="s-title">
            Designing Spaces That <em>Transcend</em> the Ordinary
          </motion.h2>
          <motion.div {...fade(0.2)} className="gold-line" />
          <motion.p {...fade(0.25)} className="font-jost text-[14px] leading-[1.95]" style={{ color: "#6B6B6B" }}>
            Founded in 2010, Grandly is Kolkata&apos;s premier full-service architecture and interior design studio. We believe that exceptional spaces are born from the harmony of aesthetics, function, and enduring craftsmanship.
          </motion.p>
          <motion.p {...fade(0.35)} className="font-jost text-[14px] leading-[1.95] mt-4" style={{ color: "#6B6B6B" }}>
            Every project is a deeply personal collaboration. We listen, we envision, and we deliver spaces that are unmistakably yours — from intimate residences to landmark commercial spaces.
          </motion.p>

          <motion.div {...fade(0.4)} className="flex gap-10 mt-10">
            {[["450+", "Spaces Designed"], ["14+", "Years Experience"], ["3", "National Awards"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-cormorant text-5xl font-light" style={{ color: "#7D1C2A" }}>{n}</div>
                <div className="font-jost text-[10px] tracking-[0.15em] uppercase mt-1" style={{ color: "#6B6B6B" }}>{l}</div>
              </div>
            ))}
          </motion.div>

          <motion.button
            {...fade(0.5)}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-dark-outline mt-10"
          >
            Begin Your Journey →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
