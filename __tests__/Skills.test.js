import { render, screen } from '@testing-library/react'
import Skills from '@/components/skills/Skills'

describe('Skills', () => {
  it('renders the section headings', async () => {
    const { container } = render(<Skills />)

    expect(screen.getByText('Habilidades')).toBeInTheDocument()
    expect(screen.getByText('Front-end')).toBeInTheDocument()
    expect(screen.getByText('Back-end')).toBeInTheDocument()
    expect(screen.getByText('Herramientas')).toBeInTheDocument()

    expect(container.querySelectorAll('li')).toHaveLength(18)
  })
})