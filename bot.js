
//Gameplan
// 1. Create a Twitter Account
// 2. Run a search for BEst thing I ever ate section
// 3. Choose a random tweet from the search result
// 4. Confirm the tweet I selected is not the same tweet
// 5. Post that tweet on my twitter account
// 6. Run the code such that it repeats x number of minutes
// 7. Figure out how to delploye a worker with node.
// 8. Stretch Target--> Do a google image search of phrase and include picture

//=================================

//TwitterAPI Stuff
//  Access Token: 	914539088090451969-KgxXZHWi5gsQ8ot5WMyFpZCTtT2K8Pl
//  Access Token Secret: AmDKRo2CaibtsPWrGmyjUS0z9zhkbgkrrRsoPLqVxiqeC 
//  Consumer Key API KEY: o1eINkvMFZcoL1YyAjHgDivy9
//  COnsumer Secret API Secret: tWwb7BeijDvzqrsdBzpcB4IpDdVrL9qHCVj5Wi6xYmkfRoOnlN
 
var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
 consumer_key: 'o1eINkvMFZcoL1YyAjHgDivy9',
 consumer_secret: 'tWwb7BeijDvzqrsdBzpcB4IpDdVrL9qHCVj5Wi6xYmkfRoOnlN',
 access_token_key: '914539088090451969-KgxXZHWi5gsQ8ot5WMyFpZCTtT2K8Pl',
 access_token_secret: 'AmDKRo2CaibtsPWrGmyjUS0z9zhkbgkrrRsoPLqVxiqeC'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
   console.log(tweets);
   //save twitter feed to a text file
   fs.writeFile("tweets.txt", JSON.stringify(tweets, null, '\t'), (err) => {
       if(err) throw err;
       console.log('It\'s saved!');   
    });
  }
});