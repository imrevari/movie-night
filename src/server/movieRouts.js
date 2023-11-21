const express = require('express')
const app = express()
var axios = require('axios')

const router = express.Router()
const {EXTERNAL_API_URL, MOVIE_PARAM, END_PARAMS, LOOKUP_TIME_SECONDS, PAGE_PARAM} = require('./constants')

const mapOfWords = new Map();
let cacheHit = 0;

const fetchNewRequest = async (movieName, page) => {
    const movies = await axios.get(
        EXTERNAL_API_URL.concat(MOVIE_PARAM).concat(movieName).concat(PAGE_PARAM).concat(page).concat(END_PARAMS)
    )
    .then(res => {
      const results = res.data.results;
      return results;
    }
      ).catch( error => {
        return error})
    return movies;
}


const getListOfMovies = async (movieName, page) => {
    if(mapOfWords.get(movieName.concat(page))){
        const now = new Date();
        const {fetched, movies} = mapOfWords.get(movieName.concat(page));
        const timeDifference = now.getTime() - fetched.getTime();
        if(timeDifference < (LOOKUP_TIME_SECONDS * 1000)){
            cacheHit++;
            return movies;
        }
    }
    const movies = await fetchNewRequest(movieName, page)
    if(movies?.response){
        return({
            error: true,
            status: movies.response.status,
            message: movies.response.data.status_message
        })
    }
        mapOfWords.set(movieName.concat(page), {
            fetched: new Date(),
            movies: movies
        })
        cacheHit = 0;
        return movies;
}




router.get('/movie', async (req, res) => {
    const searchName = req.query.name;
    if (!searchName) {
        return res.status(400).json({ message: 'No Search name provided' })
      }

    const page = req.query.page ?? 1;
    const movies = await getListOfMovies(searchName, page);

    if(movies.error){
        const {status, message} = movies;
        return res.status(status).json({ message: message })
    }

    res.send({cacheHit: cacheHit, movies: movies});
})


module.exports = router