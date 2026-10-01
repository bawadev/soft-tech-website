'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, ScrollReveal } from '../ui';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'PlayMate',
      description: 'A social app to organize pickup sports games and find players nearby — realtime geospatial matchmaking across iOS, Android and web.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Supabase', 'PostGIS'],
      caseStudySlug: 'playmate',
    },
    {
      title: 'Suwa Care',
      description: 'A telemedicine platform for doctor booking and in-app video consultations, built on Spring Boot with LiveKit video.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
      tags: ['Spring Boot', 'LiveKit', 'Telemedicine'],
      caseStudySlug: 'suwa-care',
    },
    {
      title: 'Sri Lanka Wildlife Guide',
      description: 'A biodiversity species directory for Sri Lanka with community photo uploads, powered by a FastAPI backend.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
      tags: ['FastAPI', 'Python', 'Biodiversity'],
      caseStudySlug: 'sri-lanka-wildlife-guide',
    },
    {
      title: 'Ideanote',
      description: 'An AI note-taking app that summarizes notes and clusters them by meaning into a visual note network, with smart reminders.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Convex', 'AI Clustering'],
      caseStudySlug: 'ideanote',
    },
    {
      title: 'PropertyWeb',
      description: 'A real-estate marketplace with listing search, saved properties, an agent directory and multi-role accounts, built with React and Supabase.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Vite', 'Supabase'],
      caseStudySlug: 'propertyweb',
    },
    {
      title: 'Locked',
      description: 'A direct-to-consumer apparel store using AI-generated product photography, built with Next.js and a Neo4j graph database.',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Neo4j', 'E-Commerce'],
      caseStudySlug: 'locked',
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative pt-16 md:pt-24 lg:pt-32 bg-primary-50/70"
    >
      {/* ── Title ── sticks below nav, stays visible above cards */}
      <div
        className="sticky top-[77px] z-20 py-3 sm:py-6 bg-white/70 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-b border-primary-100/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h2 className="heading-2 mb-2 sm:mb-4">
                Our <span className="text-gradient">Products</span>
              </h2>
              <p className="hidden sm:block text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
                Products we&apos;ve designed, built, and shipped end to end — from mobile and web apps to AI-powered platforms.
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
              top: `calc(var(--portfolio-card-base) + ${index * 16}px)`,
              zIndex: 12 + index * 2,
            }}
          >
            <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-primary-100/40 lg:min-h-[380px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[160px] sm:h-[320px] lg:h-full group overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-primary-900/25 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="heading-3 mb-2 sm:mb-4">{project.title}</h3>
                  <p className="text-sm sm:text-lg text-secondary-700 mb-3 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
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
