import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://softx.world';

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

  // Case studies
  const caseStudies = [
    'new-york-life-insurance-platform-modernization',
    'workwave-smart-service-management',
    'mapbe-wellbeing-health-ai-assistant',
  ];

  const caseStudyUrls = caseStudies.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    ...caseStudyUrls,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
