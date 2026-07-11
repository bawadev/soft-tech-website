import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/lib/seo/schemas";
import Script from "next/script";
import { ParticleNetwork, SmoothScroll } from "@/components/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0c62aa',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://softx.world'),
  title: {
    default: "SoftX World | Enterprise Software Engineering, Built the Human Way",
    template: "%s | SoftX World"
  },
  description: "SoftX World designs, builds, and operates enterprise-grade platforms for businesses that expect software to last. Human-led discovery, senior engineering, and partnerships measured in years — not sprints.",
  keywords: [
    "SoftX",
    "SoftX World",
    "softx.world",
    "enterprise software development",
    "custom software engineering",
    "platform engineering",
    "software development company",
    "product design",
    "UX research",
    "consumer psychology",
    "mobile app development",
    "cloud infrastructure",
    "DevOps",
    "software modernization",
    "legacy system migration",
    "long-term software partner",
    "dedicated development team",
    "Sri Lanka software engineering"
  ],
  authors: [{ name: "SoftX World", url: "https://softx.world" }],
  creator: "SoftX World",
  publisher: "SoftX World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softx.world",
    siteName: "SoftX World",
    title: "SoftX World | Enterprise Software, Built the Human Way",
    description: "Enterprise-grade platforms engineered to last decades. Human designers, marketing strategists, and customer-facing engineers — a deliberately small client roster, senior people on every build.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftX World — Enterprise Software, Built the Human Way",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftX World | Enterprise Software, Built the Human Way",
    description: "Enterprise-grade platforms engineered to last decades. Human-led discovery, senior engineering, partnerships measured in years.",
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#0c62aa' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://softx.world',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <SmoothScroll>
          <ParticleNetwork />
          <div className="relative z-[2] max-w-full overflow-x-clip">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
