import { Box, Chip, Container, Pagination, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import MovieTile from "./MovieTile";

import movie from '../../server/movies.json'
import Paginator from "./Paginator";
import { Movie } from "../../interfaces/interfaces";
import axios from "axios";
import { LOCAL_BACKEND } from "../../constants/constants";



const MovieSearch: FC = () => {

    // const movies = movie.results;
    const movies = new Array<Movie>;

    const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([])
    const [page, setPage] = useState<number>(1)
    const [cashedFetches, setCashedFetches] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [error, setError] = useState<string | null>(null)

    const moviesToDisplay = useMemo(() => {

    }, [page, fetchedMovies, totalPages])


    const fetchFromServer = (movieTitle: string) =>{
        axios.get(
            LOCAL_BACKEND.concat(movieTitle)
        )
        .then(res => {

            console.log(res)
        }
          ).catch( error => console.log(error))
    }
    

    return(
        <Container >
            <SearchBar triggerSearch={((e: any) => console.log(e))}/>
            <br></br>
            <Box sx={{backgroundColor: '#e9f1f2',
                        display: 'flex',
                        flexWrap: 'wrap', 
                        alignItems: 'center',
                        flexDirection: 'column', 
                        justifyContent: 'center'}}>
                
                <Chip 
                    label={'Text goes here from API'} 
                    // variant="outlined"
                    color={true ? 'default' : 'error'}
                    sx={{marginTop: '20px', marginBottom: '10px', minWidth: '65%', }}/>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    {movies.map( (movie) => <MovieTile movie={movie}/>)} 
                </Box>

                <Paginator pages={totalPages} setPage={setPage}/>
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;