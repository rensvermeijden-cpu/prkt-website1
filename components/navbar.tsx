"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Waarom Prkt?", href: "/waarom-prkt" },
  { label: "Diensten", href: "/diensten" },
  { label: "Pakketten", href: "/pakketten" },
  { label: "Zo werkt het", href: "/resultaten" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(13,31,51,0.85)",
      }}
    >
      {/* Main bar */}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={close}
          className="text-white font-black text-2xl tracking-tight"
        >
          Prkt<span style={{ color: "#2E86C1" }}>.</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: pathname === href ? "#ffffff" : "rgba(255,255,255,0.6)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold active:scale-95 transition-opacity duration-150"
          style={{
            background: "#2E86C1",
            boxShadow: "0 4px 16px rgba(46,134,193,0.3)",
          }}
        >
          Gratis kennismaken
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        aria-hidden={!open}
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "max-height 0.32s ease, opacity 0.22s ease",
          background: "rgba(20,45,75,0.98)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <nav className="flex flex-col px-6 pt-3 pb-6 gap-0">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="py-4 text-base font-medium"
              style={{
                color: pathname === href ? "#ffffff" : "rgba(255,255,255,0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className="mt-5 flex items-center justify-center py-3.5 rounded-full text-white text-sm font-semibold active:scale-95 transition-opacity duration-150"
            style={{
              background: "#2E86C1",
              boxShadow: "0 4px 16px rgba(46,134,193,0.3)",
            }}
          >
            Gratis kennismaken
          </Link>
        </nav>
      </div>
    </header>
  );
}
