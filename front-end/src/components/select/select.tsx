import React from "react"
import { selectComponentType } from "./select.type"
import './select.css'
const Select = ({ submit, value, changeValues, title }: selectComponentType) => {
    return (<>
        <label ></label>
        <select className="inputFields" required={submit} value={value} onChange={(e) => changeValues(title, e.target.value)}>
            <option value={''}>Select {title}</option>
            <option value={'usd'}>USD</option>
            <option value={'eur'}>EUR</option>
        </select><br />
        {submit && !value && <span className="error">Please select valid {title}</span>}
    </>)
}
export default Select