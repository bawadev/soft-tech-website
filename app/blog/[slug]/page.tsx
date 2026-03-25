import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { Navigation, Footer, Container, Card, Button } from '@/components/ui';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/schemas';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Softx World`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author, url: 'https://softx.world' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://softx.world/blog/${slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://softx.world/blog/${slug}`,
    },
  };
}

const renderMarkdown = (markdown: string) => {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h4 class="text-xl font-semibold mt-6 mb-3 text-secondary-900">$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4 text-secondary-900">$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h2 class="text-4xl font-bold mt-12 mb-6 text-secondary-900">$1</h2>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Paragraphs - handle lines that aren't headers
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    // Skip empty lines
    if (!line.trim()) return '';

    // Skip lines that start with HTML tags (already processed)
    if (line.trim().startsWith('<')) return line;

    // Wrap plain text in p tags
    return `<p class="mb-4 text-secondary-700 leading-relaxed">${line}</p>`;
  });

  html = processedLines.join('\n');

  return html;
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: post.author,
    url: `https://softx.world/blog/${slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://softx.world' },
    { name: 'Blog', url: 'https://softx.world/blog' },
    { name: post.title, url: `https://softx.world/blog/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[60vh] mt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary-900/60"></div>
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
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
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
                    The Softx World team brings 7+ years of experience in AI technology and business transformation. We're passionate about helping businesses leverage cutting-edge technology for competitive advantage.
                  </p>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="bg-primary-600 text-white text-center" padding="lg">
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
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card className="overflow-hidden p-0 h-full" hoverable>
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
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
