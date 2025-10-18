import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders professional background information', () => {
    render(<About />)
    expect(screen.getByText(/Software Engineer at Vonage/i)).toBeInTheDocument()
    expect(screen.getByText(/San Jose State University/i)).toBeInTheDocument()
    expect(screen.getByText(/B.S. in Computer Science/i)).toBeInTheDocument()
  })

  it('mentions key technologies and work', () => {
    render(<About />)
    expect(screen.getByText(/Vonage Video API JS SDK/i)).toBeInTheDocument()
    expect(screen.getByText(/WebRTC/i)).toBeInTheDocument()
    expect(screen.getByText(/VoIP/i)).toBeInTheDocument()
  })

  it('mentions advanced features developed', () => {
    render(<About />)
    expect(screen.getByText(/noise suppression/i)).toBeInTheDocument()
    expect(screen.getByText(/end-to-end encryption/i)).toBeInTheDocument()
    expect(screen.getByText(/ML-based media processor filters/i)).toBeInTheDocument()
  })

  it('renders the headshot image', () => {
    render(<About />)
    const image = screen.getByAltText('Mykhailo (Misha) Behei')
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('headshot')
  })

  it('mentions open-source contribution', () => {
    render(<About />)
    expect(screen.getByText(/open-source reference application/i)).toBeInTheDocument()
  })
})
