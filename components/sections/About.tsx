'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

const glassStyle = {
  background:
    'linear-gradient(135deg, rgba(8,15,35,0.94) 0%, rgba(12,22,48,0.92) 50%, rgba(8,15,35,0.94) 100%)',
  boxShadow:
    '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(96,165,250,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
};

/* ------------------------------------------------------------------ */
/*  Panel data                                                         */
/* ------------------------------------------------------------------ */

const panels = [
  {
    badge: 'Our Story',
    badgeColor: 'blue',
    content: (
      <>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto">
          <span className="text-blue-300 font-semibold">Softx World</span> was
          built by former engineers and architects who spent years inside Sri
          Lanka&apos;s leading software companies.
        </p>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
          We learned what it takes to design, build, and maintain systems that
          operate at scale — where reliability, security, and long-term thinking
          are non-negotiable.
        </p>
      </>
    ),
  },
  {
    badge: 'The Gap We Bridged',
    badgeColor: 'cyan',
    content: (
      <>
        <div className="bg-white/10 border-l-4 border-cyan-400 p-5 sm:p-6 rounded-r-xl mb-5 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-relaxed">
            We saw a gap: businesses needed{' '}
            <span className="text-cyan-300">enterprise-level engineering</span>{' '}
            without the enterprise-level cost and complexity.
          </p>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-100/90 font-medium leading-relaxed max-w-3xl mx-auto">
          <span className="text-cyan-300 font-bold">
            Softx World bridges that gap.
          </span>
        </p>
      </>
    ),
  },
  {
    badge: 'Today',
    badgeColor: 'indigo',
    content: (
      <>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-5">
          We bring enterprise-level experience to organizations of all sizes.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-indigo-100/85 leading-relaxed max-w-3xl mx-auto">
          Whether you&apos;re scaling an established business or building
          something new in a rapidly evolving, AI-driven landscape, we work as a
          practical partner — focused on{' '}
          <span className="text-indigo-300 font-semibold">
            clarity, efficiency, and real business outcomes
          </span>
          .
        </p>
      </>
    ),
  },
];

const badgeColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'bg-blue-500/20',   border: 'border-blue-400/40',   text: 'text-blue-200',   dot: 'bg-blue-400' },
  cyan:   { bg: 'bg-cyan-500/20',   border: 'border-cyan-400/40',   text: 'text-cyan-200',   dot: 'bg-cyan-400' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-400/40', text: 'text-indigo-200', dot: 'bg-indigo-400' },
};

/* ------------------------------------------------------------------ */
/*  Panel component                                                    */
/* ------------------------------------------------------------------ */

function StoryPanel({
  panel,
  y,
  opacity,
  scale,
}: {
  panel: (typeof panels)[number];
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  const c = badgeColors[panel.badgeColor];

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, opacity, scale }}
    >
      {/* Glass card — separate from opacity-animated parent so backdrop-filter works */}
      <div
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-white/15 p-6 sm:p-10 lg:p-14 overflow-hidden flex items-center justify-center"
        style={glassStyle}
      >
        {/* Top highlight line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 ${c.bg} rounded-full border ${c.border} ${c.text} text-sm font-medium`}
            >
              <span className={`w-2 h-2 rounded-full ${c.dot} animate-pulse`} />
              {panel.badge}
            </span>
          </div>

          {/* Content */}
          {panel.content}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress dots                                                      */
/* ------------------------------------------------------------------ */

