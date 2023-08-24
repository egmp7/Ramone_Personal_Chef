'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { images } from "./famousPeople";
import { data } from './messages.js';
import parse from 'html-react-parser';


export default function Page() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <>
      <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20 sm:flex items-center">
        <div className="hidden sm:block">
          <p className="text-3xl font-bold text-center mb-4">{data.subtitle}</p>
          <p className="mx-8">{parse(data.highProfile)}</p>
        </div>

        <p className="text-3xl font-bold text-center mb-4 sm:hidden">{data.subtitle}</p>
        <div className="m-auto w-52 shrink-0">
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
        </div>
        <p className="m-2 sm:hidden">{parse(data.highProfile)}</p>
      </div>

      <h1 className="text-3xl font-bold text-center">{data.title}</h1>
      <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20">
        <Image
          className="mr-4 mb-4 mt-2 rounded-2xl float-left"
          src="/ramone.png"
          width={360}
          height={180}
          alt="ramone picture" />

        {data.aboutMeText.map((paragraph, index) => {
          return (
            <p key={index} className="mb-4">{paragraph}</p>
          )
        })}
      </div>
    </>);
}