"use client";

const PROJ = ["Urbana Penthouse","Emerald Residence","Sapphire Villa","Panache","Park Street Residence","Alipore Bungalow"];
const SVCS = ["Turnkey Execution","3D / 2D Design","Consultancy","Commercial Design","Residential Design","Architecture"];
const CO = ["About Us","Awards","Blog","Contact Us","Privacy Policy"];

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", color: "rgba(255,255,255,0.5)" }}>
      <div className="px-6 md:px-16 py-16 border-b border-white/6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="nav-logo mb-5">GRANDLY<span>Designers &amp; Contractors</span></div>
            <p className="font-jost text-[12px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.38)" }}>
              A full-service Architecture and Interior Design Studio in Kolkata. Creating Functional, Luxurious, and Timeless spaces since 2010.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { l: "fb", h: "https://www.facebook.com/grandly2020/" },
                { l: "ig", h: "https://www.instagram.com/grandly_interior/" },
                { l: "pt", h: "https://in.pinterest.com/grandly_interiors/" },
              ].map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" className="soc-btn">{s.l}</a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-cinzel text-[11px] tracking-[0.22em] mb-6" style={{ color: "#C9A96E" }}>Projects</h4>
            {PROJ.map((l) => <a key={l} href="#portfolio" className="foot-link">{l}</a>)}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-[11px] tracking-[0.22em] mb-6" style={{ color: "#C9A96E" }}>Services</h4>
            {SVCS.map((l) => <a key={l} href="#services" className="foot-link">{l}</a>)}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-cinzel text-[11px] tracking-[0.22em] mb-6" style={{ color: "#C9A96E" }}>Company</h4>
            {CO.map((l) => <a key={l} href="#" className="foot-link">{l}</a>)}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-jost text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Grandly Interiors. All Rights Reserved.
          </span>
          <span className="font-jost text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            965 Jessore Road, DumDum, Kolkata 700055 &nbsp;·&nbsp;
            <a href="tel:+919147711102" className="hover:text-[#C9A96E] transition-colors">+91 9147711102</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
