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

import taskHandlerLogin from '../../public/assets/projects/taskHandler/taskHandlerLogin.png'
import taskHandlerRegistry from '../../public/assets/projects/taskHandler/taskHandlerRegistry.png'
import taskHandlerDashboard from '../../public/assets/projects/taskHandler/taskHandlerDashboard.png'

const projets = [
  {
    code: 'tecnomegaEcommerce',
    img: tecnomegaEcommerce,
    bgColor: 'bg-secondary',
    group: 'enterprise',
    title: 'Tecnomega E-commerce',
    tools: ['React', 'Node.js', 'MongoDB', 'Git'],
    links: { demo: 'https://tecnomegastore.ec/', github: '' },
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
    links: { demo: 'https://www.tecnomega.com.ec/empresa', github: '' },
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
    links: { demo: 'https://quasad.tech/', github: '' },
    info: {
      mainTitle: 'Quasad',
      secondaryTitle: 'LANDING PAGE',
      description:
        'Landing page para Quasad, con diseño atractivo, información clara de servicios y formularios de contacto funcionales.',
    },
  },
  {
    code: 'tasks-handler',
    img: taskHandlerDashboard,
    bgColor: 'bg-secondary',
    group: 'enterprise',
    title: 'Task handler',
    tools: ['Next JS', 'Node.js', 'MongoDB', 'Git'],
    links: {
      demo: 'https://journal-appv2-vert.vercel.app/',
      github: 'https://github.com/next-apps-develop/journal-appv2',
    },
    info: {
      mainTitle: 'Tasks handler',
      secondaryTitle: 'task-handler',
      description:
        'Gestor de notas diseñado para digitalizar tus pensamientos, organizar tus proyectos y potenciar tu productividad diaria sin esfuerzo',
    },
    subImages: [taskHandlerLogin, taskHandlerRegistry, taskHandlerDashboard],
  },

  {
    code: 'journalApp',
    img: jornalApp,
    group: 'personal',
    title: 'Journal App',
    tools: ['React', 'Firebase', 'Cloudinary', 'Redux', 'SASS'],
    links: { demo: 'https://henrygustavo1514.gitlab.io/react-journal-app', github: '' },
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
    links: {
      demo: 'https://web-landing-page.gitlab.io/landing-shala/',
      github: 'https://gitlab.com/web-landing-page/landing-shala',
    },
    info: {
      mainTitle: 'Landing App',
      secondaryTitle: 'LANDING PAGE',
      description: 'Landing page responsive construida con HTML, CSS y Bootstrap para presentar un producto digital.',
    },
  },

  {
    code: 'freshFruit',
    img: freshFruitApp,
    group: 'personal',
    title: 'Fresh Fruit',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    links: {
      demo: 'https://henrygustavo1514.gitlab.io/landing-page-freshfood',
      github: 'https://gitlab.com/henryGustavo1514/landing-page-freshfood',
    },
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
    links: {
      demo: 'https://henrygustavo1514.gitlab.io/landing-page-fashion',
      github: 'https://gitlab.com/henryGustavo1514/landing-page-fashion',
    },
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
    <button className="swiper-nav-btn" onClick={() => swiper.slideNext()} aria-label="Siguiente imagen">
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
          <h1 className="mt-2 h2">Proyectos destacados</h1>
          <p className="max-w-2xl mx-auto mt-4 text-white/60 xl:mx-0">
            Una selección de aplicaciones y sitios web en los que he trabajado, desde e-commerce y sitios corporativos
            hasta proyectos personales.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8 xl:justify-start">
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
                  className="absolute inset-0 transition-transform duration-500 bg-center bg-cover group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27272d] via-transparent to-transparent opacity-80" />
                <span className="absolute px-3 py-1 text-xs font-medium tracking-wider uppercase border rounded-full left-4 top-4 border-accent/30 bg-primary/70 text-accent backdrop-blur">
                  {categoryLabel[project.group]}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{project.tools.join(' / ')}</p>

                <div className="flex items-center justify-between pt-6 mt-auto">
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
                        className="grid transition-all border rounded-full h-11 w-11 place-items-center border-white/10 text-white/70 hover:border-accent hover:text-accent"
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
                        className="grid transition-all border rounded-full h-11 w-11 place-items-center border-white/10 text-white/70 hover:border-accent hover:text-accent"
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
              <button className="modal-close" onClick={() => setShowModalProject(false)} aria-label="Cerrar">
                <MdClose size={22} />
              </button>

              <div className="relative aspect-[16/10] w-full bg-primary">
                {selectedProject.subImages?.length > 0 ? (
                  <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
                    {selectedProject.subImages.map((subImage, index) => (
                      <SwiperSlide key={index} className="h-full">
                        <div
                          className="w-full h-full bg-center bg-cover"
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
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${selectedProject.img.src})` }}
                  />
                )}
              </div>

              <div className="p-6 md:p-8">
                <span className="text-xs font-medium uppercase tracking-[3px] text-accent">
                  {selectedProject.info.secondaryTitle}
                </span>
                <h2 className="mt-2 text-3xl font-bold text-white">{selectedProject.info.mainTitle}</h2>

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[#27272d] px-3 py-1 text-xs text-white/60">
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-5 leading-relaxed text-white/70">{selectedProject.info.description}</p>

                {(selectedProject.links?.demo || selectedProject.links?.github) && (
                  <div className="flex flex-wrap gap-4 mt-8">
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
