"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(255,255,255,0.1)",
        background: "#1A3A5C",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left — About */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-black text-2xl tracking-tight">
              Prkt<span style={{ color: "#2E86C1" }}>.</span>
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Praktische AI voor het mkb. Geen hype, geen jargon, gewoon
              oplossingen die werken en tijd opleveren.
            </p>
            <p className="text-xs font-semibold" style={{ color: "#2E86C1" }}>
              AI-advies dat gewoon werkt.
            </p>
          </div>

          {/* Middle — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Navigatie
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Waarom Prkt?", href: "/waarom-prkt" },
                { label: "Diensten", href: "/diensten" },
                { label: "Pakketten", href: "/pakketten" },
                { label: "Zo werkt het", href: "/resultaten" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Over Prkt.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Prkt. is een handelsnaam van{" "}
                <span className="text-white font-medium">Visions Ecommerce V.O.F.</span>
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>KVK:</span> 97473545
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>Btw-nummer:</span> NL005107940B17
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2025 Prkt. Onderdeel van Visions Ecommerce V.O.F. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacybeleid", href: "/privacybeleid" },
              { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
