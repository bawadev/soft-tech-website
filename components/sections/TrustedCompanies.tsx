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
            Crafted by Engineers from Sri Lanka’s Leading Tech Companies
          </h2>

          <p className="text-base sm:text-lg text-secondary-700 max-w-3xl mx-auto">
            We are a software company founded by senior engineers and solution architects with deep roots in Sri Lanka’s leading technology companies. Our enterprise-grade experience powers intelligent AI and automation solutions built for scale, reliability, and impact.
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
