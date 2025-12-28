import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navigation, Footer, Container, Card, Button } from '@/components/ui';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog - AI, Automation & Marketing Insights for Business Growth',
  description: 'Expert articles on n8n automation, RAG systems, AI chatbots, marketing automation ROI, legacy system migration, and digital transformation strategies to grow your business.',
  keywords: [
    'n8n automation',
    'RAG systems',
    'AI chatbot ROI',
    'marketing automation',
    'legacy system migration',
    'business automation',
    'AI transformation',
    'customer acquisition',
    'workflow automation'
  ],
  openGraph: {
    title: 'Blog - AI, Automation & Marketing Insights | Softx World',
    description: 'Expert articles on n8n automation, RAG systems, AI chatbots, marketing automation, and digital transformation.',
    type: 'website',
    url: 'https://softx-world.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Softx World Blog - AI, Automation & Marketing Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - AI, Automation & Marketing Insights | Softx World',
    description: 'Expert articles on n8n automation, RAG systems, and marketing automation.',
    images: ['/twitter-blog.jpg'],
  },
  alternates: {
    canonical: 'https://softx-world.com/blog',
  },
};

const categories = ['All', 'AI', 'Automation', 'Marketing', 'Technology'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              Learn How <span className="text-gradient">Automation & AI</span> Grows Your Revenue
            </h1>
            <p className="text-xl text-secondary-600">
              Real-world guides on n8n automation, RAG systems, AI chatbots, marketing automation, and legacy system migration. Every article includes ROI calculations and implementation strategies.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden p-0" hoverable>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-secondary-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-secondary-600 mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span>•</span>
                  <span>{blogPosts[0].category}</span>
                </div>
                <Button href={`/blog/${blogPosts[0].slug}`}>
                  Read Article
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden p-0 flex flex-col" hoverable>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-lg text-xs font-medium mb-3 self-start">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-secondary-600 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="mt-16 bg-primary-600 text-white text-center" padding="lg">
            <h3 className="text-3xl font-bold mb-4">
              Get Weekly ROI Insights
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join 5,000+ business leaders receiving actionable strategies on automation, AI implementation, and customer acquisition ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
