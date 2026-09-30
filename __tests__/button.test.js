import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>Hola</Button>)
    expect(screen.getByRole('button', { name: 'Hola' })).toBeInTheDocument()
  })

  it('applies the default variant classes', () => {
    render(<Button>Default</Button>)
    expect(screen.getByRole('button', { name: 'Default' })).toHaveClass('bg-accent')
  })

  it('applies the outline variant classes', () => {
    render(<Button variant="outline">Ver más</Button>)
    expect(screen.getByRole('button', { name: 'Ver más' })).toHaveClass('border-accent')
  })
})