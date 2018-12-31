// La carta di credito comporta una commissione di $3.00 
const creditCardFee = {
    label: "Credit card processing fee",
    amount: { currency: "USD", value: "3.00" },
};
//  I modifiers si applicano quando l'utente sceglie di pagare con una carta di credito
const modifiers = [
    {
        additionalDisplayItems: [creditCardFee],
        supportedMethods: "basic-card",
        total: 
        {
            label: "Total due",
            amount: { currency: "USD", value: "68.00" },
        },
        data: 
        {
            supportedTypes: "credit",
        },
    },
];
Object.assign(details, { modifiers });