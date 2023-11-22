import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";



const MovieTile: FC<any> = () => {


    return(
        <Card sx={{ maxWidth: 200, margin: '5px'}}>
            <CardMedia
                sx={{ height: 220 }}
                image="https://image.tmdb.org/t/p/w342/d4kEoQoBrJkVa6MAeB6Lkrttuhn.jpg"
                // title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Watch</Button>
            </CardActions> */}
        </Card>
    )

}

MovieTile.displayName = 'MovieTile';

export default MovieTile;