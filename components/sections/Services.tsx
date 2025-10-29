import React from 'react';
import { Section, Card, Button } from '../ui';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Chat Agents',
      description: 'Intelligent conversational AI that engages customers 24/7, qualifies leads, and drives conversions. Seamlessly integrate with your existing systems.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Custom training on your data',
        'CRM integration',
      ],
    },
    {
      icon: '🔄',
      title: 'Legacy System Migrations',
      description: 'Transform outdated systems into modern AI-powered solutions. Maintain business continuity while upgrading to cutting-edge technology.',
      features: [
        'Risk-free migration strategy',
        'Data preservation & validation',
        'Minimal downtime',
        'Training & documentation',
      ],
    },
    {
      icon: '📚',
      title: 'AI Knowledge Systems',
      description: 'Build intelligent knowledge bases that learn and evolve. Empower your team and customers with instant access to accurate information.',
      features: [
        'Semantic search capabilities',
        'Automated content updates',
        'User behavior analytics',
        'Multi-source integration',
      ],
    },
    {
      icon: '💼',
      title: 'Strategic Consultation',
      description: 'Navigate the rapidly changing technology landscape with expert guidance. We help you identify opportunities and implement solutions that matter.',
      features: [
        'Technology roadmap planning',
        'Competitive analysis',
        'ROI optimization',
        'Growth strategy development',
      ],
    },
    {
      icon: '🛠️',
      title: 'Website Maintenance & Tech Upgrades',
      description: 'Keep your digital presence cutting-edge with continuous improvements, security updates, and performance optimization.',
      features: [
        'Proactive monitoring',
        'Security patches',
        'Performance optimization',
        'Feature enhancements',
      ],
    },
    {
      icon: '📊',
      title: 'User Analysis & Customer Acquisition',
      description: 'Data-driven insights to understand your users and attract more customers. Turn analytics into actionable growth strategies.',
      features: [
        'Behavioral analytics',
        'Conversion optimization',
        'A/B testing',
        'Customer journey mapping',
      ],
    },
  ];

  return (
    <Section id="services" className="bg-secondary-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Comprehensive AI-powered solutions designed to drive growth, improve efficiency, and give you a competitive edge in your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index} padding="lg" className="flex flex-col h-full">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="heading-4 mb-3">{service.title}</h3>
            <p className="text-secondary-600 mb-6 flex-grow">
              {service.description}
            </p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-secondary-700">
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
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Card>
        ))}
      </div>

      {/* Support Highlight */}
      <Card className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center" padding="lg">
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
