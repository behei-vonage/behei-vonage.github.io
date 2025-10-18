import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('misha.behey@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('(650) 666-9112')).toBeInTheDocument();
    expect(screen.getByText('West Bend, Wisconsin')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Contact />);
    const githubLink = screen.getByText('github.com/behei-vonage');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/behei-vonage');
  });

  it('renders LinkedIn link', () => {
    render(<Contact />);
    const linkedinLink = screen.getByText('linkedin.com/in/behei');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/behei');
  });

  it('renders all form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('updates form fields when user types', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Hello, this is a test message');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, this is a test message');
  });

  it('shows alert when form is submitted', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Contact />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: 'Send Message' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    expect(alertSpy).toHaveBeenCalled();

    alertSpy.mockRestore();
  });

  it('all form fields are required', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(messageInput).toBeRequired();
  });

  it('email field has correct type', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });
});
