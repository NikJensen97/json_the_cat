const request = require(`request`);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error !== null) {
      error = error.code;
    }
    let desc;
    const data = JSON.parse(body);
    if (data.length === 0) {
      desc = "No cat was found!";
    }
    if (data.length > 0) {
      desc = data[0].description;
    }
    
    callback(error, desc);
  });
};
module.exports = { fetchBreedDescription };
