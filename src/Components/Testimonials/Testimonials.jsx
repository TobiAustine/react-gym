import React from 'react'
import styles from './Testimonials.module.css'
import Testimonial from '../Testimonial/Testimonial'
import SectionHead from '../SectionHead/SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from '../../UI/Card'
import { testimonials } from '../../data'
import { useState } from 'react'




const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const {name, quote, job, image} = testimonials[index]

  const slideRight = () => {
    setIndex(index + 1)
    if(index >= testimonials.length -1 ){
      setIndex(0)
    }
  }

  const slideLeft = () => {
    setIndex(index - 1)
    if(index <= 0){
      setIndex(testimonials.length - 1)
    }
  }

  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.testimonials_container}`}>
      <SectionHead icon={<ImQuotesLeft size={32}></ImQuotesLeft>} title='Testimonials' className={styles.testimonials_head}></SectionHead>
      <Card className={styles.testimonial}>
        <div className={styles.testimonial_image}>
          <img src={image} alt={name} />
        </div>
        <p className={styles.testimonial_quote}>
          {quote}
        </p>
        
          <h2>{name}</h2>
          <small className={styles.testimonial_title}>{job}</small>
        
        
      </Card>
      <div className={styles.testimonials_btn_container}>
      <button className={styles.testimonials_btn} onClick={slideLeft}>
          <IoIosArrowDropleftCircle></IoIosArrowDropleftCircle>
      </button>
      <button className={styles.testimonials_btn} onClick={slideRight}>
          <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
      </button>

      </div> 



      </div>
     

    </section>
  )
}

export default Testimonials