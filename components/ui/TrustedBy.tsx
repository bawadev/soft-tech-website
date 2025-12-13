'use client';

import React from 'react';
import Image from 'next/image';

export const TrustedBy: React.FC = () => {
  const clients = [
    { name: 'New York Life Insurance', shortName: 'NY Life', logo: '/logos/new-york-life.svg' },
    { name: 'Work Wave', shortName: 'WorkWave', logo: '/logos/workwave.svg' },
    { name: 'Mapbe Well Being', shortName: 'Mapbe', logo: '/logos/mapbe.svg' },
    { name: 'Virtusa', shortName: 'Virtusa', logo: '/logos/virtusa.svg' },
    { name: 'Codegen', shortName: 'Codegen', logo: '/logos/codegen.svg' },
    { name: 'IFS', shortName: 'IFS', logo: '/logos/ifs.svg' },
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
              <div className="relative w-full h-20 flex items-center justify-center p-3 rounded-lg border border-secondary-200 bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
                {/* Company Logo Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
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

      </div>
    </div>
  );
};
