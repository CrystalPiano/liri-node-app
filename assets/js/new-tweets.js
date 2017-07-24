var Twit = require('twit')
 
var T = new Twit({
  consumer_key: 'QkG3E5qKB992CuUo8obtcwMov',
  consumer_secret: 'UzaX2HwKnMS2Z2W071ZwIwwKRaSd7jcmZnnI1DgTmdYm0iuGpf',
  access_token: '888256048972169219-9xm8Y2bMex6BGnlWb6b3tRoJepf5aAL',
  access_token_secret: 'wERZoZei8HKwDIbWw7XzIyzFDTOCzkhARWvPqV7bww2Xh',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
});
 
// 
//  search twitter for all tweets containing the word 'banana' since July 11, 2011 
// 
//T.get('search/tweets', { q: 'banana since:2016-01-01', count: 2 }, function(err, data, response) {
  //console.log(data)
//});

var params = {
  q: 'SpaceX', count: 1
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};

//T.get('statuses/user_timeline', { screen_name: 'MCRNCommand', count: 2 },  function (err, data, response, gotData) {
  //console.log(data)
//});


T.get('statuses/lookup', { screen_name: 'MCRNCommand', count: 1 },  function (err, data, response) {
  console.log(response)
});