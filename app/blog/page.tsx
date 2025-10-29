import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navigation, Footer, Container, Card, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Blog - AI Insights & Business Growth',
  description: 'Stay updated with the latest trends in AI technology, business growth strategies, and technology insights from Softx World experts. Expert articles on AI implementation, digital transformation, and business success.',
  keywords: [
    'AI blog',
    'business technology articles',
    'AI transformation',
    'digital transformation',
    'legacy system migration',
    'customer acquisition strategies',
    'AI chat agents',
    'technology insights'
  ],
  openGraph: {
    title: 'Blog - AI Insights & Business Growth | Softx World',
    description: 'Expert articles on AI technology, business growth strategies, and digital transformation from Softx World.',
    type: 'website',
    url: 'https://softx-world.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Softx World Blog - AI Insights & Business Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - AI Insights & Business Growth | Softx World',
    description: 'Expert articles on AI technology and business growth strategies.',
    images: ['/twitter-blog.jpg'],
  },
  alternates: {
    canonical: 'https://softx-world.com/blog',
  },
};

const blogPosts = [
  {
    id: 'ai-transformation-2024',
    title: 'AI Transformation: How Small Businesses Can Compete with Enterprise Giants',
    excerpt: 'Discover how AI levels the playing field and gives small businesses the tools to compete effectively with larger competitors.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    category: 'AI Technology',
    author: 'Softx World Team',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 'legacy-migration-guide',
    title: 'The Complete Guide to Legacy System Migration',
    excerpt: 'Step-by-step approach to modernizing outdated systems without disrupting your business operations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    author: 'Softx World Team',
    date: '2024-01-10',
    readTime: '8 min read',
  },
  {
    id: 'customer-acquisition-ai',
    title: 'Using AI for Customer Acquisition: A Practical Guide',
    excerpt: 'Learn how AI-powered tools can help you identify, attract, and convert more customers effectively.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Business Growth',
    author: 'Softx World Team',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    id: 'chatbot-roi',
    title: 'Measuring ROI from AI Chat Agents: What to Track',
    excerpt: 'Key metrics and KPIs to measure the success of your AI chat agent implementation.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    category: 'AI Technology',
    author: 'Softx World Team',
    date: '2024-01-01',
    readTime: '7 min read',
  },
  {
    id: 'competitive-advantage-ai',
    title: 'Building Competitive Advantage with AI: Real-World Examples',
    excerpt: 'Case studies showing how businesses leverage AI to gain significant competitive advantages.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    category: 'Business Strategy',
    author: 'Softx World Team',
    date: '2023-12-28',
    readTime: '9 min read',
  },
  {
    id: 'future-of-work-ai',
    title: 'The Future of Work: How AI is Reshaping Business Operations',
    excerpt: 'Explore how AI is transforming workplace dynamics and what it means for your business.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Future Trends',
    author: 'Softx World Team',
    date: '2023-12-20',
    readTime: '6 min read',
  },
];

const categories = ['All', 'AI Technology', 'Business Growth', 'Technology', 'Business Strategy', 'Future Trends'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-secondary-600">
              Stay ahead with expert insights on AI technology, business growth strategies, and digital transformation.
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
                <Button href={`/blog/${blogPosts[0].id}`}>
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
                    href={`/blog/${post.id}`}
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
              Subscribe to Our Newsletter
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Get the latest insights on AI technology and business growth delivered directly to your inbox.
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
