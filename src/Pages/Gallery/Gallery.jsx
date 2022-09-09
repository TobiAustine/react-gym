import React from 'react'
import styles from "./Gallery.module.css"
import Header from '../../Components/Header/Header'
import HeaderBg from '../../images/gym4.avif'
import img1 from '../../images/gym1.avif'
import img2 from '../../images/gym2.avif'
import img3 from '../../images/gym3.avif'
import img4 from '../../images/gym4.avif'
import img5 from '../../images/gym5.avif'
import img6 from '../../images/gym6.avif'
import img7 from '../../images/gym7.avif'
import img8 from '../../images/gym8.avif'



const Gallery = () => {
  


  return (
    <div className={styles.gallery}>
      <Header title={'Gallery'} image={HeaderBg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam obcaecati molestiae, suscipit sit asperiores?
      </Header>
      <div className={`container ${styles.gallery_container}`}>
        <h1>Galleryyyyyy</h1>
        <div className={styles.images_wrapper}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery