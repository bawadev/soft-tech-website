import { WithContext, Organization, Service, Article, BreadcrumbList, WebSite } from 'schema-dts';

export const OrganizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SoftX World",
  "alternateName": ["SoftX", "Softx", "Softx World", "SoftX World"],
  "legalName": "Softx LLC",
  "url": "https://softx.world",
  "logo": "https://softx.world/logo.png",
  "image": "https://softx.world/og-image.jpg",
  "description": "SoftX World designs, builds, and operates enterprise-grade software platforms. Human-led discovery, senior engineering, and long-term partnerships — software built to last for decades.",
  "foundingDate": "2017",
  "email": "admin@softx.world",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "MT",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/company/softx-world",
    "https://twitter.com/SoftxWorld",
    "https://github.com/softx-world"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  },
  "knowsAbout": [
    "Enterprise Software Development",
    "Platform Engineering",
    "Product Design",
    "UX Research",
    "Mobile Application Development",
    "Cloud Infrastructure",
    "DevOps",
    "Software Modernization",
    "Digital Transformation",
    "Growth Strategy"
  ]
};

export const WebSiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SoftX World",
  "alternateName": ["SoftX", "Softx", "softx.world"],
  "url": "https://softx.world",
  "description": "SoftX World — enterprise software engineering, built the human way. Platforms designed to last for decades, from a senior Sri Lankan engineering team.",
  "publisher": {
    "@type": "Organization",
    "name": "SoftX World",
    "url": "https://softx.world",
    "logo": "https://softx.world/logo.png"
  },
  "inLanguage": "en-US"
};

export const ServicesSchema: WithContext<Service>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Platform Engineering",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Large-scale web and mobile platforms engineered for reliability, security, and decades of evolution — real-time systems, payments, video, geo services, cloud infrastructure, and modernization.",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softx.world/#services"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Product Design & Research",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Human designers and researchers who study how your customers think and decide — user interviews, consumer psychology, decision-journey mapping, and trust-centered product design.",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softx.world/#services"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Growth & Marketing Strategy",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Human marketing strategists who help improve the business, not just the software — positioning, go-to-market, SEO and content, and customer analytics that explain behavior.",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softx.world/#services"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Long-Term Engineering Partnership",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Dedicated senior product teams, architecture and roadmap stewardship, 24/7 production ownership, and evolution programs — partnerships measured in years, software built to last decades.",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softx.world/#services"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  }
];

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://softx.world"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Softx World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://softx.world/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
