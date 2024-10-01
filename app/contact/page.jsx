'use client'

import { FaMapMarkedAlt, FaWhatsapp, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { motion } from 'framer-motion'
const infoList = [
  { icon: <FaWhatsapp />, title: 'Whatsapp', description: '0969719186' },
  { icon: <FaMailBulk />, title: 'Email', description: 'henry_gustavo18@hotmail.com' },
  { icon: <FaLinkedin />, title: 'LinkedIn', description: 'https://www.linkedin.com/in/henry-tipantuna/' },
  { icon: <FaMapMarkedAlt />, title: 'Sector', description: 'Pichincha - Quito' },
]
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="container mx-auto h-100%">
        <div className="flex flex-col xl:flex-row gap-[30px] w-full">
          <div
            className="flex items-center w-full
            "
          >
            <div className="info-container w-full">
              <h3 className="text-4xl text-accent">Lets work !</h3>
              <p className="text-white/60 mt-8">Podemos establecer conversación, con gusto responderé tus preguntas.</p>

              <div className="flex w-full mt-12 flex-col md:flex-row gap-8">
                <div className="w-full flex justify-center items-center lg:flex-row md:order-1 order-3">
                  <img
                    src="/assets/img/vectores/message.svg"
                    alt=""
                    className="md:w-[350px] md:h-[250px] w-[200px] h-[150px]"
                  />
                </div>
                <div className="w-full flex justify-center order-2">
                  <ul className=" ">
                    {infoList.map((info, index) => (
                      <li key={index} className="flex gap-8 items-center mt-4 w-full">
                        <div
                          className="text-accent bg-[#27272c] rounded-md w-[52px] h-[52px]
                    flex items-center justify-center"
                        >
                          <div className="text-[28px]">{info.icon}</div>
                        </div>

                        <div className="">
                          <p className="text-white/60">{info.title}</p>
                          <h3 className="md:text-xl w-full break-all ">{info.description}</h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
