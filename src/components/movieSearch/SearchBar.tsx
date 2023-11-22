import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const SearchBar: FC<any> = () => {

    return(
        <AppBar position="static" color='inherit' sx={{marginTop: '20px'}}>
        <Toolbar >
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left', }}>
                    <TextField value={''}
                        sx={{width: '95%'}} 
                        onChange={(e) => console.log(e.target.value)} 
                        variant="outlined"
                        label="Search for movies"
                        />
            </Typography>

            <Button color="inherit" variant='outlined'
                style={{maxWidth: '140px', minWidth: '140px', height: '56px', marginTop: '15px', marginBottom: '15px'}}
            >{'Search'}</Button>
        </Toolbar>
    </AppBar>
    )


    
}

SearchBar.displayName = 'SearchBar';

export default SearchBar;