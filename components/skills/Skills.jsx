import React, { useEffect, useState } from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaJava, FaAngular, FaBootstrap, FaDocker, FaGit } from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs, SiNestjs, SiMysql, SiMongodb, SiVisualstudio, SiPostman } from 'react-icons/si'
import { PiFileSql } from 'react-icons/pi'
const skills = {
  title: 'Habilidades',
  description: `Mi conjunto de habilidades abarca desde el frontend hasta el backend, lo que me permite ofrecer soluciones completas y de calidad en cada etapa del desarrollo.`,
  skillList: [
    // front
    { icon: <FaReact />, name: 'React.js', type: 'front' },
    { icon: <SiNextdotjs />, name: 'Next.js', type: 'front' },
    { icon: <FaJs />, name: 'Javascript', type: 'front' },
    { icon: <FaAngular />, name: 'Angular', type: 'front' },
    { icon: <SiTailwindcss />, name: 'Taildwind Css', type: 'front' },
    { icon: <FaHtml5 />, name: 'Html5', type: 'front' },
    { icon: <FaCss3 />, name: 'Css3', type: 'front' },
    { icon: <FaBootstrap />, name: 'Css3', type: 'front' },

    // back
    { icon: <FaNode />, name: 'Node.js', type: 'back' },
    { icon: <SiNestjs />, name: 'Nest.js', type: 'back' },
    { icon: <FaJava />, name: 'Java', type: 'back' },
    { icon: <SiMysql />, name: 'MySql', type: 'back' },
    { icon: <SiMongodb />, name: 'MongoDb', type: 'back' },
    { icon: <PiFileSql />, name: 'SQL', type: 'back' },

    // tools
    { icon: <FaGit />, name: 'Git', type: 'tool' },
    { icon: <FaDocker />, name: 'Docekr', type: 'tool' },
    { icon: <SiVisualstudio />, name: 'VsCode', type: 'tool' },
    { icon: <SiPostman />, name: 'Postman', type: 'tool' },
  ],
}
const Skills = () => {
  const [skillsFront, setskillsFront] = useState([])
  const [skillsBack, setskillsBack] = useState([])
  const [skillsTools, setskillsTools] = useState([])
  useEffect(() => {
    setskillsFront(skills.skillList.filter((item) => item.type === 'front'))
    setskillsBack(skills.skillList.filter((item) => item.type === 'back'))
    setskillsTools(skills.skillList.filter((item) => item.type === 'tool'))
  }, [skills])

  const getSkills = (skillList) => {
    return (
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 xl:gap-4">
        {skillList.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  className="w-full h-[80px] bg-[#232329] rounded-xl flex
                    justify-center items-center
                    "
                >
                  <div
                    className="text-5xl hover:!text-accent hover:transition-all 
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
    )
  }
  return (
    <div>
      <div className="flex flex-col gap-[30px] mb-8">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="max-w=[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
        </div>
      </div>

      <h3 className="text-lg">Front - end</h3>
      <div>{getSkills(skillsFront)}</div>
      <div className="mt-8">
        <h3 className="text-lg">Back - end</h3>
        {getSkills(skillsBack)}
      </div>
      <div className="mt-8">
        <h3 className="text-lg">Herramientas</h3>
        {getSkills(skillsTools)}
      </div>
    </div>
  )
}

export default Skills
