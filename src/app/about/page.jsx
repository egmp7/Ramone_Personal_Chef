'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { images } from "./famousPeople";


export default function Page() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <>
      <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20 sm:flex items-center">
        <div className="hidden sm:block">
          <p className="text-3xl font-bold text-center mb-4">High profile clients</p>
          <p className="mx-8"><i>Jennifer Lopez, Marc Anthony, Robert Downey Jr, DJ Tiesto, Market
              America CEO JR and Loren Ridinger, MIA Shoes CEO Richard Strauss, Actress
              Evelin Giro, Mogul Realtor Craig Robbins, Peace Love World CEO Allina
              Villasante, NFL Quarterback Brady Quinn,</i> and many others.</p>
        </div>
        
        <p className="text-3xl font-bold text-center mb-4 sm:hidden">High profile clients</p>
        <div className="m-auto w-52 shrink-0">
          <div className="overflow-hidden rounded-md" ref={emblaRef}>
            <div className="flex ">
            {images.map((img, index) => {
                return (
                  <div className="grow-0 shrink-0 basis-full min-w-0 ">
                    <Image
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      alt={img.alt}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <p className="m-2 sm:hidden"><i>Jennifer Lopez, Marc Anthony, Robert Downey Jr, DJ Tiesto, Market
              America CEO JR and Loren Ridinger, MIA Shoes CEO Richard Strauss, Actress
              Evelin Giro, Mogul Realtor Craig Robbins, Peace Love World CEO Allina
              Villasante, NFL Quarterback Brady Quinn,</i> and many others.</p>
      </div>

      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20">
      <Image
        className="mr-4 mb-4 mt-2 rounded-2xl float-left"
        src="/ramone.png"
        width={360}
        height={180}
        alt="ramone picture" />

      
        <p className="mb-4">Chef Ramone's love affair for food began in his childhood, around family,
          watching how much passion and dedication can create such amazing meals using
          the best spices and flavors Cuban cuisine can offer.</p>

        <p className="my-4">When he realized that food, spices and cooking was his passion, he discovered
          that he was gifted in creating and developing complex and tasty dishes. Chef
          Ramone decided he needed to learn every secret and cooking technique in the
          culinary world.</p>

        <p className="my-4">Chef Ramone enrolled in the culinary arts program at New York Culinary School
          and embarked on a culinary journey.  His first professional experience began
          as a chef at Vista International Hotel in the World Trade Center in New York.</p>

        <p className="my-4">Since then, he has dedicated years to traveling around the world to enrich the
          understanding and techniques cooking has to offer.  Preserving the authentic
          flavors and cooking methods passed down by generations of a myriad of cultures
          had become his true passion.  Chef Ramone has dedicated much time in perfecting
          these techniques.
        </p>

        <p className="my-4">Chef Ramone has also dedicated time to learn about American food (North,
          Central and South American).  He has studied the diverse and traditional cooking
          styles from Alaska to Argentina, working across the continent in some of the
          finest dining experiences available while representing the spirit of communities
          by using local ingredients. He has proudly learned and developed such unique
          techniques as a Chef working at the following establishments:</p>

        <p className="my-4">Hotel Valencia in San Diego, Elliot Bay Café in Seattle, Kincaids Restaurant,
          Marriott Hotel in Minneapolis, Hersaint and Cochon in New Orleans, and the Ritz
          Carlton in Miami.</p>

        <p className="my-4 hidden sm:block">In 2004, Chef Ramone started his own business, Ramone Personal Chef, and has
          had many  delighted high profile clients and celebrities, such as:</p>

        <p className="my-4 hidden sm:block"><i>Jennifer Lopez, Marc Anthony, Robert Downey Jr, DJ Tiesto, Market
          America CEO JR and Loren Ridinger, MIA Shoes CEO Richard Strauss, Actress
          Evelin Giro, Mogul Realtor Craig Robbins, Peace Love World CEO Allina
          Villasante, NFL Quarterback Brady Quinn,</i> and many others.</p>
      </div>

    </>);
}