import React from "react"
import './input.css'
import { inputComponent } from "./input.type"
const Input = ({ submit, value, changeValues, title, type }: inputComponent) => {
    return (<label>
        {title}:
        <input type={type} required={submit} value={value} onChange={(e) => changeValues('amount', e.target.value)} />
        {submit && !value && <span className="error">Please select valid Amount</span>}

    </label>

    )
}
export default Input