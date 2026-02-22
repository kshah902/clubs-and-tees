import { getPayloadClient } from "@/lib/payload";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clubsandtees.com";

  let siteName = "Clubs & Tees";
  let description = "Golf lifestyle apparel brand focused on minimal golf-inspired t-shirts and casual wear.";
  let contactEmail = "hello@clubsandtees.com";
  let amazonStoreUrl = "https://www.amazon.com/s?me=CLUBS_AND_TEES";
  let productsText = "";
  let categoriesText = "";

  try {
    const payload = await getPayloadClient();
    const settings = await payload.findGlobal({ slug: "site-settings" });
    siteName = settings.siteName || siteName;
    description = settings.description || description;
    contactEmail = settings.contactEmail || contactEmail;
    amazonStoreUrl = settings.amazonStoreUrl || amazonStoreUrl;

    const products = await payload.find({
      collection: "products",
      limit: 100,
      select: { name: true, slug: true, description: true },
    });
    productsText = products.docs
      .map((p) => `- [${p.name}](${siteUrl}/shop/${p.slug}): ${p.description}`)
      .join("\n");

    const categories = await payload.find({
      collection: "categories",
      limit: 20,
      select: { name: true, slug: true },
    });
    categoriesText = categories.docs
      .map((c) => `- ${c.name}`)
      .join("\n");
  } catch {
    // CMS not available
  }

  const content = `# ${siteName}

> ${description}

## About

Clubs & Tees is a modern golf lifestyle brand built for the in-between moments — the early tee times, the long rounds, and the stories told after the 18th. All products are available exclusively through Amazon.

${categoriesText ? `## Product Categories\n\n${categoriesText}\n` : ""}
${productsText ? `## Products\n\n${productsText}\n` : ""}
## Key Pages

- [Home](${siteUrl})
- [Shop](${siteUrl}/shop)
- [About](${siteUrl}/about)

## Contact

- Email: ${contactEmail}
- Amazon Store: ${amazonStoreUrl}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
