'use client';

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { images } from "./images";
import { useState } from "react";

export default function GalleryImage() {

  const [openLightbox, setOpenLightbox] = useState(false);
  const [index, setIndex] = useState();

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
        plugins={[Captions, Thumbnails]}
        open={openLightbox}
        index={index}
        close={() => setOpenLightbox(false)}
        slides={images}
        
      />
    </>
  )
}
