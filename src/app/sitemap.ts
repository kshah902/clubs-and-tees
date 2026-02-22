import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clubsandtees.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/shop`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  try {
    const payload = await getPayloadClient();

    const products = await payload.find({
      collection: "products",
      limit: 500,
    });
    const productPages: MetadataRoute.Sitemap = products.docs.map((p: any) => ({
      url: `${siteUrl}/shop/${p.slug}`,
      lastModified: new Date(p.updatedAt as string),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    const pages = await payload.find({
      collection: "pages",
      limit: 100,
    });
    const cmsPages: MetadataRoute.Sitemap = pages.docs.map((p: any) => ({
      url: `${siteUrl}/${p.slug}`,
      lastModified: new Date(p.updatedAt as string),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...cmsPages];
  } catch {
    return staticPages;
  }
}
