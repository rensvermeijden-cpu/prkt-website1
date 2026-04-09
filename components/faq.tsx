"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10,25,41,0.5)" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "#2E86C1", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
          >
            Veelgestelde vragen
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white tracking-tight"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
          >
            Alles wat je wil weten
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: open === i ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.09)",
                border: open === i
                  ? "1px solid rgba(46,134,193,0.35)"
                  : "1px solid rgba(255,255,255,0.12)",
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    lineHeight: 1.4,
                    textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: open === i ? "#2E86C1" : "rgba(255,255,255,0.12)",
                    color: "white",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
