'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../ui';

const glassStyle = {
  background:
    'linear-gradient(135deg, rgba(96,165,250,0.18) 0%, rgba(147,197,253,0.10) 50%, rgba(59,130,246,0.14) 100%)',
  boxShadow:
    '0 8px 32px rgba(96,165,250,0.22), 0 2px 8px rgba(96,165,250,0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
};

const glassHover = {
  y: -4,
  boxShadow:
    '0 24px 60px rgba(96,165,250,0.42), 0 6px 20px rgba(96,165,250,0.22), inset 0 1px 0 rgba(255,255,255,0.35)',
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

export const About: React.FC = () => {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  // Sigiriya image — fade in + scale down
  const bgScale = useTransform(scrollYProgress, [0, 0.35], [1.15, 1.0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  // Title — sweeps from far above (upper edge) to center-top
  const titleY = useTransform(scrollYProgress, [0.15, 0.35], [-300, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.30], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0.15, 0.35], [0.8, 1]);

  // Panel 1 — slides in from the left
  const p1X = useTransform(scrollYProgress, [0.32, 0.48], [-400, 0]);
  const p1Opacity = useTransform(scrollYProgress, [0.32, 0.44], [0, 1]);
  const p1Rotate = useTransform(scrollYProgress, [0.32, 0.48], [-6, 0]);

  // Panel 2 — slides in from the right
  const p2X = useTransform(scrollYProgress, [0.40, 0.56], [400, 0]);
  const p2Opacity = useTransform(scrollYProgress, [0.40, 0.52], [0, 1]);
  const p2Rotate = useTransform(scrollYProgress, [0.40, 0.56], [6, 0]);

  // Panel 3 — slides up from below
  const p3Y = useTransform(scrollYProgress, [0.48, 0.64], [200, 0]);
  const p3Opacity = useTransform(scrollYProgress, [0.48, 0.60], [0, 1]);
  const p3Scale = useTransform(scrollYProgress, [0.48, 0.64], [0.85, 1]);

  return (
    <div ref={wrapperRef} className="relative z-0" style={{ marginTop: '-200vh' }}>
      <section
        id="about"
        className="sticky top-0 h-screen overflow-hidden relative flex flex-col"
      >
        {/* Background: Sigiriya image */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
          <Image
            src="/media/sigiriya.jpg"
            alt="Sigiriya — Built to last"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 pointer-events-none" />

        {/* Title — own moving component, sweeps from upper edge to center-top */}
        <motion.div
          className="relative z-10 pt-16 sm:pt-20 flex justify-center"
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
        >
          <Container>
            <h2 className="heading-2 text-white text-center">
              Why Choose <span className="text-gradient">Softx World</span>
            </h2>
          </Container>
        </motion.div>

        {/* Three scattered tall panels — grid with staggered vertical offsets */}
        <div className="relative z-10 flex-1 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 items-start">
          {/* Panel 1 — left, slides in from the left, taller */}
          <motion.div
            className="mt-0 liquid-glass backdrop-blur-xl rounded-2xl border border-white/20 p-5 sm:p-7 overflow-hidden min-h-[55vh]  flex items-center"
            style={{ x: p1X, opacity: p1Opacity, rotate: p1Rotate, ...glassStyle }}
            whileHover={glassHover}
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-100/70 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-blue-50/5 to-transparent rounded-2xl pointer-events-none" />
            <p className="relative z-10 text-sm sm:text-base text-white/85 leading-relaxed">
              Softx World was built by former engineers and architects who have spent years working inside Sri Lanka&apos;s leading software companies. In those environments, we learned what it takes to design, build, and maintain systems that operate at scale—where reliability, security, and long-term thinking are non-negotiable.
            </p>
          </motion.div>

          {/* Panel 2 — center, slides in from right, highlighted, offset down */}
          <motion.div
            className="mt-16 liquid-glass backdrop-blur-xl rounded-2xl border border-white/20 border-l-4 border-l-primary-400 p-5 sm:p-7 overflow-hidden min-h-[42vh] flex items-center"
            style={{ x: p2X, opacity: p2Opacity, rotate: p2Rotate, ...glassStyle }}
            whileHover={glassHover}
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-100/70 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-blue-50/5 to-transparent rounded-2xl pointer-events-none" />
            <p className="relative z-10 text-white/90 font-medium text-sm sm:text-base leading-relaxed">
              We saw a gap: businesses needed enterprise-level engineering without the enterprise-level cost and complexity. Softx World bridges that gap.
            </p>
          </motion.div>

          {/* Panel 3 — right, scales up from below, offset slightly */}
          <motion.div
            className="mt-6 liquid-glass backdrop-blur-xl rounded-2xl border border-white/20 p-5 sm:p-7 overflow-hidden min-h-[50vh] flex items-center"
            style={{ y: p3Y, opacity: p3Opacity, scale: p3Scale, ...glassStyle }}
            whileHover={glassHover}
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-100/70 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-blue-50/5 to-transparent rounded-2xl pointer-events-none" />
            <p className="relative z-10 text-sm sm:text-base text-white/85 leading-relaxed">
              Today, we bring enterprise-level experience to organizations of all sizes. Whether you&apos;re scaling an established business or building something new in a rapidly evolving, AI-driven landscape, we work as a practical partner—focused on clarity, efficiency, and real business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scroll room — keeps About pinned for animations */}
      <div className="h-[180vh]" />
    </div>
  );
};
