// Project configuration - single source of truth for profile README and portfolio site
export const profile = {
  name: "René Tec",
  role: "Full-Stack Developer",
  location: "Quebec, Canada",
  bio: "Passionate developer building impactful solutions across web and mobile platforms.",
  github: "renetec",
  email: "rene@renetec.ca"
};

export const projects = [
  {
    id: "vidangestp",
    name: "VidangeSTP",
    tagline: "Flutter mobile app for septic tank management",
    description: "A comprehensive mobile application for managing septic tank maintenance services, featuring customer management, scheduling, and invoicing capabilities.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    category: "mobile",
    featured: true,
    year: 2024,
    links: {
      github: "https://github.com/renetec/VidangeSTP",
      demo: null
    },
    highlights: [
      "Built with Flutter for cross-platform deployment",
      "Real-time scheduling and route optimization",
      "Customer database with service history",
      "Automated invoice generation"
    ]
  },
  {
    id: "ruby-community",
    name: "Ruby Community Platform",
    tagline: "Rails-based community management system",
    description: "A modern community platform built with Ruby on Rails, featuring user authentication, content management, and social interaction features.",
    tech: ["Ruby on Rails", "PostgreSQL", "Hotwire", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2024,
    links: {
      github: "https://github.com/renetec/ruby-community-platform",
      demo: null
    },
    highlights: [
      "Full-stack Rails application with Hotwire",
      "User authentication and authorization",
      "Real-time updates with Turbo Streams",
      "Responsive design with Tailwind CSS"
    ]
  },
  {
    id: "cdstpacome",
    name: "CD St-Pacôme",
    tagline: "WordPress site for community development organization",
    description: "A professional WordPress website for a community development corporation, featuring news updates, project showcases, and event management.",
    tech: ["WordPress", "PHP", "MySQL", "Custom Themes"],
    category: "web",
    featured: true,
    year: 2023,
    links: {
      github: null,
      demo: "https://cdstpacome.ca"
    },
    highlights: [
      "Custom WordPress theme development",
      "Content management for community initiatives",
      "Event calendar and news system",
      "SEO optimization and performance tuning"
    ]
  }
];

export default { profile, projects };
