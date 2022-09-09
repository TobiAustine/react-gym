import React from 'react'
import styles from "./Contact.module.css"
import Header from '../../Components/Header/Header'
import HeaderBg from '../../images/gym4.avif'
import img1 from '../../images/gym7.avif'
import img2 from '../../images/gym3.avif'
import img3 from '../../images/gym6.avif'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header title={'Contact Us'} image={img3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic laboriosam exercitationem dolorum deleniti, aliquid dolores!
      </Header>
      <section>
        <div className={`container ${styles.contact_socials}`}>
        <a href="tel:+234 8066821089" target='_blank' rel='noreferrer noopener'><BsFillTelephoneFill></BsFillTelephoneFill> </a>
        <a href="mailto: tobyaustine1@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail></MdEmail></a>
        <a href="" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp></IoLogoWhatsapp></a>
        </div>
      </section>
    </div>
  )
}

export default Contact