import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './About.module.css'
import HeaderBg from '../../images/gym4.avif'
import img1 from '../../images/gym7.avif'
import img2 from '../../images/gym3.avif'
import img3 from '../../images/gym6.avif'

const About = () => {
  return (
    <div className={styles.about}> 
    <Header title={'About Us'} image={HeaderBg}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis iusto repellendus quidem tenetur, facere cumque.
    </Header> 
    <section className={styles.about_story}>
      <div className={`container ${styles.about_story_container}`}>
        <div className={styles.section_image}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.section_content}>
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
        </div>

      </div>
    </section>
 
    <section className={styles.about_vision}>
      <div className={`container ${styles.about_vision_container}`}>
        
        <div className={styles.section_content}>
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
        </div>
        <div className={styles.section_image}>
          <img src={img2} alt="" />
        </div>

      </div>
    </section>


    <section className={styles.about_mission}>
      <div className={`container ${styles.about_mission_container}`}>
        <div className={styles.section_image}>
          <img src={img3} alt="" />
        </div>
        <div className={styles.section_content}>
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore delectus excepturi voluptate ipsa, architecto reiciendis in ut autem ea!</p>
        </div>

      </div>
    </section>



    




    </div>
  )
}

export default About