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
  readme += `# 👋 Hey, I'm ${profile.name}\n\n`;
  readme += `${profile.bio}\n\n`;
  readme += `🔭 Currently learning: ${profile.currentlyLearning.join(', ')}\n`;
  readme += `💼 Check out my full portfolio: **[${profile.username}.github.io](https://${profile.username}.github.io)** ← Terminal-themed\n\n`;
  readme += `---\n\n`;

  // Featured Projects Section
  readme += `## 🚀 Featured Projects\n\n`;

  featuredProjects.forEach(project => {
    const emoji = project.tech.includes('Flutter') ? '📱' :
                  project.tech.includes('Ruby on Rails') ? '🌐' :
                  project.tech.includes('WordPress') ? '🏛️' : '💻';

    readme += `### ${emoji} ${project.name}\n`;
    readme += `${project.tagline}  \n`;
    readme += `\`${project.tech.join('\`  \`')}\`  \n`;

    // Links
    const links = [];
    if (project.links.live) {
      links.push(`[Live Demo](${project.links.live})`);
    }
    if (project.links.github) {
      links.push(`[GitHub](${project.links.github})`);
    }
    if (links.length > 0) {
      readme += `${links.join(' • ')}\n`;
    }

    // Lessons learned
    if (project.lessonsLearned) {
      readme += `\n**Lessons learned:** ${project.lessonsLearned}\n`;
    }

    readme += `\n`;
  });

  readme += `---\n\n`;

  // Tech Stack Section
  readme += `## Tech Stack\n\n`;
  readme += `**Frontend:** ${profile.techStack.frontend.join(' • ')}  \n`;
  readme += `**Backend:** ${profile.techStack.backend.join(' • ')}  \n`;
  readme += `**Tools:** ${profile.techStack.tools.join(' • ')}  \n\n`;
  readme += `---\n\n`;

  // GitHub Stats Section
  readme += `## GitHub Stats\n\n`;
  readme += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&theme=dark)\n`;
  readme += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&layout=compact&theme=dark)\n\n`;
  readme += `---\n\n`;

  // Footer
  readme += `💬 [Full portfolio with terminal interface →](https://${profile.username}.github.io)\n`;

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