function ProgressDots({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // Each dot lights up when its panel is active
  const dot1 = useTransform(scrollYProgress, [0.28, 0.34, 0.44, 0.50], [0.3, 1, 1, 0.3]);
  const dot2 = useTransform(scrollYProgress, [0.48, 0.54, 0.64, 0.70], [0.3, 1, 1, 0.3]);
  const dot3 = useTransform(scrollYProgress, [0.68, 0.74, 0.84, 0.90], [0.3, 1, 1, 0.3]);

  const dotScale1 = useTransform(scrollYProgress, [0.28, 0.34, 0.44, 0.50], [1, 1.3, 1.3, 1]);
  const dotScale2 = useTransform(scrollYProgress, [0.48, 0.54, 0.64, 0.70], [1, 1.3, 1.3, 1]);
  const dotScale3 = useTransform(scrollYProgress, [0.68, 0.74, 0.84, 0.90], [1, 1.3, 1.3, 1]);

  // Progress bar between dots
  const progressWidth = useTransform(scrollYProgress, [0.30, 0.90], ['0%', '100%']);

  // Hide dots until TC has scattered
  const dotsOpacity = useTransform(scrollYProgress, [0.26, 0.32], [0, 1]);

  return (
    <motion.div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3" style={{ opacity: dotsOpacity }}>
      {/* Background track */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 h-[2px] bg-white/10 rounded-full" />
      {/* Active track */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-2 h-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-full"
        style={{ width: progressWidth }}
      />

      {[
        { opacity: dot1, scale: dotScale1, color: 'bg-blue-400' },
        { opacity: dot2, scale: dotScale2, color: 'bg-cyan-400' },
        { opacity: dot3, scale: dotScale3, color: 'bg-indigo-400' },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${dot.color}`}
          style={{ opacity: dot.opacity, scale: dot.scale }}
        />
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export const About: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  /*
   * TC wrapper = 200vh, About wrapper = 400vh, marginTop = -200vh
   * About top aligns with TC top. Both sticky sections overlap.
   * scrollYProgress 0→1 spans ~300vh of scroll (400vh - 100vh viewport).
   *
   * TC scatter completes at TC scrollYProgress ~0.50 = ~100vh scroll.
   * In About terms: 100vh / 300vh ≈ 0.33.
   *
   * Timeline:
   *   0.00–0.20  Sigiriya bg fades in (behind TC white overlay)
   *   0.18–0.28  Title appears
   *   0.30–0.50  Panel 1
   *   0.50–0.70  Panel 2
   *   0.70–0.90  Panel 3
   *   0.90–1.00  Fade out
   */

  /* --- Background --- */
  const bgScale = useTransform(scrollYProgress, [0, 0.25], [1.12, 1.0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.20], [0, 1]);

  /* --- Title --- */
  const titleY = useTransform(scrollYProgress, [0.18, 0.28], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);

  /* --- Panel 1: 0.30 – 0.50 --- */
  const p1Y = useTransform(scrollYProgress,
    [0.28, 0.34, 0.44, 0.50],
    [80,    0,    0,    -60]
  );
  const p1Opacity = useTransform(scrollYProgress,
    [0.28, 0.34, 0.44, 0.50],
    [0,    1,    1,    0]
  );
  const p1Scale = useTransform(scrollYProgress,
    [0.28, 0.34, 0.44, 0.50],
    [0.95, 1,    1,    0.97]
  );

  /* --- Panel 2: 0.50 – 0.70 --- */
  const p2Y = useTransform(scrollYProgress,
    [0.48, 0.54, 0.64, 0.70],
    [80,    0,    0,    -60]
  );
  const p2Opacity = useTransform(scrollYProgress,
    [0.48, 0.54, 0.64, 0.70],
    [0,    1,    1,    0]
  );
  const p2Scale = useTransform(scrollYProgress,
    [0.48, 0.54, 0.64, 0.70],
    [0.95, 1,    1,    0.97]
  );

  /* --- Panel 3: 0.70 – 0.90 --- */
  const p3Y = useTransform(scrollYProgress,
    [0.68, 0.74, 0.84, 0.90],
    [80,    0,    0,    -60]
  );
  const p3Opacity = useTransform(scrollYProgress,
    [0.68, 0.74, 0.84, 0.90],
    [0,    1,    1,    0]
  );
  const p3Scale = useTransform(scrollYProgress,
    [0.68, 0.74, 0.84, 0.90],
    [0.95, 1,    1,    0.97]
  );

  /* --- Section fade-out at end --- */
  const sectionOpacity = useTransform(scrollYProgress, [0.90, 1.0], [1, 0]);

  return (
    <div ref={wrapperRef} className="relative z-0" style={{ height: '400vh', marginTop: '-200vh' }}>
      <motion.section
        id="about"
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
        style={{ opacity: sectionOpacity }}
      >
        {/* Background: Sigiriya image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, opacity: bgOpacity }}
        >
          <Image
            src="/media/sigiriya.jpg"
            alt="Sigiriya — Built to last"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 pointer-events-none" />

        {/* Title */}
        <motion.div
          className="relative z-10 pt-20 sm:pt-24 flex justify-center"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Softx World
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-blue-100/70 text-center max-w-2xl mx-auto font-light">
              Built by engineers from Sri Lanka&apos;s leading tech companies
            </p>
          </div>
        </motion.div>

        {/* Panel container */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="relative w-full max-w-4xl mx-auto" style={{ minHeight: '280px', maxHeight: '420px', height: '50vh' }}>
            <StoryPanel panel={panels[0]} y={p1Y} opacity={p1Opacity} scale={p1Scale} />
            <StoryPanel panel={panels[1]} y={p2Y} opacity={p2Opacity} scale={p2Scale} />
            <StoryPanel panel={panels[2]} y={p3Y} opacity={p3Opacity} scale={p3Scale} />
          </div>
        </div>

        {/* Progress dots */}
        <ProgressDots scrollYProgress={scrollYProgress} />
      </motion.section>
    </div>
  );
};
