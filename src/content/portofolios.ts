export interface PortfolioItem {
  id: string;
  category: 'erp' | 'edtech' | 'ecommerce' | 'web';
  categoryLabel: string;
  title: string;
  role: string;
  timeline: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  badge?: string;
}

export const portofoliosContent: PortfolioItem[] = [
  {
    id: 'digiexam',
    category: 'edtech',
    categoryLabel: 'EdTech & Secure Assessment',
    title: 'DigiExam — Computer-Based Testing (CBT) & Assessment Platform',
    role: 'Backend Architect & System Engineer',
    timeline: '2024',
    badge: 'Enterprise Platform',
    image: '/experience/digiexam/assessment_web_login.png',
    imageAlt: 'DigiExam CBT Platform',
    gallery: [
      '/experience/digiexam/assessment_web_login.png',
      '/experience/digiexam/image-1.png',
      '/experience/digiexam/image-4.png',
      '/experience/digiexam/image-6.png',
    ],
    tags: [
      'Laravel 12',
      'PHP 8.4',
      'Filament v3',
      'Flutter Web',
      'Android Kiosk Mode',
      'Screen Pinning',
      'Anti-Cheat Engine',
      'High Concurrency',
    ],
    description:
      'Platform Computer-Based Testing (CBT) modern berskala institusi pendidikan untuk menyelenggarakan ujian digital secara terpadu. Dilengkapi panel administrasi Filament v3, antarmuka pengerjaan ujian berbasis Flutter Web, serta aplikasi Android Kiosk Mode dengan Screen Pinning untuk mencegah kecurangan.',
    highlights: [
      'Android Screen Pinning / LockTask protocol untuk isolasi penuh perangkat siswa selama ujian.',
      'High-throughput submission engine menangani ribuan pengumpulan jawaban bersamaan tanpa lock contention.',
      'Sistem token dinamis, audit logging berkala, dan multi-layer anti-cheat untuk integritas ujian maksimal.',
    ],
    liveUrl: 'https://demo.admin.digiexam.web.id/admin/login',
    repoUrl: 'https://github.com/risyalf/digiexam-demo',
  },
  {
    id: 'pump-clinic',
    category: 'erp',
    categoryLabel: 'Operations & Maintenance ERP',
    title: 'NTK Pump Clinic — Field Service & Operations ERP',
    role: 'Lead Full-Stack Engineer & Architect',
    timeline: '2023 - 2024',
    badge: 'Operations ERP',
    image: '/experience/pump/dashboard admin.png',
    imageAlt: 'NTK Pump Clinic Management Dashboard',
    gallery: [
      '/experience/pump/dashboard admin.png',
      '/experience/pump/Form Builder.png',
      '/experience/pump/job order history.png',
      '/experience/pump/absensi.png',
    ],
    tags: [
      'Enterprise ERP',
      'Granular RBAC',
      'Dynamic Form Builder',
      'Attendance Tracking',
      'Job Order Lifecycle',
      'Audit Logging',
    ],
    description:
      'Sistem operasional dan ERP lapangan terpadu untuk mengelola seluruh rantai pekerjaan teknisi mesin pompa, pencatatan absensi teknisi berbasis GPS, engine pembuat form kustom dinamis, serta analitik performa operasional multi-role.',
    highlights: [
      'Granular Role-Based Access Control (RBAC) memisahkan Super Admin, Dispatcher, dan Teknisi Lapangan.',
      'Zero-code Dynamic Form Builder untuk menyusun checklist inspeksi mesin pompa secara fleksibel.',
      'Logging riwayat check-in/out teknisi di lokasi klien dengan timestamp presisi & sinkronisasi order.',
    ],
    liveUrl: 'https://ntk-pumpclinic.com',
  },
  {
    id: 'listromart-ecommerce',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Wholesale Retail',
    title: 'Listromart — Enterprise E-Commerce & Loyalty Platform',
    role: 'Full-Stack Developer',
    timeline: '2022 - 2024',
    badge: 'E-Commerce',
    image: '/experience/listromart/listromart_home_new.png',
    imageAlt: 'Listromart E-Commerce Storefront',
    gallery: [
      '/experience/listromart/listromart_home_new.png',
      '/experience/listromart/listromart_products_new.png',
      '/experience/6.png',
    ],
    tags: [
      'E-Commerce Engine',
      'MySQL Indexing',
      'Catalog System',
      'Wholesale Loyalty',
      'Checkout Funnel',
      'Conversion Optimization',
    ],
    description:
      'Platform e-commerce ritel dan grosir untuk produk kelistrikan & plumbing dengan katalog responsif, indexing database berkecepatan tinggi, integrasi poin reward loyalitas pelanggan, serta alur checkout mulus untuk meningkatkan konversi.',
    highlights: [
      'Skema database MySQL ternormalisasi dan dioptimalkan untuk lonjakan traffic katalog.',
      'Alur pemesanan minimal-step yang memangkas abandonment rate dan mendongkrak penjualan online >30%.',
      'Dukungan penetapan harga bertingkat (retail vs wholesale) dan kalkulasi reward point otomatis.',
    ],
    liveUrl: 'https://listromart.com',
  },
  {
    id: 'listromart-attendance',
    category: 'erp',
    categoryLabel: 'HR & Workforce Management',
    title: 'Listromart Attendance — Automated Workforce Management',
    role: 'Full-Stack Developer',
    timeline: '2023',
    badge: 'Internal Tool',
    image: '/experience/absen_1.png',
    imageAlt: 'Attendance System Interface',
    gallery: [
      '/experience/absen_1.png',
      '/experience/absen_2.png',
      '/experience/absen_3.png',
      '/experience/absen_4.png',
    ],
    tags: [
      'Attendance Tracking',
      'Mobile-First UI',
      'HR Automation',
      'Automated Timesheet',
      'Payroll Export',
      'Real-time Audit',
    ],
    description:
      'Aplikasi pencatatan absensi karyawan berbasis web responsif yang dirancang untuk mempercepat clock-in harian, pemantauan cuti/izin, kalkulasi otomatis jam kerja & lembur, serta ekspor data rekapitulasi untuk departemen HR dan payroll.',
    highlights: [
      'Antarmuka mobile-first ringan yang menghilangkan antrean check-in fisik di kantor.',
      'Kalkulasi jam kerja & keterlambatan otomatis dengan ekspor data terstruktur satu kali klik.',
      'Mengurangi beban administrasi dan pencatatan manual HR sebesar lebih dari 60%.',
    ],
    liveUrl: 'https://absen.listromart.com',
  },
  {
    id: 'alris-digital',
    category: 'web',
    categoryLabel: 'Brand Identity & Web Solution',
    title: 'ALRIS Digital — High-Impact Business Platform & Landing Page',
    role: 'Lead Frontend & System Engineer',
    timeline: '2023 - Present',
    badge: 'Showcase Agency',
    image: '/experience/web-porto/awal.png',
    imageAlt: 'ALRIS Digital Business Platform',
    gallery: [
      '/experience/web-porto/awal.png',
      '/experience/web-porto/service.png',
      '/experience/web-porto/pricing.png',
    ],
    tags: [
      'Landing Page',
      'Core Web Vitals',
      'Responsive Design',
      'Lead Generation',
      'WhatsApp Automation',
      'High Performance',
    ],
    description:
      'Platform showcase profil bisnis modern dengan performa tinggi dan desain visual monokrom elegan. Dilengkapi katalog portofolio interaktif, kalkulator harga transparan, FAQ komprehensif, serta formulir pemesanan langsung terintegrasi.',
    highlights: [
      'First Contentful Paint sub-detik dengan kompresi zstd/gzip dan optimasi rendering asset.',
      'Hierarki informasi berbasis psikologi konversi mengalirkan pengunjung ke tindakan kontak.',
      'Desain responsif fluid teruji pada perangkat mobile hingga monitor resolusi tinggi.',
    ],
    liveUrl: 'https://alrisdigital.web.id',
  },
];
