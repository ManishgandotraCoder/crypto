import React from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues }: currencyConvertorType) => {

    return (
        <form className="head" onSubmit={(e) => handleSubmit(e)}>
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
            {/* Amount field */}
            <label>
                Amount:
                <input type="number" required={submit} value={formvalues.amount} onChange={(e) => changeValues('amount', e.target.value)} />
                {submit && !formvalues.amount && <span className="error">Please select valid Amount</span>}

            </label>
            {/* currency field */}

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