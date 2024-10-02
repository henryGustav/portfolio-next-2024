'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaNode } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'

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
    { institution: 'Dev talles', degree: 'Nest js', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'React js', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'Css professional ', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'Git control versions', duration: '2022 - Present' },
    { institution: 'CEC', degree: 'Java 1.8', duration: '2022 - Present' },
  ],
}

const skills = {
  title: 'Habilidades',
  description: `Mi conjunto de habilidades abarca desde el frontend hasta el backend, lo que me permite ofrecer soluciones completas y de calidad en cada etapa del desarrollo.`,
  skillList: [
    { icon: <FaHtml5 />, name: 'Html5' },
    { icon: <FaCss3 />, name: 'Css3' },
    { icon: <FaJs />, name: 'Javascript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Taildwind Css' },
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
                    <span className="text-accent">2012-2018</span>
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
            {/* TODO categorizar las skills (font - back - etc) */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] mb-8">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w=[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-full h-[150px] bg-[#232329] rounded-xl flex
                        justify-center items-center
                        "
                        >
                          <div
                            className="text-6xl hover:!text-accent hover:transition-all 
                          hover:duration-300"
                          >
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white/80 w-full px-4 rounded-[5px] text-primary">
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
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
