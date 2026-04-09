import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import StatsCounter from "@/components/stats-counter";
import FAQ from "@/components/faq";
import Footer from "@/components/ui/footer";

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const iconWrap: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  borderRadius: "12px",
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iconGlow: React.CSSProperties = {
  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.6))",
};

// ── Stars + speech bubble ─────────────────────────────────────
function IconZichtbaarheid() {
  return (
    <div style={iconWrap}>
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconGlow} aria-hidden="true">
        {/* Speech bubble */}
        <rect x="16" y="8" width="128" height="68" rx="12" stroke="white" strokeWidth="2" />
        <polygon points="44,76 60,76 52,90" fill="white" opacity="0.5" />
        {/* Three stars inside bubble */}
        {[28, 68, 108].map((cx, i) => (
          <text key={i} x={cx - 10} y="52" fill="white" fontSize="28" fontFamily="sans-serif">★</text>
        ))}
        {/* Small label below */}
        <text x="42" y="110" fill="white" fontSize="11" fontFamily="sans-serif" opacity="0.5">reviewverzoek</text>
      </svg>
    </div>
  );
}

// ── Three bubbles → AI → one bubble ──────────────────────────
function IconReceptie() {
  return (
    <div style={iconWrap}>
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconGlow} aria-hidden="true">
        {/* Three incoming question bubbles */}
        {[12, 42, 72].map((y, i) => (
          <g key={i}>
            <rect x="4" y={y} width="36" height="22" rx="6" stroke="white" strokeWidth="1.5" opacity={0.9 - i * 0.15} />
            <text x="16" y={y + 16} fill="white" fontSize="13" fontFamily="sans-serif" opacity={0.9 - i * 0.15}>?</text>
            {/* Arrow toward center */}
            <line x1="40" y1={y + 11} x2="60" y2="57" stroke="white" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          </g>
        ))}
        {/* AI circle */}
        <circle cx="80" cy="57" r="18" stroke="white" strokeWidth="2" />
        <text x="70" y="62" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold">AI</text>
        {/* Arrow out */}
        <line x1="98" y1="57" x2="116" y2="57" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <polygon points="114,52 122,57 114,62" fill="white" opacity="0.6" />
        {/* Output bubble with checkmark */}
        <rect x="120" y="42" width="36" height="30" rx="6" stroke="white" strokeWidth="1.5" />
        <text x="130" y="63" fill="white" fontSize="16" fontFamily="sans-serif">✓</text>
      </svg>
    </div>
  );
}

// ── Browser frame before/after ────────────────────────────────
function IconWebshop() {
  return (
    <div style={iconWrap}>
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconGlow} aria-hidden="true">
        {/* Browser frame */}
        <rect x="8" y="10" width="144" height="90" rx="6" stroke="white" strokeWidth="2" />
        {/* Browser top bar */}
        <line x1="8" y1="26" x2="152" y2="26" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="18" r="3" fill="white" opacity="0.3" />
        <circle cx="32" cy="18" r="3" fill="white" opacity="0.3" />
        {/* Center divider */}
        <line x1="80" y1="28" x2="80" y2="98" stroke="white" strokeWidth="1" opacity="0.35" />
        {/* Left — empty product (dashed) */}
        <rect x="16" y="36" width="56" height="52" rx="4" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
        <text x="27" y="66" fill="white" fontSize="9" fontFamily="sans-serif" opacity="0.3">leeg</text>
        {/* Right — filled product */}
        <rect x="88" y="36" width="56" height="52" rx="4" stroke="white" strokeWidth="1.5" opacity="0.85" />
        <line x1="96" y1="50" x2="136" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="96" y1="60" x2="128" y2="60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="96" y1="70" x2="132" y2="70" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        {/* Small chat bubble bottom right */}
        <rect x="110" y="78" width="26" height="16" rx="4" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <text x="118" y="90" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.8">✓</text>
      </svg>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.18em] mb-1.5" style={{ color: "rgba(255,255,255,0.38)" }}>
      {children}
    </p>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
      {children}
    </p>
  );
}

