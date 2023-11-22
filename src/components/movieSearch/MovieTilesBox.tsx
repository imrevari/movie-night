import { Box } from "@mui/material";
import { FC } from "react";
import MovieTile from "./MovieTile";
import { Movie } from "../../interfaces/interfaces";

interface MovieTilesBoxProp {
    movies: Movie[]
}
const MovieTilesBox: FC<MovieTilesBoxProp> = ({movies}) => {

    return(
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {movies.map( (movie) => <MovieTile movie={movie}/>)} 
        </Box>
    )

}

MovieTilesBox.displayName = 'MovieTilesBox';

export default MovieTilesBox;