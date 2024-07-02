'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaNode } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import './index.css'
import { ScrollArea } from '@/components/ui/scroll-area'
const about = {
  title: 'About me',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quo architecto odio reprehenderit beatae delectus omnis explicabo neque amet, 
    nisi, inventore doloremque veniam, ut sunt. 
    Laboriosam et natus odio unde?`,
  info: [
    { fieldName: 'Name', fieldValue: 'Henry' },
    { fieldName: 'Phone', fieldValue: '(+593) 969719186' },
    { fieldName: 'Experience', fieldValue: '4+ Years' },
    { fieldName: 'Residencia', fieldValue: 'Quito - Ecuador' },
    { fieldName: 'Email', fieldValue: 'henry_gustavo18@hotmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experience',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quo architecto odio reprehenderit beatae delectus omnis explicabo neque amet, 
    nisi, inventore doloremque veniam, ut sunt. 
    Laboriosam et natus odio unde?`,
  items: [
    { company: 'Iuvity', position: 'Full stack developer', duration: '2022 - Present' },
    { company: 'Tecnomega', position: 'Full stack developer', duration: '2022 - Present' },
    { company: 'Easybox', position: 'Full stack developer', duration: '2022 - Present' },
    { company: 'Easybox', position: 'Full stack developer', duration: '2022 - Present' },
    { company: 'Easybox', position: 'Full stack developer', duration: '2022 - Present' },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quo architecto odio reprehenderit beatae delectus omnis explicabo neque amet, 
    nisi, inventore doloremque veniam, ut sunt. 
    Laboriosam et natus odio unde?`,
  items: [
    { institution: 'Universidad central del ecuador', degree: 'Ingeniero informatico', duration: '2022 - Present' },
    { institution: 'Dev talles', degree: 'Nest js', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'React js', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'Css professional ', duration: '2022 - Present' },
    { institution: 'Udemy', degree: 'Git control versions', duration: '2022 - Present' },
    { institution: 'CEC', degree: 'Java 1.8', duration: '2022 - Present' },
  ],
}

const skills = {
  title: 'Skills',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quo architecto odio reprehenderit beatae delectus omnis explicabo neque amet, 
    nisi, inventore doloremque veniam, ut sunt. 
    Laboriosam et natus odio unde?`,
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
      animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.5, ease: 'easeInOut' } }}
      className="min-h-[80vh] flex  justify-center py-24 xl:py-12  xl:items-start"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="grid xl:grid-cols-[30%_70%] gap-8">
          <TabsList className="flex flex-col xl:pt-10 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me`</TabsTrigger>
          </TabsList>
          <div className="w-full mt-[5rem] xl:mt-[-2.5rem] ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
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
              skills
            </TabsContent>

            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
