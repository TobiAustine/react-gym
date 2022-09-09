import React from 'react'
import styles from "./Home.module.css"
import Header from '../../Components/MainHeader/MainHeader'
import Programs from '../../Components/Programs/Programs'
import Values from '../../Components/Values/Values'
import Faqs from '../../Components/FAQs/Faqs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    // <div className={`container ${styles.home} `}>
      <div>
      <Header></Header>
      <Programs></Programs>
      <Values></Values>
      <Faqs></Faqs>
      <Testimonials></Testimonials>
      {/* <Footer></Footer> */}
    
    </div>
  )
}

export default Home