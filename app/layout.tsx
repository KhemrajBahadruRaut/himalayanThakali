import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Himalayan Thakali | Authentic Nepali Cuisine",
    template: "%s | Himalayan Thakali",
  },
  description:
    "Experience the authentic taste of the Himalayas with our traditional Thakali Thali and Nepali delicacies.",
  keywords: [
    "Thakali",
    "Nepali Restaurant",
    "Himalayan Food",
    "Authentic Thali",
    "Kathmandu Dining",
  ],
  authors: [{ name: "Himalayan Thakali Team" }],
  creator: "Himalayan Thakali",
  // OpenGraph is what shows up when you share your link on Facebook/WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himalayanthakali.com",
    siteName: "Himalayan Thakali",
    title: "Himalayan Thakali | Authentic Nepali Cuisine",
    description: "Experience the authentic taste of the Himalayas.",
    images: [
      {
        url: "/og-image.jpg", // Add an image in your public folder for social previews
        width: 1200,
        height: 630,
        alt: "Himalayan Thakali Restaurant",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Thakali",
    description: "Authentic Himalayan tastes delivered to your table.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}>
        <div className="flex flex-col min-h-screen">
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
