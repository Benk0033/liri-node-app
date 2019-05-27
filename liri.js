// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and packages for axios, Spotify, moment, and fs and store them into variables.
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
var fs = require("fs");

// access to keys information
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];

var nodeArgs = process.argv;

var input = process.argv[3];

// function to allow multiple words for input
function multipleWords() {
    input = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            input = input + "+" + nodeArgs[i];
        } else {
            input += nodeArgs[i];
        }
    };
};


// 1. `node liri.js concert-this <artist/band name here>`

//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")

if (action === "concert-this") {
    concertThis();
    appendData();
};

function concertThis() {

    multipleWords();

    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    axios.get(queryUrl)
        .then(function (response) {

            for (var key in response.data) {
                if (response.data.hasOwnProperty(key)) {

                    var venueName = response.data[key].venue.name;
                    var venueLocation = response.data[key].venue.city + ", " + response.data[key].venue.region + " " + response.data[key].venue.country;
                    var eventDate = moment(response.data[key].datetime).format("MM/DD/YYYY")

                    console.log("Venue Name: " + venueName + "\nVenue Location: " + venueLocation + "\nEvent Date: " + eventDate);

                }
            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

};


// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in the terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then program will default to "The Sign" by Ace of Base.

//    * Will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

if (action === "spotify-this-song" && typeof input === "string" || typeof input === "number") {
    spotifyThisSong();
    appendData();
}
else if (action === "spotify-this-song") {
    defaultSong();
}

function spotifyThisSong() {

    multipleWords();

    spotify
        .search({ type: 'track', query: input, limit: 1 })
        .then(function (response) {

            for (var key in response.tracks.items) {
                if (response.tracks.items.hasOwnProperty(key)) {

                    var artistName = response.tracks.items[key].artists[0].name;
                    var songName = response.tracks.items[key].name;
                    var songPreview = response.tracks.items[key].preview_url;
                    var albumName = response.tracks.items[key].album.name;

                    console.log("Artist Name: " + artistName + "\nSong Name: " + songName + "\nSong Preview Link: " + songPreview + "\nAlbum Name: " + albumName);

                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });

};

function defaultSong() {
    spotify
        .search({ type: 'track', query: "The Sign" })
        .then(function (response) {

            for (var key in response.tracks.items) {
                if (response.tracks.items.hasOwnProperty(key)) {

                    var defaultArtistName = response.tracks.items[key].artists[0].name;
                    var defaultSongName = response.tracks.items[key].name;
                    var defaultSongPreview = response.tracks.items[key].preview_url;
                    var defaultAlbumName = response.tracks.items[key].album.name;

                    if (defaultArtistName === "Ace of Base" && defaultSongName === "The Sign") {

                        console.log("Artist Name: " + defaultArtistName + "\nSong Name: " + defaultSongName + "\nSong Preview Link: " + defaultSongPreview + "\nAlbum Name: " + defaultAlbumName);

                    }

                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
};


// 3. `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to the terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// * use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. Use `trilogy`.

if (action === "movie-this" && typeof input === "string" || typeof input === "number") {
    movieThis();
    appendData();
}
else if (action === "movie-this") {
    defaultMovie();
};

function movieThis() {

    multipleWords();

    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl)
        .then(function (response) {

            console.log("Movie Title: " + response.data.Title);
            console.log("Release Date: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomato Rating: " + response.data.Ratings[1]['Value']);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};

function defaultMovie() {

    var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl)
        .then(function (response) {

            console.log("Movie Title: " + response.data.Title);
            console.log("Release Date: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomato Rating: " + response.data.Ratings[1]['Value']);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};


// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

if (action === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (error, data) {
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        };

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        if (dataArr[0] === "spotify-this-song") {
            process.argv[3] = dataArr[1].slice(1, -1).split(" ").join("+");
            spotifyThisSong();
        }
        else if (dataArr[0] === "concert-this") {
            process.argv[3] = dataArr[1].slice(1, -1).split(" ").join("+");
            concertThis();
        }
        else if (dataArr[0] === "movie-this") {
            process.argv[3] = dataArr[1].slice(1, -1).split(" ").join("+");
            movieThis();
        }
    });

    appendData();

};


// ### BONUS

// * In addition to logging the data to the terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure to append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

function appendData() {
    fs.appendFile("log.txt", action + "," + input + '\n', function (err) {
        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }
    });
};
