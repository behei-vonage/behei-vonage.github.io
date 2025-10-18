import './Footer.css';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Mykhailo (Misha) Behei. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://github.com/behei-vonage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a href="mailto:misha.behey@gmail.com" aria-label="Email">
              Email
            </a>
            <a
              href="https://linkedin.com/in/behei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
