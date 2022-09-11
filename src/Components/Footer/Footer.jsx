import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
import {CgGym} from 'react-icons/cg' 
import {FaTwitter, FaLinkedin, FaFacebookF, FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
   <footer>
    <div className={`container ${styles.footer_container}`}>
    <article>
        <Link to='/' className={styles.logo}><CgGym size={35}></CgGym></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, corporis dignissimos fuga laudantium eos ad. Inventore eius asperiores reprehenderit molestias.</p>
        <div className={styles.footer_socials}>
            <a href="http://twitter.com" target='_blank' rel='noreferrer noopener'><FaTwitter></FaTwitter></a>
            <a href="http://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF></FaFacebookF></a>
            <a href="http://Instagram.com" target='_blank' rel='noreferrer noopener'><FaInstagram></FaInstagram></a>
            <a href="http://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin></FaLinkedin></a>
        </div>
    </article>

    <article>
        <h4>Permalinks</h4>
        <Link to='/about'> About</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/plans'>Plans</Link>
        <Link to='/trainers'>Trainers</Link>
        <Link to='/contact'>Contact</Link>
    </article>

    <article>
        <h4>Insights</h4>
        <Link to='/s'> Blog</Link>
        <Link to='/s'> Case Studies</Link>
        <Link to='/s'> Events</Link>
        <Link to='/s'> Communities</Link>
       
    </article>

    <article>
        <h4>Get In Touch</h4>
        <Link to='/contact'> Contact</Link>
        <Link to='/s'> Support</Link>
    </article>
    </div>
   
    <div className={styles.footer_copyright}>
      <small> UI design from Egator, Developed by @ThatDivDoctor {new Date().getFullYear()}</small> 

    </div>

   </footer>
  )
}

export default Footer