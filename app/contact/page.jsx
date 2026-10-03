'use client'

import { FaMapMarkedAlt, FaWhatsapp, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { motion } from 'framer-motion'
const infoList = [
  { icon: <FaWhatsapp />, title: 'WhatsApp', description: '0969719186' },
  { icon: <FaMailBulk />, title: 'Email', description: 'henry_gustavo18@hotmail.com' },
  { icon: <FaLinkedin />, title: 'LinkedIn', description: 'https://www.linkedin.com/in/henrytipantuna/' },
  { icon: <FaMapMarkedAlt />, title: 'Ubicación', description: 'Quito, Ecuador' },
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
            className="flex items-center w-full "
          >
            <div className="w-full info-container">
              <h3 className="text-4xl text-accent">¡Trabajemos juntos!</h3>
              <p className="mt-8 text-white/60">
                Conversemos sobre tus proyectos: con gusto responderé cualquier inquietud.
              </p>

              <div className="flex flex-col w-full gap-8 mt-12 md:flex-row">
                <div className="flex items-center justify-center order-3 w-full lg:flex-row md:order-1">
                  <img
                    src="/assets/img/vectores/message.svg"
                    alt=""
                    className="md:w-[350px] md:h-[250px] w-[200px] h-[150px]"
                  />
                </div>
                <div className="flex justify-center order-2 w-full">
                  <ul className="">
                    {infoList.map((info, index) => (
                      <li key={index} className="flex items-center w-full gap-8 mt-4">
                        <div
                          className="text-accent bg-[#27272c] rounded-md min-w-[52px] h-[52px]
                    flex items-center justify-center"
                        >
                          <div className="text-[28px]">{info.icon}</div>
                        </div>

                        <div className="">
                          <p className="text-white/60">{info.title}</p>
                          <h3 className="w-full break-all md:text-lg ">{info.description}</h3>
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
