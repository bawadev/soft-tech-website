'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section, Card, Button, Input, Textarea, Select, ScrollReveal } from '../ui';
import { useFormPersist } from '@/hooks/useFormPersist';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().max(100, 'Company name is too long').optional(),
  phone: z.string()
    .regex(/^[\d\s\-+()]*$/, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showDraftBanner, setShowDraftBanner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  // Form persistence
  const { clearSavedData } = useFormPersist({
    watch,
    setValue,
    storageKey: 'contact-form-draft',
    timeout: 500,
  });

  // Check for saved draft on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('contact-form-draft');
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData);
          const hasData = Object.values(parsed).some((value) => {
            if (typeof value === 'string') return value.trim().length > 0;
            return value !== undefined && value !== null && value !== '';
          });
          if (hasData) {
            setShowDraftBanner(true);
          }
        } catch (error) {
          console.error('Failed to check for saved draft:', error);
        }
      }
    }
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);

      setSubmitStatus('success');
      clearSavedData();
      setShowDraftBanner(false);
      reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearDraft = () => {
    clearSavedData();
    setShowDraftBanner(false);
    reset();
  };

  const services = [
    'AI-Powered Chat Agents',
    'Legacy System Migration',
    'AI Knowledge Systems',
    'Strategic Consultation',
    'Website Maintenance',
    'User Analysis & Customer Acquisition',
    'Other',
  ];

  // Helper to check if field is valid
  const isFieldValid = (fieldName: keyof ContactFormData) => {
    return touchedFields[fieldName] && !errors[fieldName] && dirtyFields[fieldName];
  };

  return (
    <Section id="contact" className="relative bg-white/70">
      {/* Left half tint overlay */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-primary-50/50 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Info */}
        <div>
          <ScrollReveal variant="fadeLeft">
            <h2 className="heading-2 mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Ready to transform your business with AI-powered solutions? Schedule a free consultation to discuss your needs and discover how we can help you gain competitive advantage.
            </p>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="space-y-6 mb-8">
            <ScrollReveal variant="fadeLeft" delay={0}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Email Us</h4>
                  <p className="text-secondary-700">contact@softtech.com</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Response Time</h4>
                  <p className="text-secondary-700">We respond in under 2 hours</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Support</h4>
                  <p className="text-secondary-700">24/7 Available</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Trust Badges */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <Card className="glass-panel">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-success-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-secondary-900">No Obligation Consultation</div>
                  <div className="text-sm text-secondary-500">100% Free, No Commitment Required</div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Right Side - Form */}
        <ScrollReveal variant="fadeRight">
        <Card>
          {/* Draft Banner */}
          {showDraftBanner && (
            <div className="mb-6 p-4 bg-info-50 border border-info-100 rounded-lg flex items-start justify-between gap-3 animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-info-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-secondary-900">Draft saved</p>
                  <p className="text-sm text-info-600">Your previous form data has been restored.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearDraft}
                className="text-info-600 hover:text-secondary-700 text-sm font-medium transition-colors min-h-[44px] flex items-center"
                aria-label="Clear saved draft"
              >
                Clear
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <Input
              label="Full Name *"
              placeholder="John Doe"
              error={errors.name?.message}
              isValid={isFieldValid('name')}
              showValidation={true}
              autoComplete="name"
              {...register('name')}
            />

            <Input
              label="Email Address *"
              type="email"
              placeholder="john@company.com"
              error={errors.email?.message}
              isValid={isFieldValid('email')}
              showValidation={true}
              autoComplete="email"
              helperText="We'll never share your email with anyone else"
              {...register('email')}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label="Company"
                placeholder="Your Company"
                error={errors.company?.message}
                isValid={isFieldValid('company')}
                showValidation={true}
                autoComplete="organization"
                {...register('company')}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                error={errors.phone?.message}
                isValid={isFieldValid('phone')}
                showValidation={true}
                autoComplete="tel"
                helperText="Optional"
                {...register('phone')}
              />
            </div>

            <Select
              label="Service Interested In *"
              error={errors.service?.message}
              isValid={isFieldValid('service')}
              showValidation={true}
              {...register('service')}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>

            <Textarea
              label="Message *"
              placeholder="Tell us about your project and requirements..."
              rows={5}
              error={errors.message?.message}
              isValid={isFieldValid('message')}
              showValidation={true}
              showCharCount={true}
              maxLength={1000}
              helperText="Minimum 10 characters"
              {...register('message')}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative"
              size="lg"
              aria-live="polite"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message'
              )}
            </Button>

            {submitStatus === 'success' && (
              <div
                className="p-4 bg-success-50 border border-success-100 rounded-lg flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-300"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-success-700">What happens next?</p>
                  </div>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-sm text-success-600 ml-9">
                  <li>You'll receive a confirmation email</li>
                  <li>We'll review within 2 hours</li>
                  <li>Schedule a free 30-min consultation</li>
                  <li>Get a custom proposal within 24 hours</li>
                </ol>
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="p-4 bg-error-50 border border-error-100 rounded-lg flex items-start gap-3 animate-in slide-in-from-bottom-2 duration-300"
                role="alert"
                aria-live="assertive"
              >
                <svg className="w-6 h-6 text-error-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-error-700">Something went wrong</p>
                  <p className="text-sm text-error-600 mt-1">Please try again or email us directly at contact@softtech.com</p>
                </div>
              </div>
            )}
          </form>
        </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
};
