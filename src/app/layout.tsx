import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { DynamicMeta } from "@/components/ui/DynamicMeta";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phanikumar.dev"),
  title: "Phani Kumar | Technical Engineer",
  description:
    "Technical Engineer & Creative Developer — Building high-performance digital products, full-stack applications, and robust AI integrations.",
  keywords: ["Software Engineer", "Frontend Developer", "Web3", "Next.js", "Flutter", "Phani Kumar", "Portfolio"],
  authors: [{ name: "Phani Kumar" }],
  creator: "Phani Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phanikumar.dev", // Ideally this should be the actual production URL
    title: "Phani Kumar | Technical Engineer",
    description: "Technical Engineer & Creative Developer — Building high-performance digital products, full-stack applications, and robust AI integrations.",
    siteName: "Phani Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image in public folder
        width: 1200,
        height: 630,
        alt: "Phani Kumar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phani Kumar | Technical Engineer",
    description: "Technical Engineer & Creative Developer — Building high-performance digital products, full-stack applications, and robust AI integrations.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-bg text-text`}
      >
        <SmoothScroll>
          <DynamicMeta />
          <ScrollProgress />
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
