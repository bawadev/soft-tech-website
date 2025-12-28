import React from 'react';
import Image from 'next/image';
import { Target, Zap, Handshake, TrendingUp } from 'lucide-react';
import { Section, Card } from '../ui';

export const About: React.FC = () => {
  const companies = [
    {
      name: 'IFS',
      logo: '/logos/ifs.svg',
    },
    {
      name: 'Tech Mahindra',
      logo: '/logos/tech-mahindra.svg',
    },
    {
      name: 'WorkWave',
      logo: '/logos/workwave.svg',
    },
    {
      name: 'Virtusa',
      logo: '/logos/virtusa.svg',
    },
    {
      name: 'New York Life Insurance',
      logo: '/logos/new-york-life.svg',
    },
    {
      name: 'Codegen',
      logo: '/logos/codegen.svg',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Client-Focused Results',
      description: 'We focus on bringing you actual clients, not just building websites. Your growth is our success.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Stay ahead with the latest AI technologies and strategic implementations tailored to your business.',
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'Lifetime support, continuous upgrades, and strategic guidance for sustained competitive advantage.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Ex-employees from Sri Lanka\'s leading software companies with decades of enterprise experience delivering real results for businesses of all sizes.',
    },
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="heading-2 mb-4">
          Why Choose <span className="text-gradient">Softx World</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary-700 max-w-prose mx-auto px-4">
          Our team consists of senior software engineers and architects who previously worked at Sri Lanka's leading software companies. We bring enterprise-level expertise to businesses of all sizes.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <Card key={index} hoverable className="text-center">
              <div className="flex justify-center mb-4">
                <IconComponent className="w-12 h-12 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {value.title}
              </h3>
              <p className="text-secondary-700">{value.description}</p>
            </Card>
          );
        })}
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div>
          <h3 className="heading-3 mb-5 sm:mb-6">
            Experience from Industry Leaders
          </h3>
          <p className="text-base sm:text-lg text-secondary-700 mb-5 sm:mb-6 max-w-prose">
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
                <p className="text-secondary-700">Built to scale with your business needs</p>
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
                <p className="text-secondary-700">Enterprise methodologies from Sri Lanka's tech giants</p>
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
                <p className="text-secondary-700">Navigate the evolving tech landscape with confidence</p>
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </div>

          {/* Company Logos */}
          <div className="mt-8">
            <p className="text-base text-secondary-700 mb-6 font-semibold text-center">
              Our team previously worked at:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white border border-secondary-200 px-6 py-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-[60px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
