'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Briefcase, Wrench, BarChart3, Sparkles, Rocket, TrendingUp, Workflow, Globe, Megaphone, Code, Lightbulb, Users, LineChart } from 'lucide-react';
import { Card, Button, ScrollReveal } from '../ui';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
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
    id: 'platform-engineering',
    name: 'Platform Engineering',
    icon: Code,
    description: 'Large-scale platforms engineered for reliability, security, and decades of evolution',
    services: [
      {
        icon: Globe,
        title: 'Enterprise Web Platforms',
        description: 'Multi-tenant SaaS, consumer platforms, and internal systems built for horizontal scale — with the real-time capabilities modern products demand: live data, chat, presence, payments, video, and geo services.',
        features: [
          'Distributed, event-driven architecture',
          'Real-time systems — live data, chat, presence',
          'Payments, identity & third-party integrations',
          'Security and compliance from day one',
        ],
        cta: 'Discuss Your Platform',
      },
      {
        icon: Rocket,
        title: 'Mobile Products',
        description: 'iOS and Android products that hold their own against the best consumer apps — engineered by the same senior team that builds your platform, so nothing is lost in translation.',
        features: [
          'iOS & Android from a single senior team',
          'Offline-first & performance engineering',
          'App Store & Play Store lifecycle',
          'Deep integration with your platform',
        ],
        cta: 'Build Your Product',
      },
      {
        icon: Workflow,
        title: 'Cloud & DevOps',
        description: 'Infrastructure your customers never have to think about. We design, provision, and operate cloud environments with observability, alerting, and disaster recovery built in.',
        features: [
          'Infrastructure as code',
          'CI/CD & release engineering',
          'Observability, alerting & SLOs',
          'Backup & disaster recovery',
        ],
        cta: 'Review Your Infrastructure',
      },
      {
        icon: RefreshCw,
        title: 'Modernization & Integration',
        description: 'Legacy systems re-platformed without stopping the business. Incremental migration, API programs, and integration layers that let long-lived systems and new platforms work as one.',
        features: [
          'Incremental, zero-downtime migration',
          'API design & integration layers',
          'Data migration & integrity',
          'Coexistence strategies for legacy systems',
        ],
        cta: 'Plan Your Modernization',
      },
    ],
  },
  {
    id: 'product-design-research',
    name: 'Design & Research',
    icon: Users,
    description: 'Human designers who study how your customers think, decide, and come to trust you',
    services: [
      {
        icon: Lightbulb,
        title: 'Consumer Psychology & Research',
        description: 'We reach out to your customers and listen. Real interviews, behavioral mapping, and decision-journey analysis — so the product is built for how people actually choose, not how we assume they do.',
        features: [
          'User interviews & field research',
          'Behavioral & decision-journey mapping',
          'Psychology-informed product decisions',
          'Findings you can act on across the business',
        ],
        cta: 'Understand Your Customers',
      },
      {
        icon: Sparkles,
        title: 'Product & UX Design',
        description: 'Interfaces designed by human designers with taste and intent — clear, calm, and credible. Design systems keep that quality consistent as your product grows.',
        features: [
          'End-to-end product design',
          'Design systems & component libraries',
          'Prototyping & usability testing',
          'Accessibility as standard',
        ],
        cta: 'Design With Us',
      },
      {
        icon: Users,
        title: 'Customer-Facing Discovery',
        description: 'Our engineers sit with your teams and your users. Requirements come from conversations and observation — not ticket queues — so what ships is what was actually needed.',
        features: [
          'Engineers embedded in discovery',
          'Workshops with your teams',
          'Requirements from real conversations',
          'Shared understanding before code',
        ],
        cta: 'Start Discovery',
      },
      {
        icon: TrendingUp,
        title: 'Trust & Retention Design',
        description: 'Products people return to are products they trust. We design onboarding, communication, and transparency patterns that build long-term confidence with your customers.',
        features: [
          'Onboarding that earns confidence',
          'Clear communication & state design',
          'Retention without dark patterns',
          'Measured through real behavior',
        ],
        cta: 'Build Customer Trust',
      },
    ],
  },
  {
    id: 'growth-strategy',
    name: 'Growth & Strategy',
    icon: Megaphone,
    description: 'Human strategists who help improve the business — not just the software',
    services: [
      {
        icon: Sparkles,
        title: 'Positioning & Brand',
        description: 'Human strategists define how you are seen: positioning, messaging, and brand systems that make your value obvious to the customers who matter most.',
        features: [
          'Positioning & messaging',
          'Brand identity & guidelines',
          'Launch & campaign narratives',
          'Consistency across every touchpoint',
        ],
        cta: 'Sharpen Your Position',
      },
      {
        icon: TrendingUp,
        title: 'Go-to-Market & Growth',
        description: 'From launch plans to distribution channels, we help your product reach the market it was built for — and help the business grow around it.',
        features: [
          'Go-to-market planning',
          'Channel & partnership strategy',
          'Pricing & packaging guidance',
          'Growth experiments, measured honestly',
        ],
        cta: 'Plan Your Growth',
      },
      {
        icon: LineChart,
        title: 'SEO & Content',
        description: 'Durable organic presence built on substance: technical SEO, editorial content, and authority that compounds — no tricks that evaporate with the next algorithm change.',
        features: [
          'Technical SEO & site architecture',
          'Editorial content strategy',
          'Authority building',
          'Analytics & search performance',
        ],
        cta: 'Grow Organic Reach',
      },
      {
        icon: BarChart3,
        title: 'Customer Analytics & Insight',
        description: 'Analytics that explain customers instead of just counting them. We instrument products carefully and turn behavior into decisions your whole business can use.',
        features: [
          'Product & funnel instrumentation',
          'Behavioral analysis',
          'Insight reports for decision-makers',
          'Privacy-respecting measurement',
        ],
        cta: 'See Your Customers Clearly',
      },
    ],
  },
  {
    id: 'enterprise-partnership',
    name: 'Partnership',
    icon: Briefcase,
    description: 'A long-term engineering partner, accountable across the life of your product',
    services: [
      {
        icon: Users,
        title: 'Dedicated Product Teams',
        description: 'Senior engineers, designers, and strategists dedicated to your product — a stable team that carries context for years instead of rotating strangers through it.',
        features: [
          'Senior, stable, dedicated teams',
          'Direct access to the people building',
          'Context that compounds over years',
          'Transparent cadence & reporting',
        ],
        cta: 'Meet Your Team',
      },
      {
        icon: Briefcase,
        title: 'Architecture & Roadmap',
        description: 'Systems designed for the next decade, not the next demo. Architecture reviews, technology strategy, and roadmaps that survive growth, pivots, and platform generations.',
        features: [
          'Architecture for decades of change',
          'Technology strategy & evaluation',
          'Scalability & security reviews',
          'Roadmaps tied to business goals',
        ],
        cta: 'Review Your Architecture',
      },
      {
        icon: Wrench,
        title: 'Production Ownership',
        description: 'We stay accountable after launch: 24/7 operations, monitoring, incident response, and the unglamorous discipline that keeps enterprise software trustworthy.',
        features: [
          '24/7 monitoring & incident response',
          'SLOs, alerting & on-call discipline',
          'Security patching & upgrades',
          'Continuous performance care',
        ],
        cta: 'Secure Your Operations',
      },
      {
        icon: Rocket,
        title: 'Evolution Programs',
        description: 'Businesses change; software should keep up gracefully. Ongoing evolution — new capabilities, integrations, and refinements — planned with your team, quarter by quarter.',
        features: [
          'Quarterly evolution planning',
          'New capabilities & integrations',
          'UX refinement from live feedback',
          'AI adopted where it serves people',
        ],
        cta: 'Evolve Your Platform',
      },
    ],
  },
];

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('platform-engineering');
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
                How We <span className="text-gradient">Work</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
                We support a small number of clients across the whole life of their product — from the first conversations with your customers to platforms that run reliably for decades. When something carries our name, senior people built it.
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
                    href="#contact"
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

          {/* Partnership Highlight */}
          <div className="mt-10 sm:mt-12">
            <Card className="text-white text-center liquid-glass glass-panel-highlight" padding="lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-3xl font-bold mb-4">
                  Engagements Measured in Years, Not Sprints
                </h3>
                <p className="text-base sm:text-xl mb-4 sm:mb-6 opacity-90">
                  We keep our client roster deliberately small and stay accountable for the life of the product — through growth, pivots, and platform generations. Senior people stay close to your product, and your customers feel it.
                </p>
                <Button href="#contact" variant="secondary" size="lg">
                  Start a Conversation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
