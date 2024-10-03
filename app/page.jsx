'use client'
import Photo from '@/components/Photo'
import Social from '@/components/ui/Social'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
const Home = () => {
  const handleViewResume = () => {
    const pdfUrl = '/assets/files/HenryTipantuna_Resume.pdf'
    window.open(pdfUrl, '_blank')
  }
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24
        "
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Desarrollador de software</span>
            <h1 className="h1">
              <span className="h2">Hola mi nombre es</span> <br />
              <span className="text-accent">Henry Tipantuña</span>
            </h1>

            <p className="my-8 text-white/80">
              Desarrollador con más de 4 años de experiencia en la construcción de sitios web. Además de asegurar la
              entrega de código de calidad, me enfoco en la mejora continua del producto, aportando perspectivas
              críticas orientadas a la funcionalidad y los objetivos del negocio.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleViewResume}
                className="uppercase flex items-center gap-2"
                
              >
                <span>Resume (CV)</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={'flex gap-6'}
                  iconStyles={`w-9 h-9 border border-accent rounded-full
                  flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary
                  hover:transition-all duration-500
                  `}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
