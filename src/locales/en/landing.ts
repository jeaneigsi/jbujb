const landing = {
  hero: {
    title: 'Find everything near you',
    popular: 'Popular categories',
    seeAll: 'See all',
  },
  about: {
    title: 'About us',
    body:
      'At JBUJB, we are a passionate team on a mission: digitize local services in Morocco — making everyday experiences smarter, faster, and better connected.',
    imageAlt: 'About us',
  },
  contact: {
    title: 'Enjoy extra discounts when ordering on our platform',
    subtitle: 'Join us to enjoy discounts and special offers.',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
  },
  services: {
    title: 'Discover our services',
    discover: 'Discover →',
    items: [
      { title: 'Unique experiences', description: 'Discover local activities and hidden gems.' },
      { title: 'Local gastronomy', description: 'Savor the best dishes and drinks in the region.' },
      { title: 'Culture and heritage', description: 'Explore museums, monuments, and local traditions.' },
      { title: 'Outdoor adventures', description: 'Enjoy nature with our hikes and excursions.' },
    ],
  },
  categories: {
    pharma: 'Pharmacies',
    super: 'Supermarkets',
    food: 'Restaurants',
    spa: 'Beauticians',
    hair: 'Hairdressers',
    doctor: 'Doctors',
    dent: 'Dentists',
    plumb: 'Plumbers',
    tire: 'Tires',
    acct: 'Accountants',
  },
  footer: {
    aboutText:
      'JBUJB is a smart and reliable platform connecting customers with trusted merchants for their everyday needs. We streamline orders to be fast, secure, and accessible in a few clicks.',
    userLinks: {
      title: 'User Links',
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      merchant: 'Merchant Registration',
    },
    support: {
      title: 'Support',
      contact: 'Contact us',
      faq: 'FAQ',
      howItWorks: 'How it works',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'We’d love to hear from you.',
      emailPlaceholder: 'Email address',
      subscribe: 'Subscribe',
    },
    copyright: '© {{year}} — All rights reserved.',
  },
} as const

export default landing
