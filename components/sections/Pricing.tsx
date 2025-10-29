import React from 'react';
import { Section, Card, Button } from '../ui';

export const Pricing: React.FC = () => {
  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Chat Agent Integration',
        'Basic Analytics Dashboard',
        'Email Support',
        '3 Months Support',
        'Up to 1,000 monthly interactions',
      ],
      highlighted: false,
      badge: null,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'Everything in Starter',
        'Custom AI Knowledge System',
        'Legacy System Migration',
        'Priority 24/7 Support',
        'Unlimited interactions',
        'Advanced Analytics',
        '1 Year Support',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large-scale operations',
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom AI Solutions',
        'Multi-platform Integration',
        'Strategic Consultation',
        'Lifetime Support',
        'Continuous Upgrades',
        'SLA Guarantees',
      ],
      highlighted: false,
      badge: 'Best Value',
    },
  ];

  const includes = [
    {
      icon: '🔄',
      title: 'Lifetime Change Requests',
      description: 'Your business evolves, and so should your technology. Request changes anytime.',
    },
    {
      icon: '🚀',
      title: 'Continuous Upgrades',
      description: 'Stay ahead with automatic updates and new features as technology advances.',
    },
    {
      icon: '🛡️',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance with industry standards.',
    },
    {
      icon: '📈',
      title: 'Growth Support',
      description: 'Strategic guidance to help you maximize ROI and achieve business goals.',
    },
  ];

  return (
    <Section id="pricing" className="bg-gradient-to-b from-white to-secondary-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">
          Transparent <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Custom solutions tailored to your needs and budget. Every package includes our commitment to your long-term success.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`flex flex-col h-full ${
              pkg.highlighted
                ? 'border-2 border-primary-600 shadow-2xl scale-105'
                : ''
            }`}
            padding="lg"
          >
            {pkg.badge && (
              <div className="inline-block px-4 py-1 bg-primary-600 text-white rounded-full text-sm font-medium mb-4 self-start">
                {pkg.badge}
              </div>
            )}

            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-secondary-600 mb-6">{pkg.description}</p>

            <div className="mb-6">
              <div className="text-4xl font-bold text-secondary-900 mb-2">
                Custom
              </div>
              <p className="text-sm text-secondary-600">
                Based on your requirements
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant={pkg.highlighted ? 'primary' : 'outline'}
              className="w-full"
            >
              Get Quote
            </Button>
          </Card>
        ))}
      </div>

      {/* What's Included */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
          Every Package Includes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {includes.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                {item.title}
              </h4>
              <p className="text-secondary-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <Card className="bg-primary-50 border border-primary-200" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Why Custom Pricing?
          </h3>
          <p className="text-secondary-700 mb-4">
            Every business is unique, and we believe your technology solution should be too. Our custom pricing ensures you only pay for what you need, with the flexibility to scale as you grow.
          </p>
          <p className="text-secondary-700 mb-6">
            Schedule a free consultation to discuss your requirements, and we'll provide a transparent quote with no hidden fees. Our goal is to deliver maximum value for your investment.
          </p>
          <div className="text-center">
            <Button href="#contact" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  );
};
