import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Footer, Container, Card, Button } from '@/components/ui';

// This would typically come from a CMS or database
const blogPostsData: Record<string, any> = {
  'ai-transformation-2024': {
    title: 'AI Transformation: How Small Businesses Can Compete with Enterprise Giants',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    category: 'AI Technology',
    author: 'Soft Tech Team',
    date: '2024-01-15',
    readTime: '5 min read',
    content: `
      <p>The landscape of business competition has dramatically shifted with the advent of accessible AI technologies. Small businesses no longer need massive budgets to implement sophisticated solutions that were once exclusive to enterprise giants.</p>

      <h2>The AI Equalizer</h2>
      <p>AI technology has become the great equalizer in the business world. Cloud-based AI services, affordable machine learning platforms, and accessible APIs have democratized access to powerful capabilities that can transform how small businesses operate and compete.</p>

      <h2>Key Areas Where AI Levels the Playing Field</h2>

      <h3>1. Customer Service & Support</h3>
      <p>AI-powered chat agents enable small businesses to provide 24/7 customer support without the overhead of maintaining a large support team. These intelligent systems can handle routine inquiries, qualify leads, and escalate complex issues to human agents when necessary.</p>

      <h3>2. Marketing Automation</h3>
      <p>AI-driven marketing tools help small businesses personalize customer experiences at scale. From email campaigns to social media management, AI can analyze customer behavior and optimize marketing efforts for better results.</p>

      <h3>3. Data Analytics</h3>
      <p>Advanced analytics that were once the domain of large enterprises are now accessible to businesses of all sizes. AI can process vast amounts of data to provide actionable insights about customer behavior, market trends, and business performance.</p>

      <h2>Getting Started with AI</h2>
      <p>The key to successful AI adoption is starting small and scaling gradually. Focus on one area where AI can make an immediate impact, measure the results, and expand from there. Don't try to transform everything at once.</p>

      <h2>Conclusion</h2>
      <p>The AI revolution is here, and it's more accessible than ever. Small businesses that embrace these technologies now will be well-positioned to compete effectively in an increasingly digital marketplace.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Container className="py-32">
          <div className="text-center">
            <h1 className="heading-2 mb-4">Post Not Found</h1>
            <p className="text-secondary-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button href="/blog">Back to Blog</Button>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  const relatedPosts = [
    {
      id: 'legacy-migration-guide',
      title: 'The Complete Guide to Legacy System Migration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'customer-acquisition-ai',
      title: 'Using AI for Customer Acquisition',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[60vh] mt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
        <Container className="relative h-full flex items-end pb-12">
          <div className="text-white max-w-4xl">
            <div className="inline-block px-4 py-2 bg-primary-600 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="heading-1 text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <section className="py-16">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#475569',
                lineHeight: '1.75',
              }}
            />

            {/* Author Bio */}
            <Card className="bg-secondary-50 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  ST
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-2">
                    {post.author}
                  </h4>
                  <p className="text-secondary-600">
                    The Soft Tech team brings 7+ years of experience in AI technology and business transformation. We're passionate about helping businesses leverage cutting-edge technology for competitive advantage.
                  </p>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center" padding="lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how AI can help you gain competitive advantage.
              </p>
              <Button href="/#contact" variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary-50">
        <Container>
          <h3 className="heading-3 mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                <Card className="overflow-hidden p-0 h-full" hoverable>
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-secondary-900 hover:text-primary-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
