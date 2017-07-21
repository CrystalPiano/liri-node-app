// TO DO
// Figure out Spotify API
// Get OMDB Call working
//

// Required Files and Packages
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var SpotifyWebApi = require('spotify-web-api-node');
var request = require("request");
var tweets = require("./my-tweets");
var keys = require("./keys");

// Instructions
console.log("-----------------------");
console.log("Search for my tweets, spotify a song, look up movie info, or do a random command!");
console.log("Type 'my-tweets' for tweets, 'spotify-this-song' followed by a song, 'movie-this' folowed by a");
console.log("movie name for film info and 'do-what-it-says' for a random command.");
console.log("-----------------------");

// Take command line arguments
var nodeArgs = process.argv;

// Running movie-this based on user input
if (nodeArgs[3] === 'movie-this') {

// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=" + nodeArgs[4] + "s&y=&plot=short&apikey=40e9cece", function(error, response, body) {

// If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Print Movie Title
    console.log("The movie's Title is: " + JSON.parse(body).Title);
    // Print imdbRating
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    // Print Rotten Tomatoes Rating
    console.log("The movie's rating is: " + JSON.parse(body).Ratings.Value);
    // Print Country of Origin
    console.log("The movie's rating is: " + JSON.parse(body).Country);
    // Print Movie Languages
    console.log("The movie's rating is: " + JSON.parse(body).Language);
    // Print Movie Plot
    console.log("The movie's rating is: " + JSON.parse(body).Plot);
    // Print Actors
    console.log("The movie's rating is: " + JSON.parse(body).Actors);
  }

 });

};

if (nodeArgs[3] === 'spotify-this-song') {

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

    var songTitle = nodeArgs[4];
    var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });

    // Print Song Name
    console.log("The Song name is: " + JSON.parse(body).name);
    // Print Artist(s)
    console.log("This songs artist(s): " + JSON.parse(body);
    // Print Song Album
    console.log("The Album is: " + JSON.parse(body));
    // Print Preview Link of song
    console.log("Preview Link: " + JSON.parse(body).preview_url));

};

if (nodeArgs[3] === 'my-tweets') {

    var queryURL = "https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi";
}

$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });