'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import Skills from '@/components/skills/Skills'

const about = {
  title: 'Acerca de mí',
  description: `Desarrollador apasionado por la tecnología y el aprendizaje continuo. 
  Proactivo, adaptable y en constante búsqueda de nuevos desafíos que impulsen mi 
  crecimiento profesional y personal. Disfruto colaborar en equipo, aportando ideas 
  y valor en cada etapa, y considero la comunicación efectiva una herramienta clave 
  para alcanzar los objetivos.`,
  info: [
    { fieldName: 'Nombre', fieldValue: 'Henry Tipantuña' },
    { fieldName: 'Email', fieldValue: 'henry_gustavo18@hotmail.com' },
    { fieldName: 'Teléfono', fieldValue: '(+593) 969719186' },
    { fieldName: 'Experiencia', fieldValue: 'Más de 4 años' },
    { fieldName: 'Residencia', fieldValue: 'Quito - Ecuador' },
    { fieldName: 'Freelance', fieldValue: 'Disponible' },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiencia',
  description: `Durante mi trayectoria he colaborado con equipos multidisciplinarios 
  para diseñar, implementar y optimizar soluciones tecnológicas que cumplen con altos 
  estándares de calidad y eficiencia, desde la creación de interfaces intuitivas hasta 
  la optimización de procesos y rendimiento. `,
  items: [
    {
      company: 'Iuvity',
      position: 'Full Stack Developer',
      duration: '2022 - Presente',
      description:
        'Desarrollo de aplicaciones web full stack, colaborando con equipos multidisciplinarios para entregar soluciones escalables y de alto rendimiento.',
    },
    {
      company: 'Tecnomega',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description:
        'Construcción de e-commerce y sitios corporativos, integrando frontend y backend y optimizando la experiencia y el rendimiento.',
    },
    {
      company: 'Easybox',
      position: 'Full Stack Developer',
      duration: '2018 - 2020',
      description:
        'Participación en el desarrollo de soluciones empresariales con Java y Angular, asegurando calidad y buenas prácticas de código.',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Educación',
  description: `A lo largo de mi formación profesional he adquirido una sólida base en
  desarrollo web y tecnologías de software, complementada con cursos especializados.
  Esta combinación de estudios formales y aprendizaje continuo me permite afrontar
  con éxito los desafíos de la industria tecnológica.`,
  items: [
    { institution: 'Dev Talleres', degree: 'Nest.js', duration: '2023 - 2024', link: '' },
    {
      institution: 'Udemy',
      degree: 'TypeScript',
      duration: '2019 - 2023',
      link: 'https://www.udemy.com/certificate/UC-db514c28-db7d-46e2-b93c-13a1e60d7552/',
    },
    { institution: 'Udemy', degree: 'CSS profesional', duration: '2022', link: '' },

    {
      institution: 'Udemy',
      degree: 'Docker',
      duration: '2021',
      link: 'https://www.udemy.com/certificate/UC-f9471a03-590b-4417-9fc6-9eb8e36fe80b/',
    },
    {
      institution: 'Udemy',
      degree: 'React.js',
      duration: '2021',
      link: 'https://www.udemy.com/certificate/UC-dfd0bb19-33a6-49cf-9263-c87a3cc6d5ea/',
    },
    {
      institution: 'Udemy',
      degree: 'Control de versiones con Git',
      duration: '2020',
      link: 'https://www.udemy.com/certificate/UC-c5a21d25-9be1-4ab0-b82b-bb2444a18a1d/',
    },
    { institution: 'CEC', degree: 'Java 1.8', duration: '2018 - 2019', link: '' },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut' } }}
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
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                </div>

                <ScrollArea className="h-[520px]">
                  <div className="relative ml-3 space-y-8 border-l-2 border-accent/20 pl-8">
                    {experience.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                        className="relative text-left"
                      >
                        <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
                        <div className="rounded-xl border border-white/10 bg-[#232329] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(0,225,135,0.1)]">
                          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                            {item.duration}
                          </span>
                          <h3 className="mt-2 text-2xl font-semibold">{item.position}</h3>
                          <div className="mt-2 flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          {item.description && (
                            <p className="mt-4 leading-relaxed text-white/50">{item.description}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0">{education.description}</p>
                </div>

                <ScrollArea className="h-[520px]">
                  <div className="relative ml-3 space-y-8 border-l-2 border-accent/20 pl-8 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="relative"
                    >
                      <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
                      <div className="rounded-xl border border-white/10 bg-[#232329] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(0,225,135,0.1)]">
                        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                          Formación académica
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold">Ingeniero informático</h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                          <p className="text-white/60">Universidad Central del Ecuador</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="relative">
                      <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-white/20 ring-4 ring-white/5" />
                      <h4 className="text-lg font-semibold text-white/80">Cursos completados</h4>
                    </div>

                    {education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.07, duration: 0.45, ease: 'easeOut' }}
                        className="relative"
                      >
                        <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20" />
                        <div className="rounded-xl border border-white/10 bg-[#232329] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_rgba(0,225,135,0.1)]">
                          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                            {item.duration}
                          </span>
                          <h3 className="mt-2 text-2xl font-semibold">{item.degree}</h3>
                          <div className="mt-2 flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-all hover:underline"
                            >
                              Ver certificado
                              <FaExternalLinkAlt size={12} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
