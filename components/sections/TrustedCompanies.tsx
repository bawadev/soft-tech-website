'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../ui';

export const TrustedCompanies: React.FC = () => {
  const clients = [
    { name: 'New York Life Insurance', logo: '/logos/new-york-life.svg' },
    { name: 'Work Wave', logo: '/logos/workwave.svg' },
    { name: 'Mapbe Well Being', logo: '/logos/mapbe.svg' },
    { name: 'Virtusa', logo: '/logos/virtusa.svg' },
    { name: 'Codegen', logo: '/logos/codegen.svg' },
    { name: 'IFS', logo: '/logos/ifs.svg' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-secondary-100">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by Industry Leaders</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Companies We've Worked With
          </h2>

          <p className="text-base sm:text-lg text-secondary-700 max-w-2xl mx-auto">
            Proud to have partnered with these innovative organizations to deliver cutting-edge AI solutions
          </p>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mt-4">
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

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo Card */}
              <div className="relative h-32 sm:h-36 lg:h-40 flex items-center justify-center p-6 rounded-xl border-2 border-secondary-100 bg-white hover:border-primary-300 hover:shadow-2xl transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105">
                {/* Company Logo Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Company Name Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-secondary-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
                {client.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-secondary-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm sm:text-base text-secondary-700">Client Satisfaction Rate</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">7+</div>
              <div className="text-sm sm:text-base text-secondary-700">Years Industry Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">$2M+</div>
              <div className="text-sm sm:text-base text-secondary-700">Revenue Generated for Clients</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
