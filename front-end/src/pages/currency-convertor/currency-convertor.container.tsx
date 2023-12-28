import React from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import Button from "../../components/button/button";
const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues }: currencyConvertorType) => {

    return (
        <form noValidate className="head" onSubmit={(e) => handleSubmit(e)}>
            <Select value={formvalues.Crypto} title={'Crypto'} submit={submit} changeValues={changeValues} />
            <Input value={formvalues.Amount} title={'Amount'} submit={submit} type={'number'} changeValues={changeValues} />
            <Select value={formvalues.Currency} title={'Currency'} submit={submit} changeValues={changeValues} />
            <Button handleSubmit={handleSubmit} />
        </form>
    );
}

export default CurrencyConvertorContainerComponent;