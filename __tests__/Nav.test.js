jest.mock('next/navigation', () => ({
  usePathname: () => '/work',
}))

import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders all the navigation links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /trabajos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experiencia/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument()
  })

  it('highlights the link of the current route', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /trabajos/i })).toHaveClass('text-accent')
  })
})