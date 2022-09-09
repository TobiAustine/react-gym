import React from 'react'
import styles from './Faq.module.css'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { useState } from 'react'


const Faq = ({Question, Answer}) => {
    const [answer, setAnswer] = useState(false)

    const onClick = (e) => {
            setAnswer(prevState =>!prevState)
    }

  return (
    <article className={styles.faq} onClick={onClick}>
        <div>
            <h4>{Question}</h4>
            <button className={styles.faq_button}>
                { !answer ? <AiOutlinePlus onClick={onClick} ></AiOutlinePlus> : <AiOutlineMinus onClick={onClick}></AiOutlineMinus>}

            </button>
        </div>
        <p style={{display: !answer ? 'none' : 'block' }}> {Answer} </p> 
        
    </article>
  )
}

export default Faq