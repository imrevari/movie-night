import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { Movie } from "../../interfaces/interfaces";

import { NO_IMAGE, POSTER_URL } from '../../constants/constants';

interface MovieTileProps {
    movie: Movie
}

const MovieTile: FC<MovieTileProps> = ({movie}) => {

    const {poster_path: posterPath, title, overview} = movie

    const [showInfo, setShowInfo] = useState<boolean>(true)

    const image = useMemo( () => {return posterPath ? POSTER_URL.concat(posterPath) : NO_IMAGE}, [posterPath])

    return(
        <Card sx={{ maxWidth: 200, margin: '5px', maxHeight: 350, minHeight: 350, minWidth: 200}} 
                onClick={() => setShowInfo(prevState => !prevState)}>
            {showInfo
            ? 
            <>
                <CardMedia
                    sx={{ height: 220 }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography
                        gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </>
            :
            <>
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
                </CardContent>
            </>
            }
            {/* <CardActions>
                <Button size="small">Watch</Button>
            </CardActions> */}
        </Card>
    )

}

MovieTile.displayName = 'MovieTile';

export default MovieTile;