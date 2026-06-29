import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Archivo,
  Big_Shoulders,
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Spline_Sans_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Per-variant display + shared body/mono faces (distinct, off the reflex list per variant)
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bigShoulders = Big_Shoulders({ variable: "--font-bigshoulders", subsets: ["latin"], weight: ["500", "600", "700", "800", "900"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const splineMono = Spline_Sans_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mediterranean Mining Solutions — High-Purity Industrial Silica",
  description:
    "Independent specialist trader of high-purity silica sand & quartz from the Mediterranean basin. Certified assays, bulk maritime logistics, glass · foundry · filtration · ceramics grades.",
};

const fontVars = [
  geistSans.variable,
  geistMono.variable,
  archivo.variable,
  bigShoulders.variable,
  bricolage.variable,
  hanken.variable,
  splineMono.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
