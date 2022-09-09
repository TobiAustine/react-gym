import React from 'react'
import styles from './Header.module.css'

const Header = ({title,image,children}) => {
  return (
   <header className={styles.header}>
        <div className={styles.header_container}>
            <div className={styles.header_container_bg}>
                <img src={image} alt="Background Image" />
            </div>
            <div className={styles.header_content}>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            
        </div>
   </header>
  )
}

export default Header