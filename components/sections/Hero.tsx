'use client';

import React from 'react';
import Image from 'next/image';
import { Rocket, Bot } from 'lucide-react';
import { Button, Container } from '../ui';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container className="relative z-10 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-5 sm:mb-6">
              <Rocket className="w-4 h-4" aria-hidden="true" />
              <span>AI-Powered Business Solutions</span>
            </div>

            <h1 className="heading-1 mb-5 sm:mb-6">
              Transform Your Business with{' '}
              <span className="text-gradient">AI Technology</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-secondary-700 mb-6 sm:mb-8 leading-relaxed max-w-prose">
              We don't build websites—we build platforms that bring actual customers to your doorstep. Partner with Softx World for cutting-edge AI solutions that drive growth and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button href="#contact" size="lg">
                Get Free Consultation
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 sm:gap-8 items-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">7+</div>
                <div className="text-xs sm:text-sm text-secondary-700">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">50+</div>
                <div className="text-xs sm:text-sm text-secondary-700">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-xs sm:text-sm text-secondary-700">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="AI Technology and Business Growth"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-900/10"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-scale-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">100% Client Satisfaction</div>
                  <div className="text-sm text-secondary-700">Guaranteed Results</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-scale-in hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">AI-Powered</div>
                  <div className="text-sm text-secondary-700">Latest Technology</div>
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
