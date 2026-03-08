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
              className="heading-1 mb-5 sm:mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              Just Focus on Business.{' '}
              <span className="text-gradient">We Bring You Customers.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-secondary-700 mb-6 sm:mb-8 leading-relaxed max-w-prose"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              With deep expertise in enterprise software and AI, we help companies acquire customers, reduce costs, and grow with confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <Button href="#contact" size="lg" className="shadow-xl">
                Start Getting Customers
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="relative flex flex-wrap gap-6 sm:gap-8 items-center"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] rounded-2xl pointer-events-none" />
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
