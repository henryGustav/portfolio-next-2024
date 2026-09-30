import { cn } from '@/lib/utils'

describe('cn', () => {
  it('combines class names and filters falsy values', () => {
    expect(cn('a', 'b')).toBe('a b')
    expect(cn('a', false, undefined, null, 'b')).toBe('a b')
  })

  it('merges conflicting tailwind classes keeping the last one', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('flex', 'hidden')).toBe('hidden')
  })
})