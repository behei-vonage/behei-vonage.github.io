import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders all navigation buttons', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />);
    const menuToggle = screen.getByLabelText('Toggle menu');
    const nav = screen.getByRole('navigation');

    expect(nav).not.toHaveClass('nav-open');

    fireEvent.click(menuToggle);
    expect(nav).toHaveClass('nav-open');

    fireEvent.click(menuToggle);
    expect(nav).not.toHaveClass('nav-open');
  });

  it('scrolls to section when navigation button is clicked', () => {
    const mockScrollIntoView = vi.fn();
    const mockElement = { scrollIntoView: mockScrollIntoView } as unknown as HTMLElement;

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<Header />);
    const homeButton = screen.getByText('Home');

    fireEvent.click(homeButton);

    expect(document.getElementById).toHaveBeenCalledWith('hero');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('closes mobile menu after clicking navigation item', () => {
    const mockScrollIntoView = vi.fn();
    const mockElement = { scrollIntoView: mockScrollIntoView } as unknown as HTMLElement;

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<Header />);
    const menuToggle = screen.getByLabelText('Toggle menu');
    const nav = screen.getByRole('navigation');
    const aboutButton = screen.getByText('About');

    fireEvent.click(menuToggle);
    expect(nav).toHaveClass('nav-open');

    fireEvent.click(aboutButton);
    expect(nav).not.toHaveClass('nav-open');
  });
});
