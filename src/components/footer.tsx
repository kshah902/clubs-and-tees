import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-clay-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-2xl tracking-wide text-forest">
              Clubs <span className="text-sage">&amp;</span> Tees
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              Golf lifestyle apparel focused on minimal design and timeless style.
              From the course to everyday life.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm uppercase tracking-widest text-foreground/40">Navigate</h4>
            <Link
              href="/"
              className="text-sm text-foreground/60 transition-colors duration-300 hover:text-forest"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground/60 transition-colors duration-300 hover:text-forest"
            >
              About
            </Link>
            <Link
              href="/shop"
              className="text-sm text-foreground/60 transition-colors duration-300 hover:text-forest"
            >
              Collection
            </Link>
            <a
              href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 transition-colors duration-300 hover:text-forest"
            >
              Shop on Amazon
            </a>
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm uppercase tracking-widest text-foreground/40">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-sage transition-colors duration-300 hover:text-forest"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@clubsandtees.com"
                aria-label="Email"
                className="text-sage transition-colors duration-300 hover:text-forest"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
            <p className="mt-2 text-sm text-foreground/40">hello@clubsandtees.com</p>
          </div>
        </div>

        {/* SEO footer copy & copyright */}
        <div className="mt-16 border-t border-stone pt-8">
          <p className="text-xs leading-relaxed text-foreground/30">
            Clubs &amp; Tees is a golf lifestyle apparel brand focused on minimal golf-inspired
            t-shirts and casual wear. Designed for golfers who appreciate clean design and timeless
            style, our pieces transition effortlessly from the course to everyday life.
          </p>
          <p className="mt-4 text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Clubs &amp; Tees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
