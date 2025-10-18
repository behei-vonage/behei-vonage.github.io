import { ReactElement } from 'react';
import './Hero.css';

const Hero = (): ReactElement => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Mykhailo (Misha) Behei</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer | WebRTC Specialist | Open Source Contributor
        </p>
        <p className="hero-description">
          I build real-time communication solutions and developer tools that empower teams to create
          exceptional video experiences.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
