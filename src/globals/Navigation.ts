import type { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "headerLinks",
      type: "array",
      label: "Header Navigation Links",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "isExternal",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "isButton",
          type: "checkbox",
          defaultValue: false,
          label: "Display as CTA button",
        },
      ],
    },
    {
      name: "footerLinks",
      type: "array",
      label: "Footer Navigation Links",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "isExternal",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
  ],
};
