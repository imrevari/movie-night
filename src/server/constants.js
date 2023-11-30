const API_KEY = "b6efcaaa9567ac730fb92e4d61424564";

const EXTERNAL_API_URL = "https://api.themoviedb.org/3/search/";
const MOVIE_PARAM = "movie?query=";
const PAGE_PARAM = "&include_adult=false&language=en-US&page=";
const END_PARAMS = `&api_key=${API_KEY}`;
const LOOKUP_TIME_SECONDS = 120;

exports.EXTERNAL_API_URL = EXTERNAL_API_URL;
exports.MOVIE_PARAM = MOVIE_PARAM;
exports.PAGE_PARAM = PAGE_PARAM;
exports.END_PARAMS = END_PARAMS;
exports.LOOKUP_TIME_SECONDS = LOOKUP_TIME_SECONDS;
