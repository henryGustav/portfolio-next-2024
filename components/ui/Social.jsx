import Link from 'next/link'
import React from 'react'

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/henryGustav',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/henry-tipantuna/',
  },
  {
    icon: <FaWhatsapp />,
    path: 'https://api.whatsapp.com/send?phone=+593969719186&amp;text=Hola!%20podemos%20conversar%20sobre%20un%20proyecto',
  },
 
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        // <Link href={social.path} key={index} className={iconStyles}>
        //   {social.icon}
        // </Link>
        <a href={social.path} key={index} className={iconStyles} target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
