import { FC, Fragment } from "react";
import { Movie } from "../../interfaces/interfaces";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface PopupWindowProps {
  isOpen: boolean;
  closePopup: () => void;
  movie: Movie;
}

const PopupWindow: FC<PopupWindowProps> = ({ isOpen, closePopup, movie }) => {
  const {
    title,
    release_date: releaseDate,
    overview,
    vote_average: voteAvarage,
    vote_count: voteCount,
  } = movie;
  const date = new Date(releaseDate);

  return (
    <Fragment>
      <Dialog fullWidth={true} open={isOpen} onClose={closePopup}>
        <DialogTitle data-testid={"popup-title"}>{title}</DialogTitle>
        <DialogContent>
          {!isNaN(date.getFullYear()) && (
            <DialogContentText sx={{ marginBottom: "8px" }}>
              {`Year released: ${date.getFullYear()}`}
            </DialogContentText>
          )}
          <DialogContentText
            sx={{ marginBottom: "8px" }}
            data-testid={"popup-avarege-vote-field"}
          >
            {`Avarage vote: ${voteAvarage.toFixed(
              2
            )} based on ${voteCount} votes`}
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              width: "auto",
              maxWidth: "600px",
              flexWrap: "wrap",
            }}
            data-testid={"popup-description"}
          >
            {overview}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="inherit"
            style={{ maxWidth: "110px", minWidth: "110px" }}
            data-testid={"popup-watch-button"}
            onClick={closePopup}
          >
            Watch
          </Button>
          <Button
            variant="outlined"
            color="error"
            style={{ maxWidth: "110px", minWidth: "110px" }}
            data-testid={"popup-close-button"}
            onClick={closePopup}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

PopupWindow.displayName = "PopupWindow";

export default PopupWindow;
