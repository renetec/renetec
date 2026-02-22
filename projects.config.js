export const profile = {
  name: 'René',
  username: 'renetec',
  tagline: {
    en: 'Full-stack developer building practical solutions',
    fr: 'Développeur full-stack créant des solutions pratiques'
  },
  bio: {
    en: 'I build applications that solve real-world problems. From Flutter mobile apps to Rails platforms to WordPress customizations.',
    fr: 'Je construis des applications qui résolvent des problèmes concrets. Des applications mobiles Flutter aux plateformes Rails en passant par les personnalisations WordPress.'
  },
  location: 'Québec, Canada',
  currentlyLearning: ['Svelte', 'SvelteKit'],
  techStack: {
    frontend: ['Flutter', 'Dart', 'Svelte', 'JavaScript', 'HTML/CSS'],
    backend: ['Ruby on Rails', 'PHP', 'Node.js', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub Actions', 'WordPress', 'Docker']
  }
};

export const projects = [
  {
    id: 'vidangestp',
    name: 'VidangeSTP',
    tagline: {
      en: 'Multi-language garbage collection calendar',
      fr: 'Calendrier de collecte des déchets multilingue'
    },
    description: {
      en: 'Flutter app with Android + Web support for scheduling garbage collection events. Features customizable notifications and multi-language support with French as the primary language.',
      fr: 'Application Flutter avec support Android + Web pour planifier les collectes de déchets. Inclut des notifications personnalisables et un support multilingue avec le français comme langue principale.'
    },
    tech: ['Flutter', 'Dart', 'GitHub Pages'],
    features: {
      en: [
        'Multi-language support (French primary)',
        'Android + Web deployment',
        'Push notifications',
        'Customizable events',
        'Calendar integration'
      ],
      fr: [
        'Support multilingue (français principal)',
        'Déploiement Android + Web',
        'Notifications push',
        'Événements personnalisables',
        'Intégration calendrier'
      ]
    },
    year: 2026,
    status: 'live',
    visibility: 'public',
    links: {
      live: 'https://renetec.github.io/vidangestp/',
      github: 'https://github.com/renetec/vidangestp'
    },
    featured: true,
    lessonsLearned: null,
    screenshots: ['vidangestp-calendar.png', 'vidangestp-settings.png']
  },
  {
    id: 'ruby',
    name: 'Ruby Community Platform',
    tagline: {
      en: 'Full-stack social networking platform',
      fr: 'Plateforme de réseau social full-stack'
    },
    description: {
      en: 'Rails-based community hub with comprehensive social features including real-time messaging, news feeds, user profiles, and media sharing capabilities.',
      fr: 'Hub communautaire basé sur Rails avec des fonctionnalités sociales complètes incluant messagerie en temps réel, fils d\'actualité, profils utilisateurs et partage de médias.'
    },
    tech: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Sidekiq'],
    features: {
      en: [
        'User authentication & authorization',
        'Real-time messaging with ActionCable',
        'Activity feeds and timelines',
        'Media uploads and galleries',
        'Push notifications',
        'Search and discovery'
      ],
      fr: [
        'Authentification et autorisation des utilisateurs',
        'Messagerie en temps réel avec ActionCable',
        'Fils d\'actualité et chronologies',
        'Téléchargement de médias et galeries',
        'Notifications push',
        'Recherche et découverte'
      ]
    },
    year: 2023,
    status: 'archived',
    visibility: 'public',
    links: {
      github: 'https://github.com/renetec/ruby'
    },
    featured: true,
    lessonsLearned: {
      en: 'Building a social platform taught me that product-market fit matters as much as technical execution. Despite implementing complex features like real-time updates and scalable architecture, user adoption requires more than great code.',
      fr: 'Construire une plateforme sociale m\'a appris que l\'adéquation produit-marché compte autant que l\'exécution technique. Malgré l\'implémentation de fonctionnalités complexes comme les mises à jour en temps réel et une architecture évolutive, l\'adoption par les utilisateurs nécessite plus qu\'un excellent code.'
    },
    screenshots: ['ruby-feed.png', 'ruby-profile.png', 'ruby-messaging.png']
  },
  {
    id: 'cdstpacome',
    name: 'CD St-Pacôme',
    tagline: {
      en: 'Municipal website with custom WordPress plugins',
      fr: 'Site municipal avec plugins WordPress personnalisés'
    },
    description: {
      en: 'Community website for the municipality of St-Pacôme featuring custom-built WordPress plugins tailored to local government needs.',
      fr: 'Site web communautaire pour la municipalité de St-Pacôme avec des plugins WordPress personnalisés adaptés aux besoins du gouvernement local.'
    },
    tech: ['WordPress', 'PHP', 'MySQL', 'Custom Plugins'],
    features: {
      en: [
        'Custom plugin development',
        'Community event management',
        'Municipal service integration',
        'Responsive design'
      ],
      fr: [
        'Développement de plugins personnalisés',
        'Gestion d\'événements communautaires',
        'Intégration des services municipaux',
        'Design responsive'
      ]
    },
    year: 2023,
    status: 'live',
    visibility: 'client',
    links: {
      live: 'https://cdstpacome.ca'
    },
    featured: true,
    lessonsLearned: null,
    screenshots: []
  }
];

export default { profile, projects };
