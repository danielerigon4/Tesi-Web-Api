const methodData = [
    {
        supportedMethods: "basic-card",
        data: {
            supportedNetworks: ["visa", "mastercard"],
            supportedTypes: ["debit", "credit"],
        },
    },
    {
        supportedMethods: "https://example.com/bobpay",
        data: {
            merchantIdentifier: "XXXX",
            bobPaySpecificField: true,
        },
    },
];