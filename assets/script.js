var googleApiKey = 'AIzaSyBpE0pMIOHN0AVIFKRDGwybxT18bDe3W-A';
var movieApiKey = '302293ba';
var inputEl = document.getElementById('searchInput');
var searchBtn = document.getElementById("submitBtn");
var youtubeResults = document.getElementById('youtube-results');
var movieResults = document.getElementById('movie-results');
var mainContent = document.getElementById('main-content');

mainContent.style.padding = '105px 30px 30px 30px';

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


// function for fetching movie by title and providing information about it //
var getMovieApi = function(event) {
    event.preventDefault();
    
    var inputVal = inputEl.value.trim();
    var movieUrl = 'http://www.omdbapi.com/?apikey=' + movieApiKey + '&t=' + inputVal;
    
    fetch(movieUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // creates element tags for information to be placed into //
        var movieTitle = document.createElement('h3');
        var movieYear = document.createElement('h4');
        var movieRating = document.createElement('h4');
        var moviePlot = document.createElement('p');

        // adds classes to tags so we can style with css //
        movieTitle.classList.add('movie-title');
        movieYear.classList.add('movie-year');
        movieRating.classList.add('movie-rating');
        moviePlot.classList.add('movie-plot');

        // selects information needed from fetch request //
        movieTitle.textContent = data.Title;
        movieYear.textContent = data.Year;
        movieRating.textContent = data.imdbRating;
        moviePlot.textContent = data.Plot;

        // appends info to the page //
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
