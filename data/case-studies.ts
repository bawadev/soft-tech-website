export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  industry: string;
  projectDuration: string;
  heroImage: string;
  logo?: string;
  tagline: string;

  // Live product link (for SoftX's own ventures). Optional.
  liveUrl?: string;
  // Marks a SoftX-built product (own venture) vs. a client engagement. Optional.
  isProduct?: boolean;

  // Overview
  overview: string;

  // Challenge
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };

  // Solution
  solution: {
    title: string;
    description: string;
    approach: string[];
  };

  // Key Features
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];

  // Technologies
  technologies: {
    category: string;
    items: string[];
  }[];

  // Results
  results: {
    // Optional: numeric metrics are only shown for engagements with verified figures.
    // Omitted for SoftX's own products so no numbers are fabricated.
    metrics?: {
      label: string;
      value: string;
      description: string;
    }[];
    outcomes: string[];
  };

  // Testimonial (optional — omitted for own products with no external client to quote)
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    avatar?: string;
  };

  // Project Timeline (optional)
  timeline?: {
    phase: string;
    duration: string;
    description: string;
  }[];

  // Tags
  tags: string[];

  // SEO
  metaDescription: string;
  ogImage?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'playmate',
    title: 'PlayMate — Pickup Sports, Organized',
    company: 'SoftX',
    industry: 'Social & Sports',
    projectDuration: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Organize pickup games and find players near you',
    liveUrl: 'https://playmate.now',
    isProduct: true,

    overview: 'PlayMate is a SoftX venture — a social app that makes it easy to organize pickup sports games and discover players nearby. It pairs a React Native / Expo mobile app with a Next.js web experience, backed by Supabase. Geospatial matchmaking is powered by PostGIS, and realtime updates keep games and lobbies in sync as players join.',

    challenge: {
      title: 'The Challenge: Getting a Game Together Is Harder Than Playing It',
      description: 'For casual players, the hardest part of a pickup game isn\'t the game itself — it\'s the coordination. Finding enough people, at a convenient place and time, and keeping everyone updated as plans change is tedious with group chats and manual organizing.',
      painPoints: [
        'Casual players struggle to find enough people for a game at a convenient time and place',
        'Group chats and manual coordination don\'t surface who is actually nearby and available',
        'Location-based matching needs efficient geospatial queries, not simple distance math',
        'Game lobbies must stay in sync in realtime as players join, leave, or cancel',
        'The experience has to work equally well on phones and on the web'
      ]
    },

    solution: {
      title: 'The Solution: Geospatial Matchmaking with Realtime Lobbies',
      description: 'PlayMate turns coordination into a few taps. Players discover nearby games and people through geospatial matchmaking, and realtime lobbies keep everyone on the same page from either mobile or web.',
      approach: [
        'Built a cross-platform product: React Native / Expo for mobile, Next.js for web',
        'Used Supabase (PostgreSQL) as the unified backend for data and authentication',
        'Implemented geospatial matchmaking with PostGIS to find nearby players and games',
        'Added realtime lobbies so game state updates instantly across devices',
        'Designed a shared data model so mobile and web stay consistent'
      ]
    },

    features: [
      {
        title: 'Nearby Discovery',
        description: 'Find pickup games and players around you using PostGIS-powered geospatial queries, so matchmaking is based on real proximity.',
      },
      {
        title: 'Realtime Game Lobbies',
        description: 'Lobbies update live as players join, leave, or cancel — everyone sees the current state instantly across devices.',
      },
      {
        title: 'Cross-Platform',
        description: 'One product across iOS, Android and the web, built with React Native / Expo and Next.js.',
      },
      {
        title: 'Organize & Manage Games',
        description: 'Create games, set the sport, time and place, and manage who\'s in — without wrangling a group chat.',
      },
    ],

    technologies: [
      {
        category: 'Mobile',
        items: ['React Native', 'Expo']
      },
      {
        category: 'Web',
        items: ['Next.js', 'React', 'TypeScript']
      },
      {
        category: 'Backend & Data',
        items: ['Supabase', 'PostgreSQL', 'PostGIS', 'Realtime']
      }
    ],

    results: {
      outcomes: [
        'Live in production at playmate.now',
        'Realtime geospatial matchmaking powered by PostGIS',
        'A single product spanning iOS, Android and web',
        'Realtime game lobbies that stay in sync as players join'
      ]
    },

    tags: ['React Native', 'Supabase', 'PostGIS', 'Realtime', 'Cross-Platform'],

    metaDescription: 'PlayMate is a SoftX social app for organizing pickup sports games and finding nearby players — built with React Native / Expo, Next.js and Supabase with PostGIS geospatial matchmaking.',
    ogImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'suwa-care',
    title: 'Suwa Care — Telemedicine Platform',
    company: 'SoftX',
    industry: 'Digital Health',
    projectDuration: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Doctor booking and video consultations',
    liveUrl: 'https://dev.suwa.care',
    isProduct: true,

    overview: 'Suwa Care is a SoftX telemedicine platform that connects patients with doctors through online booking and secure video consultations. The backend is built on Spring Boot 3.4 (Java 21) with PostgreSQL and PostGIS; the web app uses Next.js 16 and the mobile app is built with Expo. In-app video consultations are powered by LiveKit.',

    challenge: {
      title: 'The Challenge: Care Beyond the Clinic',
      description: 'Booking a doctor and attending a consultation traditionally means travel and waiting rooms. Bringing that online calls for dependable scheduling and reliable, low-latency video — delivered consistently across web and mobile.',
      painPoints: [
        'Booking a doctor and attending a consultation traditionally requires travel and waiting',
        'Video consultations need reliable, low-latency real-time media',
        'A booking platform must handle scheduling, availability and appointments robustly',
        'Patients expect to reach the service from both web and mobile',
        'Location-aware features benefit from geospatial support in the data layer'
      ]
    },

    solution: {
      title: 'The Solution: Booking Plus Built-In Video',
      description: 'Suwa Care combines appointment booking with video consultations in one platform, on a robust Java backend, and reaches patients through both a web app and a mobile app built from a shared API.',
      approach: [
        'Built a Spring Boot 3.4 / Java 21 backend for booking, scheduling and appointments',
        'Used PostgreSQL with PostGIS for the data layer and location-aware queries',
        'Integrated LiveKit to power in-app video consultations',
        'Delivered a Next.js 16 web app and an Expo mobile app against a shared API'
      ]
    },

    features: [
      {
        title: 'Doctor Booking & Scheduling',
        description: 'Patients can find a doctor and book an appointment, with scheduling and availability handled on the backend.',
      },
      {
        title: 'Secure Video Consultations',
        description: 'In-app video consultations are powered by LiveKit for reliable, real-time communication.',
      },
      {
        title: 'Web and Mobile',
        description: 'A Next.js 16 web app and an Expo mobile app give patients more than one way to reach care.',
      },
      {
        title: 'Robust Java Backend',
        description: 'A Spring Boot 3.4 / Java 21 service with PostgreSQL and PostGIS underpins booking and data.',
      },
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['Spring Boot 3.4', 'Java 21']
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'PostGIS']
      },
      {
        category: 'Web & Mobile',
        items: ['Next.js 16', 'Expo']
      },
      {
        category: 'Realtime Video',
        items: ['LiveKit']
      }
    ],

    results: {
      outcomes: [
        'Doctor booking and video consultations in one platform',
        'In-app video powered by LiveKit',
        'Available on both web and mobile',
        'Running in a development environment at dev.suwa.care'
      ]
    },

    tags: ['Spring Boot', 'Java 21', 'LiveKit', 'Telemedicine', 'Next.js'],

    metaDescription: 'Suwa Care is a SoftX telemedicine platform for doctor booking and video consultations, built with Spring Boot 3.4 (Java 21), PostgreSQL/PostGIS, Next.js 16, Expo and LiveKit.',
    ogImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'sri-lanka-wildlife-guide',
    title: 'Sri Lanka Wildlife Guide',
    company: 'SoftX',
    industry: 'Biodiversity & Nature',
    projectDuration: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80',
    tagline: 'A species directory for Sri Lanka\'s biodiversity',
    liveUrl: 'https://wildlife-demo.softx.world',
    isProduct: true,

    overview: 'Sri Lanka Wildlife Guide is a SoftX product: a biodiversity species directory for Sri Lanka, enriched by community photo uploads. It is built on a FastAPI (Python) backend.',

    challenge: {
      title: 'The Challenge: Cataloguing Rich Biodiversity',
      description: 'Sri Lanka\'s biodiversity spans a remarkable range of species and habitats. Turning that into something people can actually browse means structuring the information well and letting a community contribute to it.',
      painPoints: [
        'Sri Lanka\'s biodiversity is vast and spread across many species and habitats',
        'A useful directory needs structured, browsable species information',
        'Community photo contributions require upload handling and organization',
        'The catalogue should be fast to browse and search'
      ]
    },

    solution: {
      title: 'The Solution: A Searchable Directory with Photo Uploads',
      description: 'The guide organizes Sri Lanka\'s species into a browsable directory served by a FastAPI backend, and lets the community enrich entries with their own photos.',
      approach: [
        'Built a FastAPI (Python) backend to serve species data',
        'Structured a browsable species directory',
        'Supported community photo uploads to enrich entries'
      ]
    },

    features: [
      {
        title: 'Species Directory',
        description: 'A browsable directory of Sri Lanka\'s wildlife, organized so people can explore species easily.',
      },
      {
        title: 'Community Photo Uploads',
        description: 'Contributors can upload photos to enrich species entries with real, community-sourced imagery.',
      },
      {
        title: 'FastAPI Backend',
        description: 'A Python FastAPI backend serves the directory quickly and keeps the data structured.',
      },
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['FastAPI', 'Python']
      },
      {
        category: 'Domain',
        items: ['Species Directory', 'Photo Uploads']
      }
    ],

    results: {
      outcomes: [
        'Biodiversity species directory for Sri Lanka',
        'Community photo uploads',
        'Built on a FastAPI (Python) backend'
      ]
    },

    tags: ['FastAPI', 'Python', 'Biodiversity', 'Directory'],

    metaDescription: 'Sri Lanka Wildlife Guide is a SoftX biodiversity species directory with community photo uploads, built on a FastAPI (Python) backend.',
    ogImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'ideanote',
    title: 'Ideanote — AI Note-Taking',
    company: 'SoftX',
    industry: 'Productivity & AI',
    projectDuration: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Notes that organize themselves by meaning',
    liveUrl: 'https://ideanote-demo.softx.world',
    isProduct: true,

    overview: 'Ideanote is a SoftX AI note-taking app. It auto-summarizes notes and uses semantic clustering to group related notes by meaning, visualizes them as a note network, and sends smart reminders. It is built on Next.js with Convex as a realtime backend and Clerk for authentication, and uses OpenAI and Mistral for embeddings and clustering.',

    challenge: {
      title: 'The Challenge: Notes Pile Up and Lose Their Connections',
      description: 'Notes accumulate far faster than anyone can organize them by hand. Related ideas end up scattered, folders and tags don\'t capture meaning, and good notes get forgotten without a nudge.',
      painPoints: [
        'Notes accumulate faster than anyone can organize them by hand',
        'Related ideas end up scattered across separate notes',
        'Manual tagging and folders don\'t capture meaning',
        'Important notes get forgotten without timely reminders'
      ]
    },

    solution: {
      title: 'The Solution: Meaning-Aware Organization',
      description: 'Ideanote reads meaning, not just keywords. It summarizes notes, clusters related ones using embeddings, draws the connections as a network, and resurfaces notes with smart reminders.',
      approach: [
        'Auto-summarize notes to capture the gist',
        'Use embeddings (OpenAI, Mistral) to cluster related notes by meaning',
        'Render a visual note network to surface connections',
        'Add smart reminders so notes resurface at the right time',
        'Build on Next.js with Convex for realtime and Clerk for authentication'
      ]
    },

    features: [
      {
        title: 'Automatic Summarization',
        description: 'Each note is auto-summarized so you can grasp the gist at a glance.',
      },
      {
        title: 'Semantic Clustering',
        description: 'Notes are grouped by meaning using embeddings, so related ideas come together automatically.',
      },
      {
        title: 'Visual Note Network',
        description: 'A network view surfaces the connections between notes instead of hiding them in folders.',
      },
      {
        title: 'Smart Reminders',
        description: 'Notes resurface at the right time so nothing important gets forgotten.',
      },
    ],

    technologies: [
      {
        category: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript']
      },
      {
        category: 'Backend & Realtime',
        items: ['Convex']
      },
      {
        category: 'Auth',
        items: ['Clerk']
      },
      {
        category: 'AI',
        items: ['OpenAI', 'Mistral', 'Embeddings & Clustering']
      }
    ],

    results: {
      outcomes: [
        'Live demo at ideanote-demo.softx.world',
        'AI semantic clustering groups notes by meaning',
        'Automatic summarization and smart reminders',
        'A visual note network of connected ideas'
      ]
    },

    tags: ['Next.js', 'Convex', 'Clerk', 'OpenAI', 'AI Clustering'],

    metaDescription: 'Ideanote is a SoftX AI note-taking app with auto-summarization, semantic clustering, a visual note network and smart reminders — built with Next.js, Convex, Clerk, OpenAI and Mistral.',
    ogImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'propertyweb',
    title: 'PropertyWeb — Real-Estate Marketplace',
    company: 'SoftX',
    industry: 'Real Estate / PropTech',
    projectDuration: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Search listings, save properties, connect with agents',
    liveUrl: 'https://propertyweb.online',
    isProduct: true,

    overview: 'PropertyWeb is a SoftX real-estate listings marketplace. It offers property search, saved properties, an agent directory and multi-role accounts. It is built with React (Vite) and Supabase.',

    challenge: {
      title: 'The Challenge: Bringing Buyers, Sellers and Agents Together',
      description: 'A real-estate marketplace has to serve several kinds of people at once — buyers searching and saving listings, and agents who want to be found — each with different needs from the same platform.',
      painPoints: [
        'Property seekers need to search and filter listings efficiently',
        'Buyers want to save and revisit properties they\'re interested in',
        'Agents need a place to be discovered',
        'Different users — buyers, agents, admins — need different capabilities'
      ]
    },

    solution: {
      title: 'The Solution: A Multi-Role Listings Marketplace',
      description: 'PropertyWeb brings listings, saved properties and an agent directory into one marketplace, with multi-role accounts so each type of user gets the right experience.',
      approach: [
        'Built listing search and browse with React (Vite)',
        'Added saved properties for signed-in users',
        'Created an agent directory',
        'Supported multi-role accounts',
        'Used Supabase for data and authentication'
      ]
    },

    features: [
      {
        title: 'Property Search',
        description: 'Search and browse real-estate listings to find the right property.',
      },
      {
        title: 'Saved Properties',
        description: 'Signed-in users can save properties and come back to them later.',
      },
      {
        title: 'Agent Directory',
        description: 'A directory that helps buyers and sellers connect with agents.',
      },
      {
        title: 'Multi-Role Accounts',
        description: 'Different account roles give buyers, agents and admins the capabilities they need.',
      },
    ],

    technologies: [
      {
        category: 'Frontend',
        items: ['React', 'Vite', 'TypeScript']
      },
      {
        category: 'Backend & Data',
        items: ['Supabase']
      }
    ],

    results: {
      outcomes: [
        'Live at propertyweb.online',
        'Listing search, saved properties and an agent directory',
        'Multi-role accounts for buyers, agents and admins',
        'Built with React (Vite) and Supabase'
      ]
    },

    tags: ['React', 'Vite', 'Supabase', 'Marketplace', 'PropTech'],

    metaDescription: 'PropertyWeb is a SoftX real-estate marketplace with listing search, saved properties, an agent directory and multi-role accounts, built with React (Vite) and Supabase.',
    ogImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'locked',
    title: 'Locked — AI-Native Apparel Store',
    company: 'SoftX',
    industry: 'E-Commerce / Apparel',
    projectDuration: 'In development',
    heroImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Direct-to-consumer apparel with AI-generated product photography',
    liveUrl: 'https://locked-demo.softx.world',
    isProduct: true,

    overview: 'Locked is a SoftX internal venture: a direct-to-consumer branded apparel store that uses AI-generated product photography. It is built with Next.js and a Neo4j graph database.',

    challenge: {
      title: 'The Challenge: Standing Up a Branded Apparel Store',
      description: 'Launching a direct-to-consumer apparel brand means solving for expensive product photography and modelling how products, variants and collections relate — all behind a fast, modern storefront.',
      painPoints: [
        'Product photography for apparel is expensive and slow to produce',
        'A store needs to model relationships between products, variants and collections',
        'A direct-to-consumer brand needs a fast, modern storefront'
      ]
    },

    solution: {
      title: 'The Solution: AI Photography on a Graph-Backed Store',
      description: 'Locked builds its catalogue with AI-generated product photography, models the relationships between products in a graph database, and presents it all through a Next.js storefront.',
      approach: [
        'Generate product photography with AI to build the catalogue',
        'Model the catalogue in Neo4j to capture product relationships',
        'Build the storefront with Next.js'
      ]
    },

    features: [
      {
        title: 'AI-Generated Product Photography',
        description: 'Product imagery is generated with AI, reducing the cost and time of a traditional photo shoot.',
      },
      {
        title: 'Graph-Modeled Catalogue',
        description: 'The catalogue is modeled in Neo4j to capture how products, variants and collections relate.',
      },
      {
        title: 'Next.js Storefront',
        description: 'A modern storefront built with Next.js for the direct-to-consumer experience.',
      },
    ],

    technologies: [
      {
        category: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript']
      },
      {
        category: 'Data',
        items: ['Neo4j']
      },
      {
        category: 'Imagery',
        items: ['AI-Generated Product Photography']
      }
    ],

    results: {
      outcomes: [
        'Internal SoftX venture (no public URL yet)',
        'AI-generated product photography',
        'Catalogue modeled in a Neo4j graph database',
        'Storefront built with Next.js'
      ]
    },

    tags: ['Next.js', 'Neo4j', 'E-Commerce', 'AI Imagery', 'Internal Venture'],

    metaDescription: 'Locked is a SoftX internal venture: a direct-to-consumer apparel store with AI-generated product photography, built with Next.js and Neo4j.',
    ogImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
  }
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug);
}

// Helper function to get related case studies
export function getRelatedCaseStudies(currentSlug: string, limit: number = 2): CaseStudy[] {
  return caseStudies
    .filter(study => study.slug !== currentSlug)
    .slice(0, limit);
}
