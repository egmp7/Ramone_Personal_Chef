'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
 
export default function Index() {
  
  const t = useTranslations('Index');
  return (

    <main>

    <h1>Ramone Personal Chef</h1>

    <Image
    style={{borderRadius: '100%'}}
    src="/giphy.gif" 
    width={180}
    height={180}
    alt="Ramone logo"/>

    <Image
    src="/ramone.png" 
    width={280}
    height={180}
    alt="ramone picture"/>

    <p>{t('slogan')}</p>
    <p>{t('intro')}</p>
    
    <Link href="/about">{t('aboutButton')}</Link>
    <Link href="/test">{t('menuButton')}</Link>
    <Link href="/test">{t('ratesButton')}</Link>
    <Link href="/test">{t('contactButton')}</Link>
    </main>
  )
}
