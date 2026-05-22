"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.85, ease: [0.16,1,.3,1] },
});

export default function Contact() {
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16" style={{ background: "#1a0508" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left info */}
        <div>
          <motion.div {...fade(0)} className="s-label" style={{ color: "rgba(201,169,110,0.8)" }}>Reach Out</motion.div>
          <motion.h2 {...fade(0.1)} className="s-title s-title-light">
            Let&apos;s Create<br /><em>Something Exceptional</em>
          </motion.h2>
          <motion.div {...fade(0.2)} className="gold-line" />
          <motion.p {...fade(0.25)} className="font-jost text-[14px] leading-[1.95]" style={{ color: "rgba(255,255,255,0.48)" }}>
            Every great space begins with a single conversation. Tell us about your vision and we&apos;ll bring it to life with craft, precision, and artistry.
          </motion.p>

          <div className="mt-10 space-y-6">
            {[
              { icon: "📍", label: "Address", val: "965, Jessore Road, DumDum, Kolkata — 700055" },
              { icon: "📞", label: "Phone", val: "+91 9147711102" },
              { icon: "✉", label: "Email", val: "info@grandly.co.in" },
              { icon: "🕐", label: "Hours", val: "Mon – Sat, 10:00 AM – 7:00 PM" },
            ].map((c, i) => (
              <motion.div key={i} {...fade(0.3 + i * 0.08)} className="flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border text-lg" style={{ borderColor: "rgba(201,169,110,0.22)" }}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-jost text-[9px] tracking-[0.28em] uppercase mb-1" style={{ color: "#C9A96E" }}>{c.label}</div>
                  <div className="font-jost text-[13px]" style={{ color: "rgba(255,255,255,0.62)" }}>{c.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div {...fade(0.15)}>
          <div className="font-cormorant text-[24px] font-light mb-8" style={{ color: "#fff" }}>Send Us Your Requirement</div>

          {done ? (
            <div className="py-20 text-center border" style={{ borderColor: "rgba(201,169,110,0.25)" }}>
              <div className="font-cormorant text-4xl font-light mb-3" style={{ color: "#C9A96E" }}>Thank You</div>
              <p className="font-jost text-[12px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="f-label">Your Name</label>
                  <input className="f-input" type="text" placeholder="Full name" required />
                </div>
                <div>
                  <label className="f-label">Phone Number</label>
                  <input className="f-input" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="f-label">Email Address</label>
                <input className="f-input" type="email" placeholder="email@example.com" required />
              </div>
              <div>
                <label className="f-label">Project Type</label>
                <select className="f-input" defaultValue="">
                  <option value="" disabled>Select project type</option>
                  <option>Residential Interior</option>
                  <option>Commercial Space</option>
                  <option>Bungalow / Villa</option>
                  <option>Office Interior</option>
                  <option>Café / Restaurant</option>
                  <option>Architecture</option>
                  <option>Consultancy Only</option>
                </select>
              </div>
              <div>
                <label className="f-label">Tell Us About Your Project</label>
                <textarea className="f-input" placeholder="Describe your space, style preferences, budget range, and timeline…" rows={4} style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="btn btn-gold w-full mt-2">Send Enquiry →</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
