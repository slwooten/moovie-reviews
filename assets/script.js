var googleApiKey = 'AIzaSyBpE0pMIOHN0AVIFKRDGwybxT18bDe3W-A';
var movieApiKey = '302293ba';
var inputEl = document.getElementById('searchInput');
var searchBtn = document.getElementById("submitBtn");
var homeSearchBtn = document.getElementById('home-submit');
var youtubeResults = document.getElementById('youtube-results');
var movieResults = document.getElementById('movie-results');
var mainContent = document.getElementById('main-content');
var homeSearchEl = document.getElementById('home-search');
var searchHistoryContainer = document.getElementById('search-history');

var inputVal = inputEl.value.trim();

mainContent.style.padding = '105px 30px 30px 30px';

console.log('Here we are');

// var homeSearchVal = homeSearchEl.value.trim();
// localStorage.setItem(homeSearchVal);

// var screenChange = function() {
//     window.location.href = 'file:///Users/swoot14247/Bootcamp/Projects/travel-food-review/result.html';
// }




// function that fetches youtube api with results based on search keyword and fetches youtube embed api //
// var getYoutubeApi = function (event) {
//     event.preventDefault();

//     var inputVal = `${inputEl.value.trim()}+movie+trailer`;
//     var youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + inputVal + '&key=' + googleApiKey;

//     fetch(youtubeUrl)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data);

//             // grabs the youtube video's id and uses it in the next fetch url //
//             var ytId = data.items[0].id.videoId;
//             var embedUrl = 'https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3D' + ytId + '&format=json';

//             //  saves id to local storage //
//             localStorage.setItem('youtube vid id', ytId);

//             // fetches youtube video embed api //
//             fetch(embedUrl)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (data) {
//                     console.log(data);

//                     // creates element for youtube video title //
//                     var trailerTitle = document.createElement('h3');

//                     // sets the text content to the youtube video title //
//                     trailerTitle.textContent = data.title;

//                     // places the youtube video title on the page and embeds the video itself //
//                     movieResults.appendChild(trailerTitle);
//                     movieResults.innerHTML += data.html;
//                 });
//         })

// }



var getYoutubeApi = function() {


    var data = {"title":"Official Trailer: Cars (2006)","author_name":"N.B.","author_url":"https://www.youtube.com/c/TheFirewhirl","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/SbXIj2T-_uk/hqdefault.jpg","html":"\u003ciframe width=\u0022200\u0022 height=\u0022113\u0022 src=\u0022https://www.youtube.com/embed/SbXIj2T-_uk?feature=oembed\u0022 frameborder=\u00220\u0022 allow=\u0022accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\u0022 allowfullscreen\u003e\u003c/iframe\u003e"};

    var trailerTitle = document.createElement('h3');

                    trailerTitle.classList.add('yt-title');

                    // sets the text content to the youtube video title //
                    trailerTitle.textContent = data.title;

                    // places the youtube video title on the page and embeds the video itself //
                    youtubeResults.appendChild(trailerTitle);
                    youtubeResults.innerHTML += data.html;

};



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
            var tomatoRating = document.createElement('h4');
            var moviePlot = document.createElement('p');

            // adds classes to tags so we can style with css //
            movieTitle.classList.add('movie-title');
            movieYear.classList.add('movie-year');
            movieRating.classList.add('movie-rating');
            tomatoRating.classList.add('tomato-rating');
            moviePlot.classList.add('movie-plot');

            // selects information needed from fetch request //
            movieTitle.textContent = data.Title;
            movieYear.textContent = 'Release year: ' + data.Year;
            movieRating.textContent = 'IMDb rating: ' + data.imdbRating + ' / 10';

            // if (data.Ratings[1].Value == 'undefined') {
            //     tomatoRating.textContent = 'Rotten Tomatoes: n/a';
            // } else {
            //     tomatoRating.textContent = 'Rotten Tomatoes: ' + data.Ratings[1].Value;
            // }
            
            moviePlot.textContent = 'Description: ' + data.Plot;

            // appends info to the page //
            movieResults.appendChild(movieTitle);
            movieResults.appendChild(movieYear);
            movieResults.appendChild(movieRating);
            movieResults.appendChild(tomatoRating);
            movieResults.appendChild(moviePlot);


            localStorage.setItem('inputVal', inputVal);
            var getSearchHistory = localStorage.getItem('inputVal');

            var searchHistory = document.createElement('button');

            searchHistory.textContent = getSearchHistory;

            searchHistoryContainer.appendChild(searchHistory);

        
        })
}

var getApis = function (event) {
    event.preventDefault();

    movieResults.innerHTML = '';
    youtubeResults.innerHTML = '';

    getMovieApi();
    getYoutubeApi();
}
// gets apis when search button is clicked //
searchBtn.addEventListener('click', getApis);
