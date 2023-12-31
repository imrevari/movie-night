import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { FC, useState } from "react";

interface SearchBarProps {
  triggerSearch: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ triggerSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchClick = () => {
    triggerSearch(searchValue);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ marginTop: "20px" }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
          <TextField
            value={searchValue}
            sx={{ width: "95%" }}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="outlined"
            label="Search for movies"
            data-testid={"search-field"}
          />
        </Typography>

        <Button
          color="inherit"
          variant="outlined"
          onClick={onSearchClick}
          data-testid={"search-button"}
          style={{
            maxWidth: "140px",
            minWidth: "140px",
            height: "56px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          {"Search"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

SearchBar.displayName = "SearchBar";

export default SearchBar;
