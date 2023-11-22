import { Box, Container } from "@mui/material";
import { FC } from "react";
import SearchBar from "./SearchBar";
import MovieTile from "./MovieTile";

import movie from '../../server/movies.json'



const MovieSearch: FC<any> = () => {

    const movies = movie.results;

    return(
        <Container >
            <SearchBar />
            <br></br>
            <Box sx={{backgroundColor: '#e9f1f2', display: 'flex', flexWrap: 'wrap'}}>
                <h3>test</h3>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    {movies.map( (movie) => <MovieTile movie={movie}/>)} 
                </Box>

                
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;