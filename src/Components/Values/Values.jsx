import React from 'react'
import  styles from './Values.module.css'
import SectionHead from '../SectionHead/SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../../data'
import Card from '../../UI/Card'
import Image from '../../images/gym6.avif'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Values = () => {
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
   
        <section className={styles.values}>
            <div className={`container ${styles.values_container}`}>
                
                <div className={styles.values_left} data-aos="fade-right">
                    <img src={Image} alt="value image" />
                </div>
                <div className={` ${styles.values_right} $` } data-aos="fade-left">
                <SectionHead icon={<GiCutDiamond size={30}></GiCutDiamond>} title={'Values'}></SectionHead>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum amet, minus sequi perferendis tenetur!</p>
                   
                   <div className={styles.value_wrapper}>
                    {values.map(value =>{
                        return(
                            <Card className={styles.values_value}  key={value.id}>
                                <span> {value.icon}</span>
                                <h4>{value.title}</h4>
                                <small>{value.desc}</small>
                            </Card>
                        )
                    }) }
                    </div>
                </div>
            </div>
        </section>
  
  )
}

export default Values