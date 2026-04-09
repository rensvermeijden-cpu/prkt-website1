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
    title: "Algemeen",
    body: "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van Visions Ecommerce V.O.F., handelend onder de naam Prkt., KVK 97473545, btw NL005107940B17. Door gebruik te maken van onze diensten of het accepteren van een offerte, aanvaardt de opdrachtgever deze voorwaarden.",
  },
  {
    title: "Offertes en overeenkomsten",
    body: "Alle offertes van Prkt. zijn vrijblijvend en hebben een geldigheidsduur van 14 dagen, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging per e-mail door beide partijen. Mondelinge afspraken zijn slechts bindend nadat zij schriftelijk zijn bevestigd.",
  },
  {
    title: "Uitvoering van de dienst",
    body: "Prkt. voert alle werkzaamheden volledig online uit. Er is geen dienstverlening op locatie. Alle contactmomenten verlopen via videogesprekken of e-mail. Wij streven naar oplevering binnen de afgesproken termijn, standaard 2 weken tenzij anders overeengekomen. Prkt. heeft het recht derden in te schakelen bij de uitvoering van de opdracht.",
  },
  {
    title: "Betaling",
    body: "Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen. Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en is de wettelijke rente verschuldigd. Prkt. behoudt het recht om werkzaamheden op te schorten bij uitblijvende betaling.",
  },
  {
    title: "Intellectueel eigendom",
    body: "Alle door Prkt. geleverde materialen, waaronder rapporten, configuraties en documentatie, blijven eigendom van Prkt. totdat de opdrachtgever volledig aan zijn betalingsverplichtingen heeft voldaan. Na volledige betaling gaan de rechten over op de opdrachtgever, tenzij schriftelijk anders overeengekomen.",
  },
  {
    title: "Aansprakelijkheid",
    body: "Prkt. is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of schade als gevolg van onjuist gebruik van geleverde oplossingen. De totale aansprakelijkheid van Prkt. is in alle gevallen beperkt tot het factuurbedrag van de betreffende opdracht. Prkt. is niet verantwoordelijk voor wijzigingen in AI-tools of -platforms van derden die de werking van geleverde oplossingen beïnvloeden.",
  },
  {
    title: "Opzegging en annulering",
    body: "Doorlopende diensten kunnen maandelijks worden opgezegd met inachtneming van een opzegtermijn van één kalendermaand. Eenmalige implementatietrajecten kunnen niet worden geannuleerd nadat de werkzaamheden zijn gestart; reeds gemaakte kosten worden in rekening gebracht.",
  },
  {
    title: "Vertrouwelijkheid",
    body: "Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar ontvangen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.",
  },
  {
    title: "Toepasselijk recht",
    body: "Op alle overeenkomsten tussen Prkt. en opdrachtgever is uitsluitend Nederlands recht van toepassing. Geschillen die niet in onderling overleg kunnen worden opgelost, worden voorgelegd aan de bevoegde rechter in het arrondissement van de vestigingsplaats van Prkt.",
  },
];

export default function AlgemeneVoorwaarden() {
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
              Algemene Voorwaarden
            </h1>
            <p
              className="text-base"
              style={{ color: "rgba(255,255,255,0.65)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Versie 1.0, april 2025. Visions Ecommerce V.O.F. h.o.d.n. Prkt.
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
