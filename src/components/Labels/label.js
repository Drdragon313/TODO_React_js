import React from 'react'
import classes from "./label.module.scss"
const Label = ({text}) => {
  return (
    <label className={classes.label} >{text}</label>
  )
}
export default Label