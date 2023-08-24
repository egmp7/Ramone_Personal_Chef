'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export default function Carousel({images}) {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="overflow-hidden rounded-md" ref={emblaRef}>
      <div className="flex ">
        {images.map((img, index) => {
          return (
            <div key={index} className="grow-0 shrink-0 basis-full min-w-0 ">
              <Image
                src={img.src}
                width={img.width}
                height={img.height}
                alt={img.alt} />
            </div>
          )
        })}
      </div>
    </div>
  )
} 