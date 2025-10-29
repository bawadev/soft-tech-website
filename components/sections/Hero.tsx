'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Container } from '../ui';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container className="relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              🚀 AI-Powered Business Solutions
            </div>

            <h1 className="heading-1 mb-6">
              Transform Your Business with{' '}
              <span className="text-gradient">AI Technology</span>
            </h1>

            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              We don't just build websites—we bring you actual clients. Partner with Soft Tech for cutting-edge AI solutions that drive growth and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="#contact" size="lg">
                Get Free Consultation
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">7+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-secondary-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-secondary-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="AI Technology and Business Growth"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-scale-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">100% Client Satisfaction</div>
                  <div className="text-sm text-secondary-600">Guaranteed Results</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-scale-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">AI-Powered</div>
                  <div className="text-sm text-secondary-600">Latest Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
