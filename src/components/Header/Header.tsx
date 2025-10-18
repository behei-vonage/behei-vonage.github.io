import { ReactElement, useState } from 'react'
import './Header.css'

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Portfolio</h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
