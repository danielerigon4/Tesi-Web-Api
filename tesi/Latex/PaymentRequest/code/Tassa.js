// Credit card incurs a $3.00 processing fee.
const creditCardFee = {
    label: "Credit card processing fee",
    amount: { currency: "USD", value: "3.00" },
};
// Modifiers apply when the user chooses to pay with a credit card.
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