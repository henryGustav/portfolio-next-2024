import { render } from '@testing-library/react'
import Social from '@/components/ui/Social'

describe('Social', () => {
  it('renders the three social links with their hrefs', () => {
    const { container } = render(<Social containerStyles="" iconStyles="" />)
    const links = container.querySelectorAll('a')

    expect(links).toHaveLength(3)
    expect(links[0]).toHaveAttribute('href', 'https://github.com/henryGustav')
    expect(links[1]).toHaveAttribute('href', 'https://www.linkedin.com/in/henrytipantuna/')
    expect(links[2]).toHaveAttribute('href', expect.stringContaining('api.whatsapp.com'))
  })

  it('opens links in a new tab', () => {
    const { container } = render(<Social containerStyles="" iconStyles="" />)
    const github = container.querySelectorAll('a')[0]
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')
  })
})