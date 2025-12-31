import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "First Test Assignment - Ellty Frontend",
  description: "Pixel-perfect component replication built with Next.js, React, and Tailwind CSS for Ellty Frontend Assignment. Interactive UI with checkboxes and modals.",
  keywords: ["frontend", "react", "nextjs", "tailwind", "component", "ui", "ellty", "assignment", "typescript"],
  authors: [{ name: "Frontend Developer" }],
  creator: "Frontend Developer",
  publisher: "Ellty Assignment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "First Test Assignment - Ellty Frontend",
    description: "Pixel-perfect component replication with interactive UI elements",
    siteName: "Ellty Frontend Assignment",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Test Assignment - Ellty Frontend",
    description: "Pixel-perfect component replication with interactive UI elements",
    creator: "@yourhandle",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFCE22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
