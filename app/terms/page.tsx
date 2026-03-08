import React from 'react';
import { Metadata } from 'next';
import { Navigation, Footer, Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service | Softx World',
  description: 'Terms of Service for Softx LLC (Softx World). Understand the terms governing the use of our website and services.',
  alternates: {
    canonical: 'https://softx-world.com/terms',
  },
};

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-secondary-900 mb-2">Terms of Service</h1>
            <p className="text-secondary-500 text-sm mb-10">
              Effective Date: February 17, 2026 &nbsp;|&nbsp; Softx LLC (Softx World)
            </p>

            <div className="prose prose-secondary max-w-none space-y-8 text-secondary-700">

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the website <strong>softx-world.com</strong> or engaging any services
                  provided by Softx LLC (&quot;Softx World&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound
                  by these Terms of Service. If you do not agree, please discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">2. Services</h2>
                <p>
                  Softx LLC provides software development, AI automation, marketing, and consulting services
                  as described on our website. The specific scope, deliverables, timelines, and pricing for
                  any engagement will be defined in a separate written agreement or proposal between Softx LLC
                  and the client.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">3. Intellectual Property</h2>
                <p>
                  All content on this website — including text, graphics, logos, and code — is the property
                  of Softx LLC and protected by applicable intellectual property laws. You may not reproduce,
                  distribute, or create derivative works without our written permission.
                </p>
                <p className="mt-3">
                  Custom work developed for clients under a paid engagement will be governed by the ownership
                  terms specified in the applicable service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">4. Client Responsibilities</h2>
                <p>Clients engaging our services agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide accurate and complete information required to perform the services.</li>
                  <li>Respond to requests for feedback or approvals in a timely manner.</li>
                  <li>Ensure that any materials provided to us do not infringe on third-party rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">5. Payment</h2>
                <p>
                  Payment terms are specified in the individual service agreement or proposal. Invoices are
                  due upon the dates specified therein. Softx LLC reserves the right to pause or terminate
                  services for overdue accounts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Softx LLC shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from the use of our website or services.
                  Our total liability in any matter shall not exceed the amount paid by the client for the
                  specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">7. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential any proprietary or sensitive information shared
                  during the course of an engagement, and not to disclose it to third parties without prior
                  written consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">8. Termination</h2>
                <p>
                  Either party may terminate a service engagement with written notice as specified in the
                  applicable service agreement. Softx LLC reserves the right to terminate access to our
                  website for any user who violates these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of Montana, United States. Any disputes
                  arising from these Terms shall be subject to the exclusive jurisdiction of the courts of
                  Montana.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">10. Changes to Terms</h2>
                <p>
                  We reserve the right to update these Terms at any time. Changes will be posted on this
                  page with a revised effective date. Continued use of our website or services after changes
                  are posted constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3">11. Contact Us</h2>
                <p>For questions about these Terms, please reach out:</p>
                <div className="mt-3 bg-secondary-50 rounded-lg p-4 text-sm">
                  <p><strong>Softx LLC (Softx World)</strong></p>
                  <p>Email: <a href="mailto:contact@softx-world.com" className="text-primary-600 hover:underline">contact@softx-world.com</a></p>
                  <p>Website: <a href="https://softx-world.com" className="text-primary-600 hover:underline">softx-world.com</a></p>
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
