export const BRAND = {
  name: 'Branderss',
  tagline: 'Make it bold, make it Branderss',
  message: "We just don't do marketing, we create a story around your brand.",
  submessage: "Branderss focuses on building memorable brands, strong digital identities, creative marketing experiences and sustainable digital growth.",
  phones: [
    { display: '+91 91196 73841', raw: '+919119673841', wa: 'https://wa.me/919119673841' },
    { display: '+91 80099 38354', raw: '+918009938354', wa: 'https://wa.me/918009938354' }
  ],
  email: 'amarnathmishra9956@gmail.com',
  location: 'Lucknow, Uttar Pradesh, India',
  stats: {
    clients: '100+',
    locationFocus: 'Lucknow & Beyond',
    industries: '10+'
  }
};

export const NAV_LINKS = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Services', href: '/services', id: 'services' },
  { name: 'Our Work', href: '/our-work', id: 'our-work' },
  { name: 'Contact', href: '/contact', id: 'contact' }
];

export const SERVICES = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    category: 'Identity & Positioning',
    shortDesc: 'Build a recognizable brand identity through strategic positioning, distinctive visual systems, and coherent creative direction.',
    fullDesc: 'We craft authentic brand identities that cut through market noise. From naming, logo architecture, typography, and color psychology to complete brand guidelines and brand voice, we build brands people recognize and trust at first glance.',
    features: [
      'Brand Strategy & Positioning',
      'Visual Identity Architecture (Logo, Colors, Typography)',
      'Brand Guidelines & Design Systems',
      'Tone of Voice & Messaging Playbook',
      'Packaging & Print Brand Collateral'
    ],
    highlight: 'Build an unforgettable first impression'
  },
  {
    id: 'social-media',
    number: '02',
    title: 'Social Media Marketing',
    category: 'Engagement & Content',
    shortDesc: 'Build an authoritative social presence through high-impact creative storytelling, trend execution, and active audience engagement.',
    fullDesc: 'We transform social channels into high-converting story engines. Our team strategizes, scripts, designs, and distributes content engineered specifically for Instagram, LinkedIn, YouTube, and Facebook to turn casual scrollers into loyal advocates.',
    features: [
      'Platform-Specific Content Strategy',
      'High-Impact Reels, Carousels & Motion Design',
      'Community Management & Follower Growth',
      'Influencer Collaborations & Campaigns',
      'Monthly Analytics & Audience Sentiment Audits'
    ],
    highlight: 'Turn followers into brand ambassadors'
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO (Search Engine Optimization)',
    category: 'Organic Visibility',
    shortDesc: 'Capture high-intent customers when they search with technical SEO, on-page optimization, content architecture, and hyper-local search.',
    fullDesc: 'Rank at the top of Google where your highest-value customers are looking. We execute deep technical audits, keyword mapping, semantic on-page optimization, local Google Business Profile dominance, and authoritative link building.',
    features: [
      'Technical SEO & Core Web Vitals Optimization',
      'Local SEO & Google Business Profile Ranking',
      'Keyword Research & Search Intent Mapping',
      'High-Authority Content Strategy & On-Page SEO',
      'Transparent Rank Tracking & Organic Traffic Audits'
    ],
    highlight: 'Dominate organic search in your market'
  },
  {
    id: 'web-development',
    number: '04',
    title: 'Web Development',
    category: 'Digital Experiences',
    shortDesc: 'Engineered for speed, branding, and conversion. We build high-performance websites and interactive digital flagships.',
    fullDesc: 'Your website is your digital flagship store. We design and develop bespoke, lightning-fast, mobile-responsive web experiences with modern frameworks, smooth micro-interactions, flawless UI/UX, and conversion funnels built to convert visitors into clients.',
    features: [
      'Custom React / Modern Frontend Development',
      'Conversion-Optimized UX/UI Architecture',
      'Mobile-First Responsive Engineering',
      'CMS & API Integrations',
      'Ultra-Fast Loading & Technical SEO Foundation'
    ],
    highlight: 'Your 24/7 high-converting digital storefront'
  },
  {
    id: 'performance-ads',
    number: '05',
    title: 'Advertising / Performance Ads',
    category: 'Paid Growth & ROI',
    shortDesc: 'Targeted campaigns engineered for measurable reach, high-intent lead generation, lower customer acquisition cost, and scalable ROI.',
    fullDesc: 'Every rupee spent must work toward your bottom line. We launch and manage data-driven performance advertising across Meta (Instagram/Facebook), Google Search/Display, and YouTube with precise audience segmentation and real-time bid optimization.',
    features: [
      'Meta Ads (Facebook & Instagram Lead Gen)',
      'Google Search & High-Intent PPC Ads',
      'Audience Retargeting & Lookalike Modeling',
      'A/B Creative & Copy Testing',
      'ROAS (Return on Ad Spend) Optimization'
    ],
    highlight: 'Every rupee accountable for qualified leads'
  },
  {
    id: 'graphic-design',
    number: '06',
    title: 'Graphic Design',
    category: 'Creative Assets',
    shortDesc: 'Visual assets for digital and offline marketing that command attention and communicate brand quality with zero compromise.',
    fullDesc: 'From high-end social creatives and digital marketing banners to offline brochures, restaurant menus, event banners, and billboard creatives, we deliver polished visual assets that reflect premium craft.',
    features: [
      'Campaign & Social Media Visuals',
      'Brochures, Catalogues & Menus',
      'Outdoor Advertising (Hoardings & Banners)',
      'Merchandise & Environmental Graphics',
      'Vector Illustrations & Custom Iconography'
    ],
    highlight: 'Design that commands instant respect'
  },
  {
    id: 'hrms',
    number: '07',
    title: 'HRMS & Employer Branding',
    category: 'Talent & Culture',
    shortDesc: 'Attract top-tier talent and build a magnetic workplace culture with employer branding, internal communications, and talent acquisition funnels.',
    fullDesc: 'Your company culture is your brand from the inside out. We build compelling employer value propositions (EVP), recruitment marketing campaigns, onboarding brand kits, and internal culture assets that attract and retain exceptional talent.',
    features: [
      'Employer Value Proposition (EVP) Strategy',
      'Recruitment Marketing & Hiring Funnels',
      'Internal Culture & Onboarding Assets',
      'LinkedIn Talent Brand Amplification',
      'Employee Advocacy Campaign Frameworks'
    ],
    highlight: 'Attract and retain high-caliber talent'
  },
  {
    id: 'whatsapp-automation',
    number: '08',
    title: 'WhatsApp Automation',
    category: 'Workflows & Retention',
    shortDesc: 'Automate customer communication, instant lead follow-ups, booking notifications, broadcast campaigns, and workflows directly on WhatsApp.',
    fullDesc: 'Engage customers where they are most responsive: WhatsApp. We integrate intelligent WhatsApp workflows that instantly greet leads, confirm inquiries, send automated updates, and trigger smart re-engagement campaigns.',
    features: [
      'Automated Lead Instant Response & Qualification',
      'Booking & Reservation Alerts',
      'WhatsApp Broadcasts & Segmented Campaigns',
      'CRM & Website Webhook Integrations',
      'Interactive Chat Flow Architecture'
    ],
    highlight: '98% open rates with instant lead response'
  },
  {
    id: 'ad-services',
    number: '09',
    title: 'Ad Services & Media Planning',
    category: 'Omnichannel Placement',
    shortDesc: 'Strategic media planning, multi-channel ad placement, regional outreach, and end-to-end campaign lifecycle management.',
    fullDesc: 'While Performance Ads focus on direct mathematical conversion funnels, our Ad Services provide comprehensive media buying, cross-platform flight scheduling, brand-awareness campaigns, and regional campaign visibility across digital and local media channels.',
    features: [
      'Cross-Channel Media Planning & Budget Allocation',
      'Brand Awareness & Reach Flight Campaigns',
      'Hyper-Local Geospatial Ad Targeting',
      'Competitor Ad Intelligence & Share-of-Voice Audits',
      'End-to-End Campaign Monitoring & Reporting'
    ],
    highlight: 'Strategic visibility across high-impact channels'
  }
];

