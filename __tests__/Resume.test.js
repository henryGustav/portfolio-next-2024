import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Resume from '@/app/resume/page'

describe('Resume', () => {
  it('renders the experience timeline with companies', () => {
    render(<Resume />)
    expect(screen.getByText('Iuvity')).toBeInTheDocument()
    expect(screen.getByText('Tecnomega')).toBeInTheDocument()
    expect(screen.getByText('Easybox')).toBeInTheDocument()
  })

  it('switches to the education tab', async () => {
    const user = userEvent.setup()
    render(<Resume />)

    await user.click(screen.getByRole('tab', { name: 'Educación' }))
    expect(await screen.findByText('Ingeniero informático')).toBeInTheDocument()
    expect(screen.getByText('Universidad Central del Ecuador')).toBeInTheDocument()
  })
})