import React from 'react';
import { Metadata } from 'next';
import { Navigation, Footer, Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy | Softx World',
  description: 'Privacy Policy for Softx LLC (Softx World). Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://softx.world/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-secondary-900 mb-2">Privacy Policy</h1>
            <p className="text-secondary-500 text-sm mb-10">
              Effective Date: February 17, 2026 &nbsp;|&nbsp; Softx LLC (Softx World)
            </p>

            <div className="prose prose-secondary max-w-none space-y-8 text-secondary-700">

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">1. Introduction</h2>
                <p>
                  Softx LLC, operating as Softx World (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website <strong>softx.world</strong> or engage our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Contact information</strong> — name, email address, phone number, and company name provided through our contact form.</li>
                  <li><strong>Usage data</strong> — pages visited, time spent on pages, browser type, and IP address, collected automatically via analytics tools.</li>
                  <li><strong>Communications</strong> — messages and inquiries you send us.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Respond to your inquiries and provide our services.</li>
                  <li>Send you relevant updates, proposals, or project communications.</li>
                  <li>Improve our website and service offerings.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
                <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">4. Cookies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to improve your browsing
                  experience and analyze site traffic. You can control cookie settings through your browser.
                  Disabling cookies may affect some features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">5. Third-Party Services</h2>
                <p>
                  We may use third-party tools (such as analytics or email services) that collect information
                  on our behalf. These providers have their own privacy policies and are not permitted to use
                  your data for their own purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information.
                  However, no method of transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction or deletion of your data.</li>
                  <li>Opt out of marketing communications at any time.</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:contact@softx.world" className="text-primary-600 hover:underline">
                    contact@softx.world
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page
                  with an updated effective date. Continued use of our website constitutes acceptance of
                  the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">9. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="mt-3 bg-secondary-50 rounded-lg p-4 text-sm">
                  <p><strong>Softx LLC (Softx World)</strong></p>
                  <p>Email: <a href="mailto:contact@softx.world" className="text-primary-600 hover:underline">contact@softx.world</a></p>
                  <p>Website: <a href="https://softx.world" className="text-primary-600 hover:underline">softx.world</a></p>
                </div>
              </section>

            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
