var googleApiKey = 'AIzaSyBpE0pMIOHN0AVIFKRDGwybxT18bDe3W-A';
var movieApiKey = '302293ba';
var inputEl = document.getElementById('searchInput');
var searchBtn = document.getElementById("submitBtn");
var youtubeResults = document.getElementById('youtube-results');
var movieResults = document.getElementById('movie-results');

console.log('Here we are');


// function that fetches youtube api with results based on search keyword //
var getYoutubeApi = function(event) {
    event.preventDefault();
    
    var inputVal = inputEl.value.trim();
    var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?key=' + googleApiKey + '&fields=items(id,snippet(title))&q=' + inputVal;

    fetch(youtubeUrl)
        .then(function (response) {
            return response.json();
            
        })
        .then(function (data) {
            console.log(data);

            var ytThumbnail = document.createElement('img');
            var ytTitle = document.createElement('h3');
    
            ytTitle.textContent = data.items[0].snippet.title
    
            youtubeResults.appendChild(ytTitle);
    
            console.log('event listener working');
        })

}



var getMovieApi = function(event) {
    event.preventDefault();
    
    // var movieUrl = 'http://www.omdbapi.com/?apikey=' + movieApiKey + '&t=' + inputVal;
    var inputVal = inputEl.value.trim();
    var movieUrl = 'http://www.omdbapi.com/?apikey=' + movieApiKey + '&t=' + inputVal;
    
    fetch(movieUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var movieTitle = document.createElement('h3');
        var movieYear = document.createElement('h4');
        var movieRating = document.createElement('h4');
        var moviePlot = document.createElement('p');

        movieTitle.textContent = data.Title;
        movieYear.textContent = data.Year;
        movieRating.textContent = data.Plot;
        moviePlot.textContent = data.imdbRating;

        movieResults.appendChild(movieTitle);
        movieResults.appendChild(movieYear);
        movieResults.appendChild(movieRating);
        movieResults.appendChild(moviePlot);
        
        console.log('its working again');
    })
}

// gets api when search button is clicked //
// searchBtn.addEventListener('click', getYoutubeApi);
searchBtn.addEventListener('click', getMovieApi);
