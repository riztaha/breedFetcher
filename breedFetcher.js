const request = require("request");
const breed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetch = function(breed) {
  request(url + breed, (error, description, body) => {
    if (error) {
      console.error("Potential error in URL");
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log(
          "Search Query denied. Please search a cat breed that exists."
        );
      } else {
        // console.log("body:", body);
        // console.log(data);
        // console.log(content);
        // console.log(typeof data);
        console.log(data[0].description);
      }
    }
  });
};

fetch(breed);

// fetch("https://api.thecatapi.com/v1/breeds/search?q=sib");

// request('http://www.google.com', function (error, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
