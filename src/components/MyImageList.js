import React from 'react'
import { ImageList } from '@mui/material';
import ImageCard from './ImageCard';

const MyImageList = ({images}) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => (
          <ImageCard key={image.img} image={image}/>
        ))}
      </ImageList>
  )
}

export default MyImageList;