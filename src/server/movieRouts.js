const express = require('express')
const app = express()
var axios = require('axios')

const router = express.Router()
const {EXTERNAL_API_URL, MOVIE_PARAM, END_PARAMS, LOOKUP_TIME_SECONDS} = require('./constants')

const mapOfWords = new Map();
let cacheHit = 0;

const fetchNewRequest = async (movieName) => {
    const movies = await axios.get(EXTERNAL_API_URL.concat(MOVIE_PARAM).concat(movieName).concat(END_PARAMS))
    .then(res => {
      const results = res.data.results;
      return results;
    }
      ).catch( error => console.log(error))
    return movies;
}


const getListOfMovies = async (movieName) => {
    if(mapOfWords.get(movieName)){
        const now = new Date();
        const {fetched, movies} = mapOfWords.get(movieName);
        const timeDifference = now.getTime() - fetched.getTime();
        if(timeDifference < (LOOKUP_TIME_SECONDS * 1000)){
            cacheHit++;
            return movies;
        }
    }
    const movies = await fetchNewRequest(movieName)
        mapOfWords.set(movieName, {
            fetched: new Date(),
            movies: movies
        })
        cacheHit = 0;
        return movies;
}




router.get('/:name', async (req, res) => {
    const searchName = req.params.name;
    const movies = await getListOfMovies(searchName)
    res.send({cacheHit: cacheHit, movies: movies})
})


module.exports = router