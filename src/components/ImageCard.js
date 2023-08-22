import React from "react";
import { ImageListItem } from "@mui/material";

const ImageCard = ({ description, id, url }) => {
  return (
    <ImageListItem>
      <img alt={description} src={url} loading="lazy" data-testid={id} />
    </ImageListItem>
  );
};

export default ImageCard;
