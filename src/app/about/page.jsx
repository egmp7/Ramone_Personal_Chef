import Image from "next/image";
import { images } from "./famousPeople";
import { data } from './messages.js';
import parse from 'html-react-parser';
import Carousel from "@/src/components/Carousel";


export default function About() {

  return (
    <>
      <div className="my-auto">
        <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20 sm:flex items-center">

          <div className="hidden sm:block mr-8">
            <p className="text-3xl font-bold text-center mb-4 text-slate-800">{data.subtitle}</p>
            <p className="text-slate-700">{parse(data.highProfile)}</p>
          </div>

          <p className="text-3xl font-bold text-center mb-4 sm:hidden text-slate-800">{data.subtitle}</p>

          <div className="m-auto w-52 shrink-0">
            <Carousel images={images} />
          </div>

          <p className="m-2 sm:hidden text-slate-700">{parse(data.highProfile)}</p>

        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">{data.title}</h1>

        <div className="pt-2 px-2 text-justify sm:mx-10 lg:mx-20">

          <Image
            className="mr-4 mb-4 mt-2 rounded-2xl float-left"
            src="/ramone.png"
            width={360}
            height={180}
            alt="ramone picture" />

          {data.aboutMeText.map((paragraph, index) => {
            return (
              <p key={index} className="mb-4 text-slate-800">{paragraph}</p>
            )

          })}
        </div>
      </ div>
    </>);
}