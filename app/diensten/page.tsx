import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
import Link from "next/link";
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

const services = [
  {
    tag: "Stap 1",
    title: "AI-scan",
    icon: "🔍",
    duration: "1 sessie · ca. 30 minuten",
    desc: "Voordat je investeert, wil je weten wat het oplevert. De AI-scan geeft je in één sessie een helder beeld van waar AI jou de meeste tijd en geld bespaart. Specifiek voor jouw bedrijf, jouw sector en jouw werkwijze.",
    includes: [
      "Analyse van jouw huidige werkprocessen",
      "Identificatie van de drie grootste AI-kansen",
      "Concreet rapport met prioriteiten en verwachte tijdwinst",
      "Eerlijk advies, ook als AI nu nóg niet de juiste stap is",
    ],
    cta: "Start met een AI-scan",
  },
  {
    tag: "Stap 2",
    title: "AI-implementatie",
    icon: "⚙️",
    duration: "2–4 weken · van start tot live",
    desc: "Na de scan weet je wat er moet gebeuren. Wij bouwen het voor je: van keuze voor de juiste tool tot volledige integratie in jouw bestaande werkwijze. Geen gedoe, geen technische rompslomp. Jij hoeft alleen maar ja te zeggen.",
    includes: [
      "Selectie van de juiste tools en aanpak",
      "Bouwen en instellen van de AI-oplossing",
      "Integratie met jouw bestaande software",
      "Training van jouw team zodat iedereen het gebruikt",
      "Oplevering inclusief documentatie",
    ],
    cta: "Vraag een offerte aan",
  },
  {
    tag: "Stap 3",
    title: "AI-begeleiding",
    icon: "🧭",
    duration: "Maandelijks · doorlopend",
    desc: "AI-tools veranderen snel. Jouw bedrijf ook. Met maandelijkse begeleiding zorg je ervoor dat de oplossingen blijven werken, up-to-date zijn en dat je altijd een aanspreekpunt hebt als er vragen zijn.",
    includes: [
      "Maandelijks check-in gesprek",
      "Doorontwikkeling en optimalisatie",
      "Updates en aanpassingen bij nieuwe mogelijkheden",
      "Onbeperkt e-mail support",
      "Prioritaire toegang bij urgente vragen",
    ],
    cta: "Meer over begeleiding",
  },
];

export default function Diensten() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">Wat wij doen</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Onze diensten
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Drie stappen van probleem naar werkende oplossing. Praktisch, snel en zonder gedoe.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-8">
            {services.map(({ tag, title, icon, duration, desc, includes, cta }) => (
              <div key={title} style={{ ...glass, padding: "40px" }} className="flex flex-col md:flex-row gap-10">
                <div className="md:w-2/5 flex flex-col gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#2E86C1" }}>{tag}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{title}</h2>
                  </div>
                  <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{duration}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{desc}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center self-start mt-2 px-6 py-3 rounded-full bg-[#2E86C1] text-white font-semibold text-sm hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-lg shadow-[#2E86C1]/25"
                  >
                    {cta}
                  </Link>
                </div>
                <div className="md:w-3/5 flex flex-col gap-3 justify-center">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Wat je krijgt</p>
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-[#2E86C1] font-bold flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight mb-4">Niet zeker waar te beginnen?</h2>
            <p className="text-[#111111]/60 mb-8 leading-relaxed">Begin met een gratis kennismakingsgesprek. Wij kijken samen wat de beste eerste stap is voor jouw bedrijf.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-xl shadow-[#2E86C1]/30">
              Plan een gratis gesprek
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={[
          { question: "Wat is een AI-scan precies?", answer: "Een AI-scan is een online gesprek van circa 30 minuten waarbij wij samen met jou door jouw werkprocessen lopen. Wij identificeren de drie grootste kansen voor tijdsbesparing of kostenreductie en leveren een concreet rapport op." },
          { question: "Hoe lang duurt een implementatie?", answer: "De meeste implementaties duren twee tot vier weken. We beginnen klein en concreet, zodat je snel resultaat ziet. Complexere trajecten plannen we in overleg." },
          { question: "Kan ik starten met alleen de AI-scan?", answer: "Ja, absoluut. De AI-scan is een zelfstandige dienst. Er is geen verplichting om daarna door te gaan met implementatie." },
          { question: "Wat valt er onder de maandelijkse begeleiding?", answer: "Check-in gesprekken, doorontwikkeling van de oplossingen, updates bij nieuwe mogelijkheden en onbeperkt e-mail support. Je hebt altijd een aanspreekpunt." },
          { question: "Werken jullie met vaste prijzen?", answer: "Ja. Bekijk onze pakkettenpagina voor de tarieven. Geen verrassingen achteraf." },
        ]} />

        <Footer />
      </main>
    </>
  );
}
