export interface currencyConvertorType {
    formvalues : {
        amount :number,
        currency: string,
        crypto:string
    },
    changeValues: Function,
    submit: boolean,
    handleSubmit: Function
}