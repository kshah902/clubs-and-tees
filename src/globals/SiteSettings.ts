import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Clubs & Tees",
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "Play the Round. Live the Lifestyle.",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Clubs & Tees is a golf lifestyle apparel brand focused on minimal golf-inspired t-shirts and casual wear.",
    },
    {
      name: "amazonStoreUrl",
      type: "text",
      required: true,
      defaultValue: "https://www.amazon.com/s?me=CLUBS_AND_TEES",
      label: "Amazon Store URL",
    },
    {
      name: "socialLinks",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "twitter", type: "text" },
        { name: "tiktok", type: "text" },
        { name: "facebook", type: "text" },
      ],
    },
    {
      name: "contactEmail",
      type: "email",
      defaultValue: "hello@clubsandtees.com",
    },
    {
      name: "seoDefaults",
      type: "group",
      label: "Default SEO Settings",
      fields: [
        {
          name: "defaultTitle",
          type: "text",
          defaultValue: "Clubs & Tees — Golf Lifestyle Apparel",
        },
        {
          name: "defaultDescription",
          type: "textarea",
          defaultValue:
            "Modern golf lifestyle apparel. Clean design. Understated style. Made for golfers who don't need to be loud.",
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
          label: "Default Open Graph Image",
        },
      ],
    },
  ],
};
