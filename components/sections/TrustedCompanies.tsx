'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, ScrollReveal, AnimateCounter } from '../ui';

export const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'IFS', logo: '/logos/ifs.png' },
    { name: 'Tech Mahindra', logo: '/logos/tech-mahindra.png' },
    { name: 'Cisco', logo: '/logos/cisco.png' },
    { name: 'Virtusa', logo: '/logos/virtusa.png' },
    { name: 'New York Life Insurance', logo: '/logos/new-york-life.png' },
    { name: 'Codegen', logo: '/logos/codegen.png' },
  ];

  // Duplicate for seamless marquee loop
  const marqueeLogos = [...companies, ...companies];

  // Track scroll on the tall wrapper (200vh) — gives 100vh of pinned scroll room
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
    // 0 = wrapper top at viewport top (TC pins)
    // 0.5 = 100vh scrolled (TC unpins, but already invisible)
    // 1.0 = wrapper fully past viewport
  });

  // Background white overlay fade — reveals Sigiriya behind
  const bgFadeOpacity = useTransform(scrollYProgress, [0.0, 0.35], [1, 0]);

  // Left column: flies left + down + scale (reduced X for mobile)
  const leftX = useTransform(scrollYProgress, [0.08, 0.42], [0, -100]);
  const leftY = useTransform(scrollYProgress, [0.08, 0.42], [0, 60]);
  const leftOpacity = useTransform(scrollYProgress, [0.08, 0.42], [1, 0]);
  const leftScale = useTransform(scrollYProgress, [0.08, 0.42], [1, 0.85]);

  // Right column: flies right + down + scale (reduced X for mobile)
  const rightX = useTransform(scrollYProgress, [0.12, 0.45], [0, 100]);
  const rightY = useTransform(scrollYProgress, [0.12, 0.45], [0, 60]);
  const rightOpacity = useTransform(scrollYProgress, [0.12, 0.45], [1, 0]);
  const rightScale = useTransform(scrollYProgress, [0.12, 0.45], [1, 0.85]);

  // Marquee: drops down
  const marqueeY = useTransform(scrollYProgress, [0.18, 0.48], [0, 100]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.18, 0.48], [1, 0]);
  const marqueeScale = useTransform(scrollYProgress, [0.18, 0.48], [1, 0.9]);

  // Stats bar: drops further down
  const statsY = useTransform(scrollYProgress, [0.22, 0.50], [0, 120]);
  const statsOpacity = useTransform(scrollYProgress, [0.22, 0.50], [1, 0]);
  const statsScale = useTransform(scrollYProgress, [0.22, 0.50], [1, 0.9]);

  return (
    <div ref={wrapperRef} className="relative h-[300vh] z-10">
      <section className="sticky top-0 h-screen overflow-hidden relative flex flex-col justify-center py-4 sm:py-12">
        {/* White background overlay — fades to reveal Sigiriya behind */}
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          style={{ opacity: bgFadeOpacity }}
        />
        {/* Background Depth */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#eff6ff_0%,_transparent_60%)] pointer-events-none"
          style={{ opacity: bgFadeOpacity }}
        />

        <Container className="relative z-10">
          {/* Two-column header: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-16 items-center mb-4 sm:mb-12">
            {/* Left — Image */}
            <motion.div style={{ x: leftX, y: leftY, opacity: leftOpacity, scale: leftScale }}>
              <ScrollReveal variant="fadeLeft">
                <div className="relative w-full h-[180px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="absolute bottom-0 right-0">
                    <p className="text-sm font-medium text-white/90 italic bg-black/30 backdrop-blur-sm px-3 py-2 rounded-tl-xl">
                      &quot;Every line of code crafted with the same precision and care.&quot;
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>

            {/* Right — Text content */}
            <motion.div style={{ x: rightX, y: rightY, opacity: rightOpacity, scale: rightScale }}>
              <ScrollReveal variant="fadeRight">
                <div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-4">
                    Crafted with Elegance of Sri Lankan Engineering
                  </h2>

                  <p className="text-sm sm:text-lg text-secondary-700 mb-3 sm:mb-6">
                    We are a software company founded by senior engineers and solution architects with deep roots in Sri Lanka&apos;s leading technology companies. Our enterprise-grade experience powers intelligent AI and automation solutions built for scale, reliability, and impact.
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-secondary-700 font-medium">5.0 Client Rating</span>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          </div>

          {/* Infinite Logo Marquee */}
          <motion.div
            className="relative overflow-hidden mb-4 sm:mb-8"
            style={{ y: marqueeY, opacity: marqueeOpacity, scale: marqueeScale }}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee">
              {marqueeLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 flex items-center justify-center bg-white rounded-lg px-5 py-3 shadow-sm border border-secondary-100/50"
                  style={{ width: '140px', height: '50px' }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-[30px] max-w-[110px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                    style={{ filter: 'grayscale(100%) brightness(0.5) contrast(1.1)' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="pt-6 border-t border-secondary-100"
            style={{ y: statsY, opacity: statsOpacity, scale: statsScale }}
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-8 text-center">
              <ScrollReveal variant="fadeUp" delay={0}>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    <AnimateCounter value={98} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-base text-secondary-700">Client Satisfaction Rate</div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    <AnimateCounter value={15} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-base text-secondary-700">Years Combined Experience</div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    <AnimateCounter value={50} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-base text-secondary-700">Ex-Enterprise Engineers</div>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
