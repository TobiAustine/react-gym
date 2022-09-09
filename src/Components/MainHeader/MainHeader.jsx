import React from 'react'
import Styles from './MainHeader.module.css'
import {Link} from 'react-router-dom'
import headerImage from '../../images/gym2.avif'

const MainHeader = () => {
  return (
   <header className={Styles.main_header}>
    <div className={`container ${Styles.main_header_container}`}>

      <div className={Styles.main_header_left}>
          <h4>#90DaysOfWorkOut</h4>
          <h1>Get Fit! Get Great! Become a Legend!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim libero voluptas vero, magnam dolores.</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
      </div>

      <div className={Styles.main_header_right}>
        <div className={Styles.main_header_circle}></div>
        <div className={Styles.main_header_image}>
          <img src={headerImage} alt="Main Header Image" />
        </div> 


      </div>

      </div>




   </header>
  )
}

export default MainHeader 