export const profile = {
  name: 'René',
  username: 'renetec',
  tagline: 'Full-stack developer building practical solutions',
  bio: 'I build applications that solve real-world problems. From Flutter mobile apps to Rails platforms to WordPress customizations.',
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
    tagline: 'Multi-language garbage collection calendar',
    description: 'Flutter app with Android + Web support for scheduling garbage collection events. Features customizable notifications and multi-language support with French as the primary language.',
    tech: ['Flutter', 'Dart', 'GitHub Pages'],
    features: [
      'Multi-language support (French primary)',
      'Android + Web deployment',
      'Push notifications',
      'Customizable events',
      'Calendar integration'
    ],
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
    tagline: 'Full-stack social networking platform',
    description: 'Rails-based community hub with comprehensive social features including real-time messaging, news feeds, user profiles, and media sharing capabilities.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Sidekiq'],
    features: [
      'User authentication & authorization',
      'Real-time messaging with ActionCable',
      'Activity feeds and timelines',
      'Media uploads and galleries',
      'Push notifications',
      'Search and discovery'
    ],
    year: 2023,
    status: 'archived',
    visibility: 'public',
    links: {
      github: 'https://github.com/renetec/ruby'
    },
    featured: true,
    lessonsLearned: 'Building a social platform taught me that product-market fit matters as much as technical execution. Despite implementing complex features like real-time updates and scalable architecture, user adoption requires more than great code.',
    screenshots: ['ruby-feed.png', 'ruby-profile.png', 'ruby-messaging.png']
  },
  {
    id: 'cdstpacome',
    name: 'CD St-Pacôme',
    tagline: 'Municipal website with custom WordPress plugins',
    description: 'Community website for the municipality of St-Pacôme featuring custom-built WordPress plugins tailored to local government needs.',
    tech: ['WordPress', 'PHP', 'MySQL', 'Custom Plugins'],
    features: [
      'Custom plugin development',
      'Community event management',
      'Municipal service integration',
      'Responsive design'
    ],
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
