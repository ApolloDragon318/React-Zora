import React from "react";
import { FormControl, Select, MenuItem, InputLabel, Box } from "@mui/material";

const ToolBar = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  const colorOptions = [
    { value: "black_and_white", label: "Black and White" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "red", label: "Red" },
    { value: "purple", label: "Purple" },
    { value: "magenta", label: "Magenta" },
    { value: "green", label: "Green" },
    { value: "teal", label: "Teal" },
    { value: "blue", label: "Blue" },
  ];

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
          inputProps={{ "data-testid": "color-filter-selector" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {colorOptions.map((color) => (
            <MenuItem value={color.value} key={color.value}>
              {color.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="sort-by-selector">Filter by color</InputLabel>
        <Select
          labelId="sort-by-selector"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          label="Sort by ..."
          inputProps={{ "data-testid": "sort-by-selector" }}
        >
          <MenuItem value={true}>Sort by latest</MenuItem>
          <MenuItem value={false}>Sort by popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToolBar;
