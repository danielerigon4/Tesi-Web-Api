const details = {
    id: "ID order",
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
        amount: { currency: "USD", value: "60.00" },
    },
};