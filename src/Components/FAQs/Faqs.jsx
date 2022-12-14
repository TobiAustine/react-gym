import React from 'react'
import styles from './Faqs.module.css'
import SectionHead from '../SectionHead/SectionHead'
import { faqs } from '../../data'
import {FaQuestion} from 'react-icons/fa'
import { useState } from 'react'
import Faq from '../FAQ/Faq'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Faqs = () => {
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
   <section className={`container ${styles.faqs_container} `}>
    <SectionHead icon={<FaQuestion color='var(--secondary-color)' size={30}></FaQuestion>} title={'FAQs'}>
     </SectionHead> 
     <div className={styles.faqs_wrapper} data-aos="fade-up">
        {faqs.map((faq) =>{
            return (
              <Faq key={faq.id} Question={faq.question} Answer={faq.answer}></Faq>
        )
        })}
      </div>
   </section>
  )
}

export default Faqs