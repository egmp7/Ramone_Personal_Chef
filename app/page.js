'use client';

import Image from 'next/image'
import Link from 'next/link'


import styles from './page.module.css'
import Footer from './components/Footer'
import React from 'react';

const english = {
  slogan:`Chef for epicurean clients`,
  intro: `I'm a personal chef with more than 15 years of experience, 
  I studied and graduated from New York Culinary School in 1986. 
  I also worked in New York at Vista International Hotel at World 
  Trade Center in the 80’s and Ritz Carlton Hotels for 5 years.. 
  I have a extensive resume of very high end clientele including Robert 
  Downey Jr. , Jennifer López, Graig Robbins, Dj Tiesto and others. 
  Just go to my website Personal Chef Ramone.`,
  aboutButton: `About Me`,
  menuButton: `Sample Menu`,
  contactButton: `Contact`,
  ratesButton: `Rates and Services`
}

const spanish ={
  slogan: `Spanish slogan`,
  intro:`Spanish intro`,
  aboutButton: `Sobre mí`,
  menuButton: `Menú de muestra`,
  contactButton: `Contacto`,
  ratesButton: `Tarifas y servicios`

}


export default function Home() {
  const [language, setLanguage]= React.useState("english")
  const [pageData, setPageData] = React.useState(english);
  return (
    <main>

      <button  onClick={changeLanguage}>Change Language</button>

      <h1>Ramone Personal Chef</h1>

      <Image
      style={{borderRadius: '100%'}}
      src="/giphy.gif" 
      width={180}
      height={180}/>

      <Image
      src="/ramone.png" 
      width={280}
      height={180}/>

      <p>{pageData.slogan}</p>
      <p>{pageData.intro}</p>
      
      <Link href="/test">{pageData.aboutButton}</Link>
      <Link href="/test">{pageData.menuButton}</Link>
      <Link href="/test">{pageData.ratesButton}</Link>
      <Link href="/test">{pageData.contactButton}</Link>
      <Footer/>

    </main>
  )

  function changeLanguage(){
  
    // if english do spanish
    if (language === "english") {
      setLanguage("spanish")
      setPageData(spanish)
    }

    // if spanish do english
    if (language === "spanish") {
      setLanguage("english")
      setPageData(english)
    }
  }
  
}
