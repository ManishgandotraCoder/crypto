import React from "react"
import { selectComponentType } from "./select.type"
import './select.css'
const Select = ({ submit, value, changeValues, title }: selectComponentType) => {
    return (<label>
        {title}
        <select required={submit} value={value} onChange={(e) => changeValues(title, e.target.value)}>
            <option value={''}>Select currency</option>
            <option value={'usd'}>USD</option>
            <option value={'eur'}>EUR</option>

        </select>
        {submit && !value && <span className="error">Please select currency</span>}
    </label>)
}
export default Select