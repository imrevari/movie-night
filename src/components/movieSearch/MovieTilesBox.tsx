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
            {movies.map( (movie, index) => <MovieTile movie={movie} key={movie.id} data-testid={`movie-tile-${index}`}/>)} 
        </Box>
    )

}

MovieTilesBox.displayName = 'MovieTilesBox';

export default MovieTilesBox;