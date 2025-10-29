import React from 'react';
import Link from 'next/link';
import { Navigation, Footer, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center bg-secondary-50">
        <div className="container-custom text-center py-20">
          <h1 className="text-6xl font-bold text-secondary-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">
            Case Study Not Found
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the case study you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/#portfolio" size="lg">
              View All Case Studies
            </Button>
            <Button href="/" variant="outline" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
