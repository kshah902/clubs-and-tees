"use client";

import Link from "next/link";
import {
  Sun,
  Clock,
  Beer,
  Shirt,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Package,
} from "lucide-react";

const taglines = [
  "Play Through.",
  "Meet Me at Tee Time.",
  "Slow Rounds. Good Company.",
  "Fairways & Weekends.",
  "Golf, Simplified.",
];

const collectionItems = [
  {
    icon: Clock,
    title: "Early Tee Times",
    description: "Lightweight layers for those 6am starts when the dew is still on the fairway.",
  },
  {
    icon: Sun,
    title: "Weekend Rounds",
    description: "Comfortable, breathable pieces that keep you looking sharp across all 18.",
  },
  {
    icon: Beer,
    title: "Clubhouse Hangs",
    description: "Post-round style that transitions from the patio to dinner without missing a beat.",
  },
  {
    icon: Shirt,
    title: "Everyday Wear",
    description: "Subtle golf-inspired designs you'll reach for even when you're not on the course.",
  },
];

const styleValues = [
  "Relaxed",
  "Elevated",
  "Effortless",
  "Versatile",
];

const amazonBenefits = [
  { icon: Truck, label: "Fast Prime Shipping" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: ShieldCheck, label: "Secure Checkout" },
  { icon: Package, label: "Reliable Fulfillment" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute right-0 top-0 h-[80vh] w-1/2 rounded-bl-[200px] bg-clay-light opacity-50" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">Golf Lifestyle Apparel</p>
            <h1 className="mt-6 font-heading text-5xl leading-tight tracking-tight text-forest md:text-7xl lg:text-8xl">
              Clubs <span className="text-sage">&amp;</span>{" "}
              <em className="italic">Tees</em>
            </h1>
            <p className="mt-6 font-heading text-xl text-sage md:text-2xl">
              Play the Round. Live the Lifestyle.
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">
              Clean design. Understated style. Made for golfers who don&apos;t need to be loud.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta"
              >
                Shop the Collection
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-sage px-8 py-3.5 text-sm uppercase tracking-widest text-sage transition-all duration-300 hover:bg-sage hover:text-white"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-[500px] w-[380px] overflow-hidden rounded-t-[200px] bg-sage/10 md:h-[600px] md:w-[440px]">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="text-sage/30">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="50,15 75,25 50,35" fill="currentColor" opacity="0.4"/>
                    <ellipse cx="50" cy="85" rx="20" ry="5" fill="currentColor" opacity="0.2"/>
                  </svg>
                </div>
                <p className="mt-4 font-heading text-lg italic text-sage/40">Hero Image</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-0 rounded-3xl bg-white/80 px-6 py-4 shadow-lg backdrop-blur-sm md:-left-12">
              <p className="font-heading text-lg italic text-forest">
                &ldquo;Meet Me at Tee Time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rotating Taglines ── */}
      <section className="overflow-hidden border-y border-stone bg-clay-light py-5">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...taglines, ...taglines, ...taglines].map((tag, i) => (
            <span key={i} className="font-heading text-lg italic text-sage/60">{tag}</span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">Our Philosophy</p>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-6xl">
              Golf isn&apos;t just a <em className="italic text-sage">game</em>.
              <br />It&apos;s a ritual.
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-0 md:grid-cols-3">
            {["The drive down the first fairway.", "The quiet walk to the green.", "The laugh at the 19th hole."].map((text, i) => (
              <div key={i} className="border-b border-stone py-8 text-center md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                <p className="font-heading text-xl italic leading-relaxed text-foreground/70">&ldquo;{text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-foreground/60">
              Clubs &amp; Tees was created for golfers who appreciate simplicity — on and off the course. No flashy graphics. No gimmicks. Just timeless pieces you&apos;ll wear anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Collection ── */}
      <section className="bg-clay-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">The Collection</p>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-6xl">
              Minimal golf-inspired <em className="italic text-sage">apparel</em>
            </h2>
            <p className="mt-6 text-lg text-foreground/60">Clean typography, subtle icons, and classic silhouettes inspired by the game.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collectionItems.map((item, i) => (
              <div key={i} className={`group rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${i % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
                  <item.icon size={22} strokeWidth={1.5} className="text-sage" />
                </div>
                <h3 className="mt-6 font-heading text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta">
              View All Designs
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Designed for the Modern Golfer ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-sage/10">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-sage/20">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="40" r="25" stroke="currentColor" strokeWidth="2"/>
                      <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="2"/>
                      <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="mt-2 font-heading italic text-sage/30">Lifestyle Image</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-clay p-8 shadow-md md:block">
                <p className="font-heading text-lg italic text-forest">&ldquo;Slow Rounds. Good Company.&rdquo;</p>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sage">For the Modern Golfer</p>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-5xl">
                We believe golf style should <em className="italic text-sage">feel</em>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {styleValues.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <CheckCircle size={18} strokeWidth={1.5} className="text-sage" />
                    <span className="text-lg text-foreground/70">{value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-relaxed text-foreground/60">
                Every design is created with simplicity in mind — easy to pair, easy to wear, easy to live in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subtle by Design ── */}
      <section className="border-y border-stone py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage">Subtle by Design</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-6xl">
            At Clubs &amp; Tees, <em className="italic text-sage">less is more</em>.
          </h2>
          <div className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-4">
            {["Muted tones", "Minimal graphics", "Balanced composition"].map((item) => (
              <span key={item} className="rounded-full border border-stone bg-white px-6 py-2.5 text-sm text-foreground/60">{item}</span>
            ))}
          </div>
          <p className="mt-10 font-heading text-xl italic leading-relaxed text-foreground/50">
            Because great style doesn&apos;t shout — it shows up quietly and consistently.
          </p>
        </div>
      </section>

      {/* ── Shop with Confidence ── */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage-light">Where to Buy</p>
            <h2 className="mt-6 font-heading text-4xl leading-tight md:text-6xl">
              Shop with <em className="italic text-sage-light">Confidence</em>
            </h2>
            <p className="mt-6 text-lg text-white/60">Clubs &amp; Tees is exclusively available through Amazon. That means:</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {amazonBenefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <benefit.icon size={24} strokeWidth={1.5} className="text-sage-light" />
                </div>
                <p className="mt-4 text-sm tracking-wide text-white/80">{benefit.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm uppercase tracking-widest text-forest transition-all duration-300 hover:bg-sage-light hover:text-white">
              Shop Now
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Email Signup ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage">Stay in the Loop</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-5xl">
            New drops. Limited releases. <em className="italic text-sage">Seasonal collections.</em>
          </h2>
          <p className="mt-4 text-foreground/50">No spam. Just golf.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-stone bg-white px-6 py-3.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <button type="submit" className="rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
