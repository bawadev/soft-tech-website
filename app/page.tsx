import React from 'react';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/ui';
import { Hero, TrustedCompanies, About, Services, Portfolio, Pricing, Contact } from '@/components/sections';
import { ServicesSchema, WebSiteSchema } from '@/lib/seo/schemas';

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary-600 text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ServicesSchema) }}
        strategy="beforeInteractive"
      />
      <Navigation />
      <Hero />
      <div className="relative">
        <TrustedCompanies />
        <About />
      </div>
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
