const details = {
    id: "super-store-order-123-12312",
    displayItems: [
        {
            label: "Sub-total",
            amount: { currency: "USD", value: "55.00" },
        },
        {
            label: "Sales Tax",
            amount: { currency: "USD", value: "5.00" },
            type: "tax"
        },
    ],
    total: {
        label: "Total due",
        /* Il totale è $60.00 perché dobbiamo aggiungere i costi di spedizione di $5.00.*/
        amount: { currency: "USD", value: "60.00" },
    },
};