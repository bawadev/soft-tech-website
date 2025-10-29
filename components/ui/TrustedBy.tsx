'use client';

import React from 'react';

interface TrustedByProps {
  showTestimonial?: boolean;
}

export const TrustedBy: React.FC<TrustedByProps> = ({ showTestimonial = false }) => {
  const clients = [
    { name: 'New York Life Insurance', shortName: 'NY Life' },
    { name: 'Work Wave', shortName: 'WorkWave' },
    { name: 'Mapbe Well Being', shortName: 'Mapbe' },
    { name: 'Virtusa', shortName: 'Virtusa' },
    { name: 'Codegen', shortName: 'Codegen' },
    { name: 'IFS', shortName: 'IFS' },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-secondary-200">
      <div className="animate-fade-in">
        {/* Trusted By Header */}
        <div className="flex items-center gap-2 mb-6">
          <p className="text-sm font-medium text-secondary-700 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative flex items-center justify-center transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo Card */}
              <div className="relative w-full h-16 flex items-center justify-center p-4 rounded-lg border border-secondary-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
                {/* SVG Logo Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-bold text-secondary-700 group-hover:text-primary-600 transition-colors duration-300">
                      {client.shortName}
                    </div>
                    <div className="hidden md:block text-[8px] text-secondary-700 mt-0.5">
                      {client.name.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-secondary-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {client.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Testimonial Snippet */}
        {showTestimonial && (
          <div className="mt-8 animate-scale-in" style={{ animationDelay: '600ms' }}>
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-primary-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-secondary-700 leading-relaxed mb-3 italic">
                    "Softx World transformed our digital presence with AI-powered solutions. The results exceeded our expectations."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">John Doe</div>
                      <div className="text-sm text-secondary-700">CTO, Fortune 500 Company</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-secondary-700">
              <span className="font-semibold text-secondary-900">98%</span> Client Satisfaction
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm text-secondary-700">
              <span className="font-semibold text-secondary-900">2x</span> Faster Delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-secondary-700">
              <span className="font-semibold text-secondary-900">$2M+</span> Revenue Generated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
