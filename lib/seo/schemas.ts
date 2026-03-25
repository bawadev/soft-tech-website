import { WithContext, Organization, Service, Article, BreadcrumbList, WebSite } from 'schema-dts';

export const OrganizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SoftX World",
  "alternateName": ["SoftX", "Softx", "Softx World", "SoftX World"],
  "legalName": "Softx LLC",
  "url": "https://softx.world",
  "logo": "https://softx.world/logo.png",
  "description": "SoftX World — AI-powered business solutions and strategic technology partnership. Expert in AI chat agents, legacy system migrations, n8n automation, RAG systems, and business consultation.",
  "foundingDate": "2017",
  "email": "contact@softx.world",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Business Consultation",
    "Web Development",
    "Digital Transformation",
    "Legacy System Migration",
    "Customer Acquisition"
  ]
};

export const WebSiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SoftX World",
  "alternateName": ["SoftX", "Softx"],
  "url": "https://softx.world",
  "description": "SoftX World — AI-powered automation, RAG systems, n8n workflows, and customer acquisition solutions",
  "publisher": {
    "@type": "Organization",
    "name": "Softx World"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://softx.world/search?q={search_term_string}"
    }
  } as any
};

export const ServicesSchema: WithContext<Service>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI-Powered Chat Agents",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Intelligent conversational AI that engages customers 24/7, qualifies leads, and drives conversions. Seamlessly integrate with your existing systems.",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://softx.world/#services"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Chat Agent Features",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Natural language processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-language support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom training on your data"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM integration"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Legacy System Migrations",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Transform outdated systems into modern AI-powered solutions. Maintain business continuity while upgrading to cutting-edge technology.",
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
    "serviceType": "AI Knowledge Systems",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Build intelligent knowledge bases that learn and evolve. Empower your team and customers with instant access to accurate information.",
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
    "serviceType": "Strategic Consultation",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Navigate the rapidly changing technology landscape with expert guidance. We help you identify opportunities and implement solutions that matter.",
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
    "serviceType": "Website Maintenance & Tech Upgrades",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Keep your digital presence cutting-edge with continuous improvements, security updates, and performance optimization.",
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
    "serviceType": "User Analysis & Customer Acquisition",
    "provider": {
      "@type": "Organization",
      "name": "Softx World"
    },
    "description": "Data-driven insights to understand your users and attract more customers. Turn analytics into actionable growth strategies.",
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
