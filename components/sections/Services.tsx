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
    description: 'Full-service software development that powers businesses of all sizes',
    services: [
      {
        icon: Code,
        title: 'Custom Web Applications',
        description: 'Build scalable, high-performance web applications tailored to your business needs. From e-commerce platforms to SaaS products, we deliver enterprise-grade solutions.',
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
        description: 'Native and cross-platform mobile applications for iOS and Android. Engage your customers wherever they are with intuitive, feature-rich apps.',
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
        description: 'Robust enterprise software that scales with your organization. From CRM systems to inventory management, we build solutions that drive efficiency.',
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
        description: 'Connect your systems and enable seamless data flow. We build robust APIs and integrate third-party services to enhance your platform capabilities.',
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
    name: 'AI & Automation',
    icon: Zap,
    description: 'Automate business processes and cut costs with intelligent solutions',
    services: [
      {
        icon: Bot,
        title: 'AI-Powered Chat Agents',
        description: '24/7 intelligent chatbots that qualify leads, handle support queries, and drive conversions. Cut support costs by up to 90% while boosting satisfaction by 30%.',
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
        description: 'Retrieval-Augmented Generation that provides accurate, context-aware responses from your business data. Deliver $3.5 ROI for every $1 invested.',
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
        description: 'Eliminate manual workflows and save 20+ hours weekly. We automate repetitive tasks across departments, leading to significant cost reduction.',
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
        description: 'Analyze and optimize your business processes for maximum efficiency. Identify bottlenecks, eliminate redundancy, and implement streamlined workflows.',
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
    description: 'Drive growth with data-driven marketing and search engine optimization',
    services: [
      {
        icon: LineChart,
        title: 'SEO Optimization',
        description: 'Boost your organic rankings and drive qualified traffic. Our comprehensive SEO strategy covers technical SEO, content optimization, and link building.',
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
        description: 'End-to-end digital marketing that delivers measurable results. From brand awareness to conversion, we create campaigns that drive ROI.',
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
        description: 'Attract, qualify, and convert high-quality leads. Our multi-channel approach ensures a steady pipeline of prospects ready to buy.',
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
        description: 'Develop a strong brand identity that resonates with your audience. From logo design to brand messaging, we help you stand out in crowded markets.',
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
    description: 'Expert software consulting for solo founders and businesses navigating the AI revolution',
    services: [
      {
        icon: Lightbulb,
        title: 'Startup Consulting for Solo Founders',
        description: 'Specialized guidance for solo founders emerging in AI revolution. We help you navigate technology decisions, build MVPs efficiently, and scale smart.',
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
        description: 'Design scalable, maintainable systems that grow with your business. We provide architectural guidance to ensure your software supports your long-term goals.',
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
        description: 'Translate your vision into a actionable product roadmap. We help prioritize features, set milestones, and create development plans that deliver value.',
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
        description: 'Identify and implement AI solutions that drive real business value. We help you select the right AI tools and integrate them into your workflows.',
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
  const [isPaused, setIsPaused] = useState(false);

  const nextTab = useCallback(() => {
    setActiveTab(current => {
      const currentIndex = serviceCategories.findIndex(cat => cat.id === current);
      const nextIndex = (currentIndex + 1) % serviceCategories.length;
      return serviceCategories[nextIndex].id;
    });
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTab();
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, nextTab]);

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="relative bg-secondary-50/70 pt-16 md:pt-24 lg:pt-32">
      {/* Background Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.08) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Layer 1: Title ── sticks below nav, gets covered by tab pane + cards */}
      <div className="sticky top-[77px] z-10 bg-secondary-50/70 backdrop-blur-md py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <h2 className="heading-2 mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
                We support businesses across the full customer journey—from attracting the right audience to building lasting relationships—so you can focus on running and scaling your business. Simply put, when you grow, we grow with you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Layer 2: Tab Pane ── scrolls over title (stacks on top), then sticks */}
      <div className="sticky top-[77px] z-20 bg-secondary-50/70 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div
            className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3"
            role="tablist"
            aria-label="Service categories"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {serviceCategories.map((category) => {
              const TabIcon = category.icon;
              const isActive = activeTab === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  className={`
                    group relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold min-h-[48px]
                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    ${isActive
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-secondary-700 hover:bg-secondary-100 hover:shadow-md hover:scale-102 shadow-sm'
                    }
                  `}
                >
                  <TabIcon
                    className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base">{category.name}</span>
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

          {/* Category Description */}
          <div className="text-center mt-4 animate-fade-in">
            <p className="text-base sm:text-lg text-secondary-700 max-w-prose mx-auto px-4">
              {activeCategory.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── Layer 3: Service Cards ── covers title (z-[15] > z-10), scrolls under tab pane (z-[15] < z-20) */}
      <div className="relative z-[15] bg-secondary-50/70">
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
                  className="flex flex-col h-full group hover:border-primary-300 border-2 border-transparent"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
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
            <Card className="bg-primary-600 text-white text-center" padding="lg">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">
                  24/7 Support with Lifetime Change Requests
                </h3>
                <p className="text-xl mb-6 opacity-90">
                  Unlike traditional agencies, we&apos;re committed to your long-term success. Get unlimited support and continuous improvements as your business evolves.
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