'use client'
import Photo from '@/components/Photo'
import Social from '@/components/ui/Social'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Home = () => {
  const handleViewResume = () => {
    const pdfUrl = '/assets/files/HenryTipantuna_Resume.pdf'
    window.open(pdfUrl, '_blank')
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' } }}
      className="flex min-h-[80vh] items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 py-24 xl:flex-row xl:gap-8 xl:py-0">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-sm uppercase tracking-[3px] text-accent">Desarrollador Full Stack</span>
            <h1 className="h1 mt-4">
              <span className="h2 block text-white/90">Hola, mi nombre es</span>
              <span className="text-accent">Henry Tipantuña</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-white/70 xl:mx-0">
              Construyo aplicaciones web de alto impacto con más de 4 años de experiencia. Me enfoco en entregar
              código limpio y escalable y en la mejora continua del producto, aportando soluciones orientadas a la
              funcionalidad y a los objetivos del negocio.
            </p>

            <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row xl:justify-start">
              <Button variant="outline" size="lg" onClick={handleViewResume} className="flex items-center gap-2">
                <span>Resume (CV)</span>
                <FiDownload className="text-xl" />
              </Button>

              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home