import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { Movie } from "../../interfaces/interfaces";

import { NO_IMAGE, POSTER_URL } from "../../constants/constants";
import PopupWindow from "./PopupWindow";
interface MovieTileProps {
  movie: Movie;
}

const MovieTile: FC<MovieTileProps> = ({ movie }) => {
  const { poster_path: posterPath, title } = movie;

  const [showInfo, setShowInfo] = useState<boolean>(false);

  const image = useMemo(() => {
    return posterPath ? POSTER_URL.concat(posterPath) : NO_IMAGE;
  }, [posterPath]);

  const variant = useMemo(() => {
    return title.length > 28 ? "h6" : "h5";
  }, [title]);

  const closePopup = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <Card
      sx={{
        maxWidth: 200,
        margin: "5px",
        maxHeight: 410,
        minHeight: 410,
        minWidth: 200,
      }}
    >
      <CardMedia
        sx={{ height: 290 }}
        data-testid={"card-picture"}
        image={image}
        title={title}
        onClick={() => setShowInfo(true)}
      />
      <CardContent>
        <Typography
          data-testid={"card-title"}
          variant={variant}
          component="div"
        >
          {title}
        </Typography>
      </CardContent>

      {showInfo && (
        <PopupWindow
          isOpen={showInfo}
          closePopup={closePopup}
          movie={movie}
          data-testid={"popup-component"}
        />
      )}

      {/* <CardActions>
                <Button size="small">Watch</Button>
            </CardActions> */}
    </Card>
  );
};

MovieTile.displayName = "MovieTile";

export default MovieTile;
