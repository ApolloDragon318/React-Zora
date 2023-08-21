import React, { useCallback, useState } from "react";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const ToolBar = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
      <Button
        variant={sortBy ? "contained" : "outlined"}
        onClick={() => setSortBy(!sortBy)}
      >
        {sortBy ? "Sort by popular" : "Sort by latest"}
      </Button>
    </div>
  );
};

export default ToolBar;