export default function Resultaten() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* ── HERO ── */}
        <section className="relative flex items-center justify-center py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/55 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2E86C1] mb-4">Voorbeelden</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Zo werkt het in de praktijk
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Drie voorbeelden binnen de zorg, dienstverlening en e-commerce sectoren. Wij helpen bedrijven in alle sectoren.
            </p>
          </div>
        </section>

        {/* ── EXAMPLES ── */}
        <section className="relative py-16 pb-24">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-8">

            {/* EXAMPLE 1 */}
            <div
              style={{ ...glass, padding: "40px", transition: "box-shadow 0.3s ease" }}
              className="hover:shadow-[0_0_30px_rgba(46,134,193,0.2),0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#2E86C1] mb-4 block">
                Online Zichtbaarheid
              </span>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0"><IconZichtbaarheid /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6">
                    Meer zichtbaarheid, zonder extra werk
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div><SubLabel>Het probleem</SubLabel><BodyText>Een fysiopraktijk levert goede zorg, maar online blijft het stil. Reviews worden niet opgevolgd, social media wordt onregelmatig geplaatst en de website blijft lang hetzelfde. Niet omdat het niet belangrijk is, maar omdat er geen tijd voor is naast de dagelijkse behandelingen.</BodyText></div>
                    <div><SubLabel>Hoe AI dit oplost</SubLabel><BodyText>AI zet terugkerende marketingtaken klaar. Reviewverzoeken na een behandeling, eerste opzetten voor social posts, aangevulde webteksten. De praktijk hoeft niet meer vanaf nul te beginnen.</BodyText></div>
                    <div><SubLabel>Wat het oplevert</SubLabel><BodyText>Gemiddeld 2 tot 4 uur tijdwinst per week. Meer consistente zichtbaarheid, zonder extra druk op het team.</BodyText></div>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {[
                  { icon: "✅", label: "Behandeling afgerond" },
                  { icon: "⭐", label: "Reviewverzoek of contentvoorstel automatisch klaar" },
                  { icon: "👁", label: "Praktijk blijft zichtbaar zonder extra werk" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-2 text-center px-5 py-4 rounded-xl" style={{ background: "rgba(46,134,193,0.1)", border: "1px solid rgba(46,134,193,0.2)", minWidth: "155px" }}>
                      <span className="text-xl">{step.icon}</span>
                      <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.8)" }}>{step.label}</p>
                    </div>
                    {i < 2 && <ArrowRight size={16} className="text-[#2E86C1] flex-shrink-0 hidden sm:block" />}
                  </div>
                ))}
              </div>
            </div>

            {/* EXAMPLE 2 */}
            <div
              style={{ ...glass, padding: "40px", transition: "box-shadow 0.3s ease" }}
              className="hover:shadow-[0_0_30px_rgba(46,134,193,0.2),0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#2E86C1] mb-4 block">
                Receptie &amp; Administratie
              </span>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0"><IconReceptie /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6">
                    Minder herhaalwerk bij vragen
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div><SubLabel>Het probleem</SubLabel><BodyText>Bij veel bedrijven krijgt de receptie dagelijks dezelfde vragen. Over openingstijden, afspraken, documenten of facturen. Medewerkers zijn daardoor veel tijd kwijt aan het steeds opnieuw beantwoorden van dezelfde berichten.</BodyText></div>
                    <div><SubLabel>Hoe AI dit oplost</SubLabel><BodyText>AI herkent inkomende vragen en stelt automatisch een passend antwoord voor. Veelgestelde vragen worden één keer goed ingericht en daarna hergebruikt. Medewerkers controleren alleen nog waar nodig.</BodyText></div>
                    <div><SubLabel>Wat het oplevert</SubLabel><BodyText>Gemiddeld 4 tot 8 uur tijdwinst per week per medewerker. Snellere reacties richting klanten en minder onderbrekingen.</BodyText></div>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {["Vraag over openingstijden", "Vraag over factuur", "Vraag over afspraak"].map((q) => (
                    <div key={q} className="px-4 py-2.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", minWidth: "170px", color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                      {q}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 items-center">
                  {[0,1,2].map(i => <ArrowRight key={i} size={14} className="text-[#2E86C1] hidden sm:block" />)}
                </div>
                <div className="flex flex-col items-center gap-2 px-6 py-5 rounded-xl text-center flex-shrink-0" style={{ background: "rgba(46,134,193,0.15)", border: "1px solid rgba(46,134,193,0.35)", minWidth: "150px" }}>
                  <Sparkles size={22} className="text-[#2E86C1]" />
                  <p className="text-sm font-bold text-white">AI herkent de vraag</p>
                </div>
                <ArrowRight size={16} className="text-[#2E86C1] flex-shrink-0 hidden sm:block" />
                <div className="flex flex-col items-center gap-2 px-6 py-5 rounded-xl text-center flex-shrink-0" style={{ background: "rgba(46,134,193,0.1)", border: "1px solid rgba(46,134,193,0.2)", minWidth: "150px" }}>
                  <CheckCircle size={22} className="text-[#2E86C1]" />
                  <p className="text-sm font-bold text-white">Antwoord klaar</p>
                </div>
              </div>
            </div>

            {/* EXAMPLE 3 */}
            <div
              style={{ ...glass, padding: "40px", transition: "box-shadow 0.3s ease" }}
              className="hover:shadow-[0_0_30px_rgba(46,134,193,0.2),0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#2E86C1] mb-4 block">
                Webshop
              </span>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0"><IconWebshop /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6">
                    Sneller productteksten en klantvragen afhandelen
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div><SubLabel>Het probleem</SubLabel><BodyText>Webshops zijn veel tijd kwijt aan productteksten schrijven en klantvragen beantwoorden. Zeker bij grotere assortimenten kost dit dagelijks veel handmatig werk.</BodyText></div>
                    <div><SubLabel>Hoe AI dit oplost</SubLabel><BodyText>AI zet productteksten op of verbetert ze, en bereidt antwoorden voor op klantvragen over levertijd, retouren of productinfo. De ondernemer werkt vanuit een basis in plaats van alles zelf te schrijven.</BodyText></div>
                    <div><SubLabel>Wat het oplevert</SubLabel><BodyText>Gemiddeld 5 tot 10 uur tijdwinst per week, afhankelijk van de grootte van de webshop. Snellere reacties en consistenter taalgebruik richting klanten.</BodyText></div>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }} className="flex flex-col sm:flex-row items-stretch justify-center gap-0">
                <div className="flex flex-col gap-3 flex-1 px-6 py-5 rounded-l-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Zonder AI</p>
                  {["Leeg product", "Losse klantvragen", "Handmatig schrijven"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.25)" }} />
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.90)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center px-4 py-3 flex-shrink-0" style={{ background: "rgba(46,134,193,0.08)", borderTop: "1px solid rgba(46,134,193,0.3)", borderBottom: "1px solid rgba(46,134,193,0.3)", boxShadow: "0 0 20px rgba(46,134,193,0.15)" }}>
                  <div className="flex flex-col items-center gap-1.5">
                    <Sparkles size={18} className="text-[#2E86C1]" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#2E86C1]">AI</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1 px-6 py-5 rounded-r-xl" style={{ background: "rgba(46,134,193,0.06)", border: "1px solid rgba(46,134,193,0.2)" }}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "rgba(46,134,193,0.6)" }}>Met AI</p>
                  {["Producttekst klaar", "Antwoord voorbereid", "Consistent taalgebruik"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-[#2E86C1] flex-shrink-0" />
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANIMATED STATS ── */}
        <StatsCounter />

        {/* ── FAQ ── */}
        <FAQ items={[
          { question: "Zijn dit echte klantcases?", answer: "Dit zijn representatieve voorbeelden gebaseerd op situaties die wij tegenkomen bij mkb-bedrijven. We publiceren geen klantinformatie zonder toestemming." },
          { question: "Werkt dit ook voor mijn branche?", answer: "Ja. De voorbeelden laten zorg, dienstverlening en e-commerce zien, maar de aanpak werkt in vrijwel elke sector. Tijdwinst op herhaalwerk, communicatie en content is universeel." },
          { question: "Hoe snel zie ik vergelijkbare resultaten?", answer: "De meeste klanten zien binnen twee weken de eerste tijdsbesparing. De exacte tijdwinst hangt af van hoeveel herhaalwerk er in jouw bedrijf zit." },
          { question: "Wat als het bij mij niet werkt?", answer: "Wij leveren pas op als het daadwerkelijk werkt. Als de oplossing onvoldoende resultaat oplevert, passen wij aan, zonder meerkosten." },
        ]} />

        {/* ── FINAL CTA ── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#0a1929]/55 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Herken jij dit?</h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Plan een gratis kennismakingsgesprek en ontdek wat AI voor jouw bedrijf kan doen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#2E86C1] text-white font-bold text-base hover:bg-[#2472a8] hover:shadow-[0_0_24px_rgba(46,134,193,0.45)] active:scale-95 transition-all duration-200 shadow-xl shadow-[#2E86C1]/30"
            >
              Gratis kennismaken
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
