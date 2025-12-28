'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { RefreshCw, Rocket, Shield, TrendingUp } from 'lucide-react';
import { Section, Card, Button } from '../ui';
import { generateFAQSchema } from '@/lib/seo/schemas';

export const Pricing: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const packages = [
    {
      name: 'Essential',
      description: 'Get started with AI chatbots and basic automation. Perfect for small businesses wanting to reduce support costs.',
      price: 'Starting at $2,500',
      priceDetail: 'Typical range: $2,500 - $5,000',
      features: [
        'AI Chatbot (80% query handling)',
        'Basic RAG Knowledge System',
        'Email Support (under 2 hrs response)',
        '3 Months Support',
        'Up to 1,000 monthly interactions',
      ],
      highlighted: false,
      badge: null,
    },
    {
      name: 'Growth',
      description: 'Full automation suite with n8n workflows, advanced RAG, and marketing tools. Delivers 3-5x ROI within 6 months.',
      price: 'Starting at $5,000',
      priceDetail: 'Typical range: $5,000 - $12,000',
      features: [
        'Everything in Essential',
        'Advanced RAG (3.5x ROI per $1)',
        'n8n Workflow Automation',
        'Priority 24/7 Support',
        'Unlimited interactions',
        'Advanced Analytics Dashboard',
        '1 Year Support',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Partner',
      description: 'Complete customer acquisition machine. AI, automation, marketing, and dedicated account management. We become your growth partner.',
      price: 'Starting at $15,000',
      priceDetail: 'Custom quote based on scope',
      features: [
        'Everything in Growth',
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
      icon: RefreshCw,
      title: 'Lifetime Change Requests',
      description: 'Your business evolves, and so should your technology. Request changes anytime.',
    },
    {
      icon: Rocket,
      title: 'Continuous Upgrades',
      description: 'Stay ahead with automatic updates and new features as technology advances.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance with industry standards.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Strategic guidance to help you maximize ROI and achieve business goals.',
    },
  ];

  const pricingFactors = [
    {
      title: 'Project Complexity',
      description: 'The scope and technical requirements of your AI solution',
    },
    {
      title: 'Integration Needs',
      description: 'Number and complexity of systems requiring integration',
    },
    {
      title: 'Data Volume',
      description: 'Amount of data processing and storage requirements',
    },
    {
      title: 'Support Level',
      description: 'Response time requirements and dedicated support needs',
    },
  ];

  const faqs = [
    {
      question: 'Why don\'t you offer fixed pricing?',
      answer: 'Every business has unique needs, existing systems, and goals. Fixed pricing often means paying for features you don\'t need or missing critical capabilities. Our custom approach ensures you get exactly what you need at a fair price, with no wasted investment.',
    },
    {
      question: 'What factors affect my final price?',
      answer: 'Your final price depends on project complexity, integration requirements, data volume, customization needs, and support level. We provide a detailed breakdown during your free consultation so you understand exactly what you\'re paying for.',
    },
    {
      question: 'Are there any hidden fees or ongoing costs?',
      answer: 'Absolutely not. We believe in complete transparency. Your quote includes all development, implementation, and the specified support period. We clearly outline any optional ongoing services (like extended support or additional features) upfront, so there are never any surprises.',
    },
    {
      question: 'Can I upgrade or add features later?',
      answer: 'Yes! Our packages are designed to grow with you. You can upgrade tiers or add specific features at any time. We\'ll provide transparent pricing for additions, and existing clients receive preferential rates for expansions.',
    },
    {
      question: 'Do you offer payment plans or financing?',
      answer: 'Yes, we offer flexible payment structures for projects over $5,000. Options include milestone-based payments, monthly installments, or custom arrangements that align with your budget and cash flow. We\'ll discuss this during your consultation.',
    },
    {
      question: 'How quickly can I get a quote?',
      answer: 'Most clients receive a detailed quote within 24-48 hours after their initial consultation. For complex enterprise solutions, we may need 3-5 business days to provide a comprehensive proposal with accurate pricing.',
    },
  ];

  const faqSchema = generateFAQSchema(
    faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  return (
    <Section id="pricing" className="bg-secondary-50">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="heading-2 mb-4">
          Transparent <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
          Simple, value-based pricing from a team of senior engineers who previously worked at Sri Lanka's leading software companies. Every dollar you invest returns $3.50+ in ROI through automation, efficiency, and customer acquisition.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-12 sm:mb-16">
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

            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-sm sm:text-base text-secondary-700 mb-5 sm:mb-6">{pkg.description}</p>

            <div className="mb-5 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-1">
                {pkg.price}
              </div>
              <p className="text-xs sm:text-sm text-secondary-700">
                {pkg.priceDetail}
              </p>
              <p className="text-xs text-secondary-700 mt-2 italic">
                Final pricing based on your requirements
              </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
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
          {includes.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-primary-600" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-secondary-700 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Custom Pricing */}
      <Card className="bg-primary-50 border border-primary-200 mb-12" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Why Custom Pricing?
          </h3>
          <p className="text-secondary-700 mb-6 text-center">
            Every business is unique, and we believe your technology solution should be too. Our custom pricing ensures you only pay for what you need, with the flexibility to scale as you grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">
                    {factor.title}
                  </h4>
                  <p className="text-sm text-secondary-700">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary-700 mb-6">
              Schedule a free consultation to discuss your requirements, and we'll provide a transparent quote with no hidden fees. Our goal is to deliver maximum value for your investment.
            </p>
            <Button href="#contact" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </Card>

      {/* Pricing FAQ */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-secondary-900 mb-8">
          Pricing Questions?
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden" padding="none">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-secondary-50 transition-colors min-h-[60px]"
              >
                <span className="font-semibold text-secondary-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 pt-0 text-secondary-700 border-t border-secondary-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center bg-secondary-50 rounded-lg p-6">
          <p className="text-secondary-700 mb-4">
            Still have questions about pricing? We're here to help!
          </p>
          <Button href="#contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
};
