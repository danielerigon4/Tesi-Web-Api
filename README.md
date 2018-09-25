Web APIs Security

Negli ultimi decenni il World Wide Web è diventanto sempre più presente nella quotidianità di ogni individuo e, come la maggior parte delle cose, presenta aspetti positivi e negativi;
essendo il web un mondo vastissimo, sono numerosi i rischi presenti al suo interno.

L'obiettivo di questa tesi è spiegare i problemi di sicurezza legati alle APIs Web prendendo come threat model un Web attacker il quale può avere due differenti scenari: il primo, più semplice, è un sito web personale nel quale immettiamo le informazioni, per quanto riguarda la PaymentRequest API \cite{rif1}, o accettiamo di condividere la nostra posizione nel caso della Geolocation API \cite{rif2}; il secondo scenario mostra come un Web attacker possa aggiungere propri contenuti all'interno di pagine web esterne al proprio sito riuscendo comunque a rubare informazioni sensibili.

Le API sono delle interfacce che gli sviluppatori e i programmatori possono utilizzare per espandere le funzionalità di programmi o applicazioni, ad esempio facendo interagire due programmi, o due piattaforme, o un programma e una piattaforma, che altrimenti sarebbero state incompatibili.

Un esempio sono le API di Google Maps, messe a disposizione di tutti gli sviluppatori che le volessero utilizzare per un loro programma o piattaforma web, ad esempio per realizzare mappe personalizzate o per integrarle in siti web per servizi di ricerca georeferenziati o usarle all'interno di applicazioni per smartphone e/o tablet.
Un altro esempio sono le API di Facebook, le quali danno la possibilità agli sviluppatori di usare alcune delle proprie funzionalità per realizzare delle applicazioni da usare poi all'interno del social network, facilitando di molto la programmazione delle nuove app o funzionalità.

Queste API facilitano di molto la programmazione e sono utili nell'integrazione di piattaforme differenti tra loro, ma presentano anche delle vulnerabilità.

Questo problema viene studiato nella tesi prendendo in esame un piccolo set di API, mostrando come siano state trovate delle vulnerabilità di sicurezza e privacy all'interno di queste sottolineando come possano venire rubate da un web attacker le informazioni sensibili degli utenti ed essere usate poi da terzi.

La tesi si divide in tre parti corrispondenti alle tre API prese in esame. 

La prima è la Geolocation API la quale, utilizzata nei siti web o nelle web app, serve a tracciare la posizione dell'utente, con possibili rischi di problemi di privacy poichè un Web attacker potrebbe tracciare la posizione dell'utente e rubarla.

La seconda API studiata è la PaymentRequest API, la quale salva le informazioni dell'utente, sia personali che di pagamento, cosi da poterle riutilizzare automaticamente senza doverle reinserirle ogni qualvolta se ne ha bisogno, mostrando però che queste possono essere intercettate e rubate da un Web attacker.

L'ultimo argomento preso in esame, che è anche il più complesso, riguarda i Service Worker \cite{rif3}, i quali vengono usati principalmente per il caching in modo da migliorare l'esperienza utente, mostrando però anche come questi possano essere utilizzati in modo malevolo per rubare informazioni dell'utente intercettando le richieste di rete.

Tutto il codice presente nella tesi è reperibile al seguente repository GitHub \url{https://github.com/danielerigon4/Tesi-Web-Api}.
