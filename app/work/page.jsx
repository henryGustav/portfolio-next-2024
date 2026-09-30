'use client'
import tecnomegaEcommerce from '../../public/assets/projects/tecnomegaEcommerce.svg'
import tecnomegaLanding from '../../public/assets/projects/tecnomegaLanding.svg'
import quasad from '../../public/assets/projects/quasad.svg'
import easyboxEcommerce from '../../public/assets/projects/easyboxEcommerce.png'
import landindgApp from '../../public/assets/projects/landindgApp.png'
import jornalApp from '../../public/assets/projects/jornalApp.png'
import freshFruitApp from '../../public/assets/projects/freshFruitApp.png'
import fashionLanding from '../../public/assets/projects/fashionLanding.png'
import { Dialog } from 'primereact/dialog'

import './work.css'
import { useState } from 'react'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// subimages
import tecnomegaSubImg1 from '../../public/assets/projects/tecnomega/tecnomegaSubImg1.png'
import tecnomegaSubImg2 from '../../public/assets/projects/tecnomega/tecnomegaSubImg2.png'
import tecnomegaSubImg3 from '../../public/assets/projects/tecnomega/tecnomegaSubImg3.png'
import tecnomegaSubImg4 from '../../public/assets/projects/tecnomega/tecnomegaSubImg4.png'

import tecnomegaAdminSubImg1 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg1.png'
import tecnomegaAdminSubImg2 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg2.png'
import tecnomegaAdminSubImg3 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg3.png'
import tecnomegaAdminSubImg4 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg4.png'

const projets = [
  {
    code: 'tecnomegaEcommerce',
    img: tecnomegaEcommerce,
    bgColor: 'bg-secondary',
    group: 'enterprise',
    title: 'Tecnomega E-commerce',
    tools: ['React', 'Node.js', 'MongoDB', 'Git'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Tecnomega E-commerce',
      secondaryTitle: 'E-COMMERCE',
      description:
        'Plataforma e-commerce para la venta de productos tecnológicos. Frontend en React, backend en Node.js con MongoDB, enfocada en una experiencia de compra fluida, gestión de catálogo y pedidos.',
    },
    subImages: [tecnomegaSubImg1, tecnomegaSubImg2, tecnomegaSubImg3, tecnomegaSubImg4],
  },
  {
    code: 'tecnomegaLandidng',
    img: tecnomegaLanding,
    group: 'enterprise',
    title: 'Tecnomega Enterprise',
    tools: ['React', 'Node.js', 'MySQL', 'Git'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Tecnomega Enterprise',
      secondaryTitle: 'SITIO CORPORATIVO',
      description:
        'Sitio corporativo que presenta productos y servicios de la empresa, con administración de contenido y estructura optimizada para el posicionamiento web.',
    },
    subImages: [tecnomegaAdminSubImg1, tecnomegaAdminSubImg2, tecnomegaAdminSubImg3, tecnomegaAdminSubImg4],
  },

  {
    code: 'quasadLanding',
    img: quasad,
    bgColor: 'bg-gray-800',
    group: 'enterprise',
    title: 'Quasad',
    tools: ['React', 'Node.js', 'MongoDB'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Quasad',
      secondaryTitle: 'LANDING PAGE',
      description:
        'Landing page para Quasad, con diseño atractivo, información clara de servicios y formularios de contacto funcionales.',
    },
  },
  {
    code: 'easyboxEcommerce',
    img: easyboxEcommerce,
    bgColor: 'bg-primary',
    group: 'enterprise',
    title: 'Easybox E-commerce',
    tools: ['Angular', 'Java', 'EJB 3'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Easybox E-commerce',
      secondaryTitle: 'E-COMMERCE',
      description:
        'E-commerce desarrollado con Angular en el frontend y Java con EJB 3 en el backend, orientado a escenarios empresariales.',
    },
  },

  {
    code: 'journalApp',
    img: jornalApp,
    group: 'personal',
    title: 'Journal App',
    tools: ['React', 'Firebase', 'Cloudinary', 'Redux', 'SASS'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Journal App',
      secondaryTitle: 'APP WEB',
      description:
        'Aplicación personal tipo diario con autenticación, registro de notas y carga de imágenes mediante Firebase y Cloudinary.',
    },
  },
  {
    code: 'landingApp',
    img: landindgApp,
    group: 'personal',
    title: 'Landing App',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Landing App',
      secondaryTitle: 'LANDING PAGE',
      description:
        'Landing page responsive construida con HTML, CSS y Bootstrap para presentar un producto digital.',
    },
  },

  {
    code: 'freshFruit',
    img: freshFruitApp,
    group: 'personal',
    title: 'Fresh Fruit',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Fresh Fruit',
      secondaryTitle: 'SITIO WEB',
      description:
        'Sitio web para distribución de frutas con catálogo de productos, responsive y optimizado para consulta móvil.',
    },
  },
  {
    code: 'fashionLanding',
    img: fashionLanding,
    group: 'personal',
    title: 'Fashion Landing',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    links: { demo: '', github: '' },
    info: {
      mainTitle: 'Fashion Landing',
      secondaryTitle: 'LANDING PAGE',
      description:
        'Landing page de moda con visual moderna, galería de productos y optimización para dispositivos móviles.',
    },
  },
]

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'enterprise', label: 'Empresarial' },
  { value: 'personal', label: 'Personal' },
]

