"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Urbana Penthouse",
    type: "Residential • 4,200 sq ft",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
    h: "520px",
    span: "lg:row-span-2",
  },
  {
    title: "8th Day Café",
    type: "Commercial • 1,800 sq ft",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85",
    h: "340px",
    span: "",
  },
  {
    title: "Emerald Residence",
    type: "Residential • 6,000 sq ft",
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=85",
    h: "340px",
    span: "",
  },
  {
    title: "Park Street Office",
    type: "Commercial • 3,500 sq ft",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    h: "340px",
    span: "",
  },
  {
    title: "Alipore Bungalow",
    type: "Architecture • 8,500 sq ft",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85",
    h: "520px",
    span: "lg:row-span-2",
  },
  {
    title: "Sapphire Villa",
    type: "Residential • 5,200 sq ft",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85",
    h: "340px",
    span: "",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 md:px-16" style={{ background: "#FAF8F4" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="s-label">
              Our Work
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16,1,.3,1] }} className="s-title">
              Selected <em>Projects</em>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="font-jost text-[13px] leading-[1.85] max-w-xs" style={{ color: "#6B6B6B" }}>
            Luxury is not excess — it is the absence of everything unnecessary.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-rows-[340px_180px_340px]">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.9, ease: [0.16,1,.3,1] }}
              className={`port-item ${p.span}`}
              style={{ height: p.h }}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="port-overlay">
                <div className="port-title">{p.title}</div>
                <div className="port-cat">{p.type}</div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="font-jost text-[9px] tracking-[0.3em] uppercase text-white/70">View Project</span>
                  <span className="text-[#C9A96E]">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="text-center mt-14">
          <button className="btn btn-dark-outline">View All 40+ Projects →</button>
        </motion.div>
      </div>
    </section>
  );
}
