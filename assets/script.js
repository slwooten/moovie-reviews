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
// var getYoutubeApi = function(event) {
//     event.preventDefault();

// var inputVal = `${inputEl.value.trim()}+movie+trailer`;
// var youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + inputVal + '&key=' + googleApiKey;

//     fetch(youtubeUrl)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data);

//             var ytTitle = document.createElement('h3');
//             var ytThumbnail = document.createElement('img');

//             ytTitle.textContent = data.items[0].snippet.title;
//             ytThumbnail.src = data.items[0].snippet.thumbnails.default.url;

//             // youtubeResults.appendChild(ytTitle);
//             localStorage.setItem('title', data.items[0].snippet.title);

//             console.log('event listener working');
//         })

// }

var getYoutubeApi = function () {
    var inputVal = `${inputEl.value.trim()}+movie+trailer`;
    console.log(inputVal);
    var data = {
        "kind": "youtube#searchListResponse",
        "etag": "lFPOdNm-WKxA4qBZ5i4LLyo5O2g",
        "nextPageToken": "CAUQAA",
        "regionCode": "US",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "0Wb8XWWNU9RpU_bH4GrbElc_ZoQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "U_e20A9A_sE"
                },
                "snippet": {
                    "publishedAt": "2022-03-10T03:26:46Z",
                    "channelId": "UCyLicD9UtfSo5t5_wPT7WHQ",
                    "title": "Flatbed Trailer Tractor Massive Pothole Car Rescue - Cars vs Deep Water vs Bump - BeamNG",
                    "description": "Flatbed Trailer Tractor Massive Pothole Car Rescue - Cars vs Deep Water vs Bump - BeamNG About the game: The video depicts ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/U_e20A9A_sE/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/U_e20A9A_sE/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/U_e20A9A_sE/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "BeamNG Speed",
                    "liveBroadcastContent": "live",
                    "publishTime": "2022-03-10T03:26:46Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "eZDkMBq6MxrItMSibHlUW1hHUao",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "4FyngUJieiU"
                },
                "snippet": {
                    "publishedAt": "2022-03-09T11:12:10Z",
                    "channelId": "UCenqyUhFu76XxAeYppxCfQQ",
                    "title": "Race Crazy Cars Monster Trucks McQueen &amp; Friends Mater The King Miss Fritter Crazy Track 8",
                    "description": "Race Crazy Cars Monster Trucks McQueen & Friends Mater The King Miss Fritter Crazy Track 8 #cars #mcqueen #crazycars ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4FyngUJieiU/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4FyngUJieiU/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4FyngUJieiU/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Crazy Cars",
                    "liveBroadcastContent": "live",
                    "publishTime": "2022-03-09T11:12:10Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "pUkeQBmpSzj6BXDMPfWSMW8K06A",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "fdGWRq1dVBA"
                },
                "snippet": {
                    "publishedAt": "2021-09-05T04:00:08Z",
                    "channelId": "UC_VtrptObkqqp9tp3jycINA",
                    "title": "Best of Lightning McQueen | Pixar Cars",
                    "description": "Kachow! It's Lightning McQueen day and we are excited to share some of our favorite LMQ moments with you! What's your favorite ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fdGWRq1dVBA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fdGWRq1dVBA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fdGWRq1dVBA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Pixar Cars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-09-05T04:00:08Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "5K14ZRO_rajYRSdNtuTFbbbjlkQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "bTMFeQT4b20"
                },
                "snippet": {
                    "publishedAt": "2022-03-10T02:14:42Z",
                    "channelId": "UCyLicD9UtfSo5t5_wPT7WHQ",
                    "title": "Cars vs deep water - Beamng drive",
                    "description": "Cars vs deep water - Beamng drive About the game: The video depicts the cars encountering obstacles such as Giant Pit, Giant ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bTMFeQT4b20/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bTMFeQT4b20/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bTMFeQT4b20/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "BeamNG Speed",
                    "liveBroadcastContent": "live",
                    "publishTime": "2022-03-10T02:14:42Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "t5XZvzghSeh-AiCfcLcHX34RGbE",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "EsdyiNQgmIE"
                },
                "snippet": {
                    "publishedAt": "2019-12-24T11:30:00Z",
                    "channelId": "UCVEDZVtA5NUtjxSXHjtvkag",
                    "title": "Toys from Cars 3 with Speaking Lightning McQueen",
                    "description": "Toys from Cars 3 with Lightning McQueen for Kids. Hi Parents. This video is supposed to review and show the toys functions in an ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EsdyiNQgmIE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EsdyiNQgmIE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EsdyiNQgmIE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Kinder Spielzeug Kanal",
                    "liveBroadcastContent": "none",
                    "publishTime": "2019-12-24T11:30:00Z"
                }
            }
        ]
    }
    var ytTitleOne = document.createElement('h3');
    var ytTitleTwo = document.createElement('h3');
    var ytThumbnailOne = document.createElement('img');
    var ytThumbnailTwo = document.createElement('img');

    // selects information we need like titles and thumbnail images //
    ytTitleOne.textContent = data.items[0].snippet.title;
    ytThumbnailOne.src = data.items[0].snippet.thumbnails.medium.url;
    ytTitleTwo.textContent = data.items[1].snippet.title;
    ytThumbnailTwo.src = data.items[1].snippet.thumbnails.medium.url;

    // appends information to page //
    youtubeResults.appendChild(ytTitleOne);
    youtubeResults.appendChild(ytThumbnailOne);
    youtubeResults.appendChild(ytTitleTwo);
    youtubeResults.appendChild(ytThumbnailTwo);

    // sets information to local storage //
    localStorage.setItem('titleOne', data.items[0].snippet.title);
    localStorage.setItem('thumbnailOne', data.items[0].snippet.thumbnails.medium.url);
    localStorage.setItem('titleTwo', data.items[1].snippet.title);
    localStorage.setItem('thumbnailTwo', data.items[1].snippet.thumbnails.medium.url);

    console.log('event listener working');
}


// function for fetching movie by title and providing information about it //
var getMovieApi = function (event) {
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
searchBtn.addEventListener('click', getYoutubeApi);
searchBtn.addEventListener('click', getMovieApi);
