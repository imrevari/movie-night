import { Box, Chip, Container } from "@mui/material";
import { FC, useState } from "react";
import MovieTile from "./MovieTile";
import SearchBar from "./SearchBar";

import axios from "axios";
import { LOCAL_BACKEND, NAME_PARAM, PAGE_PARAM } from "../../constants/constants";
import { FetchMoviesResponse } from "../../interfaces/interfaces";
import Paginator from "./Paginator";



const MovieSearch: FC = () => {

    const iniState = {
        movies: [],
        cacheHit: 0,
        totalPages: 1
    }

    const [fetchResponse, setFetchResponse] = useState<FetchMoviesResponse>(iniState)

    const {movies, cacheHit: cashedFetches, totalPages} = fetchResponse;

    const [page, setPage] = useState<number>(1)
    const [searchPhrase, setSearchPhrase] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const fetchFromServer = (movieTitle: string, pageParam: number) =>{
        axios.get(
            LOCAL_BACKEND.concat(NAME_PARAM).concat(movieTitle).concat(PAGE_PARAM).concat(pageParam.toString())
        )
        .then(res => {
            const responseBody = res.data;
            setFetchResponse(responseBody)
        }
          ).catch( error => console.log(error.response.data))
    }

    const triggerSearch = (title: string) => {
        const movieTitle = title.trim()
        setPage(1)
        setSearchPhrase(movieTitle)
        fetchFromServer(movieTitle, 1);
    }

    const triggerPaginator = (selectedPage: number) =>{
        if(selectedPage != page){
            setPage(selectedPage)
            fetchFromServer(searchPhrase, selectedPage);
        }  
    }
    

    return(
        <Container >
            <SearchBar triggerSearch={triggerSearch}/>
            <br></br>
            <Box sx={{backgroundColor: '#e9f1f2',
                        display: 'flex',
                        flexWrap: 'wrap', 
                        alignItems: 'center',
                        flexDirection: 'column', 
                        justifyContent: 'center'}}>
                
                <Chip 
                    label={`Text goes here from API ${cashedFetches}`} 
                    // variant="outlined"
                    color={true ? 'default' : 'error'}
                    sx={{marginTop: '20px', marginBottom: '10px', minWidth: '65%', }}/>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    {movies.map( (movie) => <MovieTile movie={movie}/>)} 
                </Box>

                <Paginator pages={totalPages} setPage={triggerPaginator} curentPage={page}/>
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;