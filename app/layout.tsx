import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/lib/seo/schemas";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3b82f6',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://softx-world.com'),
  title: {
    default: "Softx World - You Focus on Business, We Bring You Customers",
    template: "%s | Softx World"
  },
  description: "AI-powered automation, RAG systems, n8n workflows, and marketing automation that delivers 3-5x ROI. We handle customer acquisition so you can focus on business growth. 24/7 support, lifetime upgrades.",
  keywords: [
    "n8n automation",
    "RAG systems",
    "AI chatbots",
    "marketing automation",
    "customer acquisition",
    "workflow automation",
    "legacy system migration",
    "business automation",
    "AI transformation",
    "lead generation",
    "API integration",
    "marketing agency",
    "software modernization",
    "customer service automation",
    "business growth"
  ],
  authors: [{ name: "Softx World", url: "https://softx-world.com" }],
  creator: "Softx World",
  publisher: "Softx World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softx-world.com",
    siteName: "Softx World",
    title: "Softx World - AI Automation & Customer Acquisition Partner",
    description: "Transform your business with n8n automation, RAG systems, AI chatbots, and marketing automation. We bring you customers while you focus on your business. 3-5x ROI guaranteed.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Softx World - AI Automation & Customer Acquisition Partner",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softx World - AI Automation & Customer Acquisition Partner",
    description: "AI-powered automation, RAG systems, and marketing automation that brings you customers. We handle acquisition, you handle business.",
    images: ["/twitter-image.jpg"],
    creator: "@SoftxWorld",
    site: "@SoftxWorld",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://softx-world.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
