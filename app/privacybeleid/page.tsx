import ShaderBackground from "@/components/ui/shader-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const headingStyle: React.CSSProperties = {
  color: "#ffffff",
  fontWeight: 800,
  fontSize: "1.15rem",
  letterSpacing: "-0.01em",
  marginBottom: "0.6rem",
  textShadow: "0 1px 3px rgba(0,0,0,0.4)",
};

const bodyStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  fontSize: "0.95rem",
  lineHeight: 1.75,
  textShadow: "0 1px 3px rgba(0,0,0,0.4)",
};

const sections = [
  {
    title: "Wie zijn wij",
    body: "Prkt. is een handelsnaam van Visions Ecommerce V.O.F., geregistreerd bij de Kamer van Koophandel onder nummer 97473545, btw-nummer NL005107940B17. Wij verwerken persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG). Vragen over dit beleid? Stuur een e-mail naar info@prkt.nl.",
  },
  {
    title: "Welke gegevens verzamelen wij",
    body: "Via het contactformulier op onze website verzamelen wij de volgende persoonsgegevens: naam, bedrijfsnaam, e-mailadres en optioneel telefoonnummer. Wij verzamelen geen gegevens zonder jouw actieve toestemming. Wij maken geen gebruik van tracking-cookies of analytische tools die persoonlijk identificeerbare informatie opslaan.",
  },
  {
    title: "Waarvoor gebruiken wij jouw gegevens",
    body: "Jouw gegevens worden uitsluitend gebruikt om contact met je op te nemen naar aanleiding van jouw aanvraag via het contactformulier. Wij verkopen, verhuren of delen jouw persoonsgegevens nooit met derden, tenzij dit wettelijk verplicht is.",
  },
  {
    title: "Hoe lang bewaren wij jouw gegevens",
    body: "Wij bewaren jouw persoonsgegevens niet langer dan strikt noodzakelijk voor het doel waarvoor ze zijn verzameld. Contactgegevens worden uiterlijk 12 maanden na het laatste contact definitief verwijderd uit onze systemen.",
  },
  {
    title: "Jouw rechten",
    body: "Op grond van de AVG heb je het recht op inzage in jouw persoonsgegevens, het recht op correctie van onjuiste gegevens, het recht op verwijdering ('recht op vergetelheid'), en het recht om bezwaar te maken tegen de verwerking. Stuur een e-mail naar info@prkt.nl om een verzoek in te dienen. Wij reageren binnen vier weken.",
  },
  {
    title: "Beveiliging",
    body: "Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Onze communicatie verloopt via beveiligde verbindingen (HTTPS).",
  },
  {
    title: "Contact",
    body: "Voor vragen, verzoeken of klachten over de verwerking van jouw persoonsgegevens kun je contact opnemen via het contactformulier op onze website of direct per e-mail via info@prkt.nl. Heb je een klacht die wij niet naar jouw tevredenheid oplossen, dan kun je deze indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
  },
];

export default function Privacybeleid() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative pt-16">

        {/* Hero */}
        <section className="relative flex items-center justify-center py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/75 to-[#0a1929]/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#2E86C1", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Juridisch
            </p>
            <h1
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Privacybeleid
            </h1>
            <p
              className="text-base"
              style={{ color: "rgba(255,255,255,0.65)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Laatst bijgewerkt: april 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 pb-24">
          <div className="absolute inset-0 bg-[#0a1929]/50 pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto px-6">
            <div style={{ ...glass, padding: "48px" }}>
              <div className="flex flex-col gap-10">
                {sections.map(({ title, body }) => (
                  <div key={title}>
                    <h2 style={headingStyle}>{title}</h2>
                    <p style={bodyStyle}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
