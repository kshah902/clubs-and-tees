"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl tracking-wide text-forest">
          Clubs <span className="text-sage">&amp;</span> Tees
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm uppercase tracking-widest text-foreground/70 transition-colors duration-300 hover:text-forest"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm uppercase tracking-widest text-foreground/70 transition-colors duration-300 hover:text-forest"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="text-sm uppercase tracking-widest text-foreground/70 transition-colors duration-300 hover:text-forest"
          >
            Collection
          </Link>
          <a
            href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-2.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta"
          >
            Shop on Amazon
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-forest md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-30 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center gap-8 pt-16">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl text-forest"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl text-forest"
            >
              About
            </Link>
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl text-forest"
            >
              Collection
            </Link>
            <a
              href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-forest px-8 py-3 text-sm uppercase tracking-widest text-white"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
