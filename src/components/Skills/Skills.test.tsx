import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  it('renders the section title', () => {
    render(<Skills />);
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Languages & Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Backend & API Development')).toBeInTheDocument();
    expect(screen.getByText('Testing & CI/CD')).toBeInTheDocument();
    expect(screen.getByText('Data & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Cloud & Systems')).toBeInTheDocument();
    expect(screen.getByText('Specialized')).toBeInTheDocument();
  });

  it('displays programming languages', () => {
    render(<Skills />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('displays frontend technologies', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('HTML5')).toBeInTheDocument();
    expect(screen.getByText('CSS3')).toBeInTheDocument();
  });

  it('displays backend and API technologies', () => {
    render(<Skills />);
    expect(screen.getByText('REST APIs')).toBeInTheDocument();
    expect(screen.getByText('WebRTC')).toBeInTheDocument();
    expect(screen.getByText('VoIP')).toBeInTheDocument();
  });

  it('displays testing frameworks', () => {
    render(<Skills />);
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByText('Playwright')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByText('Jenkins')).toBeInTheDocument();
  });

  it('displays data and analytics tools', () => {
    render(<Skills />);
    expect(screen.getByText('Elasticsearch')).toBeInTheDocument();
    expect(screen.getByText('Kibana')).toBeInTheDocument();
  });

  it('displays cloud and system technologies', () => {
    render(<Skills />);
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('Windows')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  it('displays specialized skills', () => {
    render(<Skills />);
    expect(screen.getByText('Noise Suppression')).toBeInTheDocument();
    expect(screen.getByText('E2E Encryption')).toBeInTheDocument();
    expect(screen.getByText('ML Media Filters')).toBeInTheDocument();
  });

  it('renders correct number of skill categories', () => {
    render(<Skills />);
    const categories = screen.getAllByRole('heading', { level: 3 });
    expect(categories).toHaveLength(6);
  });
});
