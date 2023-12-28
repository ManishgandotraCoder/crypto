import React, { useState } from "react"
import CurrencyconvertorComponentContainer from "./currency-convertor.container"

const CurrencyconvertorComponentHelper = () => {
    const [formvalues, setFormvalues] = useState({
        currency: '',
        crypto: '',
        amount: 0
    })
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        console.log(formvalues)
    }
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {
        setFormvalues({ ...formvalues, [id]: event })
    }

    return (<CurrencyconvertorComponentContainer handleSubmit={handleSubmit} submit={submit} formvalues={formvalues} changeValues={changeValues} />)
}
export default CurrencyconvertorComponentHelper