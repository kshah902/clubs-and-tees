import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clubs & Tees — Golf Lifestyle Apparel",
  description:
    "Clubs & Tees is a golf lifestyle apparel brand focused on minimal golf-inspired t-shirts and casual wear. Designed for golfers who appreciate clean design and timeless style.",
  keywords: [
    "golf apparel",
    "golf lifestyle",
    "golf t-shirts",
    "minimal golf clothing",
    "golf fashion",
    "clubs and tees",
  ],
  openGraph: {
    title: "Clubs & Tees — Play the Round. Live the Lifestyle.",
    description:
      "Modern golf lifestyle apparel. Clean design. Understated style. Made for golfers who don't need to be loud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        {/* Paper grain texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
