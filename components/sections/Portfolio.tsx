'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, ScrollReveal } from '../ui';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise Insurance Platform',
      description: 'Modernized legacy insurance management system with AI-powered document processing, reducing claim processing time by 60%.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Integration', 'Legacy Migration', 'Enterprise'],
      caseStudySlug: 'new-york-life-insurance-platform-modernization',
    },
    {
      title: 'Smart Service Management',
      description: 'Built AI-powered scheduling and dispatch system that optimizes routes and resource allocation for field service teams.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Optimization', 'Real-time Systems', 'SaaS'],
      caseStudySlug: 'workwave-smart-service-management',
    },
    {
      title: 'Health & Wellness AI Assistant',
      description: 'Developed intelligent health assistant with personalized recommendations, increasing user engagement by 80%.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare AI', 'Mobile App', 'Personalization'],
      caseStudySlug: 'mapbe-wellbeing-health-ai-assistant',
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative pt-16 md:pt-24 lg:pt-32 bg-primary-50/70"
    >
      {/* ── Title ── sticks below nav, stays visible above cards */}
      <div
        className="sticky top-[77px] z-20 py-4 sm:py-6 bg-white/70 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-b border-primary-100/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h2 className="heading-2 mb-4">
                Success <span className="text-gradient">Stories</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
                Led by senior engineers who previously worked at Sri Lanka&apos;s leading software companies, we deliver real results for businesses through AI-powered solutions and enterprise-grade expertise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Stacking project cards ── each sticks with ascending z-index + top offset */}
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <div
            className="px-4 sm:px-6 lg:px-8"
            style={{
              position: 'sticky',
              top: `${310 + index * 16}px`,
              zIndex: 12 + index * 2,
            }}
          >
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden brand-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[280px] sm:h-[320px] lg:h-full group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="brand-overlay" />
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="heading-3 mb-3 sm:mb-4">{project.title}</h3>
                  <p className="text-base sm:text-lg text-secondary-700 mb-5 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" href={`/case-studies/${project.caseStudySlug}`}>View Case Study</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll room spacer */}
          <div className="h-[40vh] sm:h-[50vh]" />
        </React.Fragment>
      ))}

      {/* Spacer after last card */}
      <div className="relative z-30 bg-white/70 pb-16 md:pb-24 lg:pb-32" />
    </section>
  );
};
