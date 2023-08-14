'use client';

import Image from 'next/image'
import Link from 'next/link'


import styles from './page.module.css'
import Footer from './components/Footer'
import React from 'react';

const data = {
  test1: "testing1",
  test2: "testing 2"
}



let isEnglish = true;


export default function Home() {
  const [likes, setLikes] = React.useState("Hello");
  return (
    <main>
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

      <p>Chef for epicurean clients</p>

      <p>I'm a personal chef with more than 15 years of experience, 
        I studied and graduated from New York Culinary School in 1986. 
        I also worked in New York at Vista International Hotel at World 
        Trade Center in the 80’s and Ritz Carlton Hotels for 5 years.. 
        I have a extensive resume of very high end clientele including Robert 
        Downey Jr. , Jennifer López, Graig Robbins, Dj Tiesto and others. 
        Just go to my website Personal Chef Ramone.
      </p>

      <p>{likes}</p>
      {isEnglish && <p>{likes}</p> || <p>In Spanish</p>}
      
      <button  onClick={changeLanguage}>Change Language</button>

      <Link href="/test">{data.test1}</Link>
      <Link href="/test">{data.test2}</Link>
      <Link href="/test">Rates and services</Link>
      <Link href="/test">Contact</Link>
      
      <Footer/>

      


      
    </main>
  )
  function changeLanguage(){
  
    isEnglish = !isEnglish
    setLikes("Not hello")
    console.log(isEnglish)
  }
  
}
