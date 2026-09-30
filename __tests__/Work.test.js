jest.mock('swiper/react', () => {
  const React = require('react')
  const Swiper = ({ children }) => React.createElement('div', { 'data-testid': 'swiper' }, children)
  const SwiperSlide = ({ children }) => React.createElement('div', { 'data-testid': 'swiper-slide' }, children)
  const useSwiper = () => ({ slideNext: jest.fn(), slidePrev: jest.fn() })
  return { Swiper, SwiperSlide, useSwiper }
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Work from '@/app/work/page'

describe('Work', () => {
  it('renders the section header and all project titles', () => {
    render(<Work />)
    expect(screen.getByText('Proyectos destacados')).toBeInTheDocument()
    expect(screen.getByText('Tecnomega E-commerce')).toBeInTheDocument()
    expect(screen.getByText('Journal App')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /ver más/i })).toHaveLength(8)
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<Work />)

    await user.click(screen.getByRole('button', { name: 'Personal' }))

    expect(screen.queryByText('Tecnomega E-commerce')).not.toBeInTheDocument()
    expect(screen.getByText('Journal App')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /ver más/i })).toHaveLength(4)
  })

  it('opens project details in the modal', async () => {
    const user = userEvent.setup()
    render(<Work />)

    const viewMoreButtons = screen.getAllByRole('button', { name: /ver más/i })
    await user.click(viewMoreButtons[0])

    expect(await screen.findByText(/plataforma e-commerce/i)).toBeInTheDocument()
  })
})