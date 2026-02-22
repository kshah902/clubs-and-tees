import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clubs & Tees was built on a simple idea: Golf style doesn't need to be complicated. Modern minimalism meets timeless golf culture.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">Our Story</p>
            <h1 className="mt-6 font-heading text-5xl leading-tight text-forest md:text-7xl">
              About Clubs <span className="text-sage">&amp;</span>{" "}
              <em className="italic">Tees</em>
            </h1>
            <p className="mt-8 font-heading text-xl italic leading-relaxed text-foreground/60">
              Built on a simple idea: golf style doesn&apos;t need to be complicated.
            </p>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="border-t border-stone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-t-[200px] bg-sage/10">
              <div className="flex aspect-[3/4] flex-col items-center justify-center">
                <div className="text-sage/20">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path d="M20 80 Q50 20 80 80" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="50" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
                    <polygon points="50,30 60,38 50,38" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
                <p className="mt-2 font-heading italic text-sage/30">Course at Sunset</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-4xl leading-tight text-forest md:text-5xl">
                Inspired by classic courses, late afternoon{" "}
                <em className="italic text-sage">sunsets</em>, and the social side of the game.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/60">
                <p>
                  The brand blends modern minimalism with timeless golf culture. We design apparel
                  for people who love the rhythm of a round and the stories that come after.
                </p>
                <p>
                  Whether you&apos;re playing 18 or just thinking about your next tee time, Clubs
                  &amp; Tees is made to go with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-clay-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-sage">What We Believe</p>
            <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-6xl">
              Golf is a <em className="italic text-sage">ritual</em>
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              { title: "Simplicity", description: "No flashy graphics. No gimmicks. Just timeless pieces you'll wear anywhere." },
              { title: "Authenticity", description: "Designed by golfers, for golfers. Every detail is rooted in the love of the game." },
              { title: "Versatility", description: "From the first tee to the 19th hole — and everywhere in between." },
            ].map((value, i) => (
              <div key={i} className={`rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${i === 1 ? "md:translate-y-8" : ""}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 font-heading text-lg text-sage">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-heading text-2xl text-forest">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-4xl leading-tight text-forest md:text-6xl">
            &ldquo;Great style doesn&apos;t shout — it shows up{" "}
            <em className="italic text-sage">quietly</em> and{" "}
            <em className="italic text-sage">consistently</em>.&rdquo;
          </h2>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-foreground/40">
            — The Clubs &amp; Tees Philosophy
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-stone bg-clay-light py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage">Ready to Play?</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-forest md:text-5xl">
            Browse the full collection and find your next{" "}
            <em className="italic text-sage">go-to golf tee</em>.
          </h2>
          <div className="mt-10">
            <a
              href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta"
            >
              Shop on Amazon
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
