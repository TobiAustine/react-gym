import React from 'react'
import  styles from './Values.module.css'
import SectionHead from '../SectionHead/SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../../data'
import Card from '../../UI/Card'
import {FaCrown} from 'react-icons/fa'
import Image from '../../images/gym6.avif'

const Values = () => {
  return (
   
        <section className={styles.values}>
            <div className={`container ${styles.values_container}`}>
                
                <div className={styles.values_left}>
                    <img src={Image} alt="value image" />
                </div>
                <div className={` ${styles.values_right} $`}>
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