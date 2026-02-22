import { getPayloadClient } from "@/lib/payload";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clubsandtees.com";

  let siteName = "Clubs & Tees";
  let description = "Golf lifestyle apparel brand focused on minimal golf-inspired t-shirts and casual wear.";
  let contactEmail = "hello@clubsandtees.com";
  let amazonStoreUrl = "https://www.amazon.com/s?me=CLUBS_AND_TEES";
  let productsCatalog = "";

  try {
    const payload = await getPayloadClient();
    const settings = await payload.findGlobal({ slug: "site-settings" });
    siteName = settings.siteName || siteName;
    description = settings.description || description;
    contactEmail = settings.contactEmail || contactEmail;
    amazonStoreUrl = settings.amazonStoreUrl || amazonStoreUrl;

    const products = await payload.find({
      collection: "products",
      limit: 200,
    });

    productsCatalog = products.docs
      .map((p: any) => {
        const categoryName =
          typeof p.category === "object" ? p.category?.name : "";
        const features = p.productFeatures
          ?.map((f: any) => f.feature)
          .join(", ");
        const colors = p.colors?.map((c: any) => c.color).join(", ");
        return `### ${p.name}

- **Category**: ${categoryName || "N/A"}
- **Price**: ${p.price ? `$${p.price.toFixed(2)}` : "N/A"}
- **Description**: ${p.description}
- **Amazon Link**: ${p.amazonUrl}
${features ? `- **Features**: ${features}` : ""}
${colors ? `- **Available Colors**: ${colors}` : ""}
${p.asin ? `- **ASIN**: ${p.asin}` : ""}
`;
      })
      .join("\n");
  } catch {
    // CMS not available
  }

  const content = `# ${siteName} - Complete Product Catalog

> ${description}

## Brand Overview

Clubs & Tees is a golf lifestyle apparel brand that blends modern minimalism with timeless golf culture. Founded on the belief that golf style should be relaxed, elevated, effortless, and versatile. All products are exclusively available on Amazon.

${productsCatalog ? `## Complete Product Catalog\n\n${productsCatalog}` : "## Products\n\nCatalog coming soon.\n"}

## Frequently Asked Questions

### Where can I buy Clubs & Tees products?
All Clubs & Tees products are exclusively available on Amazon at ${amazonStoreUrl}

### What makes Clubs & Tees different from other golf apparel?
Clubs & Tees focuses on minimal, understated design. No flashy graphics or gimmicks — just timeless pieces that transition from the course to everyday life.

### What types of products does Clubs & Tees sell?
Golf-inspired t-shirts, polos, caps, and casual wear designed with clean typography, subtle icons, and classic silhouettes.

### What is the return policy?
All products are fulfilled through Amazon, which means you get Amazon's standard return policy — easy, hassle-free returns.

## Contact

- Website: ${siteUrl}
- Email: ${contactEmail}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
