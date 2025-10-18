import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders the section title', () => {
    render(<Projects />);
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Vonage Video API Reference Application')).toBeInTheDocument();
    expect(screen.getByText('Vonage Video API JS SDK')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Developer Support Tools')).toBeInTheDocument();
  });

  it('displays project descriptions', () => {
    render(<Projects />);
    expect(
      screen.getByText(/First-of-its-kind open-source reference application/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/noise suppression, end-to-end encryption/i)).toBeInTheDocument();
  });

  it('displays technology tags for each project', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByText('Playwright')).toBeInTheDocument();
  });

  it('renders GitHub and Live Demo links for each project', () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText('GitHub');
    const demoLinks = screen.getAllByText('Live Demo');

    expect(githubLinks).toHaveLength(4);
    expect(demoLinks).toHaveLength(4);
  });

  it('all links have proper attributes', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');

    links.forEach((link) => {
      if (link.getAttribute('href') !== '#') {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  it('displays WebRTC and related technologies', () => {
    render(<Projects />);
    expect(screen.getByText('WebRTC')).toBeInTheDocument();
    expect(screen.getByText('Elasticsearch')).toBeInTheDocument();
    expect(screen.getByText('Kibana')).toBeInTheDocument();
  });
});
