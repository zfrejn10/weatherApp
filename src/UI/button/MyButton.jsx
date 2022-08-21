import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({title, ...props}) => {
    return (
        <button {...props} className={classes.btn}>{title}</button>
    )
}

export default MyButton