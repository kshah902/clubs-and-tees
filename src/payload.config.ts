import path from "path";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Products } from "./collections/Products";
import { Categories } from "./collections/Categories";
import { Pages } from "./collections/Pages";
import { SiteSettings } from "./globals/SiteSettings";
import { Navigation } from "./globals/Navigation";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Clubs & Tees Admin",
    },
    importMap: {
      baseDir: path.resolve(__dirname),
    },
  },
  collections: [Users, Media, Products, Categories, Pages],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            enabled: true,
            token: process.env.BLOB_READ_WRITE_TOKEN,
            collections: {
              media: true,
            },
          }),
        ]
      : []),
  ],
});
