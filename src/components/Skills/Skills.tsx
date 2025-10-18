import { ReactElement } from 'react'
import './Skills.css'

interface SkillCategory {
  category: string
  skills: string[]
}

const Skills = (): ReactElement => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages & Frameworks',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & API Development',
      skills: ['REST APIs', 'WebRTC', 'VoIP', 'Real-time Streaming', 'SDK Development'],
    },
    {
      category: 'Testing & CI/CD',
      skills: ['Vitest', 'Playwright', 'Jest', 'Jenkins', 'Performance Testing'],
    },
    {
      category: 'Data & Analytics',
      skills: ['Elasticsearch', 'Kibana', 'Data-driven Analysis', 'Performance Metrics'],
    },
    {
      category: 'Cloud & Systems',
      skills: ['AWS', 'Linux', 'Windows', 'Git', 'Version Control'],
    },
    {
      category: 'Specialized',
      skills: ['Noise Suppression', 'E2E Encryption', 'ML Media Filters', 'UI/UX Design'],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
