import React from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
import Input from "../../components/input";
const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues }: currencyConvertorType) => {

    return (
        <form noValidate className="head" onSubmit={(e) => handleSubmit(e)}>
            <label>
                Crypto:
                <select required={submit} value={formvalues.crypto} onChange={(e) => changeValues('crypto', e.target.value)}>
                    <option value={''}>Select crypto</option>
                    <option value={'bitcoin'}>Bitcoin</option>
                    <option value={'ether'}>Ether</option>
                    <option value={'solana'}>solana</option>

                </select>
                {submit && !crypto && <span className="error">Please select crypto</span>}
            </label>
            <Input value={formvalues.amount} title={'Amount'} submit={submit} type={'number'} changeValues={changeValues} />
            <label>
                Currency:
                <select required={submit} value={formvalues.currency} onChange={(e) => changeValues('currency', e.target.value)}>
                    <option value={''}>Select currency</option>
                    <option value={'usd'}>USD</option>
                    <option value={'eur'}>EUR</option>

                </select>
                {submit && !formvalues.currency && <span className="error">Please select currency</span>}
            </label>

            <button>Convert </button>
        </form>
    );
}

export default CurrencyConvertorContainerComponent;