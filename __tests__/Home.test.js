import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('shows the greeting and the name', () => {
    render(<Home />)
    expect(screen.getByText('Desarrollador Full Stack')).toBeInTheDocument()
    expect(screen.getByText(/Hola, mi nombre es/i)).toBeInTheDocument()
    expect(screen.getByText('Henry Tipantuña')).toBeInTheDocument()
  })

  it('renders the resume download buttons and social links', () => {
    const { container } = render(<Home />)
    expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument()
    expect(container.querySelectorAll('a')).toHaveLength(3)
  })
})