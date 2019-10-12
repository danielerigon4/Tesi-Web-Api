// PaymentMethodData
var methodData = [
    {     
        supportedMethods: ['basic-card'],     
        data: {          
            supportedNetworks: ['visa', 'mastercard',                               'amex'],
            supportedTypes: ['credit']                 
        }    
    }     
];

//PaymentDetails
var details =  {
    displayItems: [
        {
            label: "Sub-total",
            amount: { currency: "USD", value : "100.00" }
        },
        {
            label: "Sales Tax",
            amount: { currency: "USD", value : "9.00" }
        }
    ],
    total:  {
        label: "Total due",
        amount: { currency: "USD", value : "109.00" }
    }
};	
//PaymentOptions
var options = {
    requestShipping: true 
};

//PaymentRequest
var payment = new PaymentRequest(methodData, details, options);