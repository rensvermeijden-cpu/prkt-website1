"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Waarom Prkt?", href: "/waarom-prkt" },
  { label: "Diensten", href: "/diensten" },
  { label: "Pakketten", href: "/pakketten" },
  { label: "Zo werkt het", href: "/resultaten" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0d1f33]/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-black text-2xl tracking-tight">
          Prkt<span className="text-[#2E86C1]">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
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
      </div>
    </header>
  );
}
