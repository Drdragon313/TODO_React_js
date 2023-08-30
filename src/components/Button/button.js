import React from 'react'
import classes from "./button.module.scss"
const Button=({ onClick, text })=>{
  return (
    <button onClick={onClick} className={classes.button}>
         {text}
    </button>
  )
}

export default Button