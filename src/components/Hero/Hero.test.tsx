import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the hero title with name', () => {
    render(<Hero />)
    expect(screen.getByText(/Mykhailo \(Misha\) Behei/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument()
    expect(screen.getByText(/WebRTC Specialist/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/real-time communication solutions/i)).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByText('View My Work')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('scrolls to projects section when "View My Work" is clicked', () => {
    const mockScrollIntoView = vi.fn()
    const mockElement = { scrollIntoView: mockScrollIntoView } as unknown as HTMLElement

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Hero />)
    const viewWorkButton = screen.getByText('View My Work')

    fireEvent.click(viewWorkButton)

    expect(document.getElementById).toHaveBeenCalledWith('projects')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('scrolls to contact section when "Get In Touch" is clicked', () => {
    const mockScrollIntoView = vi.fn()
    const mockElement = { scrollIntoView: mockScrollIntoView } as unknown as HTMLElement

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Hero />)
    const contactButton = screen.getByText('Get In Touch')

    fireEvent.click(contactButton)

    expect(document.getElementById).toHaveBeenCalledWith('contact')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
