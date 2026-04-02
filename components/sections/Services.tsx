'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Bot, RefreshCw, BookOpen, Briefcase, Wrench, BarChart3, Sparkles, Rocket, TrendingUp, Workflow, Zap, Globe, Megaphone, Code, Lightbulb, Users, LineChart } from 'lucide-react';
import { Card, Button, ScrollReveal } from '../ui';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  cta: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'software-development',
    name: 'Software Development',
    icon: Code,
    description: 'Your idea, built right the first time — web apps, mobile apps, and integrations that scale',
    services: [
      {
        icon: Code,
        title: 'Custom Web Applications',
        description: 'Whether it\'s an e-commerce platform, a SaaS product, or an internal tool — we build web applications your team and customers will actually love using.',
        features: [
          'Full-stack development (React, Node.js, Next.js)',
          'Progressive Web Apps (PWA)',
          'API-first architecture',
          'Mobile-responsive design',
        ],
        pricing: 'Starting at $4,999/mo',
        cta: 'Start Development',
      },
      {
        icon: Globe,
        title: 'Mobile App Development',
        description: 'Put your business in your customers\' pockets. We build iOS and Android apps that people keep opening — not just downloading.',
        features: [
          'React Native & Flutter development',
          'iOS & Android native apps',
          'App Store & Play Store deployment',
          'Push notifications & offline support',
        ],
        pricing: 'Starting at $5,999/mo',
        cta: 'Build Your App',
      },
      {
        icon: Wrench,
        title: 'Enterprise Solutions',
        description: 'CRM, inventory, ERP — custom-built to fit how your business actually works, not the other way around. Scales from 10 users to 10,000.',
        features: [
          'Custom ERP & CRM systems',
          'Multi-tenant SaaS platforms',
          'Real-time collaboration tools',
          'Enterprise security & compliance',
        ],
        pricing: 'Custom pricing',
        cta: 'Discuss Your Needs',
      },
      {
        icon: RefreshCw,
        title: 'API Development & Integration',
        description: 'Your tools should talk to each other. We build the APIs and integrations that connect your systems so data flows where it needs to go.',
        features: [
          'RESTful & GraphQL API design',
          'Payment gateway integration',
          'Third-party service integration',
          'Webhook & event systems',
        ],
        pricing: 'Starting at $2,499/mo',
        cta: 'Integrate Your Systems',
      },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI & Systems',
    icon: Zap,
    description: 'Put repetitive work on autopilot and let AI handle your customers 24/7',
    services: [
      {
        icon: Bot,
        title: 'AI-Powered Chat Agents',
        description: 'AI systems that qualify leads, handle support, and close deals — even at 3 AM. Always-on customer service that never sleeps.',
        features: [
          'Handles 80% of routine queries',
          'Response time: under 5 seconds',
          'Custom RAG training on your data',
          'CRM & email integration',
        ],
        pricing: 'Starting at $2,999/mo',
        cta: 'Deploy Chatbot',
      },
      {
        icon: BookOpen,
        title: 'RAG Knowledge Systems',
        description: 'Turn your documents, databases, and knowledge into an AI that gives customers instant, accurate answers — grounded in your actual data, not hallucinations.',
        features: [
          'Semantic search on your documents',
          'Real-time data updates',
          'Source attribution & citations',
          'Multi-format integration (PDF, DB, API)',
        ],
        pricing: 'Starting at $1,999/mo',
        cta: 'Build RAG System',
      },
      {
        icon: RefreshCw,
        title: 'Business Process Automation',
        description: 'Stop wasting 20+ hours a week on tasks a machine can do. We connect your tools, automate your workflows, and give your team their time back.',
        features: [
          '500+ tool integrations available',
          'Lead-to-revenue automation',
          'Customer onboarding workflows',
          'Finance & accounting automation',
        ],
        pricing: 'Starting at $1,499/mo',
        cta: 'Automate Your Processes',
      },
      {
        icon: Workflow,
        title: 'Workflow Optimization',
        description: 'Before you automate, you need to know what\'s broken. We map your processes, find the bottlenecks, and redesign workflows that actually flow.',
        features: [
          'Process mapping & analysis',
          'Bottleneck identification',
          'ROI calculation for automation',
          'Continuous optimization',
        ],
        pricing: 'Starting at $2,999/mo',
        cta: 'Optimize Workflows',
      },
    ],
  },
  {
    id: 'marketing-seo',
    name: 'Marketing & SEO',
    icon: Megaphone,
    description: 'Get found, get chosen, and turn visitors into paying customers',
    services: [
      {
        icon: LineChart,
        title: 'SEO Optimization',
        description: 'Show up when your customers are searching. We fix the technical issues, create the content, and build the authority that gets you to page one.',
        features: [
          'Technical SEO audits & fixes',
          'Keyword research & strategy',
          'On-page & off-page optimization',
          'Local SEO for businesses',
        ],
        pricing: 'Starting at $1,999/mo',
        cta: 'Improve Rankings',
      },
      {
        icon: BarChart3,
        title: 'Digital Marketing Strategy',
        description: 'Paid ads, content, email, and social — all working together toward one goal: more revenue. Every dollar tracked, every campaign measured.',
        features: [
          'Google Ads & Meta Ads management',
          'Content marketing & copywriting',
          'Email marketing campaigns',
          'Social media marketing',
        ],
        pricing: 'Starting at $2,999/mo',
        cta: 'Grow Your Audience',
      },
      {
        icon: TrendingUp,
        title: 'Lead Generation',
        description: 'Build a pipeline that doesn\'t depend on referrals or luck. We create systems that attract, qualify, and deliver leads ready to buy.',
        features: [
          'Lead magnet creation',
          'Landing page optimization',
          'A/B testing & optimization',
          'CRM & funnel integration',
        ],
        pricing: 'Starting at $2,499/mo',
        cta: 'Generate Leads',
      },
      {
        icon: Users,
        title: 'Brand Building',
        description: 'A strong brand is a competitive moat. We craft your visual identity, messaging, and voice so you\'re instantly recognizable and impossible to ignore.',
        features: [
          'Brand identity & visual design',
          'Brand messaging & voice',
          'Social media presence',
          'Brand guidelines & strategy',
        ],
        pricing: 'Starting at $1,999/mo',
        cta: 'Build Your Brand',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: Lightbulb,
    description: 'Smart guidance for founders and teams making high-stakes technology decisions',
    services: [
      {
        icon: Lightbulb,
        title: 'Startup Consulting for Solo Founders',
        description: 'Building something alone? We help solo founders pick the right stack, build MVPs that actually validate, and avoid the expensive mistakes that kill startups.',
        features: [
          'AI technology stack selection',
          'MVP development strategy',
          'Cost optimization guidance',
          'Growth roadmap planning',
        ],
        pricing: 'Starting at $1,999/mo',
        cta: 'Get Expert Guidance',
      },
      {
        icon: Briefcase,
        title: 'Software Architecture Consulting',
        description: 'Bad architecture is invisible until it isn\'t — then it costs you months. We design systems that won\'t need a rewrite when you 10x your users.',
        features: [
          'System design & architecture',
          'Technology stack evaluation',
          'Scalability planning',
          'Security best practices',
        ],
        pricing: 'Starting at $2,499/mo',
        cta: 'Review Your Architecture',
      },
      {
        icon: Rocket,
        title: 'Product Strategy & Roadmap',
        description: 'Turn your vision into a roadmap your team can execute. We prioritize ruthlessly, cut scope creep, and make sure every sprint delivers real value.',
        features: [
          'Product-market fit analysis',
          'Feature prioritization',
          'Agile development planning',
          'Metrics & KPIs definition',
        ],
        pricing: 'Starting at $2,999/mo',
        cta: 'Plan Your Product',
      },
      {
        icon: BookOpen,
        title: 'AI Implementation Consulting',
        description: 'Not every problem needs AI — but when it does, we find the highest-ROI opportunities and implement them so they actually stick.',
        features: [
          'AI opportunity assessment',
          'Tool selection & integration',
          'Implementation planning',
          'ROI measurement',
        ],
        pricing: 'Starting at $2,499/mo',
        cta: 'Explore AI Opportunities',
      },
    ],
  },
];

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('software-development');
  const [autoRotate, setAutoRotate] = useState(true);

  const stopAutoRotate = useCallback(() => {
    setAutoRotate(false);
  }, []);

  const nextTab = useCallback(() => {
    setActiveTab(current => {
      const currentIndex = serviceCategories.findIndex(cat => cat.id === current);
      const nextIndex = (currentIndex + 1) % serviceCategories.length;
      return serviceCategories[nextIndex].id;
    });
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(nextTab, 5000);
    return () => clearInterval(interval);
  }, [autoRotate, nextTab]);

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="relative bg-secondary-50/40 pt-16 md:pt-24 lg:pt-32" onMouseMove={autoRotate ? stopAutoRotate : undefined}>
      {/* Background Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.08) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Layer 1: Title ── sticks below nav, gets covered by tab pane + cards */}
      <div className="sticky top-[77px] z-10 bg-secondary-50/50 backdrop-blur-md py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h2 className="heading-2 mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
                From the software that runs your business to the AI that grows it — everything you need under one roof. When you grow, we grow with you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Layer 2: Tab Pane ── scrolls over title (stacks on top), then sticks */}
      <div className="sticky top-[77px] z-20 bg-secondary-50/50 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div
            className="flex flex-row justify-center gap-2 sm:gap-3"
            role="tablist"
            aria-label="Service categories"
          >
            {serviceCategories.map((category) => {
              const TabIcon = category.icon;
              const isActive = activeTab === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => { stopAutoRotate(); setActiveTab(category.id); }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  aria-label={category.name}
                  title={category.name}
                  className={`
                    group relative flex items-center justify-center gap-0 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold min-h-[48px]
                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    ${isActive
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-secondary-700 hover:bg-secondary-100 hover:shadow-lg hover:scale-102 shadow-md'
                    }
                  `}
                >
                  <TabIcon
                    className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline text-sm sm:text-base">{category.name}</span>
                  {isActive && (
                    <div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-scale-in"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active category name - mobile only */}
          <div className="sm:hidden text-center mt-2">
            <span className="text-sm font-medium text-primary-600">{activeCategory.name}</span>
          </div>

          {/* Category Description */}
          <div className="hidden sm:block text-center mt-4 animate-fade-in">
            <p className="text-base sm:text-lg text-secondary-700 max-w-prose mx-auto px-4">
              {activeCategory.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── Layer 3: Service Cards ── covers title (z-[15] > z-10), scrolls under tab pane (z-[15] < z-20) */}
      <div className="relative z-[15] bg-secondary-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 md:pb-24 lg:pb-32">
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 animate-fade-in"
          >
            {activeCategory.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <Card
                  padding="lg"
                  className="flex flex-col h-full group hover:border-primary-300/60 liquid-glass"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-50/80 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-600" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="heading-4 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-secondary-700 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-secondary-700"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                  >
                    {service.cta}
                  </Button>
                </Card>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Support Highlight */}
          <div className="mt-10 sm:mt-12">
            <Card className="text-white text-center liquid-glass glass-panel-highlight" padding="lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-3xl font-bold mb-4">
                  24/7 Support with Lifetime Change Requests
                </h3>
                <p className="text-base sm:text-xl mb-4 sm:mb-6 opacity-90">
                  We don&apos;t disappear after launch. Get ongoing support, updates, and improvements for as long as you need us — because your business never stops evolving.
                </p>
                <Button href="#contact" variant="secondary" size="lg">
                  Start Your Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};