const categoryLabel = {
  enterprise: 'Empresarial',
  personal: 'Personal',
}

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper()
  return (
    <button
      className="swiper-nav-btn"
      onClick={() => swiper.slideNext()}
      aria-label="Siguiente imagen"
    >
      {children}
    </button>
  )
}

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper()
  return (
    <button className="swiper-nav-btn" onClick={() => swiper.slidePrev()} aria-label="Imagen anterior">
      {children}
    </button>
  )
}

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showModalProject, setShowModalProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'all' ? projets : projets.filter((p) => p.group === activeCategory)

  const handleClickViewMoreProject = (project) => {
    setSelectedProject(project)
    setShowModalProject(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' } }}
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center xl:text-left">
          <span className="text-sm uppercase tracking-[3px] text-accent">Portafolio</span>
          <h1 className="h2 mt-2">Proyectos destacados</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/60 xl:mx-0">
            Una selección de aplicaciones y sitios web en los que he trabajado, desde e-commerce y sitios
            corporativos hasta proyectos personales.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 xl:justify-start">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'border-accent bg-accent text-primary font-semibold'
                    : 'border-white/10 bg-[#27272d] text-white/70 hover:border-accent hover:text-accent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.code}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#27272d] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(0,225,135,0.12)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-primary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27272d] via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-primary/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent backdrop-blur">
                  {categoryLabel[project.group]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{project.tools.join(' / ')}</p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <Button
                    variant="outline"
                    size="md"
                    className="!px-5"
                    onClick={() => handleClickViewMoreProject(project)}
                  >
                    Ver más
                  </Button>

                  <div className="flex gap-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-accent hover:text-accent"
                        rel="noreferrer"
                        aria-label={`Ver código en GitHub de ${project.title}`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-accent hover:text-accent"
                        rel="noreferrer"
                        aria-label={`Visitar demo de ${project.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Dialog
          visible={showModalProject}
          style={{ width: 'min(94vw, 820px)' }}
          className="modal-project"
          onHide={() => setShowModalProject(false)}
          dismissableMask
        >
          {selectedProject && (
            <>
              <button
                className="modal-close"
                onClick={() => setShowModalProject(false)}
                aria-label="Cerrar"
              >
                <MdClose size={22} />
              </button>

              <div className="relative aspect-[16/10] w-full bg-primary">
                {selectedProject.subImages?.length > 0 ? (
                  <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
                    {selectedProject.subImages.map((subImage, index) => (
                      <SwiperSlide key={index} className="h-full">
                        <div
                          className="h-full w-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${subImage.src})` }}
                        />
                      </SwiperSlide>
                    ))}

                    <div className="absolute inset-0 z-10 flex items-center justify-between px-3">
                      <SwiperButtonPrev>
                        <FaChevronLeft size={22} />
                      </SwiperButtonPrev>
                      <SwiperButtonNext>
                        <FaChevronRight size={22} />
                      </SwiperButtonNext>
                    </div>
                  </Swiper>
                ) : (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedProject.img.src})` }}
                  />
                )}
              </div>

              <div className="p-6 md:p-8">
                <span className="text-xs font-medium uppercase tracking-[3px] text-accent">
                  {selectedProject.info.secondaryTitle}
                </span>
                <h2 className="mt-2 text-3xl font-bold text-white">{selectedProject.info.mainTitle}</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[#27272d] px-3 py-1 text-xs text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-5 leading-relaxed text-white/70">{selectedProject.info.description}</p>

                {(selectedProject.links?.demo || selectedProject.links?.github) && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {selectedProject.links.demo && (
                      <a href={selectedProject.links.demo} target="_blank" rel="noreferrer">
                        <Button variant="default" className="gap-2">
                          <FaExternalLinkAlt size={15} />
                          Visitar sitio
                        </Button>
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="gap-2">
                          <FaGithub size={15} />
                          Ver código
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </Dialog>
      </div>
    </motion.section>
  )
}

export default Work