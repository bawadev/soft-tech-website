'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../ui';

export const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'IFS', logo: '/logos/ifs.svg' },
    { name: 'Tech Mahindra', logo: '/logos/tech-mahindra.svg' },
    { name: 'WorkWave', logo: '/logos/workwave.svg' },
    { name: 'Virtusa', logo: '/logos/virtusa.svg' },
    { name: 'New York Life Insurance', logo: '/logos/new-york-life.svg' },
    { name: 'Codegen', logo: '/logos/codegen.svg' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-secondary-100">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Enterprise Expertise</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Team Previously Worked at Sri Lanka's Tech Giants
          </h2>

          <p className="text-base sm:text-lg text-secondary-700 max-w-3xl mx-auto">
            Our software company consists of senior engineers and solution architects who previously worked at Sri Lanka's leading software companies. We bring decades of enterprise-level experience to deliver world-class AI and automation solutions for your business.
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo Card */}
              <div className="relative h-40 sm:h-48 lg:h-56 flex items-center justify-center p-8 rounded-xl border-2 border-secondary-100 bg-white hover:border-primary-300 hover:shadow-2xl transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105">
                {/* Company Logo Image */}
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-[80px] w-auto object-contain"
                />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Company Name Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-secondary-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
                {company.name}
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
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-sm sm:text-base text-secondary-700">Years Combined Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-secondary-700">Ex-Enterprise Engineers</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