export const INDUSTRIES = [
  {
    id: 'hospitality-hotels',
    name: 'Hotels & Resorts',
    tag: 'Hospitality',
    description: 'Elevate guest reservations, digital room bookings, luxury brand identity, and direct footfall with immersive visual storytelling.',
    points: ['Direct Booking Funnels', 'Visual Resort Storytelling', 'Local Search Dominance']
  },
  {
    id: 'banquets',
    name: 'Banquet Halls & Venues',
    tag: 'Events & Weddings',
    description: 'Generate high-ticket wedding and corporate event inquiries with high-intent lead generation and cinematic venue showcases.',
    points: ['Wedding Lead Generation', 'Virtual Venue Showcases', 'Targeted Season Campaigns']
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    tag: 'Dining & Food',
    description: 'Fill tables and build repeat diners with mouth-watering creative visuals, influencer activations, and hyper-local ads.',
    points: ['Table Turnaround Campaigns', 'Menu Identity & Packaging', 'Google Maps Dominance']
  },
  {
    id: 'cafes',
    name: 'Cafés & Quick Bites',
    tag: 'Café Culture',
    description: 'Turn your café into the trendiest destination for youth, creatives, and coffee lovers through aesthetic Reels and footfall campaigns.',
    points: ['Aesthetic Visual Identity', 'Viral Reel Campaigns', 'Loyalty & Weekend Footfall']
  },
  {
    id: 'healthcare',
    name: 'Medical Bodies & Healthcare',
    tag: 'Healthcare',
    description: 'Build patient trust, professional credibility, and appointment volume with ethical, high-authority digital presence and local SEO.',
    points: ['Patient Trust Building', 'Appointment Inquiries', 'Local Healthcare SEO']
  },
  {
    id: 'retail',
    name: 'Retail & Showrooms',
    tag: 'Retail & Commerce',
    description: 'Drive walk-ins and local customer demand with seasonal promotion campaigns, catalog designs, and regional advertising.',
    points: ['Store Walk-in Campaigns', 'Product Showcase Catalogs', 'Festive Offer Promotions']
  },
  {
    id: 'corporate',
    name: 'Corporate Businesses',
    tag: 'B2B & Enterprise',
    description: 'Position your enterprise as an industry authority with sophisticated corporate branding, website experiences, and LinkedIn growth.',
    points: ['Corporate Identity', 'Executive Thought Leadership', 'B2B Lead Acquisition']
  },
  {
    id: 'local',
    name: 'Local Businesses',
    tag: 'Community Brands',
    description: 'Help neighborhood businesses outcompete larger brands through local Google maps dominance, targeted ads, and WhatsApp follow-ups.',
    points: ['Hyper-Local Visibility', 'Direct WhatsApp Inquiries', 'Community Trust Building']
  },
  {
    id: 'services',
    name: 'Service Businesses',
    tag: 'Professional Services',
    description: 'Generate qualified consultations and quote requests for consulting, legal, financial, and specialized service firms.',
    points: ['High-Intent Inquiries', 'Client Testimonial Showcases', 'Authority Content']
  },
  {
    id: 'growing-brands',
    name: 'Other Growing Brands',
    tag: 'Startups & Scale-ups',
    description: 'Scale from local favorite to regional champion with end-to-end brand strategy, high-speed websites, and scalable ad systems.',
    points: ['Complete Launch Blueprint', 'High-Converting Web Experiences', 'Scalable Performance Ads']
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'hotel',
    title: 'Hotels & Luxury Resorts',
    client: 'Hotels & Stays',
    category: 'Hotel',
    categoryFilter: 'hotel',
    location: 'Hospitality Stays',
    image: '/projects/hotel.jpg',
    description: 'Elevate guest reservations, digital room bookings, luxury brand identity, and direct footfall with immersive visual storytelling and high-intent booking funnels.',
    deliverables: ['Direct Booking Funnels', 'Visual Identity Architecture', 'Architectural Photo & Video Direction', 'Google Hotel Ads & Local SEO'],
    accentColor: '#F3E6D2',
    stats: 'High-Yield Guest Acquisition'
  },
  {
    id: 'cafe',
    title: 'Cafés, Bistros & Coffee Bars',
    client: 'Cafés & Bistros',
    category: 'Cafe',
    categoryFilter: 'cafe',
    location: 'Urban Cafés & Bistros',
    image: '/projects/cafe.jpg',
    description: 'Turn your café into the trendiest destination for youth, creatives, and coffee lovers through aesthetic Reels, packaging design, and compounding daily footfall campaigns.',
    deliverables: ['Youth-Centric Café Branding', 'Menu & Packaging Design Systems', 'Viral Social Storytelling & Reels', 'Weekend Footfall Acceleration'],
    accentColor: '#D8C0A5',
    stats: 'Compounding Daily Footfall'
  },
  {
    id: 'bar',
    title: 'Bars, Lounges & Nightlife',
    client: 'Bars & Lounges',
    category: 'Bar',
    categoryFilter: 'bar',
    location: 'Nightlife & Social Lounges',
    image: '/projects/bar.jpg',
    description: 'Atmospheric branding, event-driven promotions, and magnetic nightlife marketing for high-end cocktail bars, rooftop lounges, and experiential social venues.',
    deliverables: ['Nightlife Brand Identity', 'Weekend Event Campaign Rollouts', 'Cocktail Menu & Visual Craft', 'VIP Table & Guestlist Funnels'],
    accentColor: '#C89B5B',
    stats: 'High-Energy Weekend Bookings'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Fine Dining',
    client: 'Fine Dining Venues',
    category: 'Hospitality',
    categoryFilter: 'hospitality',
    location: 'Culinary Landmarks',
    image: '/projects/hospitality.jpg',
    description: 'Complete culinary brand storytelling, premium menu architecture, table-turnaround marketing, and reputation management for acclaimed fine dining restaurants.',
    deliverables: ['Culinary Brand Positioning', 'Table Reservation Funnels', 'Sensory Menu & Collateral Design', 'Reputation & Review Growth Engine'],
    accentColor: '#F3E6D2',
    stats: 'Consistent Table Turnaround'
  },
  {
    id: 'many-more',
    title: 'And Many More (Banquets & Beyond)',
    client: 'Banquets, Healthcare, Retail & Corporate',
    category: 'And Many More',
    categoryFilter: 'many-more',
    location: 'Multi-Sector Growth',
    image: '/projects/many-more.jpg',
    description: 'From grand wedding banquet venues and multi-outlet food brands to premier healthcare bodies, corporate enterprises, and emerging retail powerhouses.',
    deliverables: ['High-Ticket Banquet & Event Leads', 'Omnichannel Brand Scale Strategy', 'Corporate & Healthcare Positioning', 'Full-Funnel Digital Growth Blueprint'],
    accentColor: '#D8C0A5',
    stats: 'Scalable Multi-Sector Impact'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Deep Dive & Understanding',
    description: 'We listen to your business goals, unpack your market landscape, dissect competitor moves, and identify your brand’s unfair advantage.'
  },
  {
    number: '02',
    title: 'Strategize',
    tagline: 'The Strategic Blueprint',
    description: 'We map out a clear roadmap: brand positioning, target audience personas, messaging pillars, channel selection, and measurable growth milestones.'
  },
  {
    number: '03',
    title: 'Create',
    tagline: 'Crafting the Story',
    description: 'Our creative team brings the strategy to life through bold design, compelling copywriting, cutting-edge web architecture, and arresting visuals.'
  },
  {
    number: '04',
    title: 'Launch',
    tagline: 'Execution with Impact',
    description: 'We execute the launch across chosen digital and offline touchpoints with surgical precision, ensuring maximum market noise and immediate traction.'
  },
  {
    number: '05',
    title: 'Optimize',
    tagline: 'Data-Driven Refinement',
    description: 'We analyze live user engagement, conversion analytics, ad spend return, and customer sentiment to continuously tune and refine performance.'
  },
  {
    number: '06',
    title: 'Grow',
    tagline: 'Sustainable Scaling',
    description: 'With a validated brand engine in place, we scale reach, deepen customer retention, launch new campaigns, and cement market leadership.'
  }
];

