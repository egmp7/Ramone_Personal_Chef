'use client';

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";
import { useState } from "react";

export default function GalleryImage() {

  const [openLightbox, setOpenLightbox] = useState(false);
  const [index, setIndex] = useState(-1);
  
  function handleClick (index) {
    setIndex(index) 
    setOpenLightbox(true)};

  return (
    <>
      <Gallery 
        images={images} 
        enableImageSelection={false}
        onClick={ handleClick } />

      <Lightbox
        open={openLightbox}
        index={index}
        close={() => setOpenLightbox(false)}
        slides={images}
      />
    </>
  )
}
