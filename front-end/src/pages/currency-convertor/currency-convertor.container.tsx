import React from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import Button from "../../components/button/button";
const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues }: currencyConvertorType) => {
    const currencyList = [
        { title: "US Dollar", id: "usd" },
        { title: "Japanese Yen", id: "jpy" },
        { title: "Euro", id: "eur" },
        { title: "Bitcoin", id: "btc" },
        { title: "Etherium", id: "eth" },
        { title: "Binance Coin", id: "bnb" },

    ]
    return (
        <div className="signupSection">

            <form noValidate onSubmit={(e) => handleSubmit(e)} className="signupForm" name="signupform">
                <h2>Crypto Conversion</h2>
                <ul className="noBullet">
                    <li>
                        <Select value={formvalues.Crypto} title={'Crypto'} arr= {[]} submit={submit} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.Amount} title={'Amount'} submit={submit} type={'number'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Select value={formvalues.Currency} title={'Currency'} arr={currencyList} submit={submit} changeValues={changeValues} />
                    </li>
                    <li id="center-btn">
                        <Button handleSubmit={handleSubmit} />
                        {/* <input type="submit" id="join-btn" name="join" alt="Join" value="Join" /> */}
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default CurrencyConvertorContainerComponent;