import React from 'react';
import { Navigation, Footer } from '@/components/ui';
import { Hero, About, Services, Portfolio, Pricing, Contact } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
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
