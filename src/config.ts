// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'ALRIS DIGITAL',
    title: 'ALRIS DIGITAL — Jasa Pembuatan Website, Web App & Solusi Digital',
    description:
      'ALRIS DIGITAL melayani jasa pembuatan website profesional, aplikasi web kustom, sistem ERP, CBT, dan solusi transformasi digital berkinerja tinggi untuk bisnis Anda.',
    keywords:
      'jasa pembuatan website, web developer profesional, software house semarang, aplikasi web kustom, sistem erp, cbt online, alris digital, high performance website',
    email: 'risyalfebrianto97@gmail.com',

    // Open Graph / Twitter
    ogTitle: 'ALRIS DIGITAL — Modern Web Solutions & Enterprise Engineering',
    ogDescription:
      'Jasa pembuatan website profesional, sistem informasi bisnis, dan aplikasi web kustom dengan performa tinggi & desain modern.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'ALRIS DIGITAL — Web Solutions & Software Engineering',
    twitterDescription: 'Solusi pembuatan website profesional dan sistem bisnis modern.',
    logo: '/logo.png',
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
        href: '#portofolios',
      },
    },
    stats: [
      { value: '5+', label: 'Enterprise Platforms' },
      { value: '99.9%', label: 'Uptime Target' },
      { value: '100%', label: 'Client Satisfaction' },
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
        title: 'Layanan',
        links: [
          { name: 'Web Development', href: '#features' },
          { name: 'Custom ERP & CBT', href: '#features' },
          { name: 'Portofolio', href: '#portofolios' },
          { name: 'Paket Harga', href: '#pricing' },
        ],
      },
      {
        title: 'Navigasi',
        links: [
          { name: 'FAQ', href: '#faq' },
          { name: 'Konsultasi Gratis', href: '#contact' },
          { name: 'Studi Kasus', href: '#portofolios' },
        ],
      },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/risyalf', icon: 'github' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/risyal-febrianto/', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} ALRIS DIGITAL. All rights reserved.`,
  },
};
