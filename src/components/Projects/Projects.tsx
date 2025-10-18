import { ReactElement } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects = (): ReactElement => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Vonage Video API Reference Application',
      description:
        'First-of-its-kind open-source reference application showcasing the Vonage Video API. Built with React and TypeScript on the frontend, Node.js on the backend, with comprehensive testing using Jest, Vitest, and Playwright.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Jest', 'Vitest', 'Playwright'],
      github: 'https://github.com/Vonage',
      demo: '#',
    },
    {
      id: 2,
      title: 'Vonage Video API JS SDK',
      description:
        'Engineered advanced features including noise suppression, end-to-end encryption, and ML-based media processor filters. Optimized real-time media streaming architectures for improved video quality and performance.',
      technologies: ['JavaScript', 'TypeScript', 'WebRTC', 'ML Filters'],
      github: 'https://github.com/opentok',
      demo: 'https://tokbox.com/developer/',
    },
    {
      id: 3,
      title: 'Performance Optimization & Analytics',
      description:
        'Conducted continuous performance analysis and optimization of SDK metrics including CPU usage, memory consumption, connectivity, and latency. Implemented data-driven impact analysis across the SDLC.',
      technologies: ['JavaScript', 'Performance APIs', 'Analytics', 'CI/CD'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Developer Support Tools',
      description:
        'Built diagnostic and debugging tools using Elasticsearch and Kibana for in-depth investigation of customer issues. Provided technical support for developers integrating Vonage APIs into mobile and web applications.',
      technologies: ['Elasticsearch', 'Kibana', 'REST APIs', 'JavaScript'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
