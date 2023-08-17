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
      <main>
        <IndexVisuals />
        <h1>Ramone Personal Chef</h1>
        <p>{t('slogan')}</p>
        <p>{t('intro')}</p>
      </main>
      <Footer />
    </>
  )
}
