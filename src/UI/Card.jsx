import React from 'react'
import styles from './Card.module.css'

const Card = ({className, children }) => {
  return (
   <article className={`card ${className}`}>
    {children}
   </article>
  )
}

export default Card