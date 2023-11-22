import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Movie } from "../../interfaces/interfaces";

import {POSTER_URL, NO_IMAGE} from '../../constants/consrtants'

interface MovieTileProps {
    movie: Movie
}

const MovieTile: FC<MovieTileProps> = ({movie}) => {

    const {poster_path: posterPath, title, overview} = movie


    return(
        <Card sx={{ maxWidth: 200, margin: '5px', maxHeight: 460, minHeight: 460, minWidth: 200}}>
            <CardMedia
                sx={{ height: 220 }}
                image={posterPath ? POSTER_URL.concat(posterPath) : NO_IMAGE}
                // title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ height: 55 }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview.length > 150 ?  overview.substring(0, 150).concat('...') : overview}
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