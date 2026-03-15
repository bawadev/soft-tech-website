'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Container, AnimateCounter } from '../ui';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Depth Orbs — animated */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-300/15 rounded-full blur-2xl pointer-events-none" style={{ animation: 'float-delayed 10s ease-in-out infinite' }} />

      <Container className="relative z-10 pt-20 sm:pt-24 pb-8 sm:pb-12">
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
              Just Focus on Business.{' '}
              <span className="text-gradient">We Bring You Customers.</span>
            </motion.h1>

            {/* Glass panel — paragraph + buttons + stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="liquid-glass backdrop-blur-xl rounded-2xl border border-blue-200/40 p-6 sm:p-7 cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(96,165,250,0.18) 0%, rgba(147,197,253,0.10) 50%, rgba(59,130,246,0.14) 100%)',
                  boxShadow: '0 8px 32px rgba(96,165,250,0.22), 0 2px 8px rgba(96,165,250,0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 } }}
                whileHover={{
                  y: -13,
                  scale: 1.015,
                  boxShadow: '0 24px 60px rgba(96,165,250,0.42), 0 6px 20px rgba(96,165,250,0.22), inset 0 1px 0 rgba(255,255,255,0.35)',
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
              >
                {/* Top edge highlight */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-100/70 to-transparent pointer-events-none" />
                {/* Inner surface gloss */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-blue-50/5 to-transparent rounded-2xl pointer-events-none" />
                {/* Bottom glow bloom */}
                <div className="absolute -bottom-4 left-1/4 right-1/4 h-10 bg-blue-400/25 rounded-full blur-2xl pointer-events-none" />

                <p className="relative z-10 text-base sm:text-lg md:text-xl text-secondary-700 mb-6 leading-relaxed">
                  With deep expertise in enterprise software and AI, we help companies acquire customers, reduce costs, and grow with confidence.
                </p>

                <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                  <Button href="#contact" size="lg" className="shadow-xl">
                    Start Getting Customers
                  </Button>
                  <Button href="#services" variant="secondary" size="lg">
                    See How It Works
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative z-10 border-t border-white/40 pt-5">
                  <div className="flex flex-wrap gap-6 sm:gap-8 items-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                        <AnimateCounter value={90} suffix="%" />
                      </div>
                      <div className="text-xs sm:text-sm text-secondary-700">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                        $<AnimateCounter value={3.5} decimals={1} />
                      </div>
                      <div className="text-xs sm:text-sm text-secondary-700">Avg ROI per $1</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600">24/7</div>
                      <div className="text-xs sm:text-sm text-secondary-700">Customer Acquisition</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Hero Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Background */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onCanPlay={() => setVideoLoaded(true)}
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => console.log('Video failed to load')}
              >
                <source src="/media/hero-video.mp4" type="video/mp4" />
              </video>

              {/* First Frame Overlay - Fades out when video loads */}
              <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}>
                <Image
                  src="/media/hero-video-frame-1.png"
                  alt="AI Technology and Business Growth"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-900/10 pointer-events-none"></div>
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
