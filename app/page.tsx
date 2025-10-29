import React from 'react';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/ui';
import { Hero, About, Services, Portfolio, Pricing, Contact } from '@/components/sections';
import { ServicesSchema, WebSiteSchema } from '@/lib/seo/schemas';

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
