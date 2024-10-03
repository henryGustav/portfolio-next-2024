'use client'
import tecnomegaEcommerce from '../../public/assets/projects/tecnomegaEcommerce.svg'
import tecnomegaLanding from '../../public/assets/projects/tecnomegaLanding.svg'
import quasad from '../../public/assets/projects/quasad.svg'
import easyboxEcommerce from '../../public/assets/projects/easyboxEcommerce.png'
import landindgApp from '../../public/assets/projects/landindgApp.png'
import jornalApp from '../../public/assets/projects/jornalApp.png'
import freshFruitApp from '../../public/assets/projects/freshFruitApp.png'
import fashionLanding from '../../public/assets/projects/fashionLanding.png'
import Image from 'next/image'
import { Dialog } from 'primereact/dialog'

import './projects.css'
import { useState } from 'react'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

// subimages
import tecnomegaSubImg1 from '../../public/assets/projects/tecnomega/tecnomegaSubImg1.png'
import tecnomegaSubImg2 from '../../public/assets/projects/tecnomega/tecnomegaSubImg2.png'
import tecnomegaSubImg3 from '../../public/assets/projects/tecnomega/tecnomegaSubImg3.png'
import tecnomegaSubImg4 from '../../public/assets/projects/tecnomega/tecnomegaSubImg4.png'

