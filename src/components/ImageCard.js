import React from 'react'
import { ImageListItem } from '@mui/material'

const ImageCard = ({image}) => {
  return (
    <ImageListItem key={image.img}>
      <img
        alt={image.alt_description}
        src={image.urls.small}
        loading="lazy"
      />
    </ImageListItem>
  )
};

export default ImageCard;