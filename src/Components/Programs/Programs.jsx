import React from 'react'
import styles from './Programs.module.css'
import { programs } from '../../data'
import {FaCrown} from 'react-icons/fa'
import SectionHead from '../SectionHead/SectionHead'
import {Link} from 'react-router-dom'
import Card from '../../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'

const Programs = () => {
  return (

    <section className={styles.programs}>
    <div className={`container ${styles.programs_container}`}> 
        <SectionHead icon={<FaCrown size={30}></FaCrown>} title={'Programs'}></SectionHead>
    
    <div className={styles.programs_wrapper}>
        {programs.map((program) =>{
        return (
            <Card key={program.id} className={styles.program}>
                <span>
                {program.icon}
                </span>
                <h4>{program.title}</h4>
                <small>{program.info}</small>
                <Link to={program.path} className='btn sm'>Learn More <AiFillCaretRight></AiFillCaretRight> </Link>
            </Card>



    )
})}
    </div>

    </div>
    </section>
        
    
  )
}

export default Programs


