import React from "react"
import './input.css'
import { inputComponentType } from "./input.type"
const Input = ({ submit, value, changeValues, title, type }: inputComponentType) => {
    return (<label>
        {title}:
        <input type={type} required={submit} value={value} onChange={(e) => changeValues(title, e.target.value)} />
        {submit && !value && <span className="error">Please select valid Amount</span>}
    </label>

    )
}
export default Input