//Quando la promessa e soddisfatta, passa i risultati al server per l'elaborazione
payment.show().then(result => {
    return process(result).then(response => {
        if (response.status === 200) {
            //La transazione ha avuto successo
            return result.complete('success');
        } else {
                //la transazione ha fallito
                return result.complete('fail');
            }
        }).catch((err) => {
        console.error('User rejected request', err.message)
    }); 
});