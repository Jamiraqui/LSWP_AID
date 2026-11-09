import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const metadataBase = new URL(
  process.env.GITHUB_PAGES === "true"
    ? "https://jamiraqui.github.io/LSWP_AID/"
    : "https://lswp-aid.vercel.app/",
);

export const metadata: Metadata = {
  metadataBase,
  title: "LSWP Aid | Lasallian Student Welfare Program",
  description: "Support for currently enrolled Lasallian students facing urgent welfare needs.",
  openGraph: {
    title: "LSWP Aid",
    description: "Support for currently enrolled Lasallian students facing urgent welfare needs.",
    url: "/",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LSWP Aid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LSWP Aid",
    description: "Support for currently enrolled Lasallian students facing urgent welfare needs.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${fraunces.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
