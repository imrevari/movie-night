import { Alert, Box, Chip, CircularProgress, Container, Skeleton, Snackbar } from "@mui/material";
import { FC, useState } from "react";
import SearchBar from "./SearchBar";

import axios from "axios";
import { LOCAL_BACKEND, NAME_PARAM, PAGE_PARAM } from "../../constants/constants";
import { FetchMoviesResponse } from "../../interfaces/interfaces";
import MovieTilesBox from "./MovieTilesBox";
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
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const errorNotification = (message: string) => {
        setFetchResponse(iniState);
        setError(message)
    }

    const fetchFromServer = (movieTitle: string, pageParam: number) =>{
        setIsLoading(true)
        axios.get(
            LOCAL_BACKEND.concat(NAME_PARAM).concat(movieTitle).concat(PAGE_PARAM).concat(pageParam.toString())
        )
        .then(res => {
            const responseBody = res.data;
            const { movies} = responseBody;
            if(movies.length === 0){
                errorNotification(`No movie found for ${movieTitle}`)
                setIsLoading(false)
                return;
            }
            setFetchResponse(responseBody)
            setIsLoading(false)
        }
          ).catch( error => {
            errorNotification(error.response.data.message)
            setIsLoading(false)
          })
    }

    const triggerSearch = (title: string) => {
        const movieTitle = title.trim()
        setPage(1)
        setSearchPhrase(movieTitle)
        fetchFromServer(movieTitle, 1);
    }

    const triggerPaginator = (selectedPage: number) =>{
        if(selectedPage !== page){
            setPage(selectedPage)
            fetchFromServer(searchPhrase, selectedPage);
        }  
    }
    

    return(
        <Container >
            <SearchBar triggerSearch={triggerSearch} data-testid={'srach-bar-component'}/>
            <br></br>
            <Box sx={{backgroundColor: '#e9f1f2',
                        display: 'flex',
                        flexWrap: 'wrap', 
                        alignItems: 'center',
                        flexDirection: 'column', 
                        justifyContent: 'center'}}>
                
                {isLoading
                ?
                <Skeleton variant="rounded" width={'65%'} height={32} 
                    sx={{marginTop: '20px', marginBottom: '10px' }}/>
                :
                (movies.length > 0) && <Chip 
                    label={`Number of calls from local API cache ${cashedFetches}`} 
                    color={cashedFetches === 0 ? 'error' : 'default'}
                    sx={{marginTop: '20px', marginBottom: '10px', minWidth: '65%', }}/>}

                {isLoading
                ? 
                <CircularProgress size={190} sx={{margin: '20px 0 50px 0'}}/>
                :
                <MovieTilesBox movies={movies}/>}

                {(totalPages > 1 && !isLoading) && <Paginator pages={totalPages} setPage={triggerPaginator} curentPage={page}/>}

                <Snackbar
                    open={Boolean(error)}
                    autoHideDuration={6000}
                    onClose={() => setError(null)}
                    >
                        <Alert 
                            severity="error"
                            onClose={() => setError(null)}
                        >{error}</Alert>
                </Snackbar>
            </Box>
        </Container>
    )

}

MovieSearch.displayName = 'MovieSearch';

export default MovieSearch;