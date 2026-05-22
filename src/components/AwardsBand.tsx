"use client";

const AWARDS = [
  "Best Interior Studio — West Bengal 2023",
  "Asia's Top 5 Architectural Design",
  "IDA Gold Award 2022",
  "Luxury Interior Brand of the Year",
  "IIID Excellence Award",
  "Forbes India Recognized Studio",
  "Architectural Digest Featured",
];

export default function AwardsBand() {
  return (
    <div className="py-5 overflow-hidden" style={{ background: "linear-gradient(90deg,#5A1219,#7D1C2A,#A82535,#7D1C2A,#5A1219)" }}>
      <div className="marquee-track">
        {[...AWARDS, ...AWARDS].map((a, i) => (
          <span key={i} className="flex items-center gap-5 px-8 font-jost text-[10px] tracking-[0.32em] uppercase whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
            <span style={{ color: "#C9A96E" }}>✦</span>
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
