import React from 'react'
import {Link} from 'react-router-dom'
import styles from './NotFound.module.css' 

const NotFound = () => {
  return (
    <div className={`container ${styles.notfound}`}>
      <h1>Oops, PAGE NOT FOUND!</h1>
      <h2>Please go <Link className={styles.home} to='/'> Home</Link> </h2>
    </div>
  )
}

export default NotFound