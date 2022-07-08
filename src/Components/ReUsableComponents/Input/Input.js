import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{props.label}</label>
      <input {...props} className={classes.input} />
    </div>
  )
}

export default Input;