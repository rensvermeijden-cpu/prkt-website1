"use client";

import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight, CheckCircle, ShieldCheck, Sliders, Star } from "lucide-react";
import Footer from "@/components/ui/footer";

// ── Shared styles ─────────────────────────────────────────────
const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

// ── FAQ accordion ─────────────────────────────────────────────
const faqs = [
  {
    q: "Wat als ik niet weet welk pakket bij mij past?",
    a: "Dat is precies waarom we beginnen met een gratis kennismakingsgesprek. Daarna weet je het.",
  },
  {
    q: "Zijn er maandelijkse kosten na de implementatie?",
    a: "Nee, tenzij je kiest voor Pakket 3 of Op Maat waarbij doorlopende begeleiding is inbegrepen. Anders betaal je eenmalig.",
  },
  {
    q: "Hoe snel is de implementatie klaar?",
    a: "Pakket 1 en 2 zijn doorgaans binnen 1–2 weken afgerond. Pakket 3 en Op Maat zijn afhankelijk van de scope.",
  },
  {
    q: "Werkt dit ook voor mijn branche?",
    a: "Wij werken voor retail, zorg, zakelijke dienstverlening, logistiek, hospitality en e-commerce. Twijfel je? Vraag het gewoon.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          style={{
            background: open === i ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.09)",
            border: open === i ? "1px solid rgba(46,134,193,0.35)" : "1px solid rgba(255,255,255,0.12)",
            borderRadius: "14px",
            overflow: "hidden",
            transition: "background 0.2s, border-color 0.2s",
          }}
          className="cursor-pointer"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="flex items-center justify-between px-6 py-5 gap-4">
            <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.05rem", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{q}</p>
            <ChevronDown
              size={18}
              className="text-[#2E86C1] flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </div>
          {open === i && (
            <div className="px-6 pb-5">
              <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "1rem", lineHeight: 1.75, textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Package card ──────────────────────────────────────────────
interface PackageProps {
  tag?: string;
  tagStyle?: React.CSSProperties;
  price: string;
  subtitle: string;
  description: string;
  includes: string[];
  suitableFor: string;
  ctaLabel: string;
  ctaFilled?: boolean;
  cardStyle?: React.CSSProperties;
  popular?: boolean;
}

function PackageCard({
  tag, tagStyle, price, subtitle, description, includes, suitableFor, ctaLabel, ctaFilled, cardStyle, popular,
}: PackageProps) {
  return (
    <div className="relative flex flex-col h-full">
      {/* Popular badge — sits above card */}
      {popular && (
        <div className="flex justify-center mb-3">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white"
            style={{ background: "#2E86C1", boxShadow: "0 4px 16px rgba(46,134,193,0.4)" }}
          >
            Meest gekozen
          </span>
        </div>
      )}
      <div
        className="flex flex-col flex-1 transition-all duration-300"
        style={{
          ...glass,
          ...(popular
            ? {
                border: "1.5px solid rgba(46,134,193,0.55)",
                boxShadow: "0 0 32px rgba(46,134,193,0.18), 0 8px 32px rgba(0,0,0,0.3)",
              }
            : {}),
          ...cardStyle,
          padding: "36px",
        }}
      >
        {/* Tag */}
        {tag && (
          <span
            className="self-start mb-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
            style={tagStyle ?? { color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {tag}
          </span>
        )}

        {/* Price */}
        <p className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">{price}</p>
        <p className="text-xs mb-5 leading-snug" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{subtitle}</p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{description}</p>

        {/* Divider */}
        <div className="mb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

        {/* Includes */}
        <div className="flex flex-col gap-2.5 flex-1 mb-6">
          {includes.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle size={14} className="text-[#2E86C1] flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Suitable for */}
        <p className="text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
          Geschikt voor
        </p>
        <p className="text-xs italic mb-6" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{suitableFor}</p>

        {/* CTA */}
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95 ${
            ctaFilled
              ? "bg-[#2E86C1] text-white hover:bg-[#2472a8] shadow-lg shadow-[#2E86C1]/30 hover:shadow-[#2E86C1]/50"
              : "text-white hover:bg-white/8"
          }`}
          style={
            ctaFilled
              ? {}
              : { border: "1px solid rgba(255,255,255,0.22)" }
          }
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function Pakketten() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* ── HERO ── */}
        <section className="relative flex items-center justify-center py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">Pakketten</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Wat past bij jouw bedrijf?
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Vier pakketten, één doel: AI die gewoon werkt voor jouw bedrijf.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3 text-center">Hoe het werkt</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight text-center mb-5">
              Eerst begrijpen we jouw situatie
            </h2>
            <p className="text-base text-[#111111]/60 leading-relaxed text-center max-w-2xl mx-auto mb-10">
              Elk bedrijf is anders. Daarom beginnen we altijd met een gratis kennismakingsgesprek. Wij luisteren naar de pijnpunten waar jij tegenaan loopt, en bepalen dan samen welk pakket het beste bij jou past. De pakketten hieronder zijn een richtlijn. Na het gesprek weet je precies waar je aan toe bent.
            </p>

            {/* 3-step flow */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              {[
                { num: 1, title: "Gratis kennismakingsgesprek", sub: "Wij luisteren naar jouw situatie" },
                { num: 2, title: "Wij bepalen samen jouw pakket", sub: "Op basis van jouw pijnpunten" },
                { num: 3, title: "We gaan aan de slag", sub: "Praktisch, snel en zonder gedoe" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center text-center px-6 py-5 rounded-xl bg-white border border-[#1A3A5C]/10 shadow-sm" style={{ minWidth: "175px" }}>
                    <span className="w-7 h-7 rounded-full bg-[#2E86C1] text-white text-xs font-black flex items-center justify-center mb-3">{step.num}</span>
                    <p className="font-bold text-[#1A3A5C] text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-[#111111]/50 leading-snug">{step.sub}</p>
                  </div>
                  {i < 2 && <ArrowRight size={16} className="text-[#2E86C1] flex-shrink-0 hidden sm:block" />}
                </div>
              ))}
            </div>

            <p className="text-center text-sm italic" style={{ color: "rgba(27,58,92,0.5)" }}>
              De meeste mkb-bedrijven kiezen Pakket 2, maar dat bepalen we altijd samen.
            </p>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              <PackageCard
                price="€500 – €750"
                subtitle="Eerste stappen met AI"
                description="Voor bedrijven die klein willen beginnen en één specifiek pijnpunt willen oplossen."
                includes={[
                  "Kennismakingsgesprek en analyse van jouw situatie",
                  "Identificeren van één concreet AI-verbeterpunt",
                  "Implementatie van één AI-oplossing",
                  "Korte handleiding voor het team",
                ]}
                suitableFor="Bedrijven met een duidelijk afgebakend probleem"
                ctaLabel="Plan een gesprek"
              />

              <PackageCard
                popular
                price="€800 – €1.100"
                subtitle="De slimste keuze voor de meeste mkb-bedrijven"
                description="Voor bedrijven die meerdere terugkerende taken willen automatiseren en direct merkbaar resultaat willen."
                includes={[
                  "Kennismakingsgesprek en diepgaande procesanalyse",
                  "Identificeren van 2 tot 3 AI-verbeterpunten",
                  "Implementatie van meerdere AI-oplossingen",
                  "Training voor het team",
                  "Twee weken nazorg na oplevering",
                ]}
                suitableFor="Bedrijven die serieus tijdwinst willen boeken"
                ctaLabel="Plan een gesprek"
                ctaFilled
              />

              <PackageCard
                price="€1.300 – €2.000"
                subtitle="Volledige AI-integratie in jouw bedrijf"
                description="Voor bedrijven die meerdere afdelingen of werkprocessen willen optimaliseren met AI."
                includes={[
                  "Uitgebreide analyse van alle werkprocessen",
                  "AI-strategie op maat voor het hele bedrijf",
                  "Implementatie van meerdere AI-oplossingen door het hele bedrijf",
                  "Teamtraining voor alle medewerkers",
                  "Maandelijkse evaluatie en bijsturing (eerste maand inbegrepen)",
                ]}
                suitableFor="Bedrijven die AI bedrijfsbreed willen doorvoeren"
                ctaLabel="Plan een gesprek"
              />

              <PackageCard
                tag="Enterprise"
                tagStyle={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.15)" }}
                price="Prijs op aanvraag"
                subtitle="Voor complexe, grootschalige trajecten"
                description="Voor organisaties waarbij alles op de schop gaat. Denk aan volledige procesherziening, meerdere vestigingen of diepgaande integraties met bestaande systemen."
                includes={[
                  "Volledig maatwerk traject",
                  "Analyse van de hele organisatie",
                  "Gefaseerde implementatie over meerdere weken of maanden",
                  "Dedicated Prkt-adviseur gedurende het hele traject",
                  "Doorlopende begeleiding en evaluatie",
                ]}
                suitableFor="Grote trajecten waarbij de hele organisatie verandert"
                ctaLabel="Neem contact op"
                cardStyle={{ border: "1px solid rgba(255,255,255,0.18)" }}
              />
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm italic" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Deze pakketten zijn een richtlijn. Na jouw kennismakingsgesprek bepalen we samen precies wat jouw bedrijf nodig heeft, en wat het kost. Geen verrassingen achteraf.
            </p>
          </div>
        </section>

        {/* ── REASSURANCE ICONS ── */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck size={28} className="text-[#2E86C1]" />, title: "Geen verborgen kosten", desc: "De prijs die wij noemen is de prijs die je betaalt. Geen verrassingen." },
                { icon: <Sliders size={28} className="text-[#2E86C1]" />, title: "Altijd maatwerk", desc: "Elk traject wordt afgestemd op jouw specifieke situatie en werkwijze." },
                { icon: <Star size={28} className="text-[#2E86C1]" />, title: "Resultaat gegarandeerd", desc: "Wij vertrekken pas als de oplossing daadwerkelijk werkt voor jouw team." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white border border-[#1A3A5C]/8 shadow-sm">
                  {icon}
                  <h3 className="font-bold text-[#1A3A5C] text-sm">{title}</h3>
                  <p className="text-sm text-[#111111]/55 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3 text-center">Veelgestelde vragen</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-10">
              Alles op een rij
            </h2>
            <FAQ />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight mb-4">
              Nog niet zeker welk pakket?
            </h2>
            <p className="text-[#111111]/60 mb-8 leading-relaxed">
              Plan een gratis kennismakingsgesprek. Wij helpen je kiezen, zonder verplichtingen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] hover:shadow-[0_0_24px_rgba(46,134,193,0.45)] active:scale-95 transition-all duration-200 shadow-xl shadow-[#2E86C1]/30"
            >
              Plan een gratis gesprek
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
