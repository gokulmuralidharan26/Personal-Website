import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { CursorGlow, SmoothScrollProvider } from "@/components/MotionProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gokul Muralidharan — TPM · PM · Builder",
  description:
    "CS @ UF with AI Certificate. Technical Product Manager, builder, and creative. I ship product + data experiences that move metrics. GE Vernova, FIS, Florida Blue Key.",
  keywords: [
    "Gokul Muralidharan",
    "Product Manager",
    "Technical Product Manager",
    "UF Computer Science",
    "GE Vernova",
    "Portfolio",
    "TPM",
    "Data Analytics",
    "Next.js",
  ],
  authors: [{ name: "Gokul Muralidharan" }],
  creator: "Gokul Muralidharan",
  openGraph: {
    title: "Gokul Muralidharan — TPM · PM · Builder",
    description:
      "CS @ UF with AI Certificate. I build product + data experiences that ship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul Muralidharan — TPM · PM · Builder",
    description: "CS @ UF with AI Certificate. I build product + data experiences that ship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <CursorGlow />
        <SmoothScrollProvider>
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
