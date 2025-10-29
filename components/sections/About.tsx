import React from 'react';
import Image from 'next/image';
import { Section, Card } from '../ui';

export const About: React.FC = () => {
  const companies = [
    'New York Life Insurance',
    'Work Wave',
    'Mapbe Well Being',
    'Virtusa',
    'Codegen',
    'IFS',
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Client-Focused Results',
      description: 'We focus on bringing you actual clients, not just building websites. Your growth is our success.',
    },
    {
      icon: '⚡',
      title: 'Cutting-Edge Technology',
      description: 'Stay ahead with the latest AI technologies and strategic implementations tailored to your business.',
    },
    {
      icon: '🤝',
      title: 'Long-term Partnership',
      description: 'Lifetime support, continuous upgrades, and strategic guidance for sustained competitive advantage.',
    },
    {
      icon: '📈',
      title: 'Proven Track Record',
      description: '7+ years of experience from top companies, delivering real results for businesses of all sizes.',
    },
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">
          Why Choose <span className="text-gradient">Soft Tech</span>
        </h2>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          We're not your typical web development agency. We're your strategic technology partner, focused on delivering competitive advantage through AI-powered solutions.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {values.map((value, index) => (
          <Card key={index} hoverable className="text-center">
            <div className="text-5xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">
              {value.title}
            </h3>
            <p className="text-secondary-600">{value.description}</p>
          </Card>
        ))}
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="heading-3 mb-6">
            Experience from Industry Leaders
          </h3>
          <p className="text-lg text-secondary-600 mb-6">
            Our team brings 7+ years of expertise from some of the most respected companies in technology, insurance, and enterprise solutions. We understand what it takes to build scalable, reliable systems that drive business growth.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900">Enterprise-Grade Solutions</h4>
                <p className="text-secondary-600">Built to scale with your business needs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900">Industry Best Practices</h4>
                <p className="text-secondary-600">Proven methodologies from Fortune 500 companies</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900">Strategic Technology Consulting</h4>
                <p className="text-secondary-600">Navigate the evolving tech landscape with confidence</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Professional team collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Company Badges */}
          <div className="mt-8">
            <p className="text-sm text-secondary-600 mb-4 font-medium">
              Trusted by professionals from:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 px-4 py-2 rounded-lg text-sm text-secondary-700 text-center font-medium"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
