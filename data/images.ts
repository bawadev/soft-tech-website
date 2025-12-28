// High-quality images from Unsplash.com
// All images are free to use with proper attribution

export const images = {
  // Homepage Hero
  hero: {
    desktop: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80',
    mobile: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    alt: 'AI Technology and Business Growth',
  },

  // About Section
  about: {
    main: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    team: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    alt: 'Professional team collaboration',
  },

  // Services - AI Solutions
  servicesAI: {
    chatbot: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    rag: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    alt: 'AI Chatbot and RAG Systems',
  },

  // Services - Automation
  servicesAutomation: {
    main: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    workflow: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    alt: 'Workflow Automation and Business Processes',
  },

  // Services - Marketing
  servicesMarketing: {
    main: 'https://images.unsplash.com/photo-1533750516457-a9f283520ad18?auto=format&fit=crop&w=1200&q=80',
    analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    alt: 'Marketing Analytics and Growth',
  },

  // Services - Modernization
  servicesModernization: {
    main: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    cloud: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    alt: 'Legacy System Modernization',
  },

  // Portfolio
  portfolio: {
    nyLife: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    workwave: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    mapbe: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Portfolio Case Studies',
  },

  // Blog
  blog: {
    n8n: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    rag: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    chatbot: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    marketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    legacy: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Blog Articles',
  },

  // Logos
  logos: {
    nyLife: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/New_York_Life_Insurance_Company_logo.svg/200px-New_York_Life_Insurance_Company_logo.svg.png',
    placeholder: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"%3E%3Crect fill="%23f0f0f0" width="200" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14" font-family="Arial"%3ECompany Logo%3C/text%3E%3C/svg%3E',
  },
};

// Helper function to get optimized image URL
export const getOptimizedImage = (
  baseImage: string,
  width: number = 800,
  quality: number = 80,
) => {
  // If it's already an Unsplash URL with parameters, use it as is
  if (baseImage.includes('unsplash.com') && baseImage.includes('?')) {
    return baseImage;
  }
  // If it's an Unsplash URL, add optimization parameters
  if (baseImage.includes('unsplash.com')) {
    const separator = baseImage.includes('?') ? '&' : '?';
    return `${baseImage}${separator}auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  // For local images, return as is
  return baseImage;
};
