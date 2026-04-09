"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  unit: string;
  label: string;
  description: string;
}

function Counter({ target, unit, label, description }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-2 p-8 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex items-end gap-1 leading-none">
        <span
          className="text-5xl md:text-6xl font-black tracking-tight"
          style={{ color: "#2E86C1" }}
        >
          {count}
        </span>
        <span
          className="text-2xl font-black mb-1"
          style={{ color: "rgba(46,134,193,0.7)" }}
        >
          {unit}
        </span>
      </div>
      <p className="text-white font-semibold text-sm mt-1">{label}</p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.90)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
        {description}
      </p>
    </div>
  );
}

const stats: Stat[] = [
  { target: 8,  unit: "uur", label: "tijdwinst per week",             description: "Gemiddeld per medewerker na implementatie" },
  { target: 40, unit: "%",   label: "minder e-mails",                 description: "Door automatische afhandeling van veelgestelde vragen" },
  { target: 2,  unit: "wkn", label: "van start tot werkend",          description: "Geen maandenlange trajecten" },
  { target: 23, unit: "%",   label: "hogere marge",                   description: "Door tijdsbesparing omgezet naar meer klanten" },
  { target: 6,  unit: "wkn", label: "terugverdientijd",               description: "Gemiddelde ROI-periode bij onze klanten" },
  { target: 86, unit: "%",   label: "van het mkb gebruikt AI nog niet", description: "Jij kunt dat verschil maken" },
];

export default function StatsCounter() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10,25,41,0.5)" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "#2E86C1" }}
          >
            Resultaten in cijfers
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Wat het oplevert
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
            Concrete tijdwinst en financieel resultaat, bij bedrijven zoals het jouwe.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
