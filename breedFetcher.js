const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, description, body) => {
    if (error) {
      callback("Potential error in URL");
      return;
    } else {
      //   console.log("body:", body);
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback("Search Query denied. Please search a cat breed that exists.");
      } else {
        // console.log(data);
        // console.log(content);
        // console.log(typeof data);
        callback(null, data[0].description);
      }
    }
  });
};

// fetch(breedName);

// fetch("https://api.thecatapi.com/v1/breeds/search?q=sib");

// request('http://www.google.com', function (error, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

module.exports = { fetchBreedDescription };
