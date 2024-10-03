'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import Skills from '@/components/skills/Skills'

const about = {
  title: 'Acerca de mí',
  description: `Soy una persona apasionada por la tecnología y el aprendizaje continuo. 
  Me considero proactivo, adaptable y siempre en busca de nuevos desafíos que me permitan 
  crecer tanto profesional como personalmente. Disfruto trabajar en equipo, aportando ideas 
  y colaborando para alcanzar objetivos comunes, y valoro la comunicación efectiva como una 
  herramienta clave para el éxito. `,
  info: [
    { fieldName: 'Nombre', fieldValue: 'Henry Tipnatuña' },
    { fieldName: 'Email', fieldValue: 'henry_gustavo18@hotmail.com' },
    { fieldName: 'Teléfono', fieldValue: '(+593) 969719186' },
    { fieldName: 'Experiencia', fieldValue: '4+ Years' },
    { fieldName: 'Residencia', fieldValue: 'Quito - Ecuador' },
    { fieldName: 'Freelance', fieldValue: 'Disponible' },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiencia',
  description: `Durante mi trayectoria, he colaborado  
  con equipos multidisciplinarios para diseñar, implementar y optimizar 
  soluciones tecnológicas que cumplen con altos estándares de calidad y eficiencia. 
  Abarcando desde creación de interfaces de usuario intuitivas hasta optimización. `,
  items: [
    { company: 'Iuvity', position: 'Full stack developer', duration: '2022 - Present' },
    { company: 'Tecnomega', position: 'Full stack developer', duration: '2020 - 2022' },
    { company: 'Easybox', position: 'Full stack developer', duration: '2018 - 2020' },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Educación',
  description: `A lo largo de mi formación profesional, he adquirido una sólida base en
   desarrollo web y tecnologías de software. Además, he complementado mi formación con diversos
    cursos especializados. Esta combinación de estudios formales y aprendizaje continuo me permite enfrentar 
     con éxito los desafíos de la industria tecnológica.`,
  items: [
    { institution: 'Dev talles', degree: 'Nest js', duration: '2023 - 2024', link: '' },
    {
      institution: 'Udemy',
      degree: 'TypeScript',
      duration: '2023 - 2019',
      link: 'https://www.udemy.com/certificate/UC-db514c28-db7d-46e2-b93c-13a1e60d7552/',
    },
    { institution: 'Udemy', degree: 'Css professional ', duration: '2022 - 2022', link: '' },

    {
      institution: 'Udemy',
      degree: 'Docker',
      duration: '2021 - 2021',
      link: 'https://www.udemy.com/certificate/UC-f9471a03-590b-4417-9fc6-9eb8e36fe80b/',
    },
    {
      institution: 'Udemy',
      degree: 'React js',
      duration: '2021 - 2021',
      link: 'https://www.udemy.com/certificate/UC-dfd0bb19-33a6-49cf-9263-c87a3cc6d5ea/',
    },
    {
      institution: 'Udemy',
      degree: 'Git control versions',
      duration: '2020 - 2020',
      link: 'https://www.udemy.com/certificate/UC-c5a21d25-9be1-4ab0-b82b-bb2444a18a1d/',
    },
    { institution: 'CEC', degree: 'Java 1.8', duration: '2018 - 2019', link: '' },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5, ease: 'easeInOut' } }}
      className="min-h-[80vh] flex  justify-center py-24 xl:py-12  xl:items-start"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="grid xl:grid-cols-[30%_70%] gap-8">
          <TabsList className="flex flex-col xl:pt-10 ">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Acerca de mí</TabsTrigger>
          </TabsList>
          <div className="w-full mt-[5rem] xl:mt-[-2.5rem] ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((experience, index) => (
                      <li
                        key={index}
                        className="bg-[#27272d] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1
                      "
                      >
                        <span className="text-accent">{experience.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{experience.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px] ">
                  <h3>Titulo profesional</h3>
                  <li
                    className="bg-[#27272d] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1
                      "
                  >
                    {/* <span className="text-accent">2012-2018</span> */}
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      Ingeniero informático
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                      <p className="text-white/60">{'Universidad Central del Ecuador'}</p>
                    </div>
                  </li>
                  <h3 className="mt-4">Cursos terminados</h3>

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((itemEducation, index) => (
                      <li
                        key={index}
                        className="bg-[#27272d] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1
                      "
                      >
                        <span className="text-accent">{itemEducation.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {itemEducation.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{itemEducation.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 mx-auto xl:mx-0">
                  {about.info.map((itemInfo, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{itemInfo.fieldName}</span>
                      <span className="md:text-xl break-all">{itemInfo.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
