'use client';

import React, { useState } from 'react';
import { Bot, RefreshCw, BookOpen, Briefcase, Wrench, BarChart3, Sparkles, Rocket, TrendingUp } from 'lucide-react';
import { Section, Card, Button } from '../ui';

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

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      icon: Sparkles,
      description: 'Cutting-edge artificial intelligence to transform your business',
      services: [
        {
          icon: Bot,
          title: 'AI-Powered Chat Agents',
          description: 'Intelligent conversational AI that engages customers 24/7, qualifies leads, and drives conversions. Seamlessly integrate with your existing systems.',
          features: [
            'Natural language processing',
            'Multi-language support',
            'Custom training on your data',
            'CRM integration',
          ],
          pricing: 'Starting at $2,999/mo',
          cta: 'Explore Chat Agents',
        },
        {
          icon: BookOpen,
          title: 'AI Knowledge Systems',
          description: 'Build intelligent knowledge bases that learn and evolve. Empower your team and customers with instant access to accurate information.',
          features: [
            'Semantic search capabilities',
            'Automated content updates',
            'User behavior analytics',
            'Multi-source integration',
          ],
          pricing: 'Starting at $1,999/mo',
          cta: 'Build Knowledge Base',
        },
      ],
    },
    {
      id: 'modernization',
      name: 'Modernization',
      icon: Rocket,
      description: 'Transform legacy systems into modern, scalable solutions',
      services: [
        {
          icon: RefreshCw,
          title: 'Legacy System Migrations',
          description: 'Transform outdated systems into modern AI-powered solutions. Maintain business continuity while upgrading to cutting-edge technology.',
          features: [
            'Risk-free migration strategy',
            'Data preservation & validation',
            'Minimal downtime',
            'Training & documentation',
          ],
          pricing: 'Custom pricing',
          cta: 'Plan Your Migration',
        },
        {
          icon: Wrench,
          title: 'Website Maintenance & Tech Upgrades',
          description: 'Keep your digital presence cutting-edge with continuous improvements, security updates, and performance optimization.',
          features: [
            'Proactive monitoring',
            'Security patches',
            'Performance optimization',
            'Feature enhancements',
          ],
          pricing: 'Starting at $999/mo',
          cta: 'Upgrade Your Tech',
        },
      ],
    },
    {
      id: 'strategy-growth',
      name: 'Strategy & Growth',
      icon: TrendingUp,
      description: 'Data-driven strategies to accelerate your business growth',
      services: [
        {
          icon: Briefcase,
          title: 'Strategic Consultation',
          description: 'Navigate the rapidly changing technology landscape with expert guidance. We help you identify opportunities and implement solutions that matter.',
          features: [
            'Technology roadmap planning',
            'Competitive analysis',
            'ROI optimization',
            'Growth strategy development',
          ],
          pricing: 'Starting at $299/hr',
          cta: 'Book Consultation',
        },
        {
          icon: BarChart3,
          title: 'User Analysis & Customer Acquisition',
          description: 'Data-driven insights to understand your users and attract more customers. Turn analytics into actionable growth strategies.',
          features: [
            'Behavioral analytics',
            'Conversion optimization',
            'A/B testing',
            'Customer journey mapping',
          ],
          pricing: 'Starting at $1,499/mo',
          cta: 'Grow Your Audience',
        },
      ],
    },
  ];

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];

  return (
    <Section id="services" className="bg-secondary-50">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="heading-2 mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
          Comprehensive AI-powered solutions designed to drive growth, improve efficiency, and give you a competitive edge in your industry.
        </p>
      </div>

      {/* Tabbed Navigation */}
      <div className="mb-10 sm:mb-12">
        <div
          className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          role="tablist"
          aria-label="Service categories"
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
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <p className="text-base sm:text-lg text-secondary-700 max-w-prose mx-auto px-4">
            {activeCategory.description}
          </p>
        </div>

        {/* Services Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 animate-fade-in"
        >
          {activeCategory.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                padding="lg"
                className="flex flex-col h-full group hover:border-primary-300 border-2 border-transparent"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                      {service.pricing}
                    </span>
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
            );
          })}
        </div>
      </div>

      {/* Support Highlight */}
      <Card className="bg-primary-600 text-white text-center" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            24/7 Support with Lifetime Change Requests
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Unlike traditional agencies, we're committed to your long-term success. Get unlimited support and continuous improvements as your business evolves.
          </p>
          <Button href="#contact" variant="secondary" size="lg">
            Start Your Project
          </Button>
        </div>
      </Card>
    </Section>
  );
};
