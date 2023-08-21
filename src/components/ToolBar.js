import React from "react";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";

const ToolBar = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="color-filter-selector">Filter by color</InputLabel>
        <Select
          labelId="color-filter-selector"
          value={filterBy}
          onChange={(event) => setFilterBy(event.target.value)}
          label="Filter by color"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="black_and_white">Black and White</MenuItem>
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="white">White</MenuItem>
          <MenuItem value="yellow">Yellow</MenuItem>
          <MenuItem value="orange">Orange</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="purple">Purple</MenuItem>
          <MenuItem value="magenta">Magenta</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="teal">Teal</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="sort-by-selector">Filter by color</InputLabel>
        <Select
          labelId="sort-by-selector"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          label="Sort by ..."
        >
          <MenuItem value={true}>Sort by latest</MenuItem>
          <MenuItem value={false}>Sort by popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToolBar;
