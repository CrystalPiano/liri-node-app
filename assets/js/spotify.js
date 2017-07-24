var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

// Set all credentials at the same time
spotifyApi.setCredentials({
  //'accessToken' : 'myAccessToken',
  //'refreshToken' : 'myRefreshToken',
  'clientId ' : '9b6cb172023c46e79690dce205feec39',
  'clientSecret' : '3b0ddab83092459384795aa3120af744'
});

console.log(spotifyApi);

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });