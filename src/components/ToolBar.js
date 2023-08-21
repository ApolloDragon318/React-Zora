import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";

const ToolBar = ({ sortBy, setSortBy }) => {
  return (
    <div>
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