export const WHY_US_PILLARS = [
  {
    title: 'Strategy First',
    description: 'No blind posting or random ads. Every design and campaign is anchored in solid commercial business strategy.'
  },
  {
    title: 'Bold Creative Thinking',
    description: 'We refuse generic agency templates. We craft bold, distinctive creative work that makes your brand impossible to ignore.'
  },
  {
    title: 'Deep Industry Understanding',
    description: 'From hospitality and healthcare to retail and corporate, we understand the nuances of diverse customer journeys.'
  },
  {
    title: 'Data + Creativity',
    description: 'Where artistic storytelling meets rigorous performance metrics. Beautiful work that performs on the balance sheet.'
  },
  {
    title: 'Technology Enabled',
    description: 'Modern web stacks, Three.js interactive experiences, WhatsApp automation, and precision digital ad platforms.'
  },
  {
    title: 'Result Focused',
    description: 'We measure success through tangible business metrics: brand recall, inquiries, walk-ins, and revenue growth.'
  },
  {
    title: 'Long-Term Brand Thinking',
    description: 'We build durable brand equity that lasts for years, not fleeting 24-hour social media gimmicks.'
  }
];

export const STORY_TIMELINE = [
  { step: 'IDEA', text: 'Every formidable brand starts with an unshakeable core purpose.' },
  { step: 'IDENTITY', text: 'We translate your core vision into a bold visual and verbal signature.' },
  { step: 'STORY', text: 'We build emotional resonance that connects with your ideal customer.' },
  { step: 'AUDIENCE', text: 'We distribute that story across the right digital channels with laser precision.' },
  { step: 'GROWTH', text: 'Consistent execution yields compounding market trust and measurable growth.' }
];
