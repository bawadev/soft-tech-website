'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Panel data                                                         */
/* ------------------------------------------------------------------ */

const panels = [
  {
    badge: 'The Problem',
    badgeColor: 'blue',
    content: (
      <>
        <p className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 italic leading-snug max-w-3xl mx-auto">
          You shouldn&apos;t have to choose between{' '}
          <span className="text-primary-400 not-italic font-bold">quality and affordability</span>.
        </p>
        <p className="mt-4 sm:mt-6 font-serif text-sm sm:text-base md:text-lg text-primary-200/80 leading-relaxed max-w-3xl mx-auto">
          Softx World was started to give growing businesses the same caliber of
          engineering that powers the world&apos;s biggest companies — without
          the price tag or the red tape.
        </p>
      </>
    ),
  },
  {
    badge: 'Our Approach',
    badgeColor: 'cyan',
    content: (
      <>
        <div className="bg-white/10 border-l-4 border-primary-400 p-4 sm:p-6 rounded-r-xl mb-4 sm:mb-6 max-w-3xl mx-auto">
          <p className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl text-white italic leading-snug">
            Most agencies build fast and move on. Enterprise shops build well but{' '}
            <span className="text-primary-300 not-italic font-bold">charge a fortune</span>.
          </p>
        </div>
        <p className="font-serif text-base sm:text-xl md:text-2xl text-primary-300 font-bold not-italic leading-snug max-w-3xl mx-auto">
          We give you both: systems designed to last, at a price that makes sense.
        </p>
      </>
    ),
  },
  {
    badge: 'What You Get',
    badgeColor: 'indigo',
    content: (
      <>
        <p className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 italic leading-snug max-w-3xl mx-auto mb-4 sm:mb-6">
          AI chatbots that sell for you around the clock. Marketing systems that fill your pipeline.
        </p>
        <p className="font-serif text-sm sm:text-base md:text-lg text-primary-200/85 leading-relaxed max-w-3xl mx-auto">
          We build the machines that{' '}
          <span className="text-primary-400 not-italic font-bold">
            grow your business
          </span>
          . You focus on what you do best — we handle the rest.
        </p>
      </>
    ),
  },
];

const badgeColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'bg-primary-500/20',   border: 'border-primary-400/40',   text: 'text-primary-300',   dot: 'bg-primary-400' },
  cyan:   { bg: 'bg-primary-500/20',   border: 'border-primary-400/40',   text: 'text-primary-300',   dot: 'bg-primary-400' },
  indigo: { bg: 'bg-primary-600/20',   border: 'border-primary-500/40',   text: 'text-primary-300',   dot: 'bg-primary-500' },
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
      {/* Glass card — matches Hero panel frosted-glass aesthetic */}
      <div
        className="relative w-full h-full liquid-glass glass-panel-dark p-4 sm:p-8 lg:p-14 overflow-hidden flex items-center justify-center"
      >
        {/* Top edge highlight */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-100/70 to-transparent pointer-events-none" />
        {/* Inner surface gloss */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-primary-50/5 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" />
        {/* Bottom glow bloom */}
        <div className="absolute -bottom-4 left-1/4 right-1/4 h-10 bg-primary-400/25 rounded-full blur-2xl pointer-events-none" />

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
        className="absolute top-1/2 -translate-y-1/2 left-2 h-[2px] bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full"
        style={{ width: progressWidth }}
      />

      {[
        { opacity: dot1, scale: dotScale1, color: 'bg-primary-400' },
        { opacity: dot2, scale: dotScale2, color: 'bg-primary-500' },
        { opacity: dot3, scale: dotScale3, color: 'bg-primary-400' },
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
   * TC wrapper = 300vh, About wrapper = 600vh, marginTop = -300vh
   * About top aligns with TC top. Both sticky sections overlap.
   * scrollYProgress 0→1 spans ~500vh of scroll (600vh - 100vh viewport).
   *
   * TC scatter completes at TC scrollYProgress ~0.50 = ~100vh scroll.
   * In About terms: 100vh / 500vh ≈ 0.20.
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
    <div ref={wrapperRef} className="relative z-0" style={{ height: '600vh', marginTop: '-300vh' }}>
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
            className="object-cover object-[center_30%] sm:object-center"
            priority
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none" />

        {/* Title */}
        <motion.div
          className="relative z-10 pt-24 sm:pt-28 md:pt-32 flex justify-center"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              Why Choose{' '}
              <span className="text-primary-400" style={{ textShadow: '0 0 30px rgba(77,142,197,0.6)' }}>
                Softx World
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-primary-200/70 text-center max-w-2xl mx-auto font-light" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
              The partner your business actually needs
            </p>
          </div>
        </motion.div>

        {/* Panel container */}
        <div className="relative z-10 flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-0 pb-10 sm:pb-16 md:pb-20">
          <div className="relative w-full max-w-4xl mx-auto min-h-[240px] sm:min-h-[280px] max-h-[350px] sm:max-h-[420px] h-[45vh] sm:h-[50vh]">
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
