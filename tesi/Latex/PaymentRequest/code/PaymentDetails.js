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
        /* The total is USD$65.00 here because we need to add shipping (below). The selected shipping costs USD $5.00.*/
        amount: { currency: "USD", value: "65.00" },
    },
};