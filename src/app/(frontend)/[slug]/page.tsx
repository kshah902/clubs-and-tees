import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/lib/payload";

const RESERVED_SLUGS = ["shop", "about", "admin", "api", "graphql"];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient();
    const pages = await payload.find({
      collection: "pages",
      limit: 100,
      select: { slug: true },
    });
    return pages.docs
      .filter((p: any) => !RESERVED_SLUGS.includes(p.slug))
      .map((p: any) => ({ slug: p.slug as string }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED_SLUGS.includes(slug)) return {};

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    const page = result.docs[0];
    if (!page) return { title: "Page Not Found" };

    return {
      title: page.seoTitle || page.title,
      description: page.seoDescription || "",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${page.slug}`,
      },
    };
  } catch {
    return { title: "Page Not Found" };
  }
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  if (RESERVED_SLUGS.includes(slug)) notFound();

  let page: any = null;

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    page = result.docs[0];
  } catch {
    notFound();
  }

  if (!page) notFound();

  // FAQ JSON-LD if page has FAQ items
  const faqJsonLd =
    page.faqItems && page.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqItems.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-heading text-5xl leading-tight text-forest md:text-7xl">
            {page.title}
          </h1>

          {/* Rich text content would be rendered here */}
          {page.content && (
            <div className="mt-12 prose prose-lg max-w-none text-foreground/70">
              <p className="text-foreground/50 italic">
                Rich text content from the CMS will render here.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          {page.faqItems && page.faqItems.length > 0 && (
            <section className="mt-16 border-t border-stone pt-12">
              <h2 className="font-heading text-3xl text-forest">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-6">
                {page.faqItems.map((item: any, i: number) => (
                  <div key={i} className="rounded-3xl bg-clay-light p-6">
                    <h3 className="font-heading text-lg text-forest">{item.question}</h3>
                    <p className="mt-2 leading-relaxed text-foreground/60">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16">
            <Link
              href="/"
              className="text-sm text-sage transition-colors hover:text-forest"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