import tecnomegaAdminSubImg1 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg1.png'
import tecnomegaAdminSubImg2 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg2.png'
import tecnomegaAdminSubImg3 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg3.png'
import tecnomegaAdminSubImg4 from '../../public/assets/projects/tecnomegaAdmin/tecnomegaAdminSubImg4.png'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
const Projetcs = () => {
  const projetcs = [
    {
      code: 'tecnomegaEcommerce',
      img: tecnomegaEcommerce,
      bgColor: 'bg-secondary',
      group: 'enterprice',
      title: 'Tecnomega Ecommerce',
      tools: 'React / NodeJs / MongoDB / Git',
      info: {
        mainTitle: 'Tecnomega info',
        secondaryTitle: 'ECOMMERCE',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi saepe distinctio pariatur modi eveniet magni, ad fugit esse dolorem cum, vero fugiat, ipsam soluta temporibus quis doloremque molestiae similique. Sunt.',
      },
      subImages: [tecnomegaSubImg1, tecnomegaSubImg2, tecnomegaSubImg3, tecnomegaSubImg4],
    },
    {
      code: 'tecnomegaLandidng',
      img: tecnomegaLanding,
      group: 'enterprice',
      title: 'Tecnomega Enterprice',
      tools: 'React / NodeJs / MySQL / Git',
      info: 'Tecnomega landing info',
      subImages: [tecnomegaAdminSubImg1, tecnomegaAdminSubImg2, tecnomegaAdminSubImg3, tecnomegaAdminSubImg4],
    },

    {
      code: 'quasadLanding',
      img: quasad,
      bgColor: 'bg-gray-800',
      group: 'enterprice',
      title: 'Quasad',
      tools: 'React / NodeJs / MongoDB / Git',
      info: 'quasad info',
    },
    {
      code: 'easyboxEcommerce',
      img: easyboxEcommerce,
      bgColor: 'bg-primary',
      group: 'enterprice',
      title: 'Easybox Ecommerce',
      tools: 'Angular / Java / EJB 3 / Git',
      info: 'easybox info',
    },

    {
      code: 'journalApp',
      img: jornalApp,
      group: 'personal',
      title: 'Joaunal App',
      tools: 'React / Firebase / JavaScrpt / Cloudinary / SASS / Redux',
      info: 'Journal info',
    },
    {
      code: 'landingApp',
      img: landindgApp,
      group: 'personal',
      title: 'Landing App',
      tools: 'HTML / CSS / JavaScript / Bootstrap 5',
      info: 'Landing info',
    },

    {
      code: 'freshFruit',
      img: freshFruitApp,
      group: 'personal',
      title: 'Fresh Fruit',
      tools: 'HTML / CSS / JavaScript / Bootstrap 5',
      info: 'fruit info',
    },
    {
      code: 'fashionLanding',
      img: fashionLanding,
      group: 'personal',
      title: 'Fashion Landing',
      tools: 'HTML / CSS / JavaScript / Bootstrap 5',
      info: 'fashion info',
    },
  ]

  const [showModalProject, setshowModalProject] = useState(false)
  const [selectedProject, setselectedProject] = useState(null)

  const handleClickViewMoreProject = (projectCode) => {
    setshowModalProject(true)
    setselectedProject(projetcs.filter((project) => project.code === projectCode)[0])
  }

  const swiper = useSwiper()

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper()
    return (
      <div
        className="btn-prev-next-container cursor-pointer"
        onClick={() => {
          swiper.slideNext()
        }}
      >
        {children}
      </div>
    )
  }

  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper()
    return (
      <div className="btn-prev-next-container cursor-pointer" onClick={() => swiper.slidePrev()}>
        {children}
      </div>
    )
  }

  //TODO agregar enlaces a github y al sitio web

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="container m-auto">
        <div className="projects-container mb-3 grid xl:grid-cols-3  sm:grid-cols-2 grid-cols-1">
          {projetcs.map((project) => {
            return (
              <div key={project.code} className="project grid-item center bg-[#27272d]">
                <div>
                  {project?.img && (
                    <div
                      className="image-bg w-full h-[250px] "
                      style={{ backgroundImage: `url(${project.img.src}) ` }}
                    ></div>
                  )}
                </div>
                <div className="project-content">
                  <div className="content">
                    <div className="content-info z-10">
                      <div className="title mb-3 ">
                        <h1 className="font-semibold text-white text-2xl">{project.title}</h1>
                      </div>
                      <div>
                        <div className="project-tools text-white/60">
                          <p>{project?.tools || ''}</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="content-view-more">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClickViewMoreProject(project.code)
                        }}
                        className="text-accent bg-transparent  border border-accent
                        hover:bg-accent hover:text-primary
                        "
                        aria-label="ver más"
                      >
                        Ver más
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <Dialog
          // header='Header'
          visible={showModalProject}
          style={{ width: '50vw' }}
          // footer={renderFooter('displayBasic')}
          onHide={() => setshowModalProject(false)}
          className="modal-project"
        >
          {selectedProject && (
            <>
              <div className="images-per-project relative">
                <Swiper
                  spaceBetween={100}
                  slidesPerView={1}
                  onSlideChange={(e) => {}}
                  onSwiper={(swiper1) => console.log(swiper1)}
                >
                  {selectedProject?.subImages &&
                    selectedProject?.subImages.length > 0 &&
                    selectedProject?.subImages.map((subImage, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="subImage-project"
                          style={{
                            backgroundImage: `url(${subImage.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            width: '700px',
                            height: '450px',
                          }}
                        ></div>
                      </SwiperSlide>
                    ))}

                  <div className="buttons-prev-next flex justify-between absolute">
                    <SwiperButtonPrev>
                      <FaChevronLeft color={'white'} size={40} />
                    </SwiperButtonPrev>
                    <SwiperButtonNext>
                      <FaChevronRight color={'white'} size={40} />
                    </SwiperButtonNext>
                  </div>
                </Swiper>
              </div>
              <div className="info-container-project m-8">
                <div className="title">
                  <h2 className="main-title">{selectedProject?.info?.mainTitle}</h2>
                  <h3 className="secondary-title">{selectedProject?.info?.secondaryTitle}</h3>
                </div>
                <hr className="my-4" />
                <p className="mb-4">{selectedProject?.info?.description}</p>

                <div className="flex justify-between items-end">
                  <MdClose
                    size={35}
                    color=""
                    className="text-dark/30 cursor-pointer"
                    onClick={() => setshowModalProject(false)}
                  />
                </div>
              </div>
            </>
          )}
        </Dialog>
      </div>
    </motion.section>
  )
}

export default Projetcs
