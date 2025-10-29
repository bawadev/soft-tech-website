'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Container } from './Container';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '/blog' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine active section based on scroll position
      const sections = ['about', 'services', 'portfolio', 'pricing', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  // Check if a link is active
  const isLinkActive = (link: typeof navLinks[0]) => {
    // For exact page matches
    if (link.href === pathname) return true;

    // For anchor links, check if we're on homepage and section is active
    if (link.href.startsWith('#') && pathname === '/') {
      return activeSection === link.href.substring(1);
    }

    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-lg"
          >
            <Logo className="transition-all duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
                    ${isActive
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              href="#contact"
              size="sm"
              onClick={(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => handleAnchorClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary-700 rounded-lg transition-colors hover:bg-secondary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="flex flex-col space-y-2 pb-4 border-t border-secondary-200 pt-4">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleAnchorClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    px-4 py-3 rounded-lg font-medium transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
                    ${isActive
                      ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button
              href="#contact"
              size="sm"
              className="w-full mt-2"
              onClick={(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                handleAnchorClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};
