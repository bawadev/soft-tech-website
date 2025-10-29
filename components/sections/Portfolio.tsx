import React from 'react';
import Image from 'next/image';
import { Section, Card, Button } from '../ui';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise Insurance Platform',
      company: 'New York Life Insurance',
      description: 'Modernized legacy insurance management system with AI-powered document processing, reducing claim processing time by 60%.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Integration', 'Legacy Migration', 'Enterprise'],
      metrics: [
        { label: 'Processing Time', value: '-60%' },
        { label: 'User Satisfaction', value: '95%' },
        { label: 'Cost Savings', value: '$2M+' },
      ],
    },
    {
      title: 'Smart Service Management',
      company: 'Work Wave',
      description: 'Built AI-powered scheduling and dispatch system that optimizes routes and resource allocation for field service teams.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Optimization', 'Real-time Systems', 'SaaS'],
      metrics: [
        { label: 'Efficiency Gain', value: '+45%' },
        { label: 'Response Time', value: '-35%' },
        { label: 'Revenue Impact', value: '+28%' },
      ],
    },
    {
      title: 'Health & Wellness AI Assistant',
      company: 'Mapbe Well Being',
      description: 'Developed intelligent health assistant with personalized recommendations, increasing user engagement by 80%.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare AI', 'Mobile App', 'Personalization'],
      metrics: [
        { label: 'User Engagement', value: '+80%' },
        { label: 'Retention Rate', value: '92%' },
        { label: 'Daily Active Users', value: '10K+' },
      ],
    },
  ];

  return (
    <Section id="portfolio" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">
          Success <span className="text-gradient">Stories</span>
        </h2>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Real results for real businesses. See how we've helped companies leverage AI technology to gain competitive advantage.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {project.company}
              </div>

              <h3 className="heading-3 mb-4">{project.title}</h3>
              <p className="text-lg text-secondary-600 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline">View Case Study</Button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-secondary-50 inline-block" padding="lg">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to write your success story?
          </h3>
          <p className="text-secondary-600 mb-6 max-w-2xl">
            Join the growing list of businesses that have transformed their operations with our AI-powered solutions.
          </p>
          <Button href="#contact" size="lg">
            Start Your Project
          </Button>
        </Card>
      </div>
    </Section>
  );
};
