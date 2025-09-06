const landing = {
  hero: {
    title: 'Trouve tout près de chez toi',
    popular: 'Catégories populaires',
    seeAll: 'Voir toutes',
  },
  about: {
    title: 'À propos de nous',
    body:
      'Chez JBUJB, nous sommes une équipe passionnée avec une mission : digitaliser les services locaux au Maroc — pour rendre les expériences du quotidien plus intelligentes, plus rapides et mieux connectées.',
    imageAlt: 'À propos de nous',
  },
  contact: {
    title: 'Profitez de réductions supplémentaires en commandant sur notre plateforme',
    subtitle: "Rejoignez‑nous pour profiter de réductions et d'offres spéciales.",
    emailPlaceholder: 'Entrez votre e‑mail',
    subscribe: "S'abonner",
  },
  services: {
    title: 'Découvrez nos services',
    discover: 'Découvrir →',
    items: [
      { title: 'Expériences uniques', description: 'Découvrez des activités locales et des lieux insolites.' },
      { title: 'Gastronomie locale', description: 'Savourez les meilleurs plats et boissons de la région.' },
      { title: 'Culture et patrimoine', description: 'Explorez les musées, monuments et traditions locales.' },
      { title: 'Aventures en plein air', description: 'Profitez de la nature avec nos randonnées et excursions.' },
    ],
  },
  categories: {
    pharma: 'Pharmacies',
    super: 'Supermarchés',
    food: 'Restaurants',
    spa: 'Esthéticiens',
    hair: 'Coiffeurs',
    doctor: 'Médecins',
    dent: 'Dentistes',
    plumb: 'Plombiers',
    tire: 'Pneus',
    acct: 'Comptables',
  },
  footer: {
    aboutText:
      "JBUJB est une plateforme intelligente et fiable qui met en relation les clients avec des commerçants de confiance pour tous leurs besoins du quotidien. Nous simplifions les commandes pour qu'elles soient rapides, sûres et accessibles en quelques clics.",
    userLinks: {
      title: 'Liens Utilisateur',
      home: 'Accueil',
      privacy: 'Politique de Confidentialité',
      terms: 'Termes et Conditions',
      merchant: 'Enregistrement du Commerçant',
    },
    support: {
      title: 'Assistance',
      contact: 'Contactez nous',
      faq: 'FAQ',
      howItWorks: 'Comment ça marche',
    },
    contact: {
      title: 'Entrer en contact',
      subtitle: 'Nous serions ravis de vous entendre.',
      emailPlaceholder: 'Adresse e‑mail',
      subscribe: 'Recevez',
    },
    copyright: '© {{year}} — Tous droits réservés.',
  },
} as const

export default landing
