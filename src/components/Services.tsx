"use client";
import { motion } from "framer-motion";

const SVCS = [
  { n: "01", icon: "🏛", title: "Residential Interiors", desc: "From intimate apartments to grand villas, we craft living spaces that reflect your personality and elevate daily life to an art form." },
  { n: "02", icon: "🏢", title: "Commercial Design", desc: "Offices, cafés, restaurants, and retail spaces that command attention, inspire productivity, and leave lasting first impressions." },
  { n: "03", icon: "📐", title: "Architecture", desc: "Full architectural services from concept to completion. Structures that are timeless in aesthetic and uncompromising in quality." },
  { n: "04", icon: "🎨", title: "3D Visualisation", desc: "Photorealistic renders and walkthroughs so you experience every detail of your space before a single brick is laid." },
  { n: "05", icon: "🔨", title: "Turnkey Execution", desc: "From design to the final coat of paint. We manage every contractor, vendor, and detail so you don't have to." },
  { n: "06", icon: "💡", title: "Design Consultancy", desc: "Expert guidance, mood boards, and space planning — professional direction for any scale of project." },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="s-label">
            What We Do
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16,1,.3,1] }} className="s-title">
            Our <em>Expertise</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="font-jost text-[14px] leading-[1.9] mt-4" style={{ color: "#6B6B6B" }}>
            Six core disciplines, one unified vision — spaces of enduring beauty and extraordinary function.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,169,110,0.18)]">
          {SVCS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.8, ease: [0.16,1,.3,1] }}
              className="svc-card"
            >
              <div className="font-cinzel text-[10px] tracking-[0.22em] mb-5" style={{ color: "#C9A96E" }}>{s.n}</div>
              <span className="text-3xl block mb-5">{s.icon}</span>
              <h3 className="font-cormorant text-[26px] font-normal mb-3 leading-tight" style={{ color: "#1A1A1A" }}>{s.title}</h3>
              <p className="font-jost text-[13px] leading-[1.85]" style={{ color: "#6B6B6B" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
