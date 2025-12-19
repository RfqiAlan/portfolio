import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Portfolio of John Doe - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    siteName: "John Doe Portfolio",
    title: "John Doe | Full Stack Developer",
    description:
      "Portfolio of John Doe - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full Stack Developer",
    description:
      "Portfolio of John Doe - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
