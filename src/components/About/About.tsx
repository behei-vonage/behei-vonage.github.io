import { ReactElement } from 'react';
import './About.css';
import headshot from '../../assets/headshot.jpeg';

const About = (): ReactElement => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer at Vonage with a passion for real-time communication
              technologies. I graduated from San Jose State University with a B.S. in Computer
              Science and have been building innovative solutions in the WebRTC and VoIP space ever
              since.
            </p>
            <p>
              Currently, I develop and maintain the Vonage Video API JS SDK, creating advanced
              features like noise suppression, end-to-end encryption, and ML-based media processor
              filters. I also built a first-of-its-kind open-source reference application that helps
              developers integrate video capabilities into their applications.
            </p>
            <p>
              I'm committed to delivering exceptional developer experiences through well-designed
              APIs, comprehensive testing, and performance optimization. My work spans the full
              software development lifecycle, from exploratory research to production deployment and
              data-driven impact analysis.
            </p>
          </div>
          <div className="about-image">
            <img src={headshot} alt="Mykhailo (Misha) Behei" className="headshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
