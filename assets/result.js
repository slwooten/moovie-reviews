var urlParams =
    window
        .location
        .href
        .split('?')[1]
        ?.split('&')
        .map(e=>
            ({[e.split('=')[0]]:e.split('=')[1]})
        )||[];

if(urlParams.length){
    console.log(urlParams);
    
}