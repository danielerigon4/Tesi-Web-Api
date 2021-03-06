/* Si richiede una posizione accettando solo posizioni non superiori a 10 minuti che sono memorizzate nella cache. 
Se non c'è un nuovo oggetto position nella cache verra invocata la callback d'errore */

navigator.geolocation.getCurrentPosition (successCallback, errorCallback, { maximumAge: 600000 , timeout: 0 });

function  successCallback (position){
   /* Avendo specificato in "maximumAge" il range di 10 minuti la posizione è garantita al massimo per 10 minuti. 
   Usando un timeout di 0ms, se non c'è una posizione disponibile nella cache viene invocata la callback di errore 
   e non verra avviato nessun processo di acquisizione di una nuova posizione */
}

function  errorCallback (error){
   switch (error.code) {
     case error.TIMEOUT:
       /* chiamata a funzione quando non esiste una posizione appropriata nella cache */
      doFallback();
      /* prende un nuovo oggetto position */
      navigator.geolocation.getCurrentPosition (successCallback, errorCallback);
      break;
    case ... /* vengono trattati tutti gli altri casi di errore */
  };
}

function  doFallback () {
   /* Se nessuna posizione è disponibile nella cache allora sara richiamata una Fallback in una posizione predefinita */ 
}