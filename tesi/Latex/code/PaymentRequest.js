async function doPaymentRequest() {
    try{
        const request = new PaymentRequest(methodData, details, options);
        request.onshippingaddresschange = ev => ev.updateWith(details);
        request.onshippingoptionchange = ev => ev.updateWith(details);
        const response = await request.show();
        await validateResponse(response);
    } catch (err){
            console.error(err);
        }
}
async function validateResponse(response){
    try {
        if (await checkAllValuesAreGood(response)){
            await response.complete("success");
        } 
        else{
            await response.complete("fail");
        }
    } catch (err){
            await response.complete("fail");
        }
}
doPaymentRequest();