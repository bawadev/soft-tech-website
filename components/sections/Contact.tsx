'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section, Card, Button, Input, Textarea } from '../ui';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="heading-2 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Ready to transform your business with AI-powered solutions? Schedule a free consultation to discuss your needs and discover how we can help you gain competitive advantage.
          </p>

          {/* Contact Info */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Email Us</h4>
                <p className="text-secondary-600">contact@softtech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Response Time</h4>
                <p className="text-secondary-600">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">Support</h4>
                <p className="text-secondary-600">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <Card className="bg-secondary-50 border-none">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-semibold text-secondary-900">No Obligation Consultation</div>
                <div className="text-sm text-secondary-600">100% Free, No Commitment Required</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side - Form */}
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Full Name *"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register('name')}
            />

            <Input
              label="Email Address *"
              type="email"
              placeholder="john@company.com"
              error={errors.email?.message}
              {...register('email')}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Company"
                placeholder="Your Company"
                {...register('company')}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register('phone')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Service Interested In *
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.service
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-secondary-300 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                {...register('service')}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
              )}
            </div>

            <Textarea
              label="Message *"
              placeholder="Tell us about your project and requirements..."
              rows={5}
              error={errors.message?.message}
              {...register('message')}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
};
