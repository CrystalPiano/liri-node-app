var Twit = require("twit");
var config = require("./keys.js");
var request = require("request");

//var T = new Twit(config);

//var tweets = new Twit({
  //consumer_key: 'QkG3E5qKB992CuUo8obtcwMov',
  //consumer_secret: 'UzaX2HwKnMS2Z2W071ZwIwwKRaSd7jcmZnnI1DgTmdYm0iuGpf',
  //access_token: '888256048972169219-9xm8Y2bMex6BGnlWb6b3tRoJepf5aAL',
  //access_token_secret: 'wERZoZei8HKwDIbWw7XzIyzFDTOCzkhARWvPqV7bww2Xh',
  //timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
//});

console.log(config);

T.get('search/tweets', { q: 'mcrn since:2016-01-01', count: 20 }, function(err, data, response) {
  console.log(data);
  console.log(response);
});