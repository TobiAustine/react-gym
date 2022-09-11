import React from 'react'
import styles from './Testimonials.module.css'
import Testimonial from '../Testimonial/Testimonial'
import SectionHead from '../SectionHead/SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from '../../UI/Card'
import { testimonials } from '../../data'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




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
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.testimonials_container}`}>
      <SectionHead icon={<ImQuotesLeft size={32}></ImQuotesLeft>} title='Testimonials' className={styles.testimonials_head}></SectionHead>
      <Card className={styles.testimonial} data-aos="fade-right">
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