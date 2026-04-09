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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0d1f33]/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-black text-2xl tracking-tight" onClick={() => setOpen(false)}>
          Prkt<span className="text-[#2E86C1]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === href ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#2E86C1] text-white text-sm font-semibold hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-lg shadow-[#2E86C1]/25"
        >
          Gratis kennismaken
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 active:bg-white/15 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1]/60"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          maxHeight: open ? "480px" : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.2s ease",
          background: "rgba(26,58,92,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: open ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
        className="md:hidden"
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-3 text-base font-medium border-b border-white/8 transition-colors duration-150 ${
                pathname === href ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#2E86C1] text-white text-sm font-semibold hover:bg-[#2472a8] active:scale-95 transition-all duration-150 shadow-lg shadow-[#2E86C1]/25"
          >
            Gratis kennismaken
          </Link>
        </nav>
      </div>
    </header>
  );
}
