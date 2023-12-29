export interface currencyConvertorType {
    formvalues : {
        Amount :number,
        Currency: string,
        Crypto:string
    },
    changeValues: Function,
    submit: boolean,
    handleSubmit: Function,
    cryptoList:any,
    amount: string
}