'use client';

import React from 'react';
import Image from 'next/image';
import { Container, ScrollReveal, AnimateCounter } from '../ui';

export const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'IFS', logo: '/logos/ifs.svg' },
    { name: 'Tech Mahindra', logo: '/logos/tech-mahindra.svg' },
    { name: 'WorkWave', logo: '/logos/workwave.svg' },
    { name: 'Virtusa', logo: '/logos/virtusa.svg' },
    { name: 'New York Life Insurance', logo: '/logos/new-york-life.svg' },
    { name: 'Codegen', logo: '/logos/codegen.svg' },
  ];

  // Duplicate for seamless marquee loop
  const marqueeLogos = [...companies, ...companies];

  return (
    <section className="relative py-16 sm:py-20 bg-white border-y border-secondary-100 overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#eff6ff_0%,_transparent_60%)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Two-column header: image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Left — Image */}
          <ScrollReveal variant="fadeLeft">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/media/craftsmanship.png"
                alt="Precision craftsmanship — the care we bring to every line of code"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent" />
              {/* Caption badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 border border-white/50 shadow-lg">
                  <p className="text-sm font-medium text-secondary-800 italic">
                    "Every line of code crafted with the same precision and care."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text content */}
          <ScrollReveal variant="fadeRight">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Enterprise Expertise</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Crafted by Engineers from Sri Lanka&apos;s Leading Tech Companies
              </h2>

              <p className="text-base sm:text-lg text-secondary-700 mb-6">
                We are a software company founded by senior engineers and solution architects with deep roots in Sri Lanka&apos;s leading technology companies. Our enterprise-grade experience powers intelligent AI and automation solutions built for scale, reliability, and impact.
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-secondary-700 font-medium">5.0 Client Rating</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative overflow-hidden mb-12">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {marqueeLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-[40px] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ minWidth: '80px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="pt-8 border-t border-secondary-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <ScrollReveal variant="fadeUp" delay={0}>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  <AnimateCounter value={98} suffix="%" />
                </div>
                <div className="text-sm sm:text-base text-secondary-700">Client Satisfaction Rate</div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  <AnimateCounter value={15} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-secondary-700">Years Combined Experience</div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  <AnimateCounter value={50} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-secondary-700">Ex-Enterprise Engineers</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
