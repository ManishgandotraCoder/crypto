import React from "react"
import { buttonType } from "./button.type"
import './button.css'
const Button = ({ handleSubmit }: buttonType) => {
    return (<button onClick={(e) => handleSubmit(e)}>Convert </button>)
}
export default Button