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
    slug: 'new-york-life-insurance-platform-modernization',
    title: 'Enterprise Insurance Platform Modernization',
    company: 'New York Life Insurance',
    industry: 'Insurance & Financial Services',
    projectDuration: '8 months',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Transforming legacy systems into AI-powered platforms',

    overview: 'New York Life Insurance, one of the largest mutual life insurance companies in the United States, faced significant challenges with their legacy claim processing system. The 20-year-old system was slowing down operations, increasing costs, and creating frustration for both employees and policyholders. We partnered with them to modernize their entire insurance management platform, introducing AI-powered document processing and intelligent automation.',

    challenge: {
      title: 'The Challenge: Legacy Systems Holding Back Growth',
      description: 'New York Life\'s existing claim processing system was built on outdated technology that couldn\'t keep pace with modern business demands. Manual document processing was creating bottlenecks, while lack of integration between systems led to data silos and inefficiencies.',
      painPoints: [
        'Manual processing of 10,000+ insurance claims per month taking an average of 14 days',
        'Paper-based document management system prone to errors and loss',
        'Disconnected legacy systems requiring manual data entry across multiple platforms',
        'Limited visibility into claim status causing customer service issues',
        'Compliance risks due to inconsistent documentation and audit trails',
        'High operational costs with 60+ staff dedicated to manual claim processing',
        'Inability to scale during peak periods without significant staff increases',
        'Poor employee satisfaction due to repetitive manual tasks'
      ]
    },

    solution: {
      title: 'The Solution: AI-Powered Platform Transformation',
      description: 'We designed and implemented a comprehensive modernization strategy that leveraged cutting-edge AI technology while ensuring zero disruption to ongoing operations. Our approach focused on intelligent automation, seamless integration, and user-centric design.',
      approach: [
        'Conducted thorough analysis of existing workflows and identified automation opportunities',
        'Developed AI-powered document processing engine using computer vision and NLP',
        'Built modern microservices architecture to replace monolithic legacy system',
        'Implemented intelligent routing system to prioritize and categorize claims automatically',
        'Created unified dashboard providing real-time visibility across all operations',
        'Designed comprehensive API layer to integrate with existing enterprise systems',
        'Established phased migration plan to minimize risk and ensure business continuity',
        'Provided extensive training and change management support for 200+ employees'
      ]
    },

    features: [
      {
        title: 'Intelligent Document Processing',
        description: 'AI-powered OCR and NLP engine automatically extracts, validates, and categorizes information from insurance documents with 98% accuracy. Handles diverse document types including claims forms, medical records, and supporting documentation.',
      },
      {
        title: 'Automated Claim Routing',
        description: 'Smart routing algorithm analyzes claim complexity, value, and type to automatically assign to the most appropriate adjuster. Reduces processing time and ensures consistent handling of similar claims.',
      },
      {
        title: 'Real-Time Analytics Dashboard',
        description: 'Executive dashboard provides instant visibility into claim volumes, processing times, bottlenecks, and team performance. Enables data-driven decision making and proactive resource allocation.',
      },
      {
        title: 'Integrated Compliance Engine',
        description: 'Built-in compliance checks automatically verify regulatory requirements, flag potential issues, and maintain comprehensive audit trails. Reduces compliance risk and simplifies regulatory reporting.',
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Policyholder portal allows customers to submit claims, upload documents, track status, and communicate with adjusters 24/7. Significantly improves customer satisfaction and reduces call center volume.',
      },
      {
        title: 'Mobile-First Adjuster App',
        description: 'Native mobile application enables adjusters to process claims, capture photos, collect signatures, and update records from the field. Accelerates on-site inspections and assessments.',
      }
    ],

    technologies: [
      {
        category: 'AI & Machine Learning',
        items: ['TensorFlow', 'PyTorch', 'OpenAI GPT-4', 'Azure Computer Vision', 'spaCy NLP']
      },
      {
        category: 'Backend & Infrastructure',
        items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker', 'Kubernetes']
      },
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native']
      },
      {
        category: 'Cloud & DevOps',
        items: ['AWS', 'Azure', 'Terraform', 'GitHub Actions', 'DataDog', 'New Relic']
      },
      {
        category: 'Security & Compliance',
        items: ['OAuth 2.0', 'HIPAA Compliance Tools', 'SOC 2', 'Encryption at Rest/Transit']
      }
    ],

    results: {
      metrics: [
        {
          label: 'Processing Time Reduction',
          value: '60%',
          description: 'Average claim processing time reduced from 14 days to 5.6 days'
        },
        {
          label: 'Cost Savings',
          value: '$2.1M',
          description: 'Annual operational cost savings through automation and efficiency gains'
        },
        {
          label: 'Accuracy Improvement',
          value: '98%',
          description: 'Document processing accuracy increased from 85% to 98%'
        },
        {
          label: 'Customer Satisfaction',
          value: '95%',
          description: 'Policyholder satisfaction score increased by 28 percentage points'
        },
        {
          label: 'Employee Productivity',
          value: '+175%',
          description: 'Claims processed per adjuster increased from 40 to 110 per month'
        },
        {
          label: 'System Uptime',
          value: '99.9%',
          description: 'Platform availability exceeding industry standards'
        }
      ],
      outcomes: [
        'Reduced claim processing backlog by 85% within first 3 months of deployment',
        'Enabled processing of 30% more claims with the same staff size',
        'Decreased customer service calls related to claim status by 67%',
        'Improved compliance audit scores from 82% to 97%',
        'Eliminated paper storage costs saving $120,000 annually',
        'Reduced onboarding time for new adjusters from 6 weeks to 2 weeks',
        'Achieved ROI in 18 months, 6 months ahead of projections',
        'Positioned company to handle 3x current volume without additional infrastructure'
      ]
    },

    testimonial: {
      quote: 'The transformation Softx World delivered exceeded our expectations. What impressed us most was their deep understanding of the insurance industry and their ability to translate that knowledge into practical technology solutions. The AI-powered platform has not only reduced our costs but dramatically improved both customer and employee satisfaction. This partnership has been transformative for our operations.',
      author: 'Jennifer Martinez',
      position: 'VP of Claims Operations, New York Life Insurance',
    },

    timeline: [
      {
        phase: 'Discovery & Planning',
        duration: '6 weeks',
        description: 'Comprehensive analysis of existing systems, workflows, and requirements. Stakeholder interviews, technical architecture design, and project roadmap development.'
      },
      {
        phase: 'AI Model Development',
        duration: '8 weeks',
        description: 'Training and fine-tuning of AI models for document processing, claim categorization, and intelligent routing using historical data.'
      },
      {
        phase: 'Platform Development',
        duration: '12 weeks',
        description: 'Building core platform features, microservices architecture, API integrations, and user interfaces for both web and mobile applications.'
      },
      {
        phase: 'Integration & Migration',
        duration: '6 weeks',
        description: 'Integration with existing enterprise systems, data migration from legacy platforms, and comprehensive testing.'
      },
      {
        phase: 'Pilot Program',
        duration: '4 weeks',
        description: 'Limited rollout to select team of adjusters, gathering feedback, and making refinements based on real-world usage.'
      },
      {
        phase: 'Full Deployment',
        duration: '4 weeks',
        description: 'Phased rollout across all departments, comprehensive training program, and establishment of support processes.'
      }
    ],

    tags: ['AI Integration', 'Legacy Migration', 'Enterprise', 'Insurance Technology', 'Document Processing'],

    metaDescription: 'How Softx World helped New York Life Insurance modernize their legacy platform with AI-powered document processing, reducing claim processing time by 60% and saving $2.1M annually.',
    ogImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'workwave-smart-service-management',
    title: 'Smart Service Management AI',
    company: 'Work Wave',
    industry: 'Field Service Management',
    projectDuration: '6 months',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Revolutionizing field service operations with intelligent automation',

    overview: 'Work Wave, a leading provider of field service management software, needed to differentiate their platform in an increasingly competitive market. They partnered with us to integrate advanced AI capabilities that would optimize scheduling, routing, and resource allocation for their 5,000+ customer base managing field service teams.',

    challenge: {
      title: 'The Challenge: Manual Scheduling at Scale',
      description: 'Work Wave\'s customers were struggling with inefficient scheduling and routing that led to wasted time, fuel costs, and missed service windows. The existing system required significant manual intervention and couldn\'t adapt to real-time changes in the field.',
      painPoints: [
        'Manual scheduling process taking dispatchers 2-3 hours daily for teams of 20+ technicians',
        'Suboptimal routing leading to 30% more drive time than necessary',
        'Inability to dynamically adjust schedules based on real-time conditions',
        'Poor resource matching resulting in technicians sent without proper skills or tools',
        'Limited visibility into technician location and job progress',
        'Customer dissatisfaction due to missed service windows and poor communication',
        'Inefficient capacity utilization with some technicians overbooked, others underutilized',
        'Difficulty predicting job duration leading to scheduling conflicts'
      ]
    },

    solution: {
      title: 'The Solution: AI-Powered Intelligent Scheduling',
      description: 'We developed a sophisticated AI engine that learns from historical data to optimize every aspect of field service operations. The system considers hundreds of variables to create optimal schedules, routes, and resource allocations in real-time.',
      approach: [
        'Analyzed 2+ years of historical scheduling and service data to identify patterns',
        'Built machine learning models to predict accurate job durations based on service type and complexity',
        'Developed multi-objective optimization algorithm balancing efficiency, customer satisfaction, and resource utilization',
        'Created real-time routing engine that adapts to traffic, weather, and emergency requests',
        'Implemented intelligent skill-matching system to assign jobs to best-qualified technicians',
        'Designed predictive maintenance module to identify potential equipment issues',
        'Built mobile app with real-time updates and turn-by-turn navigation for technicians',
        'Integrated with existing CRM, inventory, and billing systems'
      ]
    },

    features: [
      {
        title: 'Intelligent Auto-Scheduling',
        description: 'AI engine automatically generates optimal schedules considering technician skills, location, availability, job priority, and customer preferences. Reduces dispatcher workload by 80% while improving schedule quality.',
      },
      {
        title: 'Dynamic Route Optimization',
        description: 'Real-time routing algorithm continuously adjusts routes based on traffic conditions, weather, and new job requests. Minimizes drive time and fuel costs while maximizing jobs completed per day.',
      },
      {
        title: 'Predictive Job Duration',
        description: 'Machine learning model predicts accurate job completion times based on service type, customer history, and technician experience. Reduces scheduling conflicts and improves service window accuracy by 45%.',
      },
      {
        title: 'Smart Resource Matching',
        description: 'Intelligent matching system considers technician certifications, experience level, past performance, and customer ratings to assign the best person for each job. Improves first-time fix rate and customer satisfaction.',
      },
      {
        title: 'Real-Time Adaptability',
        description: 'System automatically adjusts schedules when emergencies arise, technicians run late, or jobs are cancelled. Reoptimizes entire day\'s schedule in seconds to minimize disruption.',
      },
      {
        title: 'Customer Communication Hub',
        description: 'Automated notifications keep customers informed with appointment confirmations, technician en-route alerts, and estimated arrival times. Reduces customer service calls by 55%.',
      }
    ],

    technologies: [
      {
        category: 'AI & Optimization',
        items: ['TensorFlow', 'Scikit-learn', 'Google OR-Tools', 'Prophet', 'XGBoost']
      },
      {
        category: 'Backend',
        items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'GraphQL']
      },
      {
        category: 'Frontend & Mobile',
        items: ['React', 'TypeScript', 'React Native', 'Expo', 'Mapbox GL']
      },
      {
        category: 'Cloud & Infrastructure',
        items: ['AWS', 'Lambda', 'ECS', 'CloudFormation', 'S3', 'CloudFront']
      },
      {
        category: 'Data & Analytics',
        items: ['Apache Airflow', 'Snowflake', 'Tableau', 'Jupyter']
      }
    ],

    results: {
      metrics: [
        {
          label: 'Efficiency Gain',
          value: '+45%',
          description: 'Average jobs completed per technician per day increased from 5.8 to 8.4'
        },
        {
          label: 'Drive Time Reduction',
          value: '35%',
          description: 'Average daily drive time decreased from 3.2 hours to 2.1 hours'
        },
        {
          label: 'Revenue Impact',
          value: '+28%',
          description: 'Customer revenue growth attributed to improved service capacity and satisfaction'
        },
        {
          label: 'Schedule Accuracy',
          value: '92%',
          description: 'Service appointments completed within promised time window'
        },
        {
          label: 'First-Time Fix Rate',
          value: '+23%',
          description: 'Improvement in jobs resolved on first visit due to better technician matching'
        },
        {
          label: 'Customer Satisfaction',
          value: '4.7/5',
          description: 'Average customer rating increased from 3.9 to 4.7 stars'
        }
      ],
      outcomes: [
        'Reduced fuel costs by an average of $18,000 per year for companies with 20 technicians',
        'Enabled service businesses to handle 40% more jobs without hiring additional staff',
        'Decreased dispatcher overtime by 70% through automated scheduling',
        'Improved technician work-life balance with more predictable, efficient schedules',
        'Reduced no-shows and cancellations by 31% through better communication',
        'Increased customer retention rate from 82% to 91% for Work Wave\'s clients',
        'Generated $1.2M in additional revenue for Work Wave through competitive differentiation',
        'Won "Best Field Service Innovation" award at industry conference'
      ]
    },

    testimonial: {
      quote: 'The AI scheduling system Softx World built has become our flagship feature and primary competitive differentiator. Our customers are seeing immediate, measurable results in efficiency and profitability. The technology is sophisticated yet incredibly intuitive. This partnership has elevated our entire product offering and market position.',
      author: 'Michael Chen',
      position: 'CTO, Work Wave',
    },

    timeline: [
      {
        phase: 'Data Analysis & Model Design',
        duration: '4 weeks',
        description: 'Analysis of historical service data, identification of key optimization variables, and machine learning model architecture design.'
      },
      {
        phase: 'AI Model Development',
        duration: '8 weeks',
        description: 'Development and training of prediction models for job duration, routing optimization algorithms, and intelligent matching systems.'
      },
      {
        phase: 'Platform Integration',
        duration: '6 weeks',
        description: 'Integration of AI engine with existing Work Wave platform, API development, and database schema updates.'
      },
      {
        phase: 'Mobile App Development',
        duration: '6 weeks',
        description: 'Building technician mobile application with offline capabilities, GPS tracking, and real-time communication features.'
      },
      {
        phase: 'Beta Testing',
        duration: '3 weeks',
        description: 'Pilot program with 10 customer companies representing diverse use cases, feedback collection, and model refinement.'
      },
      {
        phase: 'Production Launch',
        duration: '3 weeks',
        description: 'Phased rollout to all customers, documentation, training materials, and establishment of monitoring systems.'
      }
    ],

    tags: ['AI Optimization', 'Real-time Systems', 'SaaS', 'Field Service', 'Route Optimization'],

    metaDescription: 'How Softx World helped Work Wave build an AI-powered scheduling and routing system that increased efficiency by 45% and reduced drive time by 35% for field service teams.',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },

  {
    slug: 'mapbe-wellbeing-health-ai-assistant',
    title: 'Health & Wellness AI Assistant',
    company: 'Mapbe Well Being',
    industry: 'Healthcare & Wellness',
    projectDuration: '7 months',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Personalizing health journeys with intelligent AI guidance',

    overview: 'Mapbe Well Being, an innovative digital health startup, envisioned a wellness platform that goes beyond simple tracking to provide truly personalized health guidance. They needed an AI assistant that could understand individual user contexts, preferences, and goals to deliver customized recommendations that drive real behavioral change.',

    challenge: {
      title: 'The Challenge: Generic Health Advice Doesn\'t Work',
      description: 'The wellness app market is saturated with solutions offering generic tracking and one-size-fits-all advice. Users quickly lose engagement when recommendations don\'t account for their unique circumstances, preferences, and motivations.',
      painPoints: [
        'Low user engagement with 68% of users abandoning the app within 30 days',
        'Generic health recommendations not accounting for individual circumstances or preferences',
        'Disconnected features (nutrition, fitness, sleep, mindfulness) providing conflicting advice',
        'Inability to understand context behind user data and behaviors',
        'Limited personalization leading to poor adherence to health plans',
        'No way to adapt recommendations based on user progress and feedback',
        'Privacy concerns preventing users from sharing detailed health information',
        'Difficulty demonstrating value and health outcomes to potential enterprise customers'
      ]
    },

    solution: {
      title: 'The Solution: Intelligent Personal Health Companion',
      description: 'We designed an AI-powered health assistant that learns from each user\'s unique patterns, preferences, and goals to provide hyper-personalized guidance. The system integrates data across all health dimensions to deliver holistic, context-aware recommendations.',
      approach: [
        'Developed conversational AI interface enabling natural dialogue about health goals and challenges',
        'Built comprehensive user profile system capturing preferences, constraints, and motivations',
        'Created multi-modal data integration from wearables, manual logs, and environmental factors',
        'Implemented reinforcement learning to continuously improve recommendations based on user feedback',
        'Designed privacy-first architecture with on-device processing and encrypted data storage',
        'Built behavioral science framework into AI to focus on sustainable habit formation',
        'Developed holistic health model considering interactions between nutrition, fitness, sleep, and stress',
        'Created enterprise dashboard for corporate wellness programs to track aggregate outcomes'
      ]
    },

    features: [
      {
        title: 'Conversational Health Coach',
        description: 'Natural language AI assistant that understands context, asks clarifying questions, and provides personalized guidance through empathetic dialogue. Feels like talking to a knowledgeable friend rather than using an app.',
      },
      {
        title: 'Hyper-Personalized Recommendations',
        description: 'AI analyzes individual health data, lifestyle patterns, and stated preferences to generate customized nutrition plans, workout routines, and wellness strategies. Adapts in real-time based on progress and feedback.',
      },
      {
        title: 'Holistic Health Integration',
        description: 'Comprehensive system that understands how sleep affects workout performance, how stress impacts eating habits, and how nutrition influences mood. Provides coordinated advice across all health dimensions.',
      },
      {
        title: 'Behavioral Pattern Recognition',
        description: 'Machine learning identifies personal triggers, optimal motivation strategies, and successful behavior patterns. Uses insights to predict challenges and proactively suggest interventions.',
      },
      {
        title: 'Smart Goal Setting & Tracking',
        description: 'AI helps users set realistic, achievable goals based on their current state and past performance. Automatically adjusts milestones and celebrates progress to maintain motivation.',
      },
      {
        title: 'Privacy-Preserving Design',
        description: 'Advanced encryption, on-device AI processing where possible, and granular privacy controls ensure user health data remains secure. Anonymous data sharing option contributes to research.',
      }
    ],

    technologies: [
      {
        category: 'AI & Machine Learning',
        items: ['GPT-4', 'Anthropic Claude', 'TensorFlow Lite', 'PyTorch', 'Hugging Face Transformers']
      },
      {
        category: 'Mobile & Frontend',
        items: ['React Native', 'TypeScript', 'Expo', 'Redux', 'React Query', 'Framer Motion']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
      },
      {
        category: 'Cloud & Infrastructure',
        items: ['AWS', 'Lambda', 'AppSync', 'Cognito', 'S3', 'CloudWatch']
      },
      {
        category: 'Health & Data Integration',
        items: ['Apple HealthKit', 'Google Fit', 'Fitbit SDK', 'FHIR', 'HL7']
      },
      {
        category: 'Security & Privacy',
        items: ['End-to-End Encryption', 'HIPAA Compliance', 'SOC 2', 'GDPR Tools']
      }
    ],

    results: {
      metrics: [
        {
          label: 'User Engagement',
          value: '+80%',
          description: '30-day retention increased from 32% to 89% after AI assistant launch'
        },
        {
          label: 'Daily Active Users',
          value: '10,000+',
          description: 'Grew from 1,200 to 10,400 daily active users within 6 months'
        },
        {
          label: 'Goal Achievement Rate',
          value: '73%',
          description: 'Users achieving their monthly health goals increased from 28% to 73%'
        },
        {
          label: 'User Retention',
          value: '92%',
          description: '90-day retention rate compared to industry average of 35%'
        },
        {
          label: 'Session Length',
          value: '+156%',
          description: 'Average session duration increased from 3.2 to 8.2 minutes'
        },
        {
          label: 'User Satisfaction',
          value: '4.8/5',
          description: 'App store rating with 15,000+ reviews praising personalization'
        }
      ],
      outcomes: [
        'Secured $4.5M Series A funding based on engagement metrics and user growth',
        'Signed enterprise contracts with 15 companies for corporate wellness programs',
        'Published peer-reviewed study showing 31% improvement in health outcomes vs control group',
        'Achieved HIPAA compliance certification opening healthcare provider market',
        'Featured in Apple App Store "Apps We Love" driving 40,000 new downloads',
        'Reduced customer acquisition cost by 52% through organic word-of-mouth growth',
        'Established partnerships with 3 major health insurance companies',
        'Expanded team from 8 to 35 employees based on product success'
      ]
    },

    testimonial: {
      quote: 'Softx World didn\'t just build us an app feature - they built the core of our business value proposition. The AI assistant is what makes Mapbe different from every other wellness app. Our users genuinely feel like they have a personal health coach in their pocket. The engagement numbers speak for themselves. This technology has enabled our entire company\'s success.',
      author: 'Dr. Sarah Williams',
      position: 'Founder & CEO, Mapbe Well Being',
    },

    timeline: [
      {
        phase: 'Research & Strategy',
        duration: '5 weeks',
        description: 'User research, behavioral science framework development, AI strategy design, and privacy requirements analysis.'
      },
      {
        phase: 'AI Model Development',
        duration: '10 weeks',
        description: 'Training conversational AI, building personalization engine, and developing recommendation algorithms across health domains.'
      },
      {
        phase: 'Mobile App Development',
        duration: '8 weeks',
        description: 'Building React Native application, integrating health data sources, and implementing on-device AI capabilities.'
      },
      {
        phase: 'Health Integration',
        duration: '4 weeks',
        description: 'Integration with wearable devices, health platforms, and third-party data sources with privacy-preserving architecture.'
      },
      {
        phase: 'Beta Testing & Refinement',
        duration: '4 weeks',
        description: 'Closed beta with 500 users, AI model fine-tuning based on real interactions, and UX optimization.'
      },
      {
        phase: 'Launch & Scale',
        duration: '4 weeks',
        description: 'Public launch, app store optimization, monitoring and continuous AI improvement, and enterprise feature development.'
      }
    ],

    tags: ['Healthcare AI', 'Mobile App', 'Personalization', 'Wellness Technology', 'Conversational AI'],

    metaDescription: 'How Softx World built an AI-powered health assistant for Mapbe Well Being that increased user engagement by 80% and retention to 92% through hyper-personalized wellness guidance.',
    ogImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },

  // ─────────────────────────────────────────────────────────────
  // SoftX products (own ventures). No client testimonials or invented
  // metrics — results list only factual, verifiable capabilities.
  // ─────────────────────────────────────────────────────────────

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
    liveUrl: 'https://srilankan.guide',
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
        'Live at srilankan.guide',
        'Biodiversity species directory for Sri Lanka',
        'Community photo uploads',
        'Built on a FastAPI (Python) backend'
      ]
    },

    tags: ['FastAPI', 'Python', 'Biodiversity', 'Directory'],

    metaDescription: 'Sri Lanka Wildlife Guide is a SoftX biodiversity species directory with community photo uploads, built on a FastAPI (Python) backend. Live at srilankan.guide.',
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
