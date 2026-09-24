'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const CursorGlow = () => {
  const x = useMotionValue(-999)
  const y = useMotionValue(-999)
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.5 })

  useEffect(() => {
    const update = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[-1]"
      style={{ x: springX, y: springY }}
    >
      <div
        className="rounded-full"
        style={{
          width: 600,
          height: 600,
          marginLeft: -300,
          marginTop: -300,
          background:
            'radial-gradient(circle, rgba(0,225,135,0.13) 0%, rgba(0,225,135,0.04) 40%, transparent 65%)',
        }}
      />
    </motion.div>
  )
}

export default CursorGlow