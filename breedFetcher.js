const request = require(`request`);
const catType = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${catType}`, (error, response, body) => {
  if (error !== null) {
    console.log(error.code);
  }

  if (error === null) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No cat breed was found");
    }
    if (data.length > 0) {
      console.log(data[0].description);
    }
  }
});
