import React from 'react'
import classes from "./textbox.module.scss"
const Textbox = ({type,placeholder})=> {
  return (
    <input className={classes.textbox} type={type} placeholder={placeholder}></input>
  )
}

export default Textbox