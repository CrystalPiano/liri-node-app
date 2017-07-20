// Required Files and Packages
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var tweets = require("./my-tweets");
var keys = require("./keys");

// Instructions
console.log("Search for my tweets, spotify a song, search for movie info, or do a random command!");
console.log("Type 'my-tweets' for tweets, 'spotify-this-song' for a song, 'movie-this' for film info");
console.log("and 'do-what-it-says' for a random command.");

// Take command line arguments
var nodeArgs = process.argv;

// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=" + nodeArgs[3] + "s&y=&plot=short&apikey=40e9cece", function(error, response, body) {

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

