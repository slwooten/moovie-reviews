var googleApiKey = 'AIzaSyBpE0pMIOHN0AVIFKRDGwybxT18bDe3W-A';
var movieApiKey = '302293ba';
var inputEl = document.getElementById('searchInput');
var inputHomeEl = document.getElementById('home-search');
var searchBtn = document.getElementById("submitBtn");
var homeSearchBtn = document.getElementById('home-submit');
var youtubeResults = document.getElementById('youtube-results');
var movieResults = document.getElementById('movie-results');
var mainContent = document.getElementById('main-content');
var homeSearchEl = document.getElementById('home-search');
var searchHistoryContainer = document.getElementById('search-history');
var getSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
// var searchHistory = document.getElementById('history-btn');


var inputVal;
if(inputEl) inputVal = inputEl.value.trim();
if(mainContent) mainContent.style.padding = '105px 30px 30px 30px';

console.log('Here we are');

// function that fetches youtube api with results based on search keyword and fetches youtube embed api //
var getYoutubeApi = function (movie) {

    var inputVal = `${movie.trim()}+movie+trailer`;
    var youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + inputVal + '&key=' + googleApiKey;

    fetch(youtubeUrl)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data);

            // grabs the youtube video's id and uses it in the next fetch url //
            var ytId = data.items[0].id.videoId;
            var embedUrl = 'https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3D' + ytId + '&format=json';


            // fetches youtube video embed api //
            fetch(embedUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    youtubeResults.innerHTML = data.html;
                    
                });
        })

}


// function for fetching movie by title and providing information about it //

// function for fetching the omdb api url //
var getMovieApi = function () {

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
            movieYear.textContent = 'Release year: ' + data.Year;
            movieRating.textContent = 'IMDb rating: ' + data.imdbRating + ' / 10';
            moviePlot.textContent = 'Description: ' + data.Plot;

            // appends info to the page //
            movieResults.appendChild(movieTitle);
            movieResults.appendChild(movieYear);
            movieResults.appendChild(movieRating);
            movieResults.appendChild(moviePlot);

            var historyItems = JSON.parse(localStorage.getItem('searchHistory')) || [];
            historyItems.push(inputVal);
            // sets input val and movie data to local storage //
            localStorage.setItem('moviedata', JSON.stringify(data));
            localStorage.setItem('searchHistory', JSON.stringify(historyItems));

            // creates buttons to access search history //
            var searchHistory = document.createElement('button');
            searchHistory.setAttribute('class', 'history-btn');
            searchHistory.dataset.id = inputVal;
            searchHistory.textContent = inputVal;
            searchHistoryContainer.appendChild(searchHistory);
        })
}

// function for fetching information when user clicks on an item in their search history //
var showHistory = function (historyItem) {
    console.log('show history works');
    movieResults.innerHTML = '';
    var movieUrl = 'http://www.omdbapi.com/?apikey=' + movieApiKey + '&t=' + historyItem;

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
            movieYear.textContent = 'Release year: ' + data.Year;
            movieRating.textContent = 'IMDb rating: ' + data.imdbRating + ' / 10';
            moviePlot.textContent = 'Description: ' + data.Plot;

            // appends info to the page //
            movieResults.appendChild(movieTitle);
            movieResults.appendChild(movieYear);
            movieResults.appendChild(movieRating);
            movieResults.appendChild(moviePlot);
            getYoutubeApi(historyItem);
        })
}

var showYtHistory = function () {
    console.log('youtube history is working');
    youtubeResults.innerHTML = '';
    var embedUrl = 'https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3D' + getYtHistory + '&format=json';

    // fetches youtube video embed api //
    fetch(embedUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // creates element for youtube video title //
            var trailerTitle = document.createElement('h3');

            // adds class to video title for styling //
            trailerTitle.classList.add('yt-title');

            // sets the text content to the youtube video title //
            trailerTitle.textContent = data.title;

            // places the youtube video title on the page and embeds the video itself //
            youtubeResults.appendChild(trailerTitle);
            youtubeResults.innerHTML += data.html;
        });
}

var getApis = function (event) {
    event.preventDefault();

    movieResults.innerHTML = '';
    youtubeResults.innerHTML = '';
    
    getMovieApi();
    getYoutubeApi(inputEl.value.trim());
}

var redirectResults = function (e) {
    e.preventDefault();
    let val = (inputHomeEl.value || '').trim()
    window.location.href = 'result.html';
}
// gets apis when search button is clicked //
if(searchBtn) searchBtn.addEventListener('click', getApis);
if(homeSearchBtn) homeSearchBtn.addEventListener('click', redirectResults);
// if (searchHistoryContainer) searchHistoryContainer.addEventListener('click', function(event) {
   // if (event.target.matches('.search-btn')) {
     //   showYtHistory(event.target.dataset.id);
   // }
// });
if (searchHistoryContainer) searchHistoryContainer.addEventListener('click', function(event) {
    if (event.target.matches('.history-btn')) {
        console.log('HERE');
        showHistory(event.target.dataset.id);
    }
});

for (var item of getSearchHistory) {
     // creates buttons to access search history //
     var searchHistory = document.createElement('button');
     searchHistory.setAttribute('class', 'history-btn');
     searchHistory.dataset.id = item;
     searchHistory.textContent = item;
     searchHistoryContainer.appendChild(searchHistory);
}

