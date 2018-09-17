const shippingOptions = [
    {
        id: "standard",
        label: "Ground Shipping (2 days)",
        amount: { currency: "USD", value: "5.00" },
        selected: true,
    },
    {
        id: "drone",
        label: " Drone Express (2 hours)",
        amount: { currency: "USD", value: "25.00" }
    },
];
Object.assign(details, { shippingOptions });