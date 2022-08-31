const axios = require("axios");

// axios.get("").then((resp) => {
//   console.log(resp.data);
// });

// Please note that it is normally not considered best practice to commit
// api keys to github as it presents a security risk. It is done here only
// for practice purposes as we are sharing the same account
const api_key = "d771b19ef336ed8381def3a60b574464";

// It should make a request to the discover endpoint

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  // code here
  return axios(url);
};

// We will return the result similar to the last function but this
//  time append `.then` and just return `result.data`
const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  // code here
  return axios(url).then(function (res) {
    return res.data;
  });
};

const getMovieByIdFailure = () => {
  const fakeId = 5783; // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`;
  // code here
  return axios(url)
    .then(function (res) {
      return res.status;
    })
    .catch((err) => {
      return err.response.status;
    });
  {
  }
};

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure,
};
