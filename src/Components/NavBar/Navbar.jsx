import styles from './Navbar.module.css' 
import {CgGym} from 'react-icons/cg' 
import {Link, NavLink} from 'react-router-dom'
import {links} from "../../data"
import {RiMenu3Line} from "react-icons/ri"
import {FaTimes} from "react-icons/fa"
import { useState } from 'react'


const Navbar = () => {

     const [showMenu, setShowMenu] = useState(false)

     const onClick = () => {
        setShowMenu(prev => !prev)
     }

  return (
    <nav>
    <div className={`container ${styles.nav_container} `}>
      <Link to='/' className={styles.logo} onClick={() =>{setShowMenu(false)}}>
        <CgGym size={40} ></CgGym> <h1>GYM</h1> </Link> 

        <ul className={`${styles.nav_links} ${!showMenu ? styles.nav_links_hidden : styles.nav_links_mobile}`}>
            {
             links.map(({name,path}, index) =>{
                    return (
                        <li key={index}> 
                            <NavLink to={path} className={({isActive}) => isActive ? styles.active_nav: ''} onClick={onClick}>{name}</NavLink>
                        </li>
                    )
             })  
            }
        </ul>

        <button className={styles.nav_toggle_btn}>
            {!showMenu ? <RiMenu3Line onClick={onClick} size='25'></RiMenu3Line> : <FaTimes onClick={onClick}  size='25'></FaTimes>}
        </button>
        

      
      
      
        </div>
    </nav>
  )
}

export default Navbar