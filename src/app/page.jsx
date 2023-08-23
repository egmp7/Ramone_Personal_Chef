'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/src/components/Footer';
import Nav from '@/src/components/Nav';
import IndexVisuals from '@/src/components/IndexVisuals';

const data = {
  slogan: "Chef for epicurean clients",
  intro: "Im a personal chef with more than 15 years of experience, I studied and graduated from New York Culinary School in 1986. I also worked in New York at Vista International Hotel at World Trade Center in the 80’s and Ritz Carlton Hotels for 5 years.. I have a extensive resume of very high end clientele including Robert Downey Jr. , Jennifer López, Graig Robbins, Dj Tiesto and others. Just go to my website Personal Chef Ramone."
}

export default function Index() {


  return (
    <>
      {/* <Nav /> */}
      <main className='mt-4 lg:mt-16'>
        <IndexVisuals />
        <h1 className="pt-4 text-3xl font-bold text-center">Ramone Personal Chef</h1>
        <p className="pt-1 italic text-center">{data.slogan}</p>
        <p className="pt-2 px-2 text-justify sm:text-center md:mx-20">{data.intro}</p>
      </main >
      {/* <Footer /> */}
    </>
  )
}
