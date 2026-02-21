"use client";

import { ArrowRight, ExternalLink, Star } from "lucide-react";

const products = [
  {
    name: "Clubs & Tees Classic Logo Tee",
    description: "The original. Clean crossed-clubs emblem on premium cotton.",
    category: "T-Shirt",
    badge: "Bestseller",
  },
  {
    name: "Meet Me at Tee Time Tee",
    description: "Our signature tagline in elegant serif typography.",
    category: "T-Shirt",
    badge: "New",
  },
  {
    name: "19th Hole Social Club",
    description: "For the post-round celebrations. Golf ball & beer mug design.",
    category: "T-Shirt",
    badge: null,
  },
  {
    name: "C&T Monogram Polo",
    description: "Understated C&T circle crest on a classic polo silhouette.",
    category: "Polo",
    badge: null,
  },
  {
    name: "Fairways & Weekends Tee",
    description: "Rolling course landscape with sunset — minimal and serene.",
    category: "T-Shirt",
    badge: "New",
  },
  {
    name: "Evergreen Golf Club Tee",
    description: "Shield crest design inspired by classic private clubs. Est. 2024.",
    category: "T-Shirt",
    badge: null,
  },
  {
    name: "Golf Social Club Script Tee",
    description: "Elegant cursive script. Simple. Timeless. Conversation starter.",
    category: "T-Shirt",
    badge: null,
  },
  {
    name: "Play Through Cap",
    description: "Structured dad cap with embroidered C&T logo. Adjustable back.",
    category: "Accessories",
    badge: "Coming Soon",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">The Collection</p>
            <h1 className="mt-6 font-heading text-5xl leading-tight text-forest md:text-7xl">
              Golf-inspired <em className="italic text-sage">apparel</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/60">
              Clean typography, subtle icons, and classic silhouettes inspired by the game.
              All fulfilled through Amazon for fast shipping and easy returns.
            </p>
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <a
                key={i}
                href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  i % 3 === 1 ? "md:translate-y-6" : ""
                }`}
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-clay-light">
                  <div className="flex h-full flex-col items-center justify-center">
                    <div className="text-sage/20">
                      <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                        <rect x="25" y="20" width="50" height="60" rx="5" stroke="currentColor" strokeWidth="2" />
                        <line x1="25" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                        <circle cx="50" cy="55" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      </svg>
                    </div>
                    <p className="mt-2 text-xs font-heading italic text-sage/30">Product Photo</p>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-forest px-3 py-1 text-xs uppercase tracking-wider text-white">
                      {product.badge}
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-all duration-500 group-hover:bg-forest/5">
                    <span className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm uppercase tracking-widest text-forest opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                      View on Amazon
                      <ExternalLink size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-sage">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg text-forest">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        strokeWidth={1.5}
                        className="fill-sage/30 text-sage/30"
                      />
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amazon CTA Banner ── */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage-light">
            Exclusively on Amazon
          </p>
          <h2 className="mt-6 font-heading text-4xl leading-tight md:text-6xl">
            Fast shipping. Easy returns.{" "}
            <em className="italic text-sage-light">Secure checkout.</em>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Browse the full collection and find your next go-to golf tee.
          </p>
          <div className="mt-10">
            <a
              href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm uppercase tracking-widest text-forest transition-all duration-300 hover:bg-sage-light hover:text-white"
            >
              Shop Now on Amazon
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── Email Signup ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage">Stay in the Loop</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-5xl">
            Be the first to know about{" "}
            <em className="italic text-sage">new designs</em>.
          </h2>
          <p className="mt-4 text-foreground/50">No spam. Just golf.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-stone bg-white px-6 py-3.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <button
              type="submit"
              className="rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
