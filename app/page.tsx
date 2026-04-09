import ShaderBackground from "@/components/ui/shader-background";
import ServiceCards from "@/components/service-cards";
import Navbar from "@/components/navbar";
import FAQ from "@/components/faq";
import Footer from "@/components/ui/footer";
import BrandIntro from "@/components/brand-intro";

export default function Home() {
  return (
    <>
      <ShaderBackground />

      <Navbar />

      <main className="relative" style={{ background: "transparent" }}>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          {/* dark scrim so text stays readable over shader */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/70 via-[#0a1929]/50 to-[#0a1929]/80 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E86C1] inline-block" />
              AI-advies voor het mkb
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              <span
                style={{
                  textShadow:
                    "0 0 20px rgba(46,134,193,0.8), 0 0 40px rgba(46,134,193,0.5), 0 0 80px rgba(46,134,193,0.3)",
                }}
              >
                AI
              </span>{" "}
              die gewoon werkt,{" "}
              <span className="text-[#2E86C1]">voor jouw bedrijf</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Wij helpen mkb-bedrijven AI echt te gebruiken. Niet als experiment,
              niet als hype, maar als een gewoon onderdeel van hoe je werkt.
              Praktisch, betaalbaar en zonder gedoe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-xl shadow-[#2E86C1]/30"
              >
                Gratis kennismaken
              </a>
              <a
                href="/resultaten"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-base hover:bg-white/15 active:scale-95 transition-all duration-150"
              >
                Bekijk hoe het werkt →
              </a>
            </div>

            <p className="text-sm tracking-wide" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              ✓ Geen jargon &nbsp;·&nbsp; ✓ Klaar in twee weken &nbsp;·&nbsp; ✓ Resultaat gegarandeerd
            </p>
          </div>
        </section>

        {/* ── BRAND INTRO ── */}
        <BrandIntro />

        {/* ── PROBLEM ── */}
        <section className="relative pt-20 pb-24" style={{ background: "transparent" }}>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3">
                De realiteit voor veel mkb-ondernemers
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                Herken jij dit?
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  icon: "🧩",
                  title: "Te veel tools, geen richting",
                  desc: "Je hebt ChatGPT geprobeerd, misschien Copilot. Maar een duidelijke aanpak? Die ontbreekt.",
                },
                {
                  icon: "⏱️",
                  title: "Geen tijd om het te leren",
                  desc: "Je runt een bedrijf. Er is geen ruimte om uren in YouTube-tutorials te stoppen.",
                },
                {
                  icon: "🤯",
                  title: "Veel te technisch uitgelegd",
                  desc: "Iedere uitleg gaat over modellen, tokens en APIs. Jij wil gewoon weten wat het oplevert.",
                },
                {
                  icon: "📉",
                  title: "Workshops zonder follow-through",
                  desc: "Na de training is iedereen enthousiast. Een week later werkt niemand er meer mee.",
                },
                {
                  icon: "🏃",
                  title: "Concurrenten lopen voor",
                  desc: "Grotere spelers automatiseren al. Als jij wacht, vergroot die voorsprong alleen maar.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-bold text-white text-sm leading-snug" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3">
                Onze aanpak
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                Wat Prkt voor jou doet
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-14" style={{ color: "rgba(255,255,255,0.92)" }}>
              {[
                "Wij adviseren niet alleen: wij implementeren ook",
                "Wij spreken de taal van omzet, marges en tijd",
                "Wij vertrekken pas als het daadwerkelijk werkt",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <span className="text-[#2E86C1] font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <ServiceCards />
          </div>
        </section>

        {/* ── AUDIENCE ── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3">
                  Doelgroep
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight mb-6">
                  Voor wie is Prkt?
                </h2>
                <p className="text-base text-[#111111]/65 leading-relaxed mb-8">
                  Prkt is gebouwd voor ondernemers die weten dat AI belangrijk is —
                  maar niet weten waar te beginnen. Geen grote corporates,
                  geen startups die leven van risicokapitaal.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#1A3A5C] text-white font-semibold text-sm hover:bg-[#142d47] active:scale-95 transition-all duration-150 shadow-lg"
                >
                  Plan een kennismakingsgesprek
                </a>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "🏢", label: "1 tot 100 medewerkers" },
                  { icon: "💶", label: "Omzet tussen €20K en €500K per maand" },
                  {
                    icon: "🏷️",
                    label: "Retail, zakelijke dienstverlening, zorg, logistiek, hospitality, e-commerce",
                  },
                  {
                    icon: "🧭",
                    label: "De ondernemer die weet dat AI belangrijk is, maar niet weet waar te beginnen",
                  },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#1A3A5C]/8 shadow-sm"
                  >
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <p className="text-sm font-medium text-[#1A3A5C] leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#0a1929]/40 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3">
              Resultaten
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-14">
              Wat het oplevert
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {[
                {
                  value: "3–4 uur",
                  label: "tijdwinst per medewerker per week",
                  note: "Gemiddeld resultaat bij onze klanten",
                },
                {
                  value: "2 weken",
                  label: "van gesprek tot werkende oplossing",
                  note: "Geen maandenlange trajecten",
                },
                {
                  value: "86%",
                  label: "van het mkb gebruikt AI nog niet",
                  note: "Jij kunt dat verschil maken",
                },
              ].map(({ value, label, note }) => (
                <div
                  key={value}
                  className="flex flex-col items-center gap-2 rounded-2xl"
                  style={{
                    padding: "32px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "16px",
                    boxShadow: "0 0 30px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="text-5xl md:text-6xl font-black text-[#2E86C1] tracking-tight leading-none">
                    {value}
                  </span>
                  <p className="text-white font-semibold text-base mt-1">{label}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ items={[
          { question: "Wat is het verschil tussen Prkt. en een gewoon AI-bureau?", answer: "Wij richten ons uitsluitend op het mkb. Geen generieke adviezen of peperdure trajecten: wij implementeren praktische oplossingen die jij volgende week al gebruikt." },
          { question: "Hoe snel zie ik resultaat?", answer: "De meeste klanten zien binnen twee weken de eerste tijdsbesparing. Onze implementaties zijn bewust klein en concreet, zodat je snel waarde ervaart." },
          { question: "Heb ik technische kennis nodig?", answer: "Nee. Wij regelen alles technisch. Jij hoeft alleen te weten wat je wil bereiken; wij vertalen dat naar een werkende oplossing." },
          { question: "Wat kost het?", answer: "Dat hangt af van het pakket dat bij jou past. Onze pakketten starten vanaf een vast maandtarief, zonder verborgen kosten. Bekijk de pakkettenpagina voor details." },
          { question: "Zit ik ergens aan vast?", answer: "Nee. Al onze pakketten zijn maandelijks opzegbaar. Wij verdienen onze plek door resultaat te leveren, niet door contracten." },
        ]} />

        {/* ── FINAL CTA ── */}
        <section className="relative py-28">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">
              Klaar om te starten?
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#1A3A5C] tracking-tight mb-6">
              Gewoon starten
            </h2>
            <p className="text-lg text-[#111111]/60 leading-relaxed mb-10">
              Plan een gratis kennismakingsgesprek. Geen verplichtingen, geen
              verkooppraatje. Gewoon kijken wat AI voor jouw bedrijf kan doen.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-lg hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-xl shadow-[#2E86C1]/30"
            >
              Plan een gratis gesprek
            </a>
            <p className="mt-6 text-sm text-[#111111]/40">
              ✓ Geen jargon &nbsp;·&nbsp; ✓ Klaar in twee weken &nbsp;·&nbsp; ✓ Resultaat gegarandeerd
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
