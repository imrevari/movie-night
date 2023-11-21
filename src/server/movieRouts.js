const express = require('express')
const app = express()
var axios = require('axios')

const movies = require('./movies.json') 
const router = express.Router()
const {EXTERNAL_API_URL, MOVIE_PARAM, END_PARAMS} = require('./constants')

const {results} = movies


let localMovies = [...results]

const mapOfWords = new Map();

const fetchNewRequest = (movieName) => {
    axios.get(EXTERNAL_API_URL.concat(MOVIE_PARAM).concat(movieName).concat(END_PARAMS))
    .then(res => {
      const results = res.data.results;
    console.log(results)
    }
      ).catch( error => console.log(error));
}




router.get('/:name', (req, res) => {
    const searchName = req.params.name;
    console.log(searchName)
    fetchNewRequest(searchName)
    res.send(localMovies)
})



router.post('/', (req, res) => {
})

router.put('/:id', (req, res) => {
})

router.delete('/:id', (req, res) => {
})

module.exports = router