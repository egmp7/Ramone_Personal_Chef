'use client';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { images } from "./images";
import { useState } from "react";

export default function Gallery() {

  const [index, setIndex] = useState();


  return (
    <>
       <h1 className="mb-4 pt-4 text-3xl font-bold text-center">Sample Menu</h1>
      <PhotoAlbum 
      layout="rows" 
      photos={images}
      onClick={({ index }) => setIndex(index)} />

      <Lightbox
        plugins={[Captions, Thumbnails, Zoom]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
        
      />
    </>
  )
}
