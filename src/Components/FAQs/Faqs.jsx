import React from 'react'
import styles from './Faqs.module.css'
import SectionHead from '../SectionHead/SectionHead'
import { faqs } from '../../data'
import {FaQuestion} from 'react-icons/fa'
import { useState } from 'react'
import Faq from '../FAQ/Faq'

const Faqs = () => {

  return (
   <section className={`container ${styles.faqs_container} `}>
    <SectionHead icon={<FaQuestion color='var(--secondary-color)' size={30}></FaQuestion>} title={'FAQs'}>
     </SectionHead> <div className={styles.faqs_wrapper}>
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