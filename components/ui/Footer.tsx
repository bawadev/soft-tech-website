import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Your strategic AI technology partner. We help businesses gain competitive advantage through cutting-edge AI solutions and strategic consultation.
            </p>
            <p className="text-secondary-400 text-sm">
              7+ years of industry experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300">AI Chat Agents</li>
              <li className="text-secondary-300">Legacy Migrations</li>
              <li className="text-secondary-300">AI Knowledge Systems</li>
              <li className="text-secondary-300">Strategic Consultation</li>
              <li className="text-secondary-300">24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} Softx World. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
