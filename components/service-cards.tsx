"use client";

import { useState } from "react";

const services = [
  {
    tag: "Stap 1",
    title: "AI-scan",
    desc: "In één sessie brengen wij in kaart waar AI jou de meeste tijd bespaart. Concreet, eerlijk en zonder verplichtingen.",
    cta: "Meer over de scan",
  },
  {
    tag: "Stap 2",
    title: "AI-implementatie",
    desc: "Wij bouwen de oplossing in jouw bestaande werkwijze. Jij hoeft niets uit te zoeken: wij regelen het, jij plukt de vruchten.",
    cta: "Meer over implementatie",
  },
  {
    tag: "Stap 3",
    title: "AI-begeleiding",
    desc: "Maandelijkse ondersteuning zodat de tools blijven werken, het team ze blijft gebruiken en jij blijft verbeteren.",
    cta: "Meer over begeleiding",
  },
];

export default function ServiceCards() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map(({ tag, title, desc, cta }, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={title}
            onClick={() => setSelected(isSelected ? null : i)}
            className="text-left flex flex-col gap-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1]/60"
            style={{
              padding: "32px",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: isSelected
                ? "1px solid rgba(46,134,193,0.6)"
                : "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              boxShadow: isSelected
                ? "0 0 40px rgba(46,134,193,0.5), 0 0 80px rgba(46,134,193,0.2), 0 8px 32px rgba(0,0,0,0.3)"
                : "0 8px 32px rgba(0,0,0,0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(46,134,193,0.2), 0 8px 32px rgba(0,0,0,0.3)";
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.3)";
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.12)";
              }
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#2E86C1", letterSpacing: "0.15em" }}
            >
              {tag}
            </span>

            <h3 className="text-xl font-black tracking-tight text-white">
              {title}
            </h3>

            <p
              className="text-sm leading-relaxed flex-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {desc}
            </p>

            <span
              className="inline-flex items-center text-sm font-semibold mt-2"
              style={{ color: "#2E86C1" }}
            >
              {cta} →
            </span>
          </button>
        );
      })}
    </div>
  );
}
