import { Box, Container } from "@mui/material";
import { FC } from "react";
import SearchBar from "./SearchBar";



const MovieSearch: FC<any> = () => {

    return(
        <Container >
            <SearchBar />

            <Box sx={{backgroundColor: '#e9f1f2'}}>
                <h3>test</h3>
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;