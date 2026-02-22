import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { getPayloadClient } from "@/lib/payload";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient();
    const products = await payload.find({
      collection: "products",
      limit: 200,
      select: { slug: true },
    });
    return products.docs.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "products",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    const product = result.docs[0];
    if (!product) return { title: "Product Not Found" };

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const imageData = product.images?.[0]?.image;
    const imageUrl = typeof imageData === "object" ? imageData?.url : undefined;

    return {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.description,
      openGraph: {
        title: product.seoTitle || product.name,
        description: product.seoDescription || product.description,
        type: "website",
        url: `${siteUrl}/shop/${product.slug}`,
        images: imageUrl ? [{ url: imageUrl }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: product.seoTitle || product.name,
        description: product.seoDescription || product.description,
      },
      alternates: {
        canonical: `${siteUrl}/shop/${product.slug}`,
      },
    };
  } catch {
    return { title: "Product Not Found" };
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  let product: any = null;
  let relatedProducts: any[] = [];

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "products",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    product = result.docs[0];

    if (product) {
      const categoryId =
        typeof product.category === "object" ? product.category?.id : product.category;
      if (categoryId) {
        const related = await payload.find({
          collection: "products",
          where: {
            category: { equals: categoryId },
            id: { not_equals: product.id },
          },
          limit: 4,
        });
        relatedProducts = related.docs;
      }
    }
  } catch {
    notFound();
  }

  if (!product) notFound();

  const imageData = product.images?.[0]?.image;
  const imageUrl = typeof imageData === "object" ? imageData?.url : undefined;
  const imageAlt = typeof imageData === "object" ? imageData?.alt : product.name;
  const categoryName =
    typeof product.category === "object" ? product.category?.name : "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // JSON-LD Product structured data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: imageUrl ? [imageUrl] : [],
    url: `${siteUrl}/shop/${product.slug}`,
    brand: { "@type": "Brand", name: "Clubs & Tees" },
    ...(product.price
      ? {
          offers: {
            "@type": "Offer",
            url: product.amazonUrl,
            priceCurrency: "USD",
            price: product.price,
            availability:
              product.badge === "coming-soon"
                ? "https://schema.org/PreOrder"
                : "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Clubs & Tees via Amazon" },
          },
        }
      : {}),
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${siteUrl}/shop` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteUrl}/shop/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-foreground/40">
          <li><Link href="/" className="transition-colors hover:text-forest">Home</Link></li>
          <li><ChevronRight size={14} strokeWidth={1.5} /></li>
          <li><Link href="/shop" className="transition-colors hover:text-forest">Shop</Link></li>
          <li><ChevronRight size={14} strokeWidth={1.5} /></li>
          <li className="text-forest">{product.name}</li>
        </ol>
      </nav>

      {/* ── Product Detail ── */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-clay-light">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={imageAlt || product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-sage/20">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <rect x="20" y="15" width="60" height="70" rx="5" stroke="currentColor" strokeWidth="2" />
                      <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <circle cx="50" cy="55" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    </svg>
                  </div>
                  <p className="mt-2 font-heading italic text-sage/30">Product Photo</p>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              {categoryName && (
                <p className="text-sm uppercase tracking-[0.25em] text-sage">{categoryName}</p>
              )}
              <h1 className="mt-4 font-heading text-4xl leading-tight text-forest md:text-5xl">
                {product.name}
              </h1>
              {product.price && (
                <p className="mt-4 font-heading text-3xl text-forest">${product.price.toFixed(2)}</p>
              )}
              <p className="mt-6 text-lg leading-relaxed text-foreground/60">{product.description}</p>

              {/* Features */}
              {product.productFeatures && product.productFeatures.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {product.productFeatures.map((f: any, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {f.feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground/40">Available Colors</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.colors.map((c: any, i: number) => (
                      <span key={i} className="rounded-full border border-stone px-3 py-1 text-sm text-foreground/60">
                        {c.color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ASIN */}
              {product.asin && (
                <p className="mt-4 text-xs text-foreground/30">ASIN: {product.asin}</p>
              )}

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-terracotta"
                >
                  Buy on Amazon
                  <ExternalLink size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/shop"
                  className="inline-flex items-center rounded-full border border-sage px-8 py-3.5 text-sm uppercase tracking-widest text-sage transition-all duration-300 hover:bg-sage hover:text-white"
                >
                  Back to Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-stone py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-3xl text-forest">You might also like</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((rp: any) => {
                const rpImage = rp.images?.[0]?.image;
                const rpImageUrl = typeof rpImage === "object" ? rpImage?.url : undefined;
                return (
                  <Link
                    key={rp.id}
                    href={`/shop/${rp.slug}`}
                    className="group rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-clay-light">
                      {rpImageUrl ? (
                        <Image
                          src={rpImageUrl}
                          alt={rp.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="25vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <p className="font-heading text-sm italic text-sage/30">Photo</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg text-forest">{rp.name}</h3>
                      {rp.price && <p className="mt-1 text-sm text-foreground/50">${rp.price.toFixed(2)}</p>}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
