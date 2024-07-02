'use client'
// import AnimatedText from '../components/AnimatedText'
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

import { Divider } from 'primereact/divider'
import './projects.css'
import { useState } from 'react'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'

import { BsBoxArrowUpRight } from 'react-icons/bs'

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
// import ButtonReusable from '../components/ButtonReusable'
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

    // Personal
    {
      code: 'journalApp',
      img: jornalApp,
      // bgColor: 'secondary',
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
      // bgColor: 'gray-800',
      group: 'personal',
      title: 'Fresh Fruit',
      tools: 'HTML / CSS / JavaScript / Bootstrap 5',
      info: 'fruit info',
    },
    {
      code: 'fashionLanding',
      img: fashionLanding,
      // bgColor: 'gray-800',
      group: 'personal',
      title: 'Fashion Landing',
      tools: 'HTML / CSS / JavaScript / Bootstrap 5',
      info: 'fashion info',
    },
  ]

  const [showModalProject, setshowModalProject] = useState(false)
  const [selectedProject, setselectedProject] = useState(null)

  const handleClickViewMoreProject = (projectCode) => {
    console.log({ projectCode })
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

  console.log({ selectedProject })
  console.log(selectedProject?.subImages?.length)

  return (
    <div className="container m-auto">
      {/* <AnimatedText text='Projects' /> */}

      <div className="projects-container mb-3">
        {projetcs.map((project) => {
          console.log('IMG', project.img)
          return (
            <div key={project.code} className="project">
              <div className={`image-project`}>
                {project?.img && (
                  // <Image
                  //   src={project.img}
                  //   alt='henry timpantuna'
                  //   // className='w-full h-auto'

                  //   priority
                  //   className=''
                  // />
                  <div
                    className="image-bg w-[300px] h-[250px]"
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
                  <div className="content-view-more">
                    {/* <button
                    type='button'
                    className='transition-property: all duration-500 hover:bg-primary hover:text-white'
                    onClick={() => {
                      handleClickViewMoreProject(project.code)
                    }}
                  >
                    View more
                  </button> */}
                    {/* <ButtonReusable
                    textButton={'View More '}
                    onClick={() => {
                      console.log('first')
                      handleClickViewMoreProject(project.code)
                    }}
                  /> */}
                    <Button
                      variant="primary"
                      onClick={() => {
                        console.log('first')
                        handleClickViewMoreProject(project.code)
                      }}
                      className='bg-slate-500'
                    >
                      VIEW MORE
                    </Button>
                  </div>
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
                      {/* <Image
                      src={subImage}
                      alt='henry timpantuna'
                      className='w-full h-full'
                    /> */}
                      {console.log({ subImage })}
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
                {/* <ButtonReusable
                  textButton={'VIEW SITE'}
                  icon={<BsBoxArrowUpRight className='ml-4 mb-[3px]' />}
                /> */}
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
  )
}

export default Projetcs
