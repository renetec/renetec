import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { profile, projects } from '../projects.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Emoji mapping for categories
function getEmojiForCategory(category) {
  const emojiMap = {
    'mobile': '📱',
    'web': '🌐',
    'api': '🔌',
    'tool': '🛠️',
    'library': '📦'
  };
  return emojiMap[category] || '💻';
}

// Generate README content
function generateReadme() {
  const featuredProjects = projects.filter(p => p.featured);

  // Extract unique tech stack
  const allTech = new Set();
  projects.forEach(project => {
    project.tech.forEach(tech => allTech.add(tech));
  });
  const techStack = Array.from(allTech).sort();

  let readme = '';

  // Header Section
  readme += `# Hi there, I'm ${profile.name} 👋\n\n`;
  readme += `## ${profile.role}\n\n`;
  readme += `📍 ${profile.location}\n\n`;
  readme += `${profile.bio}\n\n`;
  readme += `📫 **Contact:** ${profile.email}\n\n`;
  readme += `---\n\n`;

  // Featured Projects Section
  readme += `## 🚀 Featured Projects\n\n`;

  featuredProjects.forEach(project => {
    const emoji = getEmojiForCategory(project.category);
    readme += `### ${emoji} ${project.name}\n\n`;
    readme += `**${project.tagline}**\n\n`;
    readme += `${project.description}\n\n`;

    // Tech stack
    readme += `**Tech Stack:** ${project.tech.join(' • ')}\n\n`;

    // Highlights
    if (project.highlights && project.highlights.length > 0) {
      readme += `**Highlights:**\n`;
      project.highlights.forEach(highlight => {
        readme += `- ${highlight}\n`;
      });
      readme += `\n`;
    }

    // Links
    const links = [];
    if (project.links.github) {
      links.push(`[📂 GitHub](${project.links.github})`);
    }
    if (project.links.demo) {
      links.push(`[🌐 Live Demo](${project.links.demo})`);
    }
    if (links.length > 0) {
      readme += `**Links:** ${links.join(' • ')}\n\n`;
    }

    readme += `---\n\n`;
  });

  // Tech Stack Section
  readme += `## 🛠️ Tech Stack\n\n`;
  readme += `${techStack.map(tech => `\`${tech}\``).join(' ')}\n\n`;
  readme += `---\n\n`;

  // GitHub Stats Section
  readme += `## 📊 GitHub Stats\n\n`;
  readme += `![${profile.name}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${profile.github}&show_icons=true&theme=radical)\n\n`;
  readme += `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.github}&layout=compact&theme=radical)\n\n`;
  readme += `---\n\n`;

  // Footer Section
  readme += `## 🤝 Let's Connect\n\n`;
  readme += `- 💼 GitHub: [@${profile.github}](https://github.com/${profile.github})\n`;
  readme += `- 📧 Email: ${profile.email}\n\n`;
  readme += `---\n\n`;
  readme += `*This README is auto-generated from [projects.config.js](./projects.config.js)*\n`;

  return readme;
}

// Write README.md
function writeReadme() {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const content = generateReadme();

  fs.writeFileSync(readmePath, content, 'utf8');
  console.log('✅ README.md generated successfully!');
}

// Execute
writeReadme();
