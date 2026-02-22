import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "badge", "featured", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "amazonUrl",
      type: "text",
      required: true,
      label: "Amazon Product URL",
      admin: {
        description: "Full Amazon product page URL (e.g. https://a.co/d/...)",
      },
    },
    {
      name: "asin",
      type: "text",
      label: "ASIN",
      admin: {
        description: "Amazon Standard Identification Number",
      },
    },
    {
      name: "price",
      type: "number",
      min: 0,
      admin: {
        step: 0.01,
        description: "Price in USD",
      },
    },
    {
      name: "images",
      type: "array",
      label: "Product Images",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "badge",
      type: "select",
      options: [
        { label: "Bestseller", value: "bestseller" },
        { label: "New", value: "new" },
        { label: "Coming Soon", value: "coming-soon" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show on homepage featured section",
      },
    },
    {
      name: "productFeatures",
      type: "array",
      label: "Product Features / Bullet Points",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "colors",
      type: "array",
      label: "Available Colors",
      fields: [
        {
          name: "color",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "seoTitle",
      type: "text",
      label: "SEO Title Override",
      admin: {
        position: "sidebar",
        description: "Custom SEO title (auto-generated if empty)",
      },
    },
    {
      name: "seoDescription",
      type: "textarea",
      label: "SEO Description Override",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
