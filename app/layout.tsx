import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Soft Tech - AI-Powered Business Solutions | Strategic Technology Partner",
  description: "Transform your business with AI-powered solutions. Soft Tech specializes in AI chat agents, legacy system migrations, and strategic consultation to help you gain competitive advantage. 7+ years of experience from top companies.",
  keywords: ["AI solutions", "business technology", "AI chat agents", "legacy system migration", "business consultation", "AI knowledge systems", "technology consulting"],
  authors: [{ name: "Soft Tech" }],
  openGraph: {
    title: "Soft Tech - AI-Powered Business Solutions",
    description: "Transform your business with AI-powered solutions and strategic technology partnership.",
    type: "website",
    locale: "en_US",
    siteName: "Soft Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soft Tech - AI-Powered Business Solutions",
    description: "Transform your business with AI-powered solutions and strategic technology partnership.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://soft-tech.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
