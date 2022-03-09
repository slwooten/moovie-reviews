var yelpApi = 'v2SPvG9GB-qDSzqLNrXWbM5SikSr65C-F1MoorG99B_VnQDnOpyVPGyhwK4eDeUOo3JYtBB19do3aqVKWMo3StM8Dub-kzwQor5Txbf8YwMZqU72Uz7rhQOg5J4nYnYx';

console.log(yelpUrl);

var getYelpApi = function() {
    var yelpUrl = 'https://api.yelp.com/v3  /businesses/search';

    fetch(yelpUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })

}