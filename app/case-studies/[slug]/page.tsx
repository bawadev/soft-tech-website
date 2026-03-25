import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation, Footer, Button, Section, Card } from '@/components/ui';
import { getCaseStudyBySlug, getAllCaseStudySlugs, getRelatedCaseStudies } from '@/data/case-studies';
import { CheckCircle, Clock, Building2, ArrowRight, Quote } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.company} | Softx World Case Study`,
    description: caseStudy.metaDescription,
    keywords: [...caseStudy.tags, 'case study', 'success story', 'Softx World'],
    openGraph: {
      title: `${caseStudy.title} - ${caseStudy.company}`,
      description: caseStudy.metaDescription,
      type: 'article',
      images: [
        {
          url: caseStudy.ogImage || caseStudy.heroImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - ${caseStudy.company}`,
      description: caseStudy.metaDescription,
      images: [caseStudy.ogImage || caseStudy.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(slug);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    image: caseStudy.heroImage,
    author: {
      '@type': 'Organization',
      name: 'Softx World',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Softx World',
      logo: {
        '@type': 'ImageObject',
        url: 'https://softx.world/logo.png',
      },
    },
    datePublished: new Date().toISOString(),
    about: {
      '@type': 'Organization',
      name: caseStudy.company,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-secondary-900/75" />

          <div className="relative z-10 container-custom text-center text-white">
            <div className="inline-block px-4 py-2 bg-primary-600/90 rounded-full text-sm font-medium mb-6">
              {caseStudy.company}
            </div>
            <h1 className="heading-1 text-white mb-6 max-w-4xl mx-auto">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary-100 max-w-3xl mx-auto mb-8">
              {caseStudy.tagline}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {caseStudy.results.metrics[0].value}
                </div>
                <div className="text-sm text-secondary-300">
                  {caseStudy.results.metrics[0].label}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {caseStudy.results.metrics[1].value}
                </div>
                <div className="text-sm text-secondary-300">
                  {caseStudy.results.metrics[1].label}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {caseStudy.results.metrics[2].value}
                </div>
                <div className="text-sm text-secondary-300">
                  {caseStudy.results.metrics[2].label}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Info Bar */}
        <section className="bg-secondary-50 border-b border-secondary-200">
          <div className="container-custom py-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary-600" />
                <span className="text-secondary-600">Industry:</span>
                <span className="font-semibold text-secondary-900">{caseStudy.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="text-secondary-600">Project Duration:</span>
                <span className="font-semibold text-secondary-900">{caseStudy.projectDuration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-secondary-200 rounded-full text-secondary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">
              Project <span className="text-gradient">Overview</span>
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>
        </Section>

        {/* Challenge Section */}
        <Section className="bg-secondary-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="heading-3 mb-6">{caseStudy.challenge.title}</h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  {caseStudy.challenge.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Key Pain Points:</h3>
                <div className="space-y-4">
                  {caseStudy.challenge.painPoints.map((point, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-secondary-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Solution Section */}
        <Section className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <h2 className="heading-3 mb-6">{caseStudy.solution.title}</h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  {caseStudy.solution.description}
                </p>
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Our Approach:</h3>
                <div className="space-y-4">
                  {caseStudy.solution.approach.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-secondary-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Key Features Section */}
        <Section className="bg-secondary-50">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Innovative capabilities that transformed {caseStudy.company}'s operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.features.map((feature, idx) => (
              <Card key={idx} className="bg-white hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Technologies Section */}
        <Section className="bg-secondary-900 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering the solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudy.technologies.map((tech, idx) => (
              <div key={idx} className="bg-secondary-800/50 backdrop-blur rounded-xl p-6 border border-secondary-700">
                <h3 className="text-lg font-semibold text-primary-400 mb-4">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1 bg-secondary-700/50 text-secondary-200 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Results Section */}
        <Section className="bg-white">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Measurable <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact on business performance and user satisfaction
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudy.results.metrics.map((metric, idx) => (
              <Card key={idx} className="text-center bg-primary-50 border-2 border-primary-100">
                <div className="text-5xl font-bold text-gradient mb-3">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Outcomes List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Business Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.results.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-secondary-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonial Section */}
        <Section className="bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="text-left">
                <div className="font-semibold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-primary-100">{caseStudy.testimonial.position}</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section className="bg-secondary-50">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Project <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              How we delivered results in {caseStudy.projectDuration}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {caseStudy.timeline.map((phase, idx) => (
                <div key={idx} className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0 last:pb-0">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow-lg" />
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-secondary-900">
                        {phase.phase}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-secondary-600">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <Section className="bg-white">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">
                More <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Explore how we've helped other businesses achieve their goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                      {study.company}
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {study.tagline}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:gap-3 transition-all">
                      Read Case Study
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* CTA Section */}
        <Section className="bg-secondary-900 text-white">
          <Card className="bg-primary-600 text-white max-w-4xl mx-auto text-center" padding="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Join {caseStudy.company} and other industry leaders who have achieved remarkable results with our AI-powered solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/#contact" variant="secondary" size="lg">
                Start Your Project
              </Button>
              <Button href="/#portfolio" variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                View More Case Studies
              </Button>
            </div>
          </Card>
        </Section>

        <Footer />
      </main>
    </>
  );
}
