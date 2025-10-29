import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://softx-world.com';

  // Blog posts
  const blogPosts = [
    'ai-transformation-2024',
    'legacy-migration-guide',
    'customer-acquisition-ai',
    'chatbot-roi',
    'competitive-advantage-ai',
    'future-of-work-ai',
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
