'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/src/components/Footer';
import Nav from '@/src/components/Nav';
import IndexVisuals from '@/src/components/IndexVisuals';

export default function Index() {

  const t = useTranslations('Index');

  return (
    <>
      <Nav />
      <main className='mt-4 sm:mt-16'>
        <IndexVisuals />
        <h1 className="pt-4 text-3xl font-bold text-center">Ramone Personal Chef</h1>
        <p className="pt-1 italic text-center">{t('slogan')}</p>
        <p className="pt-2 px-2 text-justify sm:text-center md:mx-20">{t('intro')}</p>
      </main >
      <Footer />
    </>
  )
}
