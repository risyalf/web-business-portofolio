// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'ALRIS DIGITAL',
    title: 'ALRIS DIGITAL - SOLUTION TO ALL OF YOUR DIGITAL SOLUTION',
    description:
      'Transform your business with autonomous AI agents. Automate workflows, integrate seamlessly, and scale effortlessly. Start free today.',
    keywords:
      'AI agents, automation, workflow automation, AI platform, business automation',
    email: 'hello@aiagentplatform.com',

    // Open Graph / Twitter
    ogTitle: 'ALRIS DIGITAL - Intelligent Automation',
    ogDescription:
      'Transform your business with autonomous AI agents that work 24/7',
    twitterCard: 'summary_large_image',
    twitterTitle: 'ALRIS DIGITAL',
    twitterDescription: 'SOLUTION TO ALL OF YOUR DIGITAL SOLUTION',
    logo: '/logo.png'
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Services', href: '#features' },
      { name: 'Portofolio', href: '#portofolios' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Creating Meaningful',
    subheadline: 'Digital Experiences',
    description:
      'We build fast, responsive, and visually stunning websites that help businesses grow online.',
    cta: {
      primary: {
        text: 'Get Started',
        href: '#contact',
      },
      secondary: {
        text: 'Our Portofolio',
        href: '#features',
      },
    },
    stats: [
      { value: '10k+', label: 'Active Agents' },
      { value: '99.9%', label: 'Uptime' },
      { value: '5M+', label: 'Tasks Automated' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'Our Services',
    subtitle:
      'We help you create a beautiful, functional website that drives real business results.',
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // PORTOFOLIO SECTION
  // ============================================
  portofolios: {
    title: 'Our Portofolios',
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Get started in minutes with our simple 5-step process',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Loved by Teams Worldwide',
    subtitle: 'See what our customers have to say about ALRIS DIGITAL',
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Clear & Affordable Pricing',
    subtitle:
      'Flexible packages tailored to your business needs. No hidden fees.',
    plans: [
      {
        name: 'Starter',
        price: 'Rp750.000',
        period: 'one-time',
        description:
          'Perfect for small businesses, personal use, or simple landing pages',
        features: [
          'Landing page / 1–3 pages',
          'Responsive design (desktop & mobile)',
          'Basic SEO & fast performance',
          'WhatsApp / Contact integration',
          'Free consultation',
          'Deployment assistance',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Business',
        price: 'Rp1.500.000',
        period: 'one-time',
        description: 'Ideal for growing businesses that need a professional website',
        badge: 'MOST POPULAR',
        features: [
          'Up to 8 pages',
          'Custom professional design',
          'Enhanced SEO optimization',
          'Contact form + integrations',
          '3 months support',
          'Fast & secure performance',
          'Priority delivery',
        ],
        cta: {
          text: 'Discuss Your Project',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For complex systems and large-scale business needs',
        features: [
          'Unlimited pages / features',
          'Custom systems / dashboard / e-commerce',
          'API integrations',
          'Premium security & performance',
          'Dedicated support',
          'Optional maintenance contract',
        ],
        cta: {
          text: 'Contact Us',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about ALRIS DIGITAL',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Building Today',
    subtitle:
      'Let’s build a powerful digital presence for your business. Contact us today and start your web transformation.',
    benefits: [
      'Free consultation — no commitment required',
      'Fully responsive and mobile-friendly design',
      'Fast delivery with professional quality',
      'Ongoing support and maintenance options',
    ],
    email: 'risyalfebrianto97@gmail.com',
    form: {
      cta: 'Send Via Whatsapp',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Company Inc.',
          required: false,
        },
        message: {
          label: 'What Would You Like To Build?',
          placeholder: 'Tell us about your website needs — type of website, features, budget, and timeline...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Solution to all of your digital solution.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Services', href: '#features' },
          { name: 'Portofolio', href: '#portofolios' },
          { name: 'Pricing', href: '#pricing' },
          // { name: 'API Docs', href: '#' },
          // { name: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Press Kit', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Security', href: '#' },
          { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} ALRIS DIGITAL. All rights reserved.`,
  },
};
