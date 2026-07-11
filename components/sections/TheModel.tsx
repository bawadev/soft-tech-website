'use client';

import React from 'react';
import { Zap, Compass, Radar } from 'lucide-react';
import { Card, Button, ScrollReveal } from '../ui';

interface Pillar {
  icon: React.ElementType;
  kicker: string;
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    icon: Zap,
    kicker: 'STRIKING FAST',
    title: 'Small team. AI-augmented.',
    body: 'A small team of senior engineers moves faster than a department — less communication overhead, fewer handoffs, decisions made by the people doing the work. AI agents take the operational load. The scarce resource is judgment, and we keep it close to the build.',
  },
  {
    icon: Compass,
    kicker: 'DESIGN AS A FILTER',
    title: 'Premium design attracts the right customers.',
    body: 'Generic, gimmick-laden design attracts the wrong audience. We design to signal value instantly to the customers who matter — and quietly repel the ones who do not. Beautiful systems earn trust before the first click. Restraint is the strategy.',
  },
  {
    icon: Radar,
    kicker: 'BUILT TO BE FOUND',
    title: 'Your next customer may never visit your site.',
    body: 'People now ask AI tools for recommendations. We build platforms that AI engines can discover, parse, and recommend — structured, semantically clear, and machine-readable. Not just search-engine optimization. Engine optimization.',
  },
];

export const TheModel: React.FC = () => {
  return (
    <section
      id="the-model"
      className="relative bg-secondary-50/40 overflow-hidden"
    >
      {/* Background depth — matches Services section ambient treatment */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.08) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Heading */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50/80 backdrop-blur-sm rounded-full border border-primary-200/40 text-primary-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              The Model
            </span>
            <h2 className="heading-2 mb-4">
              The shape of{' '}
              <span className="text-gradient">what&apos;s next.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
              Software companies of the next decade will look more like focused studios than industrial departments. Three things define how we build — and why it works.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.12}>
                <Card
                  padding="lg"
                  className="flex flex-col h-full group hover:border-primary-300/60 liquid-glass"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-primary-50/80 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-600" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-primary-500/70 uppercase">
                      {pillar.kicker}
                    </span>
                  </div>

                  <h3 className="heading-4 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  <p className="text-secondary-700 leading-relaxed flex-grow">
                    {pillar.body}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="text-center mt-12 sm:mt-16">
            <Button href="#contact" size="lg" className="shadow-xl">
              Start a Conversation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
