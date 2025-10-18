import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Mykhailo (Misha) Behei. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Vonage')).toBeInTheDocument();
  });

  it('GitHub link has correct href', () => {
    render(<Footer />);
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/behei-vonage');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('Email link has correct href', () => {
    render(<Footer />);
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:misha.behey@gmail.com');
  });

  it('Vonage link has correct href', () => {
    render(<Footer />);
    const vonageLink = screen.getByText('Vonage').closest('a');
    expect(vonageLink).toHaveAttribute('href', 'https://vonage.com');
    expect(vonageLink).toHaveAttribute('target', '_blank');
    expect(vonageLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('all links have proper aria-labels', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    const emailLink = screen.getByLabelText('Email');
    const vonageLink = screen.getByLabelText('Vonage');

    expect(githubLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
    expect(vonageLink).toBeInTheDocument();
  });

  it('renders footer element', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('footer');
  });
});
