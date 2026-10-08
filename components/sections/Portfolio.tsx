'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Button, ScrollReveal } from '../ui';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'PlayMate',
      description: 'A social app to organize pickup sports games and find players nearby — realtime geospatial matchmaking across iOS, Android and web.',
      image: '/media/products/playmate.webp',
      domain: 'playmate.now',
      liveUrl: 'https://playmate.now',
      tags: ['React Native', 'Supabase', 'PostGIS'],
      caseStudySlug: 'playmate',
    },
    {
      title: 'Suwa Care',
      description: 'A telemedicine platform for doctor booking and in-app video consultations, built on Spring Boot with LiveKit video.',
      image: '/media/products/suwa-care.webp',
      domain: 'suwa.care',
      liveUrl: 'https://dev.suwa.care',
      tags: ['Spring Boot', 'LiveKit', 'Telemedicine'],
      caseStudySlug: 'suwa-care',
    },
    {
      title: 'Mentyb',
      description: 'A mental health platform pairing clients with licensed professionals — scheduling, secure video sessions, mood tracking and shared treatment plans.',
      image: '/media/products/mentyb.webp',
      domain: 'mentyb-demo.softx.world',
      liveUrl: 'https://mentyb-demo.softx.world',
      tags: ['React 19', 'Appwrite', 'LiveKit'],
      caseStudySlug: 'mentyb',
    },
    {
      title: 'Ideanote',
      description: 'An AI note-taking app that summarizes notes and clusters them by meaning into a visual note network, with smart reminders.',
      image: '/media/products/ideanote.webp',
      domain: 'ideanote.space',
      liveUrl: 'https://ideanote-demo.softx.world',
      tags: ['Next.js', 'Convex', 'AI Clustering'],
      caseStudySlug: 'ideanote',
    },
    {
      title: 'Sri Lanka Wildlife Guide',
      description: 'A biodiversity species directory for Sri Lanka with community photo uploads, powered by a FastAPI backend.',
      image: '/media/products/wildlife.webp',
      domain: 'wildlife-demo.softx.world',
      liveUrl: 'https://wildlife-demo.softx.world',
      tags: ['FastAPI', 'Python', 'Biodiversity'],
      caseStudySlug: 'sri-lanka-wildlife-guide',
    },
    {
      title: 'PropertyWeb',
      description: 'A real-estate marketplace with listing search, saved properties, an agent directory and multi-role accounts, built with React and Supabase.',
      image: '/media/products/propertyweb.webp',
      domain: 'propertyweb.online',
      liveUrl: 'https://propertyweb.online',
      tags: ['React', 'Vite', 'Supabase'],
      caseStudySlug: 'propertyweb',
    },
    {
      title: 'Locked',
      description: 'A direct-to-consumer apparel store using AI-generated product photography, built with Next.js and a Neo4j graph database.',
      image: '/media/products/locked.webp',
      domain: 'locked-demo.softx.world',
      liveUrl: 'https://locked-demo.softx.world',
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
            <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-primary-100/40">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch lg:min-h-[420px] lg:divide-x lg:divide-primary-100/60">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[220px] sm:h-[360px] lg:h-full group overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white">
                    {/* brand glow behind the window */}
                    <div
                      aria-hidden
                      className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-primary-300/45 blur-3xl pointer-events-none"
                    />
                    <div
                      aria-hidden
                      className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl pointer-events-none"
                    />
                    {/* browser window holding the real product screenshot */}
                    <div className="absolute inset-5 sm:inset-8 rounded-xl overflow-hidden bg-white shadow-[0_22px_50px_-14px_rgba(15,42,80,0.45)] ring-1 ring-primary-900/15 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                      <div className="flex items-center gap-1.5 h-7 sm:h-8 px-3 bg-secondary-200/80 border-b border-secondary-300/70">
                        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <span className="ml-2 truncate text-[10px] sm:text-[11px] text-secondary-600 font-mono">
                          {project.domain}
                        </span>
                      </div>
                      <div className="relative h-[calc(100%-1.75rem)] sm:h-[calc(100%-2rem)]">
                        <Image
                          src={project.image}
                          alt={`${project.title} product screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
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

                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" href={`/case-studies/${project.caseStudySlug}`}>View Case Study</Button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-900 underline-offset-4 hover:underline transition-colors"
                    >
                      Visit live
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
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
