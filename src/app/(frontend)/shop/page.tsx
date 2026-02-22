import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Shop the Collection",
  description:
    "Browse the complete Clubs & Tees collection. Minimal golf-inspired apparel — t-shirts, polos, and accessories. Available exclusively on Amazon.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
  },
};

export default async function ShopPage() {
  let products: any[] = [];

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "products",
      limit: 50,
      sort: "-createdAt",
    });
    products = result.docs;
  } catch {
    // CMS not connected yet — show empty state
  }

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
          {products.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product: any, i: number) => {
                const imageData = product.images?.[0]?.image;
                const imageUrl =
                  typeof imageData === "object" ? imageData?.url : undefined;
                const categoryName =
                  typeof product.category === "object"
                    ? product.category?.name
                    : "";
                const badgeLabels: Record<string, string> = {
                  bestseller: "Bestseller",
                  new: "New",
                  "coming-soon": "Coming Soon",
                };

                return (
                  <article
                    key={product.id}
                    className={`group rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                      i % 3 === 1 ? "md:translate-y-6" : ""
                    }`}
                  >
                    <Link href={`/shop/${product.slug}`} className="block">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-clay-light">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={
                              typeof imageData === "object"
                                ? imageData?.alt || product.name
                                : product.name
                            }
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : (
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
                        )}

                        {product.badge && (
                          <span className="absolute top-4 left-4 rounded-full bg-forest px-3 py-1 text-xs uppercase tracking-wider text-white">
                            {badgeLabels[product.badge] || product.badge}
                          </span>
                        )}
                      </div>
                    </Link>

                    <div className="p-6">
                      {categoryName && (
                        <span className="text-xs uppercase tracking-wider text-sage">{categoryName}</span>
                      )}
                      <Link href={`/shop/${product.slug}`}>
                        <h3 className="mt-2 font-heading text-lg text-forest">{product.name}</h3>
                      </Link>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                        {product.description}
                      </p>
                      {product.price && (
                        <p className="mt-3 font-heading text-lg text-forest">${product.price.toFixed(2)}</p>
                      )}
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-sage transition-colors duration-300 hover:text-forest"
                      >
                        View on Amazon
                        <ExternalLink size={14} strokeWidth={1.5} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="font-heading text-2xl italic text-sage/50">
                Collection coming soon...
              </p>
              <p className="mt-4 text-foreground/40">
                Add products through the{" "}
                <Link href="/admin" className="text-sage underline">admin panel</Link>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Amazon CTA ── */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sage-light">Exclusively on Amazon</p>
          <h2 className="mt-6 font-heading text-4xl leading-tight md:text-6xl">
            Fast shipping. Easy returns. <em className="italic text-sage-light">Secure checkout.</em>
          </h2>
          <p className="mt-6 text-lg text-white/60">Browse the full collection and find your next go-to golf tee.</p>
          <div className="mt-10">
            <a
              href="https://www.amazon.com/s?me=CLUBS_AND_TEES"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm uppercase tracking-widest text-forest transition-all duration-300 hover:bg-sage-light hover:text-white"
            >
              Shop Now on Amazon
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
