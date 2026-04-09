"use client";

import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
import { useState } from "react";
import FAQ from "@/components/faq";
import Footer from "@/components/ui/footer";

const glass = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
} as React.CSSProperties;

const inputStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  color: "white",
  padding: "12px 16px",
  width: "100%",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.15s ease",
} as React.CSSProperties;

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Gratis kennismaken
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Geen verplichtingen, geen verkooppraatje. Gewoon kijken wat AI voor jouw bedrijf kan doen.
            </p>
          </div>
        </section>

        {/* Form + Contact info */}
        <section className="relative py-16 pb-28">
          <div className="absolute inset-0 bg-[#0a1929]/45 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-start">

            {/* Form */}
            <div className="md:col-span-3" style={{ ...glass, padding: "40px" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <span className="text-5xl">✅</span>
                  <h2 className="text-2xl font-black text-white">Bericht ontvangen!</h2>
                  <p style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }} className="text-sm leading-relaxed">
                    Wij nemen binnen één werkdag contact met je op. Tot snel.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Naam *</label>
                      <input required type="text" placeholder="Jan de Vries" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(46,134,193,0.6)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Bedrijfsnaam *</label>
                      <input required type="text" placeholder="Jouw Bedrijf BV" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(46,134,193,0.6)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>E-mailadres *</label>
                      <input required type="email" placeholder="jan@bedrijf.nl" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(46,134,193,0.6)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Telefoonnummer <span style={{ color: "rgba(255,255,255,0.3)" }}>(optioneel)</span></label>
                      <input type="tel" placeholder="+31 6 12345678" style={inputStyle} onFocus={e => (e.target.style.borderColor = "rgba(46,134,193,0.6)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Vraag of opmerking</label>
                    <textarea
                      rows={5}
                      placeholder="Vertel kort over jouw bedrijf en wat je wil bereiken met AI..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(46,134,193,0.6)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-lg shadow-[#2E86C1]/30 self-start"
                  >
                    Verstuur bericht
                  </button>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Wij reageren binnen één werkdag. Geen spam, geen verkooplijsten.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {[
                {
                  icon: "✉️",
                  label: "E-mail",
                  value: "hallo@prkt.nl",
                  note: "Wij reageren binnen één werkdag",
                },
                {
                  icon: "📞",
                  label: "Telefoon",
                  value: "+31 (0)20 123 4567",
                  note: "Ma–vr · 09:00–17:30",
                },
                {
                  icon: "💻",
                  label: "Werkwijze",
                  value: "Volledig online",
                  note: "Via videogesprekken, geen locatiebezoek",
                },
              ].map(({ icon, label, value, note }) => (
                <div key={label} style={{ ...glass, padding: "24px" }} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{note}</p>
                  </div>
                </div>
              ))}

              <div style={{ ...glass, padding: "24px" }} className="flex flex-col gap-3 mt-2">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>Hoe het gaat</p>
                {[
                  "Jij stuurt een bericht",
                  "Wij plannen een gesprek van 30 min",
                  "Samen kijken we wat AI voor jou kan doen",
                  "Geen verplichting, wel veel inzicht",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2E86C1]/20 border border-[#2E86C1]/40 flex items-center justify-center text-[#2E86C1] text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={[
          { question: "Hoe snel reageren jullie?", answer: "Wij reageren altijd binnen één werkdag. De meeste berichten beantwoorden wij dezelfde dag nog." },
          { question: "Wat gebeurt er na het kennismakingsgesprek?", answer: "Na het gesprek sturen wij een korte samenvatting en een voorstel voor vervolgstappen. Geen verplichting, geen offerte die je moet afwijzen." },
          { question: "Kan ik ook gewoon bellen?", answer: "Ja, dat kan. Ons telefoonnummer staat hierboven. Liever een terugbelverzoek? Vermeld dat in het formulier." },
          { question: "Werken jullie ook op locatie?", answer: "Wij werken volledig online. De meeste trajecten verlopen via videogesprekken. Een fysiek gesprek is niet nodig en niet standaard onderdeel van onze dienstverlening." },
        ]} />

        <Footer />
      </main>
    </>
  );
}
