import React from 'react'
import styles from './Trainers.module.css'
import { trainers } from '../../data' 
import Header from '../../Components/Header/Header'
import HeaderBg from '../../images/gym4.avif'
import {FaFacebookF, FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'


const Trainers = () => {
  return (
    <div className={styles.trainers}>
      <Header title={'Our Trainers'} image={HeaderBg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt minima quidem sequi temporibus suscipit!
      </Header>
      <section>
        <div className={`container ${styles.trainers_container}`}>
        {
          trainers.map((trainer) => {
            return (
              <div key={trainer.id} className={styles.trainer}>
                    <img src={trainer.image} alt="" />
                    <h2>{trainer.name}</h2>
                    <small>{trainer.job}</small>
                <div className={styles.trainer_socials}>
                  <a href={trainer.socials[0]} target='_blank' rel='noreferrer noopener'><FaInstagram></FaInstagram></a>
                  <a href={trainer.socials[1]} target='_blank' rel='noreferrer noopener'><FaTwitter></FaTwitter></a>
                  <a href={trainer.socials[2]} target='_blank' rel='noreferrer noopener'><FaFacebookF></FaFacebookF></a>
                  <a href={trainer.socials[3]} target='_blank' rel='noreferrer noopener'><FaLinkedinIn></FaLinkedinIn></a>
                </div>
              </div>
            )
          })
        }
          
        </div>
      </section>
    </div>
  )
}

export default Trainers