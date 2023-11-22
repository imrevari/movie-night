import { Box, Container } from "@mui/material";
import { FC } from "react";
import SearchBar from "./SearchBar";
import MovieTile from "./MovieTile";



const MovieSearch: FC<any> = () => {

    const numbers = Array.from({length: 20}, (_, i) => i + 1);

    return(
        <Container >
            <SearchBar />

            <Box sx={{backgroundColor: '#e9f1f2', display: 'flex', flexWrap: 'wrap'}}>
                <h3>test</h3>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    {numbers.map( () => <MovieTile />)} 
                </Box>

                
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;