"use client";
import { motion } from "framer-motion";

const stats = [
  { n: "450+", l: "Projects Completed" },
  { n: "14", l: "Years of Excellence" },
  { n: "98%", l: "Client Satisfaction" },
  { n: "3", l: "National Awards" },
];

export default function StatsStrip() {
  return (
    <div className="bg-[#111] text-white">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`py-12 px-8 text-center ${i < stats.length - 1 ? "border-r border-white/8" : ""}`}
          >
            <div className="stat-n">{s.n}</div>
            <div className="font-jost text-[10px] tracking-[0.22em] uppercase mt-2" style={{ color: "rgba(255,255,255,0.42)" }}>
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
