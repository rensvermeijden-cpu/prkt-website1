import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
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

const problems = [
  { icon: "🧩", title: "Te veel tools, geen richting", desc: "Je hebt van alles geprobeerd. ChatGPT, Copilot, misschien een workshop. Maar een duidelijk plan? Dat ontbreekt." },
  { icon: "⏱️", title: "Geen tijd om het te leren", desc: "Je runt een bedrijf. Er is geen ruimte om uren in tutorials te stoppen of uit te zoeken wat wél werkt." },
  { icon: "🤯", title: "Veel te technisch uitgelegd", desc: "Iedere uitleg gaat over modellen, tokens en API's. Jij wil gewoon weten wat het concreet oplevert voor jouw bedrijf." },
  { icon: "📉", title: "Workshops zonder follow-through", desc: "Na de training is iedereen enthousiast. Een week later werkt niemand er meer mee. Het blijft niet hangen." },
  { icon: "🏃", title: "Grote concurrenten lopen voor", desc: "Grotere spelers automatiseren al volop. Als jij wacht, wordt die voorsprong alleen maar groter." },
];

const values = [
  { icon: "⚙️", label: "Praktisch", desc: "Geen theorie. Wij bouwen wat werkt in jouw situatie." },
  { icon: "🤝", label: "Menselijk", desc: "Geen jargon. Gewoon duidelijke taal en eerlijk advies." },
  { icon: "🎯", label: "Resultaatgericht", desc: "Wij meten succes in uren bespaard en omzet gewonnen." },
  { icon: "🚪", label: "Toegankelijk", desc: "Voor elk mkb-bedrijf. Niet alleen voor tech-savvy teams." },
  { icon: "🔒", label: "Betrouwbaar", desc: "Wij vertrekken pas als het daadwerkelijk werkt." },
];

export default function WaaromPrkt() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">Over ons</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Waarom Prkt?
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Wij zijn geen technologieleverancier. Wij zijn een praktische partner die AI echt laat werken in jouw bedrijf.
            </p>
          </div>
        </section>

        {/* Problems */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3 text-center">Het probleem</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight text-center mb-12">
              Wat wij elke dag horen
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {problems.map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#1A3A5C]/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-bold text-[#1A3A5C] text-sm leading-snug">{title}</h3>
                  <p className="text-sm text-[#111111]/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aanpak */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3 text-center">Onze aanpak</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-12">
              Zo doen wij het anders
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🔧", title: "Adviseren én implementeren", desc: "Wij leveren geen rapport dat in een la verdwijnt. Wij bouwen de oplossing zelf in, totdat het werkt." },
                { icon: "💬", title: "Taal van omzet en tijd", desc: "Geen technisch jargon. Wij praten over uren bespaard, klanten beter geholpen en marges verbeterd." },
                { icon: "✅", title: "Wij vertrekken pas als het werkt", desc: "Onze opdracht is pas klaar als de AI-oplossing echt onderdeel is van hoe jouw team werkt." },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ ...glass, padding: "32px" }} className="flex flex-col gap-4">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-lg font-black text-white tracking-tight">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waarden */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#EBF5FB]/95 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-3 text-center">Onze waarden</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3A5C] tracking-tight text-center mb-12">
              Waar wij voor staan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {values.map(({ icon, label, desc }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white border border-[#1A3A5C]/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-black text-[#1A3A5C] text-sm">{label}</h3>
                  <p className="text-xs text-[#111111]/55 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#0a1929]/55 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Klaar om te starten?</h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Plan een gratis kennismakingsgesprek en ontdek wat AI voor jouw bedrijf kan doen.</p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-xl shadow-[#2E86C1]/30">
              Plan een gratis gesprek
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={[
          { question: "Is Prkt. geschikt voor mijn sector?", answer: "Ja. Wij werken met mkb-bedrijven in retail, zakelijke dienstverlening, zorg, logistiek, hospitality en e-commerce. De uitdagingen zijn overal vergelijkbaar: te veel handwerk, te weinig tijd." },
          { question: "Wat maakt Prkt. anders dan andere AI-bureaus?", answer: "Wij focussen uitsluitend op het mkb en wij implementeren zelf. Geen losse adviezen of workshops: wij bouwen de oplossing en blijven totdat het echt werkt in jouw dagelijkse processen." },
          { question: "Hoe groot moet mijn bedrijf zijn?", answer: "Wij werken met bedrijven van 1 tot 100 medewerkers en een omzet tussen €20K en €500K per maand. Kleiner of groter? Neem contact op, dan kijken we wat mogelijk is." },
          { question: "Werken jullie ook samen met mijn bestaande IT-leverancier?", answer: "Absoluut. Wij zijn gewend aan samenwerking met andere leveranciers en passen ons aan aan jouw bestaande systemen en afspraken." },
        ]} />

        <Footer />
      </main>
    </>
  );
}
