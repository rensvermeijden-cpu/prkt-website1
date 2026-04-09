"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)" }}>
      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.65s ease, transform 0.65s ease",
        }}
      >
        <p
          className="font-black tracking-[0.18em] mb-6 text-4xl md:text-6xl"
          style={{
            color: "#ffffff",
            letterSpacing: "0.18em",
            textShadow:
              "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(255,255,255,0.2)",
          }}
        >
          Pr-k-t.
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          Prkt is afgeleid van het woord{" "}
          <strong
            style={{
              color: "#ffffff",
              fontWeight: 700,
              textShadow:
                "0 0 15px rgba(255,255,255,0.7), 0 0 30px rgba(255,255,255,0.3)",
            }}
          >
            praktisch
          </strong>
          . Teruggebracht tot de kern, zonder overbodige letters. Precies zoals
          wij werken. Geen opsmuk, geen wollige omschrijvingen. Gewoon Prkt, en
          iedereen snapt waar het vandaan komt.
        </p>
      </div>
    </section>
  );
}
