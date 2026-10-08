'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Container } from '../ui';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50/70">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Depth Orbs — animated */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary-300/15 rounded-full blur-2xl pointer-events-none" style={{ animation: 'float-delayed 10s ease-in-out infinite' }} />

      <Container className="relative z-10 pt-28 sm:pt-32 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              className="heading-1 mb-6 sm:mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              Enterprise Software.{' '}
              <span className="text-gradient">
                Built the <span className="whitespace-nowrap">Human Way.</span>
              </span>
            </motion.h1>

            {/* Glass panel — paragraph + buttons + stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="liquid-glass backdrop-blur-xl rounded-2xl border border-primary-200/40 p-6 sm:p-7 cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(var(--brand-glow-rgb),0.18) 0%, rgba(var(--brand-light-rgb),0.10) 50%, rgba(var(--brand-primary-rgb),0.14) 100%)',
                  boxShadow: '0 8px 32px rgba(var(--brand-glow-rgb),0.22), 0 2px 8px rgba(var(--brand-glow-rgb),0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                {/* Top edge highlight */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-100/70 to-transparent pointer-events-none" />
                {/* Inner surface gloss */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-primary-50/5 to-transparent rounded-2xl pointer-events-none" />
                {/* Bottom glow bloom */}
                <div className="absolute -bottom-4 left-1/4 right-1/4 h-10 bg-primary-400/25 rounded-full blur-2xl pointer-events-none" />

                <p className="relative z-10 text-base sm:text-lg md:text-xl text-secondary-700 mb-6 leading-relaxed">
                  SoftX World is an engineering partner for enterprises — and for ambitious teams becoming one. We take on a few substantial builds at a time and deliver them with senior engineers, human-led discovery, and craftsmanship designed to last for decades.
                </p>

                <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                  <Button href="#contact" size="lg" className="shadow-xl">
                    Start a Conversation
                  </Button>
                  <Button href="#services" variant="secondary" size="lg">
                    See How We Work
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative z-10 border-t border-white/40 pt-5">
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 items-start">
                    {[
                      { value: 'Industry-Proven', label: 'Careers Built at Enterprise Scale' },
                      { value: 'A Few', label: 'Clients at a Time, by Design' },
                      { value: 'Decades', label: 'The Lifespan We Build For' },
                    ].map((stat) => (
                      <div key={stat.value} className="min-w-0">
                        {/* fixed value row so a wrapped value never shifts its label */}
                        <div className="flex items-end min-h-[3.25rem] sm:min-h-[4rem]">
                          <div className="text-lg sm:text-2xl font-bold text-primary-600 leading-tight">
                            {stat.value}
                          </div>
                        </div>
                        <div className="mt-1 text-[11px] sm:text-xs text-secondary-700 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content — hero image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero image — real craft, brand-graded */}
              <Image
                src="/media/hero-craft.webp"
                alt="A SoftX engineer at work — hands on a keyboard, code on screen"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover scale-105 transition-transform duration-[1200ms] ease-out hover:scale-100"
                priority
              />

              {/* Brand grade + depth so the panel sits in the palette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/55 via-primary-800/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
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
