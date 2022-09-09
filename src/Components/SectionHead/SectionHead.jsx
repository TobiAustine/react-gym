import React from 'react'
import Styles from './SectionHead'


const SectionHead = ({icon, title, className}) => {
  return (
    <div className={`section_head ${className}`}>
    <span> {icon}</span>
    <h1>{title}</h1>  
   </div>
  )
}

export default SectionHead