import React from 'react'
import styles from "./Plans.module.css"
import Header from '../../Components/Header/Header'
import HeaderBg from '../../images/gym4.avif'
import img1 from '../../images/gym7.avif'
import { plans } from '../../data'
import Plan from '../../Components/Plan/Plan'
import Card from '../../UI/Card'

const Plans = () => {
  return (
    <div className={styles.plans}>
      <Header title={'Plans'} image={HeaderBg}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit, rem itaque officia magnam similique!
      </Header>
      <section>
      <div className={`container ${styles.plans_container}`}>
          {plans.map(plan =>{
            return(
              <Card key={plan.id} className={styles.plan}>
              <h3>{plan.name}</h3>
              <small>{plan.desc}</small>
              <h1>{`N${plan.price}`}</h1><h2>/mo</h2>
              </Card>
            )
          })}
      </div>
      </section>
    </div>
  )
}

export default Plans