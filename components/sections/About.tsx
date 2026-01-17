import React from 'react';
import Image from 'next/image';
import { Target, Zap, Handshake, TrendingUp, Award, Users, Clock, CheckCircle2 } from 'lucide-react';
import { Section, Card, Button } from '../ui';

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
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Stay ahead with the latest AI technologies and strategic implementations tailored to your business.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'Lifetime support, continuous upgrades, and strategic guidance for sustained competitive advantage.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Ex-employees from Sri Lanka\'s leading software companies with decades of enterprise experience delivering real results for businesses of all sizes.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    {
      icon: Award,
      value: '7+ Years',
      label: 'Enterprise Experience',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Projects Delivered',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
    },
    {
      icon: CheckCircle2,
      value: '100%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="heading-2 mb-6 text-center">
          Why Choose <span className="text-gradient">Softx World</span>
        </h2>
        
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-secondary-700 leading-relaxed">
            Softx World was built by former engineers and architects who have spent years working inside Sri Lanka's leading software companies. In those environments, we learned what it takes to design, build, and maintain systems that operate at scale—where reliability, security, and long-term thinking are non-negotiable.
          </p>
          
          {/* Key Highlight Box */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 p-6 rounded-r-xl">
            <p className="text-base sm:text-lg md:text-xl text-secondary-800 font-medium">
              We saw a gap: businesses needed enterprise-level engineering without the enterprise-level cost and complexity. Softx World bridges that gap.
            </p>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-secondary-700 leading-relaxed">
            Today, we bring enterprise-level experience to organizations of all sizes. Whether you're scaling an established business or building something new in a rapidly evolving, AI-driven landscape, we work as a practical partner—focused on clarity, efficiency, and real business outcomes.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="mb-16 lg:mb-20">
        <h3 className="heading-3 mb-8 lg:mb-12 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                hoverable
                className="text-center group relative overflow-hidden border-0"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-secondary-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Industry Expertise
            </div>
            <h3 className="heading-3 mb-6">
              Experience from Industry Leaders
            </h3>
            <p className="text-base sm:text-lg text-secondary-700 mb-8 leading-relaxed">
              Our team brings 7+ years of expertise from some of the most respected companies in technology, insurance, and enterprise solutions. We understand what it takes to build scalable, reliable systems that drive business growth.
            </p>

            <div className="space-y-5">
            {[
              {
                title: 'Enterprise-Grade Solutions',
                description: 'Built to scale with your business needs',
              },
              {
                title: 'Industry Best Practices',
                description: 'Enterprise methodologies from Sri Lanka\'s tech giants',
              },
              {
                title: 'Strategic Technology Consulting',
                description: 'Navigate the evolving tech landscape with confidence',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">{item.title}</h4>
                  <p className="text-secondary-700">{item.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div>
            <div className="relative">
              {/* Main Image with Decorative Elements */}
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional team collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-secondary-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">7+</div>
                    <div className="text-sm text-secondary-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos */}
            <div className="mt-16">
              <p className="text-base text-secondary-700 mb-6 font-semibold text-center">
                Our team previously worked at:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white border border-secondary-200 px-4 sm:px-6 py-6 sm:py-8 rounded-xl flex items-center justify-center hover:shadow-xl hover:border-primary-300 transition-all duration-300 group"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-[50px] sm:max-h-[60px] w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <Button variant="primary" className="w-full sm:w-auto">
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};