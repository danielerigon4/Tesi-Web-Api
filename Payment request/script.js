/*La sequenza methodData contiene PaymentMethodData contenenti gli identificativi del metodo di pagamento per i metodi di pagamento 
accettati dal sito Web e qualsiasi dato specifico del metodo di pagamento associato .*/
const methodData = [
    {
      supportedMethods: 'basic-card',
      data: {
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        supportedTypes: ['credit']
      }
    }
];

const subtotal = 44.00;
const tax = 4.40;
/*I details contengono informazioni sulla transazione che l'utente è invitato a completare.*/
const details = {
  total: {
    label: 'Total due',
    amount: { currency: 'USD', value: (subtotal + tax).toFixed(2) }
  },
  displayItems: [{
    label: 'Sub-total',
    amount: { currency: 'USD', value: subtotal.toFixed(2) }
  }, {
    label: 'Shipping',
    amount: { currency: 'USD', value: '0.00' },
    pending: true
  }, {
    label: 'Sales Tax',
    amount: { currency: 'USD', value: tax.toFixed(2) }
  }],
/*aggiungere opzioni di spedizione ai details.*/  
shippingOptions: [{
    id: 'NO_RUSH',
    label: 'No-Rush Shipping',
    amount: { currency: 'USD', value: '0.00' },
    selected: true
  }, {
    id: 'STANDARD',
    label: 'Standard Shipping',
    amount: { currency: 'USD', value: '5.00' }
  }, {
    id: 'EXPEDITED',
    label: 'Two-Day Shipping',
    amount: { currency: 'USD', value: '7.00' }
  }]
};

/* Options contiene informazioni che lo sviluppatore ha bisogno dall'utente per eseguire il pagamento. */
const options = { requestShipping: true };
/* Prima che l'utente accetti di effettuare il pagamento, al sito viene data l'opportunità di aggiornare la 
richiesta di pagamento in risposta all'input dell'utente. Ciò può includere, ad esempio, la fornitura di 
ulteriori opzioni di spedizione (o la modifica dei costi), la rimozione di articoli che non possono essere 
spediti a un determinato indirizzo, ecc. */
const request = new PaymentRequest(methodData, details, options);

//Listen to a shipping option change
request.addEventListener('shippingoptionchange', function(changeEvent) {
  changeEvent.updateWith(new Promise(function(resolve) {
    onShippingOptionChange(request, details, subtotal, tax);
    resolve(details);
  }));
});

/* Dopo aver raccolto tutti i bit di informazioni prerequisite, ora possiamo costruirne uno 
PaymentRequest e richiedere che il browser lo presenti all'utente */
request
  .show()
  .then(function(result) {
    return result.complete('success');
  })
  .catch(function(err) {
    console.error('Uh oh, bad payment response!', err.message);
  });



var onShippingOptionChange = function(pr, details, subtotal, tax) {
  const shippingOption = details.shippingOptions.find(function(opt) {
    return opt.id === pr.shippingOption;
  });

  if (!shippingOption) {
    return;
  }
  console.log(`shippingOptionChange: ${shippingOption.label}`);

  const shippingCost = Number(shippingOption.amount.value);
  const totalAmount = subtotal + shippingCost + tax;

  details.displayItems = [{
    label: 'Sub-total',
    /*aggiungere una tassa di elaborazione per l'utilizzo di una carta di credito. Si noti che richiede il ricalcolo del totale. */
    amount: { currency: 'USD', value: subtotal.toFixed(2) }
  }, {
    label: 'Shipping',
    amount: { currency: 'USD', value: shippingCost.toFixed(2) },
    pending: false
  }, {
    label: 'Sales Tax',
    amount: { currency: 'USD', value: tax.toFixed(2) }
  }];

  details.total.amount.value = Math.max(0, totalAmount).toFixed(2);
};    