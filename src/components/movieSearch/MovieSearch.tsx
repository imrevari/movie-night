import { Box, Chip, Container, Pagination, Typography } from "@mui/material";
import { FC } from "react";
import SearchBar from "./SearchBar";
import MovieTile from "./MovieTile";

import movie from '../../server/movies.json'
import Paginator from "./Paginator";



const MovieSearch: FC<any> = () => {

    const movies = movie.results;

    return(
        <Container >
            <SearchBar />
            <br></br>
            <Box sx={{backgroundColor: '#e9f1f2', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                
                <Chip 
                    label={'Text goes here from API'} 
                    // variant="outlined"
                    color={true ? 'default' : 'error'}
                    sx={{marginTop: '20px', marginBottom: '10px', minWidth: '65%', }}/>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    {movies.map( (movie) => <MovieTile movie={movie}/>)} 
                </Box>

                <Paginator pages={5} setPage={(p: any) => console.log(p)}/>
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;