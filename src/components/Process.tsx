"use client";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", t: "Consultation", d: "We meet to understand your vision, requirements, and aspirations — the foundation of every great space." },
  { n: "02", t: "Site Inspection", d: "Our team visits to assess dimensions, light, flow, and unique characteristics that will inform the design." },
  { n: "03", t: "Virtual Design", d: "Detailed floor plans, photorealistic 3D renders, and material boards — you see exactly what you are getting." },
  { n: "04", t: "Execution", d: "Master craftsmen and project managers execute every detail with precision, managing all teams and timelines." },
  { n: "05", t: "Supervision", d: "Rigorous on-site checks at every milestone ensure the work matches the design perfectly, with zero compromise." },
  { n: "06", t: "Hand Over", d: "A white-glove inspection, professional styling, and the moment we hand you the keys to your dream space." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 md:px-16" style={{ background: "#0d0d0d" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="s-label">
            How We Work
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16,1,.3,1] }} className="s-title s-title-light">
            Our <em>Six-Step</em> Process
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,169,110,0.08)]">
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.85, ease: [0.16,1,.3,1] }}
              className="proc-step"
            >
              <div className="font-cinzel text-[42px] font-normal leading-none mb-5" style={{ color: "rgba(201,169,110,0.2)" }}>{s.n}</div>
              <h3 className="font-cormorant text-[22px] font-normal mb-3" style={{ color: "#fff" }}>{s.t}</h3>
              <p className="font-jost text-[13px] leading-[1.88]" style={{ color: "rgba(255,255,255,0.42)" }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
