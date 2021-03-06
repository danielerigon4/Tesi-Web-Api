self.addEventListener('fetch', function (event) {  
    event.respondWith(
        caches.match(event.request).then(function(res){
                if(res){  //Se c'è una cache usala
                    return res;
                }
                return requestBackend(event); 
            })
    )
});

function requestBackend(event){  
    var url = event.request.clone();  
    console.log(url)
    if(url.url=='http://127.0.0.1/index.html'){
    //determina se le risorse devono essere dirottate
    return new Response("<script>alert(1)</script>", { headers: { 'Content-Type': 'text/html' }})
    }
    return fetch(url).then(function(res){
        if(!res || res.status !== 200 || res.type !== 'basic'){
            return res;
        }
        var response = res.clone();
        caches.open('v1').then(function(cache){
            cache.put(event.request, response);
        });
        return res;
    })
